import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, NgFor, Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { HabitsService } from '../../services/habits.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UnitsService } from '../../services/units.service';
import { HabitEntriesService } from '../../services/habit-entries.service';
import CalHeatmap from 'cal-heatmap';
import 'cal-heatmap/cal-heatmap.css';

@Component({
  selector: 'app-habit',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgFor],
  templateUrl: './habit.component.html',
  styleUrl: './habit.component.css',
})
export class HabitComponent implements OnInit {
  private router = inject(Router);
  private location = inject(Location);
  private activatedRoute = inject(ActivatedRoute);
  private habitsService = inject(HabitsService);
  private habitEntriesService = inject(HabitEntriesService);
  private unitsService = inject(UnitsService);
  private habit_id: any = null;
  private user_id: any = localStorage.getItem('user_id');
  calHeatMap = new CalHeatmap();
  entryRawData: any[] = [];
  selectedUnit: any;
  isEditing: boolean = false;
  currentUnitId: string = '';

  private fb = inject(FormBuilder);
  form: FormGroup = this.fb.group({
    user_id: new FormControl('', [Validators.required]),
    habit_name: new FormControl('', [Validators.required]),
    unit_id: new FormControl('', [Validators.required]),
  });

  lookups: any = {
    units: [],
    habit: [],
    entries: [],
  };

  ngOnInit(): void {
    this.getHabitId();
    this.setHabitId();
    this.getHabit();
    this.getUnits();
    this.getHabitEntries();
  }

  getHabitId() {
    this.activatedRoute.params.subscribe((params) => {
      this.habit_id = params['id'];
    });
  }

  getHabit() {
    this.habitsService.getHabit(Number(this.habit_id)).subscribe(
      (data: any) => {
        this.lookups.habit = data;
        this.setUnitId(data[0].unit_id);
        this.form.get('habit_name')?.setValue(data[0].habit_name);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getUnits() {
    this.unitsService.getUnits().subscribe((data) => {
      this.lookups.units = data;
      this.getUnit();
    });
  }

  getHabitEntries() {
    this.habitEntriesService.getEntries(this.user_id, this.habit_id).subscribe(
      (data: any) => {
        this.lookups.entries = data;
        console.log(this.lookups);
        this.initCalHeatMap();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  initCalHeatMap(): void {
    const transformedData = JSON.parse(
      JSON.stringify(this.transformEntryData(this.lookups.entries))
    );

    const entryDates = this.lookups.entries.map(
      (entry: any) => new Date(entry.entry_date)
    );
    const earliestEntryDate = new Date(Math.min(...entryDates));
    console.log(earliestEntryDate);
    console.log(transformedData);
    console.log(entryDates);
    this.calHeatMap.paint({
      data: {
        source: transformedData,
        x: 'date',
        y: 'value',
        groupY: 'max',
      },
      date: { start: earliestEntryDate },
      range: 12,
      scale: {
        color: {
          type: 'threshold',
          scheme: 'brbg',
          domain: [10, 20, 30, 40, 50],
        },
      },
      domain: {
        type: 'month',
        gutter: 4,
        label: { text: 'MMM', textAlign: 'start', position: 'top' },
      },
      subDomain: {
        type: 'ghDay',
        radius: 2,
        width: 11,
        height: 11,
        gutter: 4,
      },
      itemSelector: '#cal-heatmap',
      theme: 'light',
    });
  }

  transformEntryData(data: any[]): { date: string; value: number }[] {
    const transformedData: any[] = [];

    data.forEach((entry) => {
      const date = new Date(entry.entry_date).toISOString().split('T')[0];
      const existingEntry = transformedData.find(
        (item: any) => item.date === date
      );

      if (existingEntry) {
        existingEntry.value += entry.measure;
      } else {
        transformedData.push({ date: date, value: entry.measure });
      }
    });

    return transformedData;
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  setUnitId(unitId: string) {
    this.currentUnitId === unitId
      ? (this.currentUnitId = '')
      : (this.currentUnitId = unitId);
    this.form.get('unit_id')?.setValue(this.currentUnitId);
  }

  getUnit() {
    this.selectedUnit = this.lookups.units.find((unit: any) => {
      return unit.unit_id === this.currentUnitId;
    });
  }

  setHabitId() {
    this.form.get('user_id')?.setValue(this.habit_id);
  }

  refreshHabitData() {
    this.getHabit();
    this.getUnits();
    this.getHabitEntries();
    this.getUnit();
  }

  handleUpdateHabit() {
    this.habitsService.updateHabit(this.habit_id, this.form.value).subscribe(
      (data: any) => {
        console.log(data);
        this.toggleEdit();
        this.setUnitId(this.currentUnitId);
        this.refreshHabitData();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  handleDeleteHabit() {
    this.habitsService.deleteHabit(this.habit_id).subscribe(
      (data: any) => {
        console.log(data);
        this.handleBack();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  handleRedirectAdd() {
    this.router.navigate([`/add-entry/${this.habit_id}`]);
  }

  handleBack() {
    this.location.back();
  }
}

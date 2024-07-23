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
      },
      (error) => {
        console.error(error);
      }
    );
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

  handleBack() {
    this.location.back();
  }
}

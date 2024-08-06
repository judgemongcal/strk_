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
import {
  HeatMapDate,
  HeatMapEvent,
  NgxHeatmapCalendar,
} from '../../../lib/ngx-heatmap-calendar/src/public-api';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-habit',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgFor, NgxHeatmapCalendar],
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
  private notificationService = inject(NotificationService);
  private habit_id: any = null;
  private user_id: any = localStorage.getItem('user_id');
  entryRawData: any[] = [];
  selectedUnit: any = { unit_id: null, unit_name: '' };
  isEditing: boolean = false;
  currentUnitId: string = '';
  currentYear = new Date().getFullYear();
  startDate = new Date(2024, 0, 1);
  endDate = new Date(2024, 11, 31);

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
    formatted_entries: [],
    paginated_entries: [],
    all_years: [],
    total_activity: null,
    total_pages: 0,
    current_page: 1,
    items_per_page: 5,
  };

  ngOnInit(): void {
    this.getHabitId();
    this.setHabitId();
    this.getHabit();
    this.getHabitEntries();
    this.getUnits();
  }

  getHabitId() {
    this.activatedRoute.params.subscribe((params) => {
      this.habit_id = params['id'];
    });
  }

  getHabit() {
    this.habitsService.getHabit(Number(this.habit_id)).subscribe(
      (data: any) => {
        this.setUnitId(data[0].unit_id);
        this.lookups.habit = data;
        this.form.get('habit_name')?.setValue(data[0].habit_name);
      },
      (error) => {
        this.notificationService.show(error.error.message, true);
      }
    );
  }

  getUnits() {
    this.unitsService.getUnits().subscribe(
      (data: any) => {
        this.lookups.units = data;

        this.getUnit();
      },
      (error: any) => {
        console.log(error);
        this.notificationService.show(error.message, true);
      }
    );
  }

  getUnit() {
    this.selectedUnit = this.lookups.units.find((unit: any) => {
      return unit.unit_id === this.currentUnitId;
    });
  }

  getHabitEntries(year: number = this.currentYear) {
    this.lookups.entries = [];
    this.habitEntriesService.getEntries(this.user_id, this.habit_id).subscribe(
      (data: any) => {
        data.sort(
          (a: any, b: any) =>
            new Date(a.entry_date).getTime() - new Date(b.entry_date).getTime()
        );

        this.getAllExistingYears(data);

        this.lookups.entries = data.filter(
          (entry: any) => new Date(entry.entry_date).getFullYear() === year
        );

        this.lookups.total_activity = 0;
        this.getTotalActivities();
        this.formatEntries();

        this.getPaginatedEntries();
        this.getTotalPages();
      },
      (error) => {
        console.log(error);
        this.notificationService.show(error.message, true);
      }
    );
  }

  getTotalActivities() {
    this.lookups.total_activity = 0;
    this.lookups.entries.forEach((entry: any) => {
      const formattedDate = new Date(entry.entry_date);
      if (formattedDate.getFullYear() == this.startDate.getFullYear()) {
        this.lookups.total_activity += entry.measure;
      }
    });
  }

  getAllExistingYears(data: any) {
    data.forEach((entry: any) => {
      const formattedDate = new Date(entry.entry_date);
      const year = formattedDate.getFullYear();
      if (!this.lookups.all_years.includes(year)) {
        this.lookups.all_years.push(year);
      }
    });
  }

  formatEntries() {
    this.lookups.formatted_entries = [];
    this.lookups.entries.forEach((entry: any) => {
      const entry_date = new Date(entry.entry_date);
      const formattedEntry = new Date(
        entry_date.getFullYear(),
        entry_date.getMonth(),
        entry_date.getDate()
      );

      const existingEntry = this.lookups.formatted_entries.find(
        (e: any) => e.date.getTime() === formattedEntry.getTime()
      );

      if (existingEntry) {
        // If the date exists, add the value to the existing entry's value
        existingEntry.value += entry.measure;
      } else {
        // If the date doesn't exist, add the new entry to formattedEntries
        this.lookups.formatted_entries.push({
          date: formattedEntry,
          value: entry.measure,
        });
      }
    });

    console.log(this.lookups.formatted_entries);
  }

  // @Todo: Refactor ngx-heatmap-calendar

  callBackCssClass = ({ value }: HeatMapDate) => {
    if (value! > 0 && value! < 5) {
      return 'fill-value-1';
    }
    if (value! >= 5 && value! < 10) {
      return 'fill-value-2';
    }
    if (value! >= 10 && value! < 25) {
      return 'fill-value-3';
    }
    if (value! >= 25 && value! < 50) {
      return 'fill-value-4';
    }
    if (value! >= 50 && value! < 100) {
      return 'fill-value-5';
    }

    if (value! >= 100) {
      return 'fill-value-6';
    }

    return 'fill-none';
  };

  onClickCell(event: HeatMapEvent) {
    alert(
      `The value is: ${event.data.value} and the date is: ${event.data.date}`
    );
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

  formatDate(date: Date): string {
    const rawDate = new Date(date);
    const dateOptions: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const formattedDate = rawDate.toLocaleDateString('en-US', dateOptions);

    return formattedDate;
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  toggleMeasureDesc(year: Number): string {
    if (year === this.currentYear) {
      return 'this year.';
    } else {
      return `in ${year}.`;
    }
  }

  getTotalPages() {
    console.log(this.lookups.entries.length, this.lookups.items_per_page);
    console.log(
      'Total pages: ' +
        Math.ceil(this.lookups.entries.length / this.lookups.items_per_page)
    );
    this.lookups.total_pages = Math.ceil(
      this.lookups.formatted_entries.length / this.lookups.items_per_page
    );
  }

  getPaginatedEntries() {
    const startIndex =
      (this.lookups.current_page - 1) * this.lookups.items_per_page;
    this.lookups.paginated_entries = this.lookups.formatted_entries.slice(
      startIndex,
      startIndex + this.lookups.items_per_page
    );
  }

  changePage(action: string) {
    const page = this.lookups.current_page;
    console.log(action, page);

    if (action === 'back') {
      page === 1
        ? (this.lookups.current_page = 1)
        : (this.lookups.current_page -= 1);
    }
    if (action === 'next') {
      page === this.lookups.total_pages
        ? (this.lookups.current_page = this.lookups.total_pages)
        : (this.lookups.current_page += 1);
    }

    console.log(
      'Current page: ' + this.lookups.current_page,
      'Total Pages: ' + this.lookups.total_pages
    );

    this.getPaginatedEntries();
  }

  setUnitId(unitId: string) {
    this.currentUnitId === unitId
      ? (this.currentUnitId = '')
      : (this.currentUnitId = unitId);
    this.form.get('unit_id')?.setValue(this.currentUnitId);
    if (this.lookups.units.length > 0) {
      this.getUnit();
    }
  }

  setHabitId() {
    this.form.get('user_id')?.setValue(this.habit_id);
  }

  refreshHabitData() {
    this.getHabit();
    this.getUnits();
    this.getHabitEntries();
    // this.getUnit();
  }

  handleUpdateHabit() {
    this.habitsService.updateHabit(this.habit_id, this.form.value).subscribe(
      (data: any) => {
        this.toggleEdit();
        this.setUnitId(this.currentUnitId);
        this.refreshHabitData();
      },
      (error) => {
        this.notificationService.show(error.error.message, true);
      }
    );
  }

  setDate(year: number) {
    this.startDate = new Date(year, 0, 1);
    this.endDate = new Date(year, 11, 31);
    this.getHabitEntries(year);
    this.resetPage();
  }

  resetPage() {
    this.lookups.current_page = 1;
  }

  handleDeleteHabit() {
    this.habitsService.deleteHabit(this.habit_id).subscribe(
      (data: any) => {
        this.handleBack();
      },
      (error) => {
        this.notificationService.show(error.error.message, true);
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

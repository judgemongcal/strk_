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
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-entry-add',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgFor],
  templateUrl: './entry-add.component.html',
  styleUrl: './entry-add.component.css',
})
export class EntryAddComponent implements OnInit {
  private router = inject(Router);
  private fb = inject(FormBuilder);
  private location = inject(Location);
  private activatedRoute = inject(ActivatedRoute);
  private habitsService = inject(HabitsService);
  private habitEntriesService = inject(HabitEntriesService);
  private unitsService = inject(UnitsService);
  private notificationService = inject(NotificationService);
  private habit_id: any = null;
  private user_id: any = localStorage.getItem('user_id');

  form: FormGroup = this.fb.group({
    user_id: new FormControl(this.user_id, [Validators.required]),
    habit_id: new FormControl(0, [Validators.required]),
    entry_date: new FormControl('', [Validators.required]),
    measure: new FormControl(0, [Validators.required]),
  });

  lookups: any = {
    units: [],
    habit: [],
    currentUnit: [],
  };

  ngOnInit(): void {
    this.getHabitId();
    this.getHabit();
    this.getUnits();
  }

  getHabitId() {
    this.activatedRoute.params.subscribe((params) => {
      this.habit_id = params['habitId'];
      this.form.get('habit_id')?.setValue(this.habit_id);
    });
  }

  getHabit() {
    this.habitsService.getHabit(Number(this.habit_id)).subscribe(
      (data: any) => {
        this.lookups.habit = data;
      },
      (error) => {
        this.notificationService.show(error.message, true);
      }
    );
  }

  getUnits() {
    this.unitsService.getUnits().subscribe((data) => {
      this.lookups.units = data;
    });
  }

  handleAdd() {
    this.habitEntriesService.addEntry(this.form.value).subscribe(
      (data: any) => {
        this.notificationService.show(data.message, false);
        this.handleBack();
      },
      (error) => {
        console.log(error);
        this.notificationService.show(error.message, true);
      }
    );
  }

  handleBack() {
    this.location.back();
  }
}

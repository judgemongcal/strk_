import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
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

@Component({
  selector: 'app-habit',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgFor],
  templateUrl: './habit.component.html',
  styleUrl: './habit.component.css',
})
export class HabitComponent implements OnInit {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private habitsService = inject(HabitsService);
  private unitsService = inject(UnitsService);
  private user_id: any = null;
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

  ngOnInit(): void {}

  getUserId() {
    this.activatedRoute.params.subscribe((params) => {
      this.user_id = params['id'];
      this.getHabit();
      this.setUserId();
    });
  }

  getHabit(){
    this.
  }

  setUserId() {
    this.form.get('user_id')?.setValue(this.user_id);
  }

  handleBack() {
    return this.router.navigate(['/habits']);
  }
}

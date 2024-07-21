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
  selector: 'app-habit-add',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgFor],
  templateUrl: './habit-add.component.html',
  styleUrl: './habit-add.component.css',
})
export class HabitAddComponent implements OnInit {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private habitsService = inject(HabitsService);
  private unitsService = inject(UnitsService);
  private user_id: any = null;
  private fb = inject(FormBuilder);
  form: FormGroup = this.fb.group({
    habit_name: new FormControl('', [Validators.required]),
  });

  lookups: any = {
    units: [],
  };

  ngOnInit(): void {
    this.user_id = this.activatedRoute.params.subscribe((params) => {
      this.user_id = params['id'];
    });

    this.unitsService.getUnits().subscribe((data) => {
      this.lookups.units = data;
      console.log(this.lookups.units);
    });
  }

  handleBack() {
    return this.router.navigate(['/habits']);
  }

  handleAdd() {
    console.log(this.form.value);
  }
}

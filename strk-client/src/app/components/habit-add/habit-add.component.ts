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
import { NotificationService } from '../../services/notification.service';

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
  private notificatonService = inject(NotificationService);
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
  };

  ngOnInit(): void {
    this.user_id = this.activatedRoute.params.subscribe(
      (params) => {
        this.user_id = params['id'];
        this.setUserId();
      },
      (error) => {
        this.notificatonService.show(error.message, true);
      }
    );

    this.getUnits();
  }

  setUserId() {
    this.form.get('user_id')?.setValue(this.user_id);
  }

  getUnits() {
    this.unitsService.getUnits().subscribe((data) => {
      this.lookups.units = data;
    });
  }

  setUnitId(unitId: string) {
    this.form.get('unit_id')?.setValue(unitId);
    this.currentUnitId === unitId
      ? (this.currentUnitId = '')
      : (this.currentUnitId = unitId);
  }

  handleBack() {
    return this.router.navigate(['/habits']);
  }

  handleAdd() {
    this.habitsService.addHabit(this.form.value).subscribe(
      (data: any) => {
        this.notificatonService.show(data.message, false);
        this.handleBack();
      },
      (error) => {
        this.notificatonService.show(error.message, true);
      }
    );
  }
}

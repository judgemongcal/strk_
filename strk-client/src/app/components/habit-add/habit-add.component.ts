import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HabitsService } from '../../services/habits.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-habit-add',
  standalone: true,
  imports: [],
  templateUrl: './habit-add.component.html',
  styleUrl: './habit-add.component.css',
})
export class HabitAddComponent {
  handleBack() {}

  handleAdd() {}
}

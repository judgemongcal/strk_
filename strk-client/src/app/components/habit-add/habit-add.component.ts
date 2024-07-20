import { Component, inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
export class HabitAddComponent implements OnInit {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private habitsService = inject(HabitsService);
  private user_id: any = null;

  ngOnInit(): void {
    this.user_id = this.activatedRoute.params.subscribe((params) => {
      this.user_id = params['id'];
    });
  }

  handleBack() {}

  handleAdd() {}
}

import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UsersService } from '../../services/users.service';
import { HabitsService } from '../../services/habits.service';

@Component({
  selector: 'app-habits',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './habits.component.html',
  styleUrl: './habits.component.css',
})
export class HabitsComponent implements OnInit {
  private router = inject(Router);
  private authService = inject(AuthService);
  private userService = inject(UsersService);
  private habitsService = inject(HabitsService);
  private user_id: any = localStorage.getItem('user_id');

  lookups: any = {
    user_info: [],
    habits: [],
  };

  ngOnInit(): void {
    this.getCurrentUser();
    this.getUserHabits();
  }

  getCurrentUser() {
    this.userService.getUser(this.user_id).subscribe(
      (data: any) => {
        this.lookups.user_info = data[0];
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getUserHabits() {
    this.habitsService.getHabits(this.user_id).subscribe(
      (data: any) => {
        console.log(data);
        this.lookups.habits = data;
        console.log(this.lookups);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  redirectToHome() {
    return this.router.navigate(['/home']);
  }

  redirectToAdd() {
    return this.router.navigate([`/add-habit/${this.user_id}`]);
  }
}

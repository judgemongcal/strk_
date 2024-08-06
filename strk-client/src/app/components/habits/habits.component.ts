import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UsersService } from '../../services/users.service';
import { HabitsService } from '../../services/habits.service';
import { NotificationService } from '../../services/notification.service';

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
  private notificationService = inject(NotificationService);
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
        this.notificationService.show(error.message, true);
      }
    );
  }

  getUserHabits() {
    this.habitsService.getHabits(this.user_id).subscribe(
      (data: any) => {
        this.lookups.habits = data;
      },
      (error) => {
        this.notificationService.show(error.message, true);
      }
    );
  }

  redirectToHome() {
    return this.router.navigate(['/home']);
  }

  redirectToAdd() {
    return this.router.navigate([`/add-habit/${this.user_id}`]);
  }

  handleRedirect(id: string) {
    return this.router.navigate([`/habit/${id}`]);
  }
}

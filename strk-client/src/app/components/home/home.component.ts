import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UsersService } from '../../services/users.service';
import { HabitsService } from '../../services/habits.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  private router = inject(Router);
  private authService = inject(AuthService);
  private userService = inject(UsersService);
  private habitsService = inject(HabitsService);
  private notificationService = inject(NotificationService);
  private user_id: any = localStorage.getItem('user_id');
  private now = new Date();

  ngOnInit(): void {
    this.getCurrentUser();
    this.getUserHabits();
  }

  lookups: any = {
    user_info: [],
    habits: [],
  };

  getCurrentUser() {
    this.userService.getUser(this.user_id).subscribe(
      (data: any) => {
        this.lookups.user_info = data[0];
        this.getMembershipLength();
      },
      (error) => {
        this.notificationService.show(error.message, true);
      }
    );
  }

  getMembershipLength() {
    const formattedStartDate = new Date(
      this.lookups.user_info.created_at
    ).getTime();
    const member_since = Math.round(
      (this.now.getTime() - formattedStartDate) / (1000 * 60 * 60 * 24)
    );
    this.lookups.user_info.member_since = member_since;
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

  getGreeting(): string {
    if (this.now.getHours() < 12) {
      return 'Good morning';
    } else if (this.now.getHours() >= 12 && this.now.getHours() < 18) {
      return 'Good afternoon';
    } else {
      return 'Good evening';
    }
  }

  handleRedirect(id: string = '') {
    if (id === '') {
      this.router.navigate(['/habits']);
    } else {
      this.router.navigate([`/habit/${id}`]);
    }
  }

  signOut() {
    try {
      this.authService.signOut();
      this.router.navigate(['']);
      this.notificationService.show('Signed out successfully.', false);
    } catch (error) {
      this.notificationService.show(
        'Error signing out. Please try again.',
        true
      );
    }
  }
}

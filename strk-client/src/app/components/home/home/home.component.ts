import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { UsersService } from '../../../services/users.service';
import { HabitsService } from '../../../services/habits.service';

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
        console.error(error);
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
    console.log(this.lookups.user_info);
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

  getGreeting(): string {
    if (this.now.getHours() < 12) {
      return 'Good morning';
    } else if (this.now.getHours() >= 12 && this.now.getHours() < 18) {
      return 'Good afternoon';
    } else {
      return 'Good evening';
    }
  }

  signOut() {
    try {
      this.authService.signOut();
      this.router.navigate(['']);
    } catch (error) {
      throw new Error(`Error Signing Out: ${error}`);
    }
  }
}

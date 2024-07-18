import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { UsersService } from '../../../services/users.service';
import { HabitsService } from '../../../services/habits.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  private router = inject(Router);
  private authService = inject(AuthService);
  private userService = inject(UsersService);
  private habitsService = inject(HabitsService);
  private user_id: any = localStorage.getItem('user_id');

  ngOnInit(): void {
    this.getCurrentUser();
    this.getUserHabits();
  }

  lookups: any = {
    user_info: {},
    habits: {},
  };

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
        this.lookups.habits = data[0];
        console.log(this.lookups);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getGreeting(): string {
    const now = new Date();
    if (now.getHours() < 12) {
      return 'Good morning';
    } else if (now.getHours() >= 12 && now.getHours() < 18) {
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

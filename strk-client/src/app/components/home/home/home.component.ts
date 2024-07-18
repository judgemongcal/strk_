import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  router = inject(Router);
  authService = inject(AuthService);
  userService = inject(UsersService);

  ngOnInit(): void {
    this.getCurrentUser();
    this.getGreeting();
  }

  lookups: any = {};

  getCurrentUser() {
    const user_id: any = localStorage.getItem('user_id');
    this.userService.getUser(user_id).subscribe(
      (data: any) => {
        this.lookups = data[0];
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

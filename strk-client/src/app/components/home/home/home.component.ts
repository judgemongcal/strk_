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
  }

  getCurrentUser() {
    const user_id: any = localStorage.getItem('user_id');
    this.userService.getUser(user_id).subscribe(
      (data: any) => {
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
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

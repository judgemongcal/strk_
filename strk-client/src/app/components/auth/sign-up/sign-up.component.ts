import { Component, OnInit, inject } from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from '../../../services/users.service';
import { jwtDecode } from 'jwt-decode';
import { NotificationService } from '../../../services/notification.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent implements OnInit {
  fb = inject(FormBuilder);
  router = inject(Router);
  authService = inject(AuthService);
  userService = inject(UsersService);
  notificationService = inject(NotificationService);

  form: FormGroup = this.fb.group({
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {}

  signUp() {
    this.authService.signUp(this.form.value).subscribe(
      (data: any) => {
        if (data) {
          this.signIn(data.payload.username, this.form.get('passowrd')?.value);
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  signIn(username: string, password: string) {
    this.authService.signIn(this.form.value).subscribe(
      (data: any) => {
        throw new Error();
        if (data.token) {
          const decoded: any = jwtDecode(data.token);
          localStorage.setItem('token', data.token);
          localStorage.setItem('user_id', decoded.userId);

          // Redirect to home
          this.router.navigate(['/home']);
        }
      },
      (error: any) => {
        this.notificationService.show(error.error.message, true);
      }
    );
  }

  handleSignInRedirect() {
    this.router.navigate(['']);
  }
}

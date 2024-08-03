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

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  fb = inject(FormBuilder);
  router = inject(Router);
  authService = inject(AuthService);
  userService = inject(UsersService);

  form: FormGroup = this.fb.group({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {}

  signIn() {
    this.authService.signIn(this.form.value).subscribe(
      (data: any) => {
        if (data.token) {
          const decoded: any = jwtDecode(data.token);
          localStorage.setItem('token', data.token);
          localStorage.setItem('user_id', decoded.userId);

          // Redirect to home
          this.router.navigate(['/home']);
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  handleSignUpRedirect() {
    this.router.navigate(['/sign-up']);
  }
}

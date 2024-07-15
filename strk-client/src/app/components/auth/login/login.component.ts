import { Component, inject } from '@angular/core';
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
import { MatFormField } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    MatFormField,
    MatInputModule,
    MatInput,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  fb = inject(FormBuilder);
  router = inject(Router);
  authService = inject(AuthService);

  form: FormGroup = this.fb.group({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  login() {}
}

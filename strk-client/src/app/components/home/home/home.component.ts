import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  router = inject(Router);
  authService = inject(AuthService);

  signOut() {
    try {
      this.authService.signOut();
      this.router.navigate(['']);
    } catch (error) {
      throw new Error(`Error Signing Out: ${error}`);
    }
  }
}

import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { HomeComponent } from './components/home/home/home.component';
import { authGuard } from './components/guards/auth-guard.guard';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
];

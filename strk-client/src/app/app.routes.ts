import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './guards/auth-guard.guard';
import { HabitsComponent } from './components/habits/habits.component';
import { HabitAddComponent } from './components/habit-add/habit-add.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  { path: 'habits', component: HabitsComponent, canActivate: [authGuard] },
  {
    path: 'add-habit/:id',
    component: HabitAddComponent,
    canActivate: [authGuard],
  },
];

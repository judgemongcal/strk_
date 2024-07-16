import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Login } from '../interfaces/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5001/api/auth';

  constructor(private httpClient: HttpClient) {}

  signIn(creds: Login) {
    return this.httpClient.post(this.apiUrl + '/login', creds);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  signOut(): void {
    localStorage.removeItem('token');
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Login } from '../interfaces/login';
import { jwtDecode } from 'jwt-decode';
import { NewUser } from '../interfaces/new-user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = `http://localhost:5001/api/auth`;

  constructor(private httpClient: HttpClient) {}

  signUp(creds: NewUser) {
    return this.httpClient.post(`${this.apiUrl}/register`, creds);
  }

  signIn(creds: Login) {
    return this.httpClient.post(this.apiUrl + '/login', creds);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }

    const decodedToken: any = jwtDecode(token);
    const currentTime = Math.floor(Date.now() / 1000);

    return decodedToken.exp > currentTime;
  }

  signOut(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
  }
}

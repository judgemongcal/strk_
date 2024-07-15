import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Login } from '../interfaces/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5001/api/auth';

  constructor(private httpClient: HttpClient) {}

  login(creds: Login) {
    return this.httpClient.post(this.apiUrl + '/login', creds);
  }
}

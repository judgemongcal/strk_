import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Login } from '../interfaces/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5001/api/auth';
  private httpClient = inject(HttpClient);

  constructor() {}

  async login(creds: Login) {
    const res = await this.httpClient.post(this.apiUrl + '/login', creds);
    console.log(res);
  }
}

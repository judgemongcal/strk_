import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiUrl = `http://localhost:5001/api/users`;
  constructor(private httpClient: HttpClient) {}
}

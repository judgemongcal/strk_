import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HabitsService {
  private apiUrl = `http://localhost:5001/api/habits`;
  constructor(private httpClient: HttpClient) {}

  getHabits(id: string) {
    return this.httpClient.get(`${this.apiUrl}/${id}`);
  }
}

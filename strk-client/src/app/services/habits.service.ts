import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Habit } from '../interfaces/habit';

@Injectable({
  providedIn: 'root',
})
export class HabitsService {
  private apiUrl = `http://localhost:5001/api/habits`;
  constructor(private httpClient: HttpClient) {}

  getHabits(id: string) {
    return this.httpClient.get(`${this.apiUrl}/${id}`);
  }

  getHabit(habit_id: string) {
    return this.httpClient.get(`${this.apiUrl}/habit/${habit_id}`);
  }

  addHabit(payload: Habit) {
    return this.httpClient.post(`${this.apiUrl}/`, payload);
  }

  updateHabit(habit_id: string, payload: Habit) {
    return this.httpClient.put(`${this.apiUrl}/${habit_id}`, payload);
  }

  deleteHabit(habit_id: string) {
    return this.httpClient.delete(`${this.apiUrl}/${habit_id}`);
  }
}

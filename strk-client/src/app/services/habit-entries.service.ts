import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HabitEntriesService {
  private apiUrl = 'http://localhost:5001/api/entries';
  constructor(private httpClient: HttpClient) {}

  getEntries(user_id: string, habit_id: string) {
    return this.httpClient.get(`${this.apiUrl}/${user_id}/habit/${habit_id}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UnitsService {
  private apiUrl = `http://localhost:5001/api/units`;
  constructor(private httpClient: HttpClient) {}

  getUnits() {
    return this.httpClient.get(`${this.apiUrl}`);
  }
}

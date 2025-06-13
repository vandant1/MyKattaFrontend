import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiUrl = 'http://localhost:8081/api/v1/students';

  constructor(private http: HttpClient) { }

  getTopContributors(limit: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/top-contributors?limit=${limit}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private apiUrl = 'http://localhost:8081/api/v1/admin';

  constructor(private http: HttpClient) { }

  getCurrentAdmins(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/current`);
  }
}

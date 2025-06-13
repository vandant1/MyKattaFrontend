import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UpdatePost } from '../models/update-post.model'; // ✅ correct

@Injectable({
  providedIn: 'root'
})
export class UpdatePostService {

  private apiUrl = 'http://localhost:8081/api/v1/updates';

  constructor(private http: HttpClient) { }

  getTopLevelPosts(): Observable<UpdatePost[]> {
    return this.http.get<UpdatePost[]>(`${this.apiUrl}/top-level`);
  }
}

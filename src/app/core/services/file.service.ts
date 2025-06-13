import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private apiUrl = 'http://localhost:8081/api/v1/files';

  constructor(private http: HttpClient) { }

  // ✅ Now accepts FormData directly
  uploadFile(formData: FormData, studentId: number): Observable<HttpEvent<any>> {
    const req = new HttpRequest(
      'POST',
      `${this.apiUrl}/upload/${studentId}`,  // studentId appended in URL (common REST convention)
      formData,
      {
        reportProgress: true
      }
    );

    return this.http.request(req);
  }

  getFilesByStudent(studentId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/student/${studentId}`);
  }

  downloadFile(fileId: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/download/${fileId}`, { responseType: 'blob' });
  }
}

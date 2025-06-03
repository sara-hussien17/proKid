import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AiQuizeService {
  constructor(private _HttpClient: HttpClient) {}

  GetQuize1(): Observable<any> {
    return this._HttpClient.get(
      'https://localhost:7255/api/Questions/by-video/1',
      this.userToken
    );
  }

  submitAnswers(answers: any[]): Observable<any> {
    return this._HttpClient.post(
      'https://localhost:7255/api/Exams/submit-video-exam/1',
      answers,
      this.userToken
    );
  }

  GetFinalQuize(): Observable<any> {
    return this._HttpClient.get(
      'https://localhost:7255/api/Questions/by-playlist/1',
      this.userToken
    );
  }

  submitFinalAnswers(answers: any[]): Observable<any> {
    return this._HttpClient.post(
      'https://localhost:7255/api/Exams/submit-playlist-exam/1',
      answers,
      this.userToken
    );
  }

  get userToken() {
    if (typeof window !== 'undefined') {
      const token = sessionStorage.getItem('token') || '';
      return {
        headers: new HttpHeaders({
          Authorization: `Bearer ${token}`,
        }),
      };
    }
    return {};
  }
}

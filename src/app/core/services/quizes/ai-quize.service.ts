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

  GetQuize1Paython(): Observable<any> {
    return this._HttpClient.get(
      'https://localhost:7255/api/Questions/by-video/45',
      this.userToken
    );
  }

  submitAnswersPaython(answers: any[]): Observable<any> {
    return this._HttpClient.post(
      'https://localhost:7255/api/Exams/submit-video-exam/45',
      answers,
      this.userToken
    );
  }

  GetFinalQuizePaython(): Observable<any> {
    return this._HttpClient.get(
      'https://localhost:7255/api/Questions/by-playlist/4',
      this.userToken
    );
  }

  submitFinalAnswersPaython(answers: any[]): Observable<any> {
    return this._HttpClient.post(
      'https://localhost:7255/api/Exams/submit-playlist-exam/4',
      answers,
      this.userToken
    );
  }

  GetQuize1Cbase(): Observable<any> {
    return this._HttpClient.get(
      'https://localhost:7255/api/Questions/by-video/16',
      this.userToken
    );
  }

  submitAnswersCbase(answers: any[]): Observable<any> {
    return this._HttpClient.post(
      'https://localhost:7255/api/Exams/submit-video-exam/16',
      answers,
      this.userToken
    );
  }

  GetFinalQuizeCbase(): Observable<any> {
    return this._HttpClient.get(
      'https://localhost:7255/api/Questions/by-playlist/2',
      this.userToken
    );
  }

  submitFinalAnswersCbase(answers: any[]): Observable<any> {
    return this._HttpClient.post(
      'https://localhost:7255/api/Exams/submit-playlist-exam/2',
      answers,
      this.userToken
    );
  }

  GetQuize1Scratch(): Observable<any> {
    return this._HttpClient.get(
      'https://localhost:7255/api/Questions/by-video/31',
      this.userToken
    );
  }

  submitAnswersScratch(answers: any[]): Observable<any> {
    return this._HttpClient.post(
      'https://localhost:7255/api/Exams/submit-video-exam/31',
      answers,
      this.userToken
    );
  }

  GetFinalQuizeScratch(): Observable<any> {
    return this._HttpClient.get(
      'https://localhost:7255/api/Questions/by-playlist/3',
      this.userToken
    );
  }

  submitFinalAnswersScratch(answers: any[]): Observable<any> {
    return this._HttpClient.post(
      ' https://localhost:7255/api/Exams/submit-playlist-exam/3',
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

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private _HttpClient: HttpClient) {}

  GetInfo(): Observable<any> {
    return this._HttpClient.get(
      'https://localhost:7255/api/Exams/user-progress',
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

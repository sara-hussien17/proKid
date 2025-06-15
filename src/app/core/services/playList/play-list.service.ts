import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlayListService {
  constructor(private _HttpClient: HttpClient) {}

  GetVideosAi(): Observable<any> {
    return this._HttpClient.get(
      'https://localhost:7255/api/Videos/by-playlist/1',
      this.userToken
    );
  }
  GetVideosPaython(): Observable<any> {
    return this._HttpClient.get(
      'https://localhost:7255/api/Videos/by-playlist/4',
      this.userToken
    );
  }

  GetVideosScratch(): Observable<any> {
    return this._HttpClient.get(
      'https://localhost:7255/api/Videos/by-playlist/3',
      this.userToken
    );
  }
  GetVideosCodeBase(): Observable<any> {
    return this._HttpClient.get(
      'https://localhost:7255/api/Videos/by-playlist/2',
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

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userInfo:any;
  constructor(private _HttpClient:HttpClient) { }


  decodeToken(){
    if(sessionStorage.getItem('token')){
      this.userInfo = jwtDecode(sessionStorage.getItem('token') !)
    console.log(this.userInfo);
    
    
      
     }
    }

  Register(data:object):Observable<any>{
    return this._HttpClient.post('https://localhost:7255/api/Auth/register' ,data )
     }
    
     Login(data:object):Observable<any>{
       return this._HttpClient.post('https://localhost:7255/api/Auth/login' ,data)
        }
}

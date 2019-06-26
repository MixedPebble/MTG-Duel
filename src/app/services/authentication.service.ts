import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _registerUrl = 'http://localhost:4000/register';
  private _loginUrl = 'http://localhost:4000/login';
  constructor(private http: HttpClient) { }

  registerUser(user: any): Observable<any> {
    return this.http.post<any>(this._registerUrl, user);
  }

  loginUser(user: any): Observable<any> {
    return this.http.post<any>(this._loginUrl, user);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string {
    return localStorage.getItem('token');
  }
}

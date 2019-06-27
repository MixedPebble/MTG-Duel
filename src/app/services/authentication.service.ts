import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _registerUrl = 'http://localhost:4000/register';
  private _loginUrl = 'http://localhost:4000/login';
  constructor(private _http: HttpClient,
      private _router: Router) { }

  registerUser(user: any): Observable<any> {
    return this._http.post<any>(this._registerUrl, user);
  }

  loginUser(user: any): Observable<any> {
    return this._http.post<any>(this._loginUrl, user);
  }

  logOut(): any {
    localStorage.removeItem('token');
    this._router.navigate(['/']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string {
    return localStorage.getItem('token');
  }
}

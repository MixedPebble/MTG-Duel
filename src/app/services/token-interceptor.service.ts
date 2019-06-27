import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
// private _injector: Injector
  constructor(private _auth: AuthenticationService) { }

  intercept(req: any, next: any): any {
    const tokenizedReq: any = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this._auth.getToken()}`
      }
    });
    return next.handle(tokenizedReq);
}
}

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log('in interceptor');

    if (this.authService.isAuthenticated()) {
      const headers = new HttpHeaders().set(
        'Authorization',
        localStorage.getItem('token') ?? ''
      );
      const cloneRequest = request.clone({ headers });
      return next.handle(cloneRequest);
    }
    return next.handle(request);
  }
}

export const AuthentificationInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true,
};

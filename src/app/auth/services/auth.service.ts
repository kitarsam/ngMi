import { Injectable } from '@angular/core';
import { CredentialsDto } from '../dto/credentials.dto';
import { Observable } from 'rxjs';
import { LoginResponseDto } from '../dto/login-response.dto';
import { HttpClient } from '@angular/common/http';
import { API } from '../../config/api';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credentials: CredentialsDto): Observable<LoginResponseDto> {
    return this.http.post<LoginResponseDto>(API.login, credentials);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }
}

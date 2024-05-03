import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { Observable, catchError, map, throwError } from 'rxjs';

import { environment } from '@enviroments/environment.development';
import { LoginModel, RegisterModel } from '../models/user.model';

import { ServerResponse } from 'src/app/models/http-response.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = environment.apiUrl;

  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService
  ) {}

  loginUser(user: LoginModel): Observable<ServerResponse> {
    const body = {
      email: user.email,
      password: user.password,
    };

    return this.httpClient
      .post<ServerResponse>(`${this.apiUrl}/user/login`, body)
      .pipe(
        catchError((error: HttpErrorResponse) => throwError(() => error.error))
      );
  }

  registerUser(user: RegisterModel): Observable<ServerResponse> {
    const body = {
      email: user.email,
      password: user.password,
      last_name: user.lastName,
      first_name: user.firstName,
    };

    return this.httpClient
      .post<ServerResponse>(`${this.apiUrl}/user/register`, body)
      .pipe(
        catchError((error: HttpErrorResponse) => throwError(() => error.error))
      );
  }

  getUserData(): Observable<ServerResponse> {
    return this.httpClient
      .get<ServerResponse>(`${this.apiUrl}/user`)
      .pipe(
        catchError((error: HttpErrorResponse) => throwError(() => error.error))
      );
  }

  logoutUser(): Observable<ServerResponse> {
    return this.httpClient
      .put<ServerResponse>(`${this.apiUrl}/user/logout`, {})
      .pipe(
        catchError((error: HttpErrorResponse) => throwError(() => error.error))
      );
  }
}

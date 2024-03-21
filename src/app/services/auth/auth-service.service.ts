import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { User } from '../../models/core/user.model';
import { Endpoint } from 'src/app/utils/api-endpoint-type';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};
  isLoggedInToSystem: boolean = false;
  access_token: string;

  constructor(
    private http: HttpClient,
    public router: Router,
    private authenticationService: AuthenticationService
  ) { }


  signUp(user: any): Observable<any> {
    return this.http.post(`${environment.petopiaApiUrlRoot + Endpoint.UserRegister}`, user).pipe(catchError(this.handleError));
  }

  signIn(body: any): Observable<any> {
    return this.http.post(`${environment.petopiaApiUrlRoot + Endpoint.UserLogin}`, body);
  }


  get isLoggedIn(): boolean {
    return this.isLoggedInToSystem;
  }

  set isLoggedIn(isLogged: boolean) {
    this.isLoggedInToSystem = isLogged;
  }

  get token(): string {
    return this.access_token;
  }

  set token(token: string) {
    this.access_token = token;
  }

  doLogout() {
    this.authenticationService.token = '';
    this.isLoggedIn = false;
    this.router.navigate(['../../']);
  }

  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      msg = error.error.message;
    } else {
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
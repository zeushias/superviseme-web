import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../classes/user';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

interface LoginResponse {
  token: string;
  // Add other properties if needed
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  isLoggedIn: boolean = false;
  private baseUrl = 'http://localhost:8005/superviseme/auth/login';
  private baseUrlUp = 'http://localhost:8005/superviseme/auth/signup';

  // save token
  storeToken(token: string): void {
    localStorage.setItem('jwtToken', token);
  }

  // login
  /* login(userDetails: { username: string; password: string }): Observable<boolean> {

    return this.http.post<boolean>(this.baseUrl , {
      username: userDetails.username,
      password: userDetails.password
    }, httpOptions);
  return true;
  }*/

  // sign up
  /*register(user): Observable<boolean> {
    return this.http.post(this.baseUrlUp, {
      username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }*/
}

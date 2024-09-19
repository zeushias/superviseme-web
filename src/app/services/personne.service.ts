import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personne } from '../classes/personne';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  private baseUrl = 'http://localhost:8005/superviseme/personne';

  constructor(private http: HttpClient) { }

  isLoggedIn: boolean = false;

  // save token
  storeToken(token: string) {
    localStorage.setItem('jwtToken', token);
  }

  // login
  findByEmail(email: string): Observable<Personne> {
    return this.http.get<Personne>(`${this.baseUrl}/find/${email}`);
  }


}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../classes/user';
import { UserService } from '../services/user';

const API_URL = 'auth/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

   private baseURL = environment.baseURL;

  constructor(private http: HttpClient) { }

    public getUser(user: User): Observable<any>{
        return this.httpClient.get(this.baseURL + API_URL + "/login")
    }

    public getUserById(id: number): Observable<any>{
        return this.httpClient.get(this.baseURL + API_URL + "/user/find/"+id);
    }

    public updateUser(user: User): Observable<User>{
      return this.httpClient.put < User>(this.baseURL + API_URL + "/user/update/", user);
    }

    public deleteUser(id: number): Observable<void>{
      return this.httpClient.delete < void> (this.baseURL + API_URL + "/user/delete/" + id);
    }

}

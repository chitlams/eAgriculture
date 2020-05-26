import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "../_models/user";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseurl: string;
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseurl = baseUrl;
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseurl + "users");
  }

  getUser(id): Observable<User> {
    return this.http.get<User>(this.baseurl + "users/" + id);
  }
}

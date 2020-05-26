import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from "../../environments/environment";
import { HttpUtility } from '../Shared/http.utility';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  jwtHealtper = new JwtHelperService();
  decodedToken:any;
  baseUtl =  "auth/";
  constructor(private http: HttpUtility) { }
  
  login(model: any) {
    return this.http.postData("api/auth/login",
      model)
      .pipe(
        map((response: any) => {
          const user = response;
          if (user) {
            localStorage.setItem("token", user.token);
            this.decodedToken = this.jwtHealtper.decodeToken(user.token);
            console.log(this.decodedToken);
          }
        }));
  }

  register(model: any) {
    return this.http.postData("api/auth/register", model);
  }

  loggedIn() {
    const token = localStorage.getItem("token");
    return !this.jwtHealtper.isTokenExpired(token);
  }
}

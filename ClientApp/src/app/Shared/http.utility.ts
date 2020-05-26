import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class HttpUtility {
  httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  baseUrl: string;
  constructor(private http: HttpClient, @Inject("BASE_URL") baseUrl: string) {
    this.baseUrl = baseUrl;
  }
  getData<T>(url: string) {
    return this.http.get<T>(this.baseUrl + url).pipe(catchError(this.handleError));
  }

  postData<T>(url: string, postData: any) {
    return this.http.post<T>(this.baseUrl + url, postData, this.httpOptions).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("", error.error.message);
    }
    else {
      console.error(`Backend returned code ${error.status},` +
        `body was: ${error.error}`);
    }
    return throwError("Something bad happend; please try again later.")
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterUser } from 'src/app/register-login/register/register-user';
import{Userlogin} from 'src/app/register-login/login/userlogin';
import { BehaviorSubject, Observable,of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class LoginRegisterapiService {

  constructor(private http:HttpClient, private router:Router){}

  // private baseUrl = "http://localhost:3000/Seller";
  private baseUrl="http://159.89.164.203:8081/";
  private registerUrl="api/register";
  private loginUrl = "api/login"
  private loggedIn = false;

  registerApi =`${this.baseUrl}${this.registerUrl}`;
  loginApi =`${this.baseUrl}${this.loginUrl}`;

  addUser(registerusers:RegisterUser){
    // this.loggedIn = true;
    return this.http.post<RegisterUser>(this.registerApi,registerusers,{observe:'response'});
  }

  verifyLogin(Userlogin:Userlogin){
    this.loggedIn = true;
    return this.http.post<Userlogin>(this.loginApi,Userlogin,{observe:'response'});
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {}

}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterUser } from 'src/app/register-login/register/register-user';
import{Userlogin} from 'src/app/register-login/login/userlogin';
import { BehaviorSubject, Observable,catchError,of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class LoginRegisterapiService {

  constructor(private http:HttpClient, private router:Router){}

  // private baseUrl = "http://localhost:3000/Seller";
  private baseUrl="http://159.89.164.203:8081/";
  private registerUrl="api/register";
  private loginUrl = "login";
  private refreshTokenurl ="api/refresh-token";

  registerApi =`${this.baseUrl}${this.registerUrl}`;
  loginApi =`${this.baseUrl}${this.loginUrl}`;
  refrehTokenApi = `${this.baseUrl}${this.refreshTokenurl}`
  register(registerusers:RegisterUser){
    return this.http.post<RegisterUser>(this.registerApi,registerusers,{observe:'response'});
  }

  login(Userlogin:Userlogin){
    return this.http.post<Userlogin>(this.loginApi,Userlogin,{observe:'response'});
  }

  refreshToken(){
    let tokens = {
      // "access":this.getToken(),
      "refresh":this.getrefreshToken()
    }
    return this.http.post<any>(this.refrehTokenApi,tokens,{observe:'response'}).pipe(
      catchError(error => {
          return error;
      })
    );
  }

  getToken(){
    return localStorage.getItem("token");
  }

  getrefreshToken(){
    return localStorage.getItem("refresh-token");
  }

  saveToken(tokenData:any){
    // return localStorage.getItem("token");
    return localStorage.getItem("refresh-token");
  }

  logout(){
    localStorage.clear();    
  }

  haveAccess(){
    var loginToken = localStorage.getItem('token') || '';
    var extractedToken = loginToken.split('.')[1];
    var atobdata = atob(extractedToken);
    var finaldata = JSON.parse(atobdata);
    console.log(finaldata);
    if(finaldata.user_id === 5){
      return true;
    }else{
      alert('Access restricted');
      return false;
    }
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
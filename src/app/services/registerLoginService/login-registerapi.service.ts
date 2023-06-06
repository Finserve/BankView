import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import * as data from 'E-Auctionpostman_collection.json';
import { RegisterUser } from 'src/app/register-login/register/register-user';

import { BehaviorSubject, Observable,of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class LoginRegisterapiService {
  constructor(private http:HttpClient, private router:Router){}


  
  // registerdata: any = (data as any).default;

  // private baseUrl = "http://localhost:3000/Seller";
  private baseUrl="http://159.89.164.203:8081/";
  private registerURl="api/register";
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);

  registerApi =`${this.baseUrl}${this.registerURl}`;
  addUser(registerusers:RegisterUser){
 console.log("connection sucess")
    return this.http.post<RegisterUser>(this.registerApi,registerusers,{observe:'response'});
    // return this.http.post<RegisterUser>(this.registerUrl,registerusers);
    //   ,{observe:'response'}).subscribe((result) => {
    //   console.log("working");
    //   if(result){
    //   this.isSellerLoggedIn.next(true)
    //   localStorage.setItem('register', JSON.stringify(result.body))
    //   this.router.navigate(['home'])
    //   }
    // });
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

  private log(message: string) {
    // console.log
    // this.messageService.add(`HeroService: ${message}`);
  }
}


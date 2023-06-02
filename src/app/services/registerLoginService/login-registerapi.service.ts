import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as data from 'E-Auctionpostman_collection.json';
import { RegisterUser } from 'src/app/register-login/register/register-user';

import { Observable,of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterapiService {
 private baseurl="http://159.89.164.203:8081";
  // registerdata: any = (data as any).default;
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);


addUser(registerusers:RegisterUser){
  //  registerUrl =`${this.url}/Register`;
return this.http.post<RegisterUser>(this.baseurl,registerusers);
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


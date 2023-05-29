import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as data from 'E-Auctionpostman_collection.json';
import { RegisterUser } from 'src/app/register-login/register/register-user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterapiService {
//  private url="http://localhost:500/item";
  // registerdata: any = (data as any).default;
  constructor(private http:HttpClient) { }

addUser(registerusers:RegisterUser){
  //  registerUrl =`${this.url}/Register`;
return this.http.post<RegisterUser>("http://localhost:3000/item",registerusers);
}
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as data from 'E-Auctionpostman_collection.json';
import { RegisterUser } from 'src/app/register-login/register/register-user';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterapiService {
//  private url="http://localhost:500/item";
  // registerdata: any = (data as any).default;
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http:HttpClient, private router:Router) { }

  addUser(registerusers:RegisterUser){
    //  registerUrl =`${this.url}/Register`;
    //  return this.http.post<RegisterUser>("http://localhost:3000/item",registerusers);

    // console.log("done");
    return this.http.post<RegisterUser>("http://localhost:3000/seller",registerusers,{observe:'response'}).subscribe((result) => {
      console.log("working");
      if(result){
        this.isSellerLoggedIn.next(true)
        localStorage.setItem('register', JSON.stringify(result.body))
        this.router.navigate(['home'])
      }
    });
  }
  // reloadpage(){
  //   if(localStorage.getItem('register')){
  //     this.isSellerLoggedIn.next(true)
  //     // this.router.navigate(['home'])
  //   }
  // }
}
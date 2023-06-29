import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginRegisterapiService } from '../services/registerLoginService/login-registerapi.service';
import {take, map, tap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginRegisterService: LoginRegisterapiService, private router : Router){}
  ngOnint(){
    let storage = localStorage.getItem("token")
    let refresh = localStorage.getItem("refresh-token")
    if (localStorage.getItem("token") === null) {
      this.router.navigate[('home')]
    }
   
    else{
      this.router.navigate[('home')]
    }
  }


  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean | Observable<boolean> | Promise<boolean> {
   
    if(localStorage.getItem('token')!==null){
      this.router.navigate(['home']);
      return true;
    } else {
      this.router.navigate(['register']);
      return false;
    }
  }
  cannotActivate(): boolean {
    this.router.navigate(['register']);
    return false;
  }
}

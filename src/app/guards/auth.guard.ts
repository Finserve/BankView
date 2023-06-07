import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginRegisterapiService } from '../services/registerLoginService/login-registerapi.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginRegisterService: LoginRegisterapiService, private router : Router){}

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return false;
  //   // return this.loginRegisterService.isSellerLoggedIn;
  // }
  
  canActivate(): boolean {
    if(this.loginRegisterService.isLoggedIn()){
      return true;
    } else {
      this.router.navigate(['register']);
      return false;
    }
  }
}

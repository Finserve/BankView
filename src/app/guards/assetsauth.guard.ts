import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginRegisterapiService } from '../services/registerLoginService/login-registerapi.service';

@Injectable({
  providedIn: 'root'
})
export class AssetsauthGuard implements CanActivate {
  
  constructor(private service: LoginRegisterapiService, private router: Router){}

  canActivate()  {
    if(this.service.haveAccess()){
      return true;
    }else{
      this.router.navigate(['home'])
      return false
    }
  }  
  
}

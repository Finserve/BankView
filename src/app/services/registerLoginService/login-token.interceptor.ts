import { Injectable,Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError, switchMap, throwError } from 'rxjs';
import { LoginRegisterapiService } from './login-registerapi.service';
import { Router } from '@angular/router';

@Injectable()
export class LoginTokenInterceptor implements HttpInterceptor {

  constructor(private injector:Injector, private router:Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let apiService = this.injector.get(LoginRegisterapiService);
    // let authequest = request;
  let  jwtToken = this.AddtokenHeader(request,apiService.getToken());
  //   request.clone({
  //     setHeaders:{
  //       Authorization:'bearer'+apiService.getToken(),
  //     }
  //   })
    return next.handle(jwtToken).pipe(
      catchError(errordata=>{
        console.log(errordata);
        this.handelrefresToken(request,next);
        return throwError (errordata);
      })
    );
  }
  handelrefresToken(request: HttpRequest<any>, next: HttpHandler){
    let apiService = this.injector.get(LoginRegisterapiService);
    return apiService.refreshToken().pipe(
      switchMap((data:any) =>{
        apiService.saveToken(data);
        return next.handle(this.AddtokenHeader(request,data.jwtToken));
      }),
      catchError(errordata=>{
        localStorage.clear();
        this.router.navigate(['register'])
        return errordata;
      })
    );
  }
  AddtokenHeader(request: HttpRequest<unknown>,token){
    return request.clone({headers:request.headers.set('Authorization','bearer'+token)})
  }
}


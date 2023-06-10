import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterLoginModule } from './register-login/register-login.module';
import { HomePageModule } from './home-page/home-page.module';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginTokenInterceptor } from './services/registerLoginService/login-token.interceptor';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RegisterLoginModule,
    HomePageModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass:LoginTokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterLoginRoutingModule } from './register-login-routing.module';
import { RegisterLoginComponent } from './register-login.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterLoginNavbarComponent } from './register-login-navbar/register-login-navbar.component';
import { ForgotPwdComponent } from './forgot-pwd/forgot-pwd.component';

@NgModule({
  declarations: [
    RegisterLoginComponent,
    RegisterComponent,
    LoginComponent,
    FooterComponent,
    RegisterLoginNavbarComponent,
    ForgotPwdComponent    
  ],
  
  imports: [
    CommonModule,
    RegisterLoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule
  ],
  exports: [
    RegisterLoginComponent,
    FooterComponent
  ],
})
export class RegisterLoginModule { }

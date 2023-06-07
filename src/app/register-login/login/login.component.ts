import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
  ValidatorFn,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRegisterapiService } from 'src/app/services/registerLoginService/login-registerapi.service';
import { Userlogin } from './userlogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent {
  name: any;
  textShow1: boolean;

  constructor(private fb: FormBuilder, private router: Router,private loginService:LoginRegisterapiService) {}

  loginForm = this.fb.group(
    {
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ]),
      ],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(5)]),
      ],
    },
    {
      validators: this.password.bind(this),
    }
  );
  public value;
  public value1;

  password(loginForm: FormGroup) {
    this.value = loginForm.get('password')?.value;
    this.value1 = loginForm.get('confirmpassword')?.value;
  }

  login(Userlogin:Userlogin) {
    if (this.loginForm.valid) {
      this.textShow1 = false;
      console.log(this.loginForm.value);
      this.loginService.verifyLogin(Userlogin)
      .subscribe(res=>{
        console.log(res.body);
        console.log("sucessfully Logged");
        this.router.navigate(['home'])
        console.log("sucessfully Logged1");
      },
      error=>{
        console.log(error.error.message.email)
      })
    } else {
      this.textShow1 = true;
      console.log('not valid');
    }
  }
}
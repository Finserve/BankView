import { Component } from '@angular/core';
import { FormBuilder,Validators,FormGroup,FormControl,ValidatorFn } from '@angular/forms';
import { RegisterUser } from './register-user';
import { LoginRegisterapiService } from 'src/app/services/registerLoginService/login-registerapi.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})

export class RegisterComponent {
  name: any;
  textShow: boolean;
  textShow1: boolean;
  textShow2: boolean;
  passmatch: boolean;
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  errorMessage;

  constructor(private fb: FormBuilder, private registerService:LoginRegisterapiService,private router:Router) {}

  registerForm = this.fb.group({
    name:['', Validators.compose([Validators.required,Validators.pattern("^[a-zA-Z ]+$")])],
    email:['', Validators.compose([Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])],
    password:['', Validators.compose([Validators.required,Validators.minLength(5)])],
    confirmpassword:['', Validators.required],
  },
  { 
    validators: this.password.bind(this)
  })

  public value;
  public value1;

  password(registerForm: FormGroup) {
    this.value = registerForm.get('password')?.value;
    this.value1 = registerForm.get('confirmpassword')?.value;
    if(this.value!== this.value1){
     this.passmatch=true;
    }
    else{
     this.passmatch=false;
    }
    return this.value == this.value1 ? null : { passwordNotMatch: true };
  }
  
  register(registerusers: RegisterUser) {
    if (this.registerForm.valid) {
      this.registerForm.reset;
      console.log(this.registerService)
      this.registerService.addUser(registerusers)
      .subscribe
        (res => {
          console.log(res);          
          this.textShow = true;
          this.textShow1 = false;
          console.log("sucessfully connected");
          this.router.navigate(['home'])
        },
        error => {
          console.log("not connected");         
          console.log(error.error.message.email);
          this.errorMessage = error.error.message.email;
          this.textShow2=true;
          this.textShow = false;
          this.textShow1 = false;
        })
      for (let i = 0; i < this.registerForm.value.length; i++) {
        console.log(this.registerForm.value[i])
      }
    }
    else {
      console.log('not valid')
      this.textShow = false;
      this.textShow1 = true;
    }
  }
}
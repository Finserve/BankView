import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl, ValidatorFn } from '@angular/forms';
// import * as data from 'E-Auctionpostman_collection.json'
import { RegisterUser } from './register-user';
import { LoginRegisterapiService } from 'src/app/services/registerLoginService/login-registerapi.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})


export class RegisterComponent {

  name: any;
  textShow: boolean;
  textShow1: boolean;
  textShow2:boolean;

  passmatch:boolean;
 constructor(private fb: FormBuilder, private registerService:LoginRegisterapiService) { }
 registerForm = this.fb.group({
   Name:['', Validators.compose([Validators.required,Validators.pattern("^[a-zA-Z ]+$")])],
   Email:['', Validators.compose([Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])],
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
    console.log(registerusers);
    this.registerService.addUser(registerusers).subscribe(
      (res => {
        this.textShow = true;
        this.textShow1 = false;
        // this.registerusers.push(res);
        console.log("you did it");
        this.registerForm.reset;
      }),
      error => {
        console.log(error);
        this.textShow2=true;
        this.textShow = false;
        this.textShow1 = false;
      }
    )
    // console.log(this.registerForm.value.Name)
    for (let i = 0; i < this.registerForm.value.length; i++) {
      console.log(this.registerForm.value[i])
    }
    // this.sucessfulregister(this.registerForm.value);
  }
  else {
    console.log('not valid')
    this.textShow = false;
    this.textShow1 = true;
  }
}


// sucessfulregister() {

// }

}
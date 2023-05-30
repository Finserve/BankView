import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  name:any;
  textShow1: boolean;
 constructor(private fb: FormBuilder,private router: Router) { }
 loginForm = this.fb.group({
  
   Email:['', Validators.compose([Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])],
   password:['', Validators.required],
   
 }
 )
 
 login(){
if(this.loginForm.valid){
  this.textShow1 = false;
  this.router.navigate(['/home'])
console.log(this.loginForm.value)
}
 else{
  this.textShow1 = true;
 console.log('not valid')
 }
 }

}

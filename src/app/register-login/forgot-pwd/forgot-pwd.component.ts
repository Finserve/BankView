import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-pwd',
  templateUrl: './forgot-pwd.component.html',
  styleUrls: ['./forgot-pwd.component.scss']
})
export class ForgotPwdComponent {
  name:any;
  textShow1: boolean;
 constructor(private fb: FormBuilder,private router: Router) { }
 forgotForm = this.fb.group({
  Email:['', Validators.compose([Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])],
   
 })
 reset(){
  if(this.forgotForm.valid){
    this.textShow1 = false;
    this.router.navigate(['/home'])
  console.log(this.forgotForm.value)
  }
   else{
    this.textShow1 = true;
   console.log('not valid')
   }
   }
}


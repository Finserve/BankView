import { Component, OnInit } from '@angular/core';
import { LoginRegisterapiService } from 'src/app/services/registerLoginService/login-registerapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage-navbar',
  templateUrl: './homepage-navbar.component.html',
  styleUrls: ['./homepage-navbar.component.scss']
})
export class HomepageNavbarComponent {
  constructor(private logoutservice:LoginRegisterapiService, private router:Router){}
  logout(){
    // console.log(localStorage.getItem('token'));
        // console.log("res");    
        localStorage.clear();
  }
}

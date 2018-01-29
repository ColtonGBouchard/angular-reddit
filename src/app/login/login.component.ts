import { Http } from '@angular/http';
import { AuthService } from '../services/auth-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private service: AuthService) {

   }

  login(credentials: string) {
    this.service.login(credentials);
    console.log(credentials);
  }

  logout() {
    this.service.logout();
  }
}

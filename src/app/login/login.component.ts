import { NgForm } from '@angular/forms/src/directives';
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

  login(credentials: NgForm) {
    this.service.login(credentials)
    .subscribe(result => {
        if (result) {
          console.log('SUCCESS');
        }
    }, error => console.log(error));

    console.log(credentials);
  }

  logout() {
    this.service.logout();
  }
}

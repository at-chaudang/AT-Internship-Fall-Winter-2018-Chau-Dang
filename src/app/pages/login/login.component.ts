import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  door = '';

  constructor(private auth: AuthService) { }

  ngOnInit() {
    if (this.auth.isLoggedIn) {
      this.door = 'LOGOUT PAGE';
    } else {
      this.door = 'LOGIN PAGE';
    }
  }

  Login(): boolean {
    if (this.auth.isLoggedIn) {
      console.log("Da logout!");
      return this.auth.logout();
    }
    console.log("Da login!");
    return this.auth.login();
  }

}

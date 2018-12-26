import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;

  redirectUrl: string;

  constructor(private router: Router) { }

  login(): boolean {
    return this.isLoggedIn = true;
  }

  logout() {
    return this.isLoggedIn = false;
  }
}

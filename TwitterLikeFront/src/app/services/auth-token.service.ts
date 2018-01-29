import { Injectable } from '@angular/core';

@Injectable()
export class AuthTokenService {

  constructor() { }

  login(token: string) {
    localStorage.setItem('currentUser', token);
  }
  
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

  isLoggedIn() {
    const token = localStorage.getItem('currentUser');
    if (token) {
      return true;
    } else {
      return false;
    }
  }

  getToken() {
    return localStorage.getItem('currentUser');
  }
}

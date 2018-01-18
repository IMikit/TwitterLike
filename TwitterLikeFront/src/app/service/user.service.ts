import { Injectable } from '@angular/core';

@Injectable()
export class UserService {


  private isUserLoggedIn = false;
  private Email;

  constructor() { }

  setUserLoggedIn() {
    this.isUserLoggedIn = true;
  }
  getUserLoggedIn() {
    return this.isUserLoggedIn;
  }
}

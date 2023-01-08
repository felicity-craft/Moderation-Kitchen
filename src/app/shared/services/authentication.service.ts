import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  allowedEmail = 'mike@example.com';
  allowedPassword = '123';

  constructor() { }
  
  loginUser(email: string, password: string): boolean {
    if (
      email.toLowerCase() == this.allowedEmail &&
      password == this.allowedPassword
      ) {
        console.log('login success');
        localStorage.setItem('token', 'secretToken');
        return true;
      }
      return false;
    }

  loggedIn(){
    let hasToken = false;
    if (localStorage.getItem('token') == 'secretToken'){
      hasToken = true;
    }
    return hasToken;
  }
  
}



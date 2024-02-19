import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(email: string, password: string): boolean {
    if (email === 'admin' && password === 'admin') {
      const userInfo = {
        email: email,
        password: password,
      };
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      return true;
    } else {
      return false;
    }
  }

  isLoggin(): boolean {
    if (localStorage.getItem('userInfo')) {
      return true;
    } else {
      return false;
    }
  }
}

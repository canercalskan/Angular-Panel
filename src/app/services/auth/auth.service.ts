import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor() {}

  isLoggedIn() {
    let admin = sessionStorage.getItem('admin');
    let adminObject = JSON.parse(admin!);

    if (adminObject != null && adminObject.id == '1') {
      return true;
    } 
    else {
      return false;
    }
  }
}

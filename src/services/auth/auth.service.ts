import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminService } from '../admin.service';
import { ShareService } from '../share.service';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    private http: HttpClient,
    private AdminService: AdminService,
    private ShareService: ShareService,
    private router : Router,
  ) {}

  isLoggedIn() {
    let admin = sessionStorage.getItem('admin');
    let adminObject = JSON.parse(admin!);

    if (adminObject != null && adminObject.id == '1') {
      return true;
    } 
    else {
      this.router.navigate(['/Actions'])
      return false;
    }
  }
}

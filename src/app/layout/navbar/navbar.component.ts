import { Component } from '@angular/core';
import { AuthGuard } from 'src/app/services/auth/auth.guard';

@Component({
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  selector: 'navbar-component',
})

export class NavbarComponent {
  constructor(private AuthGuard : AuthGuard){}
  temp = sessionStorage.getItem('admin')
  admin = JSON.parse(this.temp!)
  logout(): void {
    sessionStorage.removeItem("admin");
    //Just reloading the current page after authorization expires, AuthGuard does the navigation process.
    location.reload()
  }
}

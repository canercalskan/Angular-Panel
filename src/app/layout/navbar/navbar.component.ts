import { Component } from '@angular/core';
import { adminModal } from 'src/app/models/admin.model';
import { ShareService } from 'src/services/share.service';
@Component({
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  selector: 'navbar-component',
})

export class NavbarComponent {
admin: adminModal = { id: '', username: '', password: '', isLoggedIn: '0' };
  constructor(private ShareService: ShareService) {
    this.ShareService.shareAdm.subscribe((adm) => {
      this.admin.username = adm.username;
      this.admin.id = adm.id;
      this.admin.isLoggedIn = adm.isLoggedIn;
      this.admin.password = adm.password;
    });
  }
}

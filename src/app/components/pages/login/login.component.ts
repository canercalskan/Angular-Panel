import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { adminModal } from "../../../models/admin.model";
import { AdminService } from "src/services/admin.service";
import { ShareService } from "src/services/share.service";
@Component({
    styleUrls : ['./login.component.css'],
    templateUrl: './login.component.html',
    selector: 'login'
})

export class LoginComponent{
    invalidLogin:boolean = false;
    constructor(private router: Router , private AdminService : AdminService , private ShareService : ShareService){}
    handleLogin(admin : adminModal):void {
        this.AdminService.getAdmins().subscribe((response) => {
            response.forEach(adm => {
                if(admin.username === adm.username && admin.password === adm.password) {
                    //adm.isLoggedIn = "1";
                    this.AdminService.setLoginStatus(adm).subscribe(); //updating the login status of an admin user from the database
                    this.ShareService.shareAdmin(adm);
                    this.router.navigate(['/Home']);  
                    return;
                } 
                else {
                    this.invalidLogin = true
                }
            })
        })
    }
}
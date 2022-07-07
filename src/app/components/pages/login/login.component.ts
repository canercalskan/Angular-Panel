import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { adminModal } from "../../../models/admin.model";
import { AdminService } from "src/app/services/admin.service";
import { ShareService } from "src/app/services/share.service";
import { AuthService } from "src/app/services/auth/auth.service";
@Component({
    styleUrls : ['./login.component.css'],
    templateUrl: './login.component.html',
    selector: 'login'
})

export class LoginComponent {
    invalidLogin:boolean = false;
    loginIds : Array<string> = [];
    constructor(private AuthService : AuthService, private router: Router , private AdminService : AdminService , private ShareService : ShareService){}
    handleLogin(admin : adminModal):void {
        let store = {
            "id" : "",
            "name" : ""
        }
        this.AdminService.getAdmins().subscribe((response) => {
            response.forEach(adm => {
                if(admin.username == adm.username && admin.password == adm.password) {
                    store.id = adm.id.toString();
                    store.name = adm.username.toString();
                    sessionStorage.setItem('admin' , JSON.stringify(store));   
                    adm.isLoggedIn = "1";
                    this.AdminService.setLoginStatus(adm).subscribe(); 
                    this.ShareService.shareAdmin(adm);
                    this.router.navigate(['/Home']);  
                } 
                else {
                    this.invalidLogin = true
                    return;
                }
            })
        })
    }
}
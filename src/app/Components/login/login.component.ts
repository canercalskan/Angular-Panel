import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { adminModal } from "../userModal";
import { AdminService } from "src/services/admin.service";
@Component({
    styleUrls : ['./login.component.css'],
    templateUrl: './login.component.html',
    selector: 'login'
})

export class LoginComponent{
    invalidLogin:boolean = false;
    constructor(private router: Router , private AdminService : AdminService){}
    handleLogin(admin : adminModal):void {
        this.AdminService.getAdmins().subscribe((response) => {
            response.forEach(i => {
                if(admin.name === i.name && admin.password === i.password) {
                    admin.isLoggedIn = true;
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
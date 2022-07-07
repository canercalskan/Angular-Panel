import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({providedIn:'root'})

export class LoginGuard implements CanActivate {
    constructor(private router : Router ,private AuthService : AuthService) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if(!this.AuthService.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['Home'])
            return false;
        }
    }
}
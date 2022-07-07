import { CanActivate, Router,  } from "@angular/router";
import { AuthService } from "./auth.service";
import {ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router'
import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})

export class AuthGuard implements CanActivate{
    constructor(private AuthService : AuthService , private router : Router) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
        if(this.AuthService.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['..'])
            return false;
        }
    }
}
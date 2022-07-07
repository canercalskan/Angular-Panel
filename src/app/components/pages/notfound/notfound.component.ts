import { Component } from "@angular/core";
import { Router } from "@angular/router";
@Component({
    templateUrl : './notfound.component.html',
    styleUrls:['./notfound.component.css'],
    selector : 'not-found',
})
export class NotFoundComponent {
    constructor(private router: Router){}
    returnHome() : void {
        this.router.navigate(['Home'])
    }
}
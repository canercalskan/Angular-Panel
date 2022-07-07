import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
@Injectable({
    providedIn:'root'
})

export class ConvertService {
    constructor(private http : HttpClient,) {}
    salaryUSD : number = 0;
    options : String = 'from=TRY&to=USD&amount=';
    convertSalary(salary : String) : Observable<{result:number , success : boolean}> {
        return(this.http.get<{result:number , success:boolean}>(environment.convertRoot + ''+ this.options + '' + salary));
    }   
}
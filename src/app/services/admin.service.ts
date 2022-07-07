import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { adminModal } from "src/app/models/admin.model";
import { environment } from "src/environments/environment";
@Injectable()

export class AdminService {
    constructor(private http: HttpClient){}
    getAdmins() : Observable<adminModal[]> {
        return this.http.get<adminModal[]>(environment.adminsRoot)
    }
    setLoginStatus(admin:adminModal): Observable<adminModal> {
        return this.http.put<adminModal>(environment.adminsRoot + admin.id , admin);
    }
}
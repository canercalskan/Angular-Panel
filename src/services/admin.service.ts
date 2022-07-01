import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { adminModal } from "src/app/Components/userModal";
@Injectable()

export class AdminService {
    constructor(private http: HttpClient){}
    getAdmins() : Observable<adminModal[]> {
        return this.http.get<adminModal[]>(' http://localhost:3000/admins');
    }
}
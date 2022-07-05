import { Injectable } from "@angular/core";
import { BehaviorSubject,} from "rxjs";
import { adminModal } from "src/app/models/admin.model";
import { Employee } from "src/app/models/employee.model";


@Injectable({providedIn:'root'})

export class ShareService {
    constructor(){}
    private emp = new BehaviorSubject<Employee>({id:' ', name: '', surname:'', salary: '' , salaryUsd:''}) 
    private admin = new BehaviorSubject<adminModal>({id: '' , isLoggedIn: '0' , username: '' , password: ''})
    public shareEmp = this.emp.asObservable();
    public shareAdm = this.admin.asObservable();
    shareEmployee(incomingEmployee : Employee) { 
        this.emp.next(incomingEmployee)
    }
    shareAdmin(incomingAdmin : adminModal) {
        this.admin.next(incomingAdmin);
    }
}
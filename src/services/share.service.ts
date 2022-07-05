import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { adminModal } from 'src/app/models/admin.model';
import { Employee } from 'src/app/models/employee.model';
import { AdminService } from './admin.service';

@Injectable({ providedIn: 'root' })
export class ShareService {
  constructor(private AdminService: AdminService) {
    this.AdminService.getAdmins().subscribe(a => {this.loginStatus = a[0].isLoggedIn});
    console.log(this.loginStatus)
  }

  loginStatus : String = '0';
  ngOnInit() {}

  private emp = new BehaviorSubject<Employee>({
    id: ' ',
    name: '',
    surname: '',
    salary: '',
    salaryUsd: '',
  });

  //isloggedin bilgisini database'den almak gerekiyor, bunun için giriş yapan adminin id'sini adminService kullanarak

  private admin = new BehaviorSubject<adminModal>({
    id: '',
    isLoggedIn: this.loginStatus,
    username: '',
    password: '',
  });

  public shareEmp = this.emp.asObservable();
  public shareAdm = this.admin.asObservable();
  shareEmployee(incomingEmployee: Employee) {
    this.emp.next(incomingEmployee);
  }
  shareAdmin(incomingAdmin: adminModal) {
    this.admin.next(incomingAdmin);
  }
}

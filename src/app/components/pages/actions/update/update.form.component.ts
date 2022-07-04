import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/services/employees.service';
import { ShareService } from 'src/services/share.service';
import { Router } from '@angular/router';

@Component({
  styleUrls: ['./update.form.component.css'],
  templateUrl: './update.form.component.html',
  selector: 'update-form-component',
})
export class UpdateFormComponent {
  updatedEmployee: Employee = { id: '', name: '', surname: '', salary: '' };
  constructor(
    private router : Router,
    private EmployeeService: EmployeeService,
    private http: HttpClient,
    private ShareService: ShareService
  ) {
    this.ShareService.shareEmp.subscribe((emp) => {
      this.updatedEmployee.id = emp.id;
      this.updatedEmployee.name = emp.name;
      this.updatedEmployee.surname = emp.surname;
      this.updatedEmployee.salary = emp.salary;
    });
  }
  updateEmployee(employee: Employee): void {
    if (employee.name.length < 2 || employee.surname.length < 2) {
    }
    this.updatedEmployee.name = employee.name;
    this.updatedEmployee.surname = employee.surname;
    this.updatedEmployee.salary = employee.salary;

    this.EmployeeService.updateEmployees(this.updatedEmployee).subscribe();
  }

  routeBack() : void {
    this.router.navigate(['/Home']);
  }
}

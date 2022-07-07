import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employees.service';
import { ShareService } from 'src/app/services/share.service';
import { ConvertService } from 'src/app/services/convert.service';
import { Router } from '@angular/router';

@Component({
  styleUrls: ['./update.form.component.css'],
  templateUrl: './update.form.component.html',
  selector: 'update-form-component',
})
export class UpdateFormComponent {
  updatedEmployee: Employee = { id: '', name: '', surname: '', salary: '' , salaryUsd : ''};
  nameError: boolean = false;
  surnameError: boolean = false;
  salaryError: boolean = false;
  constructor(
    private ConvertService : ConvertService,
    private router: Router,
    private EmployeeService: EmployeeService,
    private ShareService: ShareService
  ) {
    this.ShareService.shareEmp.subscribe((emp) => {
      this.updatedEmployee.id = emp.id;
      this.updatedEmployee.name = emp.name;
      this.updatedEmployee.surname = emp.surname;
      this.updatedEmployee.salary = emp.salary;
      this.updatedEmployee.salaryUsd = emp.salaryUsd;
    });
  }
  updateEmployee(employee: Employee): void {
    if (employee.name.length < 2) {
      this.nameError = true;
    } else {
      this.nameError = false;
    }
    if (employee.surname.length < 2) {
      this.surnameError = true;
    } else {
      this.surnameError = false;
    }
    if (+employee.salary <= 0) {
      this.salaryError = true;
    } else {
      this.salaryError = false;
    }
    if (!this.nameError && !this.surnameError && !this.salaryError) {
      this.updatedEmployee.name = employee.name;
      this.updatedEmployee.surname = employee.surname;
      this.updatedEmployee.salary = employee.salary;
      this.ConvertService.convertSalary(employee.salary.toString()).subscribe(response => {
        this.updatedEmployee.salaryUsd = response.result.toFixed(3).toString();
      });
      this.EmployeeService.updateEmployees(this.updatedEmployee).subscribe();
    } else {
      return;
    }
  }
  routeBack(): void {
    this.router.navigate(['/Home']);
  }
}

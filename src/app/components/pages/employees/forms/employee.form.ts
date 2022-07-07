import { Component } from "@angular/core";
import { EmployeeService } from "src/app/services/employees.service";
import { Employee } from 'src/app/models/employee.model';
import { ShareService } from "src/app/services/share.service";
import { ConvertService } from "src/app/services/convert.service";
import { Router } from "@angular/router";
@Component({
    selector: 'employee-form',
    templateUrl : './employee.form.html',
    styleUrls : ['./employee.form.css']
})

export class EmployeeForm {
  nameError: boolean = false;
  surnameError: boolean = false;
  salaryError: boolean = false;
  addClicked : boolean = false;
  updateClicked : boolean = false;
  updatedEmployee : Employee = {id:'' , name : '', surname : '' , salary : '' , salaryUsd : ''};
  constructor(private router : Router,private ConvertService : ConvertService,private EmployeeService: EmployeeService , private ShareService : ShareService ) {
    if(this.router.url == '/Actions/Add') {
        this.addClicked = true;
        this.updateClicked = false;
    }
    else if(this.router.url == '/Actions/Update') {
        this.updateClicked = true;
        this.addClicked = false;
    }
   
    this.ShareService.shareEmp.subscribe(result => {
        this.updatedEmployee.id = result.id
        this.updatedEmployee.name = result.name;
        this.updatedEmployee.surname = result.surname;
        this.updatedEmployee.salary = result.salary;
        this.updatedEmployee.salaryUsd = result.salaryUsd;
    })

  }

  newItemAdded: boolean = false;
  newItemFailed : boolean = false;
  newEmployeeID = Math.round(Math.random() * 100);
  saveEmployee(employee: Employee): void {
    this.updateClicked = false;
    this.addClicked = true;
    this.newItemAdded = true;
    if (+employee.salary > 0) {
      this.newItemFailed = false;
      const newEmployee = {
        id: (this.newEmployeeID++).toString(),
        name: employee.name,
        surname: employee.surname,
        salary: employee.salary.toString(),
        salaryUsd : employee.salaryUsd,
      };
      this.EmployeeService.addEmployees(newEmployee).subscribe(() => {
        this.EmployeeService.getEmployees().subscribe();
      });
    }
    else {
      this.newItemAdded = false;
      this.newItemFailed = true;
      return;
    }
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
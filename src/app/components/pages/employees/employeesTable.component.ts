import { Component } from '@angular/core';
import { Employee } from 'src/app/models/employee.modal';
import { EmployeeService } from '../../../../services/employees.service';

@Component({
  selector: 'employees-table',
  templateUrl: 'employeesTable.component.html',
  styleUrls: ['employeesTable.component.css'],
})
export class EmployeesTableComponent {
  
  employeesList: Employee[] = []
  constructor(private EmployeeService : EmployeeService ) {}
  ngOnInit(): void {
    this.EmployeeService.getEmployees().subscribe((result: Employee[]) => {
        this.employeesList = result;
    })
  }
  
  deleteEmployee(empID:String):void {
    this.EmployeeService.deleteEmployees(empID).subscribe(() => {
      this.EmployeeService.getEmployees().subscribe((response) => {this.employeesList = response})
    });
  }

  updateActive : boolean = false;
  updatedEmployee : Employee = {id:'' , name: '' , surname: '', salary : ''}
  setUpdateActive(empID: String):void {
    this.updatedEmployee.id = empID;
    this.updateActive = true;
  }
  updateEmployee(employee:Employee) : void {
    this.updatedEmployee.name = employee.name;
    this.updatedEmployee.surname = employee.surname;
    this.updatedEmployee.salary = employee.salary;
    this.EmployeeService.updateEmployees(this.updatedEmployee).subscribe(response => {
      console.warn('Updated Employee : ' + response.name + ' ' + response.surname);
      this.EmployeeService.getEmployees().subscribe(response => {this.employeesList = response});
      this.updateActive = false
    })
  }

}

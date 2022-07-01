import { Component } from '@angular/core';
import { Employee } from '../employeeModel';
import { EmployeeService } from '../services/employees.service';

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
  setUpdateActive():void {
    this.updateActive = true;
  }
  updateEmployee(employee:Employee) : void {
    this.EmployeeService.updateEmployees(employee).subscribe(response => {
      console.warn('Put requested : ' + response);
      
    })
  }

}

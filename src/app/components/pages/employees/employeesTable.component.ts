import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from '../../../../services/employees.service';
import { ShareService } from 'src/services/share.service';
import { ConvertService } from 'src/services/convert.service';

@Component({
  selector: 'employees-table',
  templateUrl: 'employeesTable.component.html',
  styleUrls: ['employeesTable.component.css'],
})
export class EmployeesTableComponent {
  employeesList: Employee[] = []
  constructor(private EmployeeService : EmployeeService  , private ShareService : ShareService,private router : Router, private ConvertService : ConvertService) {}
  ngOnInit(): void {
    this.ShareService.shareAdm.subscribe(admin => {
      if(admin.isLoggedIn == '0') {
        this.router.navigate(['']);
      }
    })

    this.EmployeeService.getEmployees().subscribe((result: Employee[]) => {
        result.forEach(employee => {
          this.ConvertService.convertSalary(employee.salary).subscribe(response => {
            if(response.success) {
              employee.salaryUsd = response.result.toFixed(3).toString();
            }
            else {
              employee.salaryUsd = 'unconvertable'
            }
          })
        })
        this.employeesList = result;
    })
  }
  
  deleteEmployee(empID:String):void {
    this.EmployeeService.deleteEmployees(empID).subscribe(() => {
      this.EmployeeService.getEmployees().subscribe((response) => {this.employeesList = response})
    });
  }

  setUpdateActive(employee:Employee) {
    this.ShareService.shareEmployee(employee);
    this.router.navigate(['/Actions/Update'])
  }

}

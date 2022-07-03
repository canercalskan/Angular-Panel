import { Component } from '@angular/core';
import { EmployeeService } from '../../../services/employees.service';
import { Employee } from '../../employeeModel';
@Component({
  styleUrls: ['./actions.component.css'],
  templateUrl: './actions.component.html',
  selector: 'actions-component',
})
export class ActionsComponent {
  constructor(private EmployeeService: EmployeeService) {}
  newItemAdded: boolean = false;
  newItemFailed : boolean = false;
  newEmployeeID = Math.round(Math.random() * 100);

  saveEmployee(employee: Employee): void {
    this.newItemAdded = true;
    if (+employee.salary > 0) {
      this.newItemFailed = false;
      const newEmployee = {
        id: (this.newEmployeeID++).toString(),
        name: employee.name,
        surname: employee.surname,
        salary: employee.salary.toString(),
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
}

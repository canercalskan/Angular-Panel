import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/models/employee.model';
import { environment } from 'src/environments/environment';
@Injectable()
export class EmployeeService {
  constructor(private http: HttpClient) {}
  getEmployees(): Observable<Employee[]> {

    return this.http.get<Employee[]>(environment.employeesRoot);
  }
  addEmployees(employee : Employee): Observable<Employee> {
    return this.http.post<Employee>(environment.employeesRoot, employee);
  }

  deleteEmployees(id : String) : Observable<String> {
    return this.http.delete<String>(environment.employeesRoot + '/'+ id)
  }
  updateEmployees(employee : Employee) : Observable<Employee> {
    return this.http.put<Employee>(environment.employeesRoot + '/' + employee.id, employee)
  }
}
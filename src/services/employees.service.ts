import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/models/employee.model';

@Injectable()
export class EmployeeService {
  constructor(private http: HttpClient) {}
  getEmployees(): Observable<Employee[]> {
    //get requesti return ediyoruz ki istediğimiz herhangi bir component'ta subscribe olabilelim
    return this.http.get<Employee[]>('http://localhost:3000/employees');
  }
  //Database'e insert etmek için addEmployees fonksiyonu yaratıldı
  //Parametre olarak Employee modeli objesi eklendi
  addEmployees(employee : Employee): Observable<Employee> {
    return this.http.post<Employee>('http://localhost:3000/employees', employee);
  }

  deleteEmployees(id : String) : Observable<String> {
    return this.http.delete<String>('http://localhost:3000/employees'+ '/'+ id)
  }
  updateEmployees(employee : Employee) : Observable<Employee> {
    return this.http.put<Employee>('http://localhost:3000/employees' + '/' + employee.id, employee)
  }
}
import { Component } from "@angular/core";
import { EmployeeService } from "../../../services/employees.service";
import { Employee } from "../../employeeModel";
@Component({
    styleUrls:['./actions.component.css'],
    templateUrl : './actions.component.html',
    selector: 'actions-component'
})

export class ActionsComponent{
    constructor(private EmployeeService:EmployeeService) {}

    newEmployeeID = Math.round(Math.random() * 100) 
    saveEmployee(employee : Employee):void {
  
      //Database'e pushlanacak obje form submission ile gelen input datalarıyla oluşturuldu
      const newEmployee= {
          id : (this.newEmployeeID++).toString(), //tablodaki tüm değerler string beklendiği için id değeri stringe çevirildi
          name: employee.name,
          surname: employee.surname,
          salary: employee.salary.toString() //form'dan salary inputunu number olarak alıyoruz, fakat form actiona geçirdiğimiz ++
                         //salary.value değeri otomatik olarak stringe döndüğü için, toString() kullanmamıza gerek kalmadı.
      }
      //Serviste bulunan add fonksiyonu çağırıldı, fonksiyon newEmployee objesini database'e postladı
      //Result'a ihtiyaç duymadığımız için subscribe fonksiyonuna parametre eklenmedi
      this.EmployeeService.addEmployees(newEmployee).subscribe(() =>{
        this.EmployeeService.getEmployees().subscribe()
      })
    }
}
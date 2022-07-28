import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeesTableComponent } from './app/components/pages/employees/list/employeesTable.component';
import { EmployeeService } from './app/services/employees.service';
import { NavbarComponent } from './app/layout/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './app/components/pages/login/login.component';
import { AdminService } from './app/services/admin.service';
import { Actions } from './app/components/pages/actions/actions';
import { EmployeeForm } from './app/components/pages/employees/forms/employee.form';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesTableComponent,
    NavbarComponent,
    LoginComponent,
    EmployeeForm , Actions
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [EmployeeService , AdminService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

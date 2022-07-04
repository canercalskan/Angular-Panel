import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeesTableComponent } from './app/components/pages/employees/employeesTable.component';
import { EmployeeService } from './services/employees.service';
import { NavbarComponent } from './app/layout/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormComponent } from './app/components/pages/actions/employee.form/employee.form.component';
import { LoginComponent } from './app/components/pages/login/login.component';
import { AdminService } from './services/admin.service';

const appRoute: Routes = [
  {path : 'Actions' , component : EmployeeFormComponent},
  {path : 'Home' , component: EmployeesTableComponent},
  {path : '' , component : LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EmployeesTableComponent,
    NavbarComponent,
    EmployeeFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [EmployeeService , AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeesTableComponent } from './app/components/pages/employees/list/employeesTable.component';
import { EmployeeService } from './app/services/employees.service';
import { NavbarComponent } from './app/layout/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './app/components/pages/login/login.component';
import { AdminService } from './app/services/admin.service';
import { AuthGuard } from './app/services/auth/auth.guard';
import { NotFoundComponent } from './app/components/pages/notfound/notfound.component';
import { LoginGuard } from './app/services/auth/login.guard';
import { EmployeeForm } from './app/components/pages/employees/forms/employee.form';

const appRoute: Routes = [
  {path : '' , component : LoginComponent , canActivate: [LoginGuard]},
  {path : 'Home' , component: EmployeesTableComponent , canActivate: [AuthGuard]},
  {path : 'Actions/Add' , component : EmployeeForm , canActivate : [AuthGuard]},
  {path: 'Actions/Update' , component: EmployeeForm , canActivate : [AuthGuard]},
  {path : '**' , component: NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EmployeesTableComponent,
    NavbarComponent,
    LoginComponent,
    EmployeeForm
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [EmployeeService , AdminService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

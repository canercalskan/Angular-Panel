import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeesTableComponent } from './app/components/pages/employees/employeesTable.component';
import { EmployeeService } from './services/employees.service';
import { NavbarComponent } from './app/layout/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormComponent } from './app/components/pages/actions/add/add.form.component';
import { LoginComponent } from './app/components/pages/login/login.component';
import { AdminService } from './services/admin.service';
import { UpdateFormComponent } from './app/components/pages/actions/update/update.form.component';
import { AuthGuard } from './services/auth/auth.guard';
import { NotFoundComponent } from './app/components/pages/notfound/notfound.component';

const appRoute: Routes = [
  {path : '' , component : LoginComponent},
  {path : 'Home' , component: EmployeesTableComponent , canActivate: [AuthGuard]},
  {path : 'Actions/Add' , component : EmployeeFormComponent , canActivate : [AuthGuard]},
  {path: 'Actions/Update' , component: UpdateFormComponent , canActivate : [AuthGuard]},
  {path : '**' , component: NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EmployeesTableComponent,
    NavbarComponent,
    EmployeeFormComponent,
    LoginComponent,
    UpdateFormComponent,
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

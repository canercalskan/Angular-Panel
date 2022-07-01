import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ToDoComponent } from './app/Components/todocomponent/todo.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeesTableComponent } from './app/Components/employees/employeesTable.component';
import { EmployeeService } from './services/employees.service';
import { NavbarComponent } from './app/Components/Layout/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ActionsComponent } from './app/Components/actions/actions.component';

const appRoute: Routes = [
  {path : 'Actions' , component : ActionsComponent},
  {path : 'Home' , component: EmployeesTableComponent},
  {path : '' , component : EmployeesTableComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    EmployeesTableComponent,
    NavbarComponent,
    ActionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

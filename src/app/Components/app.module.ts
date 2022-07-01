import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './appcomponent/app.component';
import { ToDoComponent } from './todocomponent/todo.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeesTableComponent } from './employeescomponent/employeesTable.component';
import { EmployeeService } from './services/employees.service';
import { NavbarComponent } from './navbarcomponent/navbar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ActionsComponent } from './actionscomponent/actions.component';

const appRoute: Routes = [
  {path : 'Actions' , component : ActionsComponent},
  {path : 'Home' , component: EmployeesTableComponent}
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

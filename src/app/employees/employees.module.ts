import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { RouterModule, Routes} from '@angular/router';
import { EmployeesparentComponent } from './employeesparent.component';
import { MaterialModule } from '../material/material.module';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: EmployeesparentComponent,
    pathMatch: 'full'
  },
  {
    path: 'emp',
    component: EmployeesComponent
  },
  {
    path:'details',
    component: EmployeeDetailsComponent
  }
];


@NgModule({
  declarations: [EmployeesComponent, EmployeeDetailsComponent, EmployeesparentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class EmployeesModule { }

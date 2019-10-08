import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeesparent',
  templateUrl: './employeesparent.component.html',
  styleUrls: ['./employeesparent.component.css']
})
export class EmployeesparentComponent implements OnInit {

  title: string = 'Anything is possible';
  
  employeeData: {};

  constructor() { }

  ngOnInit() {
  }

  employeeDataChild1(data) {
    this.employeeData = data;
    console.log(this.employeeData);
  }


}

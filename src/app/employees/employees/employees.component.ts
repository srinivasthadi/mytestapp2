import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  @Input('title') heading: string;
  @Output('employeeData') employeeData = new EventEmitter<any>();

  employeeForm = this.fb.group({
    FirstName: [''],
    LastName: ['']

  });

 
  constructor(private fb: FormBuilder) {
  }


  ngOnInit() {

  }

  onSubmit() {
    console.log(this.employeeForm.value);
    this.employeeData.emit(this.employeeForm.value);

  }

}

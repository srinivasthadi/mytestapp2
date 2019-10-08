import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesparentComponent } from './employeesparent.component';

describe('EmployeesparentComponent', () => {
  let component: EmployeesparentComponent;
  let fixture: ComponentFixture<EmployeesparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

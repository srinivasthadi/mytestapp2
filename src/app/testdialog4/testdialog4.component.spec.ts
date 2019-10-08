import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testdialog4Component } from './testdialog4.component';

describe('Testdialog4Component', () => {
  let component: Testdialog4Component;
  let fixture: ComponentFixture<Testdialog4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testdialog4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testdialog4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

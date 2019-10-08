import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Newtest5Component } from './newtest5.component';

describe('Newtest5Component', () => {
  let component: Newtest5Component;
  let fixture: ComponentFixture<Newtest5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Newtest5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Newtest5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

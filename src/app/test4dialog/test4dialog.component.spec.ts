import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Test4dialogComponent } from './test4dialog.component';

describe('Test4dialogComponent', () => {
  let component: Test4dialogComponent;
  let fixture: ComponentFixture<Test4dialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Test4dialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test4dialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

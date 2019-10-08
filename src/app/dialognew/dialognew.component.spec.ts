import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialognewComponent } from './dialognew.component';

describe('DialognewComponent', () => {
  let component: DialognewComponent;
  let fixture: ComponentFixture<DialognewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialognewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialognewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

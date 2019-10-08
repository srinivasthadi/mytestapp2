import { TestBed } from '@angular/core/testing';

import { Testdialog4Service } from './testdialog4.service';

describe('Testdialog4Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Testdialog4Service = TestBed.get(Testdialog4Service);
    expect(service).toBeTruthy();
  });
});

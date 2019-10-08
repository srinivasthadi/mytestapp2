import { TestBed } from '@angular/core/testing';

import { Test4dialogService } from './test4dialog.service';

describe('Test4dialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Test4dialogService = TestBed.get(Test4dialogService);
    expect(service).toBeTruthy();
  });
});

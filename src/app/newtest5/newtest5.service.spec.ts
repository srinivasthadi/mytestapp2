import { TestBed } from '@angular/core/testing';

import { Newtest5Service } from './newtest5.service';

describe('Newtest5Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Newtest5Service = TestBed.get(Newtest5Service);
    expect(service).toBeTruthy();
  });
});

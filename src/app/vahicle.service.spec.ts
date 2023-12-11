import { TestBed } from '@angular/core/testing';

import { VahicleService } from './vahicle.service';

describe('VahicleService', () => {
  let service: VahicleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VahicleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

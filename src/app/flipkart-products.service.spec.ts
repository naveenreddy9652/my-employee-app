import { TestBed } from '@angular/core/testing';

import { FlipkartProductsService } from './flipkart-products.service';

describe('FlipkartProductsService', () => {
  let service: FlipkartProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlipkartProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { PaystraxServiceService } from './paystrax-service.service';

describe('PaystraxServiceService', () => {
  let service: PaystraxServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaystraxServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

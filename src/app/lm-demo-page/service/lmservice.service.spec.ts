import { TestBed } from '@angular/core/testing';

import { LmserviceService } from './lmservice.service';

describe('LmserviceService', () => {
  let service: LmserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LmserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

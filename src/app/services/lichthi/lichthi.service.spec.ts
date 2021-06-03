import { TestBed } from '@angular/core/testing';

import { LichthiService } from './lichthi.service';

describe('LichthiService', () => {
  let service: LichthiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LichthiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

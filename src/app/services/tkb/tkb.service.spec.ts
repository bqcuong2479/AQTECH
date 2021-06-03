import { TestBed } from '@angular/core/testing';

import { TkbService } from './tkb.service';

describe('TkbService', () => {
  let service: TkbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TkbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

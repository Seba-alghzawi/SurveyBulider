import { TestBed } from '@angular/core/testing';

import { ServeyService } from './servey.service';

describe('ServeyService', () => {
  let service: ServeyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { GilLibService } from './gil-lib.service';

describe('GilLibService', () => {
  let service: GilLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GilLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

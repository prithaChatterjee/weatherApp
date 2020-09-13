import { TestBed } from '@angular/core/testing';

import { MainBodyService } from './main-body.service';

describe('MainBodyService', () => {
  let service: MainBodyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainBodyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

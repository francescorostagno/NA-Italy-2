import { TestBed } from '@angular/core/testing';

import { JftService } from './jft.service';

describe('JftService', () => {
  let service: JftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

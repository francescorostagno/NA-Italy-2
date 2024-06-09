import { TestBed } from '@angular/core/testing';

import { TomatoFormatsService } from './tomato-formats.service';

describe('TomatoFormatsService', () => {
  let service: TomatoFormatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TomatoFormatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

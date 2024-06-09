import { TestBed } from '@angular/core/testing';

import { VirtFormatsService } from './virt-formats.service';

describe('VirtFormatsService', () => {
  let service: VirtFormatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VirtFormatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

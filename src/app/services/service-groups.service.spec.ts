import { TestBed } from '@angular/core/testing';

import { ServiceGroupsService } from './service-groups.service';

describe('ServiceGroupsService', () => {
  let service: ServiceGroupsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceGroupsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

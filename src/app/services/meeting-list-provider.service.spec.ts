import { TestBed } from '@angular/core/testing';

import { MeetingListProviderService } from './meeting-list-provider.service';

describe('MeetingListProviderService', () => {
  let service: MeetingListProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeetingListProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

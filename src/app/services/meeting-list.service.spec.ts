import { TestBed } from '@angular/core/testing';

import { MeetingListService } from './meeting-list.service';

describe('MeetingListService', () => {
  let service: MeetingListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeetingListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

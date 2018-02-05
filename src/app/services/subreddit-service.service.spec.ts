import { TestBed, inject } from '@angular/core/testing';

import { SubredditService } from './subreddit-service.service';

describe('SubredditServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubredditService]
    });
  });

  it('should be created', inject([SubredditService], (service: SubredditService) => {
    expect(service).toBeTruthy();
  }));
});

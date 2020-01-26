import { TestBed } from '@angular/core/testing';

import { SearchCandidateService } from './search-candidate.service';

describe('SearchCandidateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchCandidateService = TestBed.get(SearchCandidateService);
    expect(service).toBeTruthy();
  });
});

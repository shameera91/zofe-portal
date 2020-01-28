import { TestBed } from '@angular/core/testing';

import { AddQuestionsService } from './add-questions.service';

describe('AddQuestionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddQuestionsService = TestBed.get(AddQuestionsService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { EmployeeQuestionsService } from './employee-questions.service';

describe('EmployeeQuestionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeQuestionsService = TestBed.get(EmployeeQuestionsService);
    expect(service).toBeTruthy();
  });
});

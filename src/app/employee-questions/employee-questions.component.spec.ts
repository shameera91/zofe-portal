import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeQuestionsComponent } from './employee-questions.component';

describe('EmployeeQuestionsComponent', () => {
  let component: EmployeeQuestionsComponent;
  let fixture: ComponentFixture<EmployeeQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

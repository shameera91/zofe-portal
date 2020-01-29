import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EmpQuestionAnswerInput} from '../modal/emp-question-answer-input';

@Injectable({
  providedIn: 'root'
})
export class EmployeeQuestionsService {

  questionApi = environment.apiUrl + 'questions';

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<any> {
    return this.http.get(`${this.questionApi}/all`);
  }
}

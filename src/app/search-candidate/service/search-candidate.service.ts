import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {EmpQuestionAnswerInput} from '../../employee-questions/modal/emp-question-answer-input';

@Injectable({
  providedIn: 'root'
})
export class SearchCandidateService {

  questionnaire = environment.apiUrl + 'questionnaire';
  searchApiQuestions = environment.apiUrl + 'questions';

  constructor(private http: HttpClient) { }

  getMatchingClientsByAnswerScore(query): Observable<any> {
    const options = {params: new HttpParams().set('searchQuery', query)};
    return this.http.get(`${this.questionnaire}/employee-mapping`, options);
  }

  getQuestions(): Observable<any> {
    return this.http.get(`${this.searchApiQuestions}/all`);
  }

  saveEmpQuestionAndAnswers(data: EmpQuestionAnswerInput): Observable<any> {
    return this.http.post(`${this.questionnaire}/save-emp-answers`, data);
  }
}

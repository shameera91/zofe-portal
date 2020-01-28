import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchCandidateService {

  searchApi = environment.apiUrl + 'questionnaire';
  searchApiQuestions = environment.apiUrl + 'questions';

  constructor(private http: HttpClient) { }

  getMatchingClientsByAnswerScore(query): Observable<any> {
    const options = {params: new HttpParams().set('searchQuery', query)};
    return this.http.get(`${this.searchApi}/employee-mapping`, options);
  }

  getQuestions(): Observable<any> {
    return this.http.get(`${this.searchApiQuestions}/all`);
  }

}

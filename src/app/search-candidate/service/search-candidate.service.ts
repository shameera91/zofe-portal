import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchCandidateService {

  searchApi = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getMatchingClientsByAnswerIndex(answerIndex): Observable<any> {
    const options = {params: new HttpParams().set('idx', answerIndex)};
    return this.http.get(this.searchApi, options);
  }

}

import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {QuestionInput} from '../modal/question-input';

@Injectable({
  providedIn: 'root'
})
export class AddQuestionsService {
  questionApi = environment.apiUrl + 'questions';

  constructor(private http: HttpClient) {
  }

  saveQuestionAndAnswers(data: QuestionInput): Observable<any> {
    return this.http.post(`${this.questionApi}/save-question` , data);
  }

  getSavedQuestions(): Observable<any> {
    return this.http.get(`${this.questionApi}/all`);
  }

  deleteQuestion(qId): Observable<any>{
    return this.http.delete(`${this.questionApi}/delete/${qId}`);
  }
}

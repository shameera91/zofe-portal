import {Component, OnInit} from '@angular/core';
import {SearchCandidateService} from './service/search-candidate.service';
import {QuestionAnswer} from './modal/question-answer';

@Component({
  selector: 'app-search-candidate',
  templateUrl: './search-candidate.component.html',
  styleUrls: ['./search-candidate.component.scss']
})
export class SearchCandidateComponent implements OnInit {
  headElements = ['Expose', 'Match Level', 'Serial Number'];

  selectedOne;

  dataModal: any[];
  allQuestions: any;
  questionIdsArr: Array<string> = [];
  questionsArr: Array<string> = [];
  answersArr: Array<string> = [];
  qaArr: Array<QuestionAnswer> = [];

  qnaMap = {};

  constructor(public searchCandidateService: SearchCandidateService) {
  }

  ngOnInit() {
    this.getQuestions();
  }

  addSelectedOption(questionId, event) {
    this.qnaMap[questionId] = event.value;
    console.log(this.qnaMap);
  }

  getMatchingEmployees() {
    const content = [];
    for (const key in this.qnaMap) {
      if (this.qnaMap.hasOwnProperty(key)) {
        content.push(`${key}:${this.qnaMap[key]}`);
      }
    }
    this.searchCandidateService.getMatchingClientsByAnswerScore(content.join()).subscribe((res) => {
      this.dataModal = res;
    }, err => {

    });
  }

  getQuestions() {
    this.searchCandidateService.getQuestions().subscribe((res) => {
      this.allQuestions = res;
      this.allQuestions.forEach((element, index, array) => {
        let s = '';
        this.questionsArr.push(element.question);
        this.questionIdsArr.push(element.id);
        element.answers.forEach((el, idx, arr) => {
          s += el.answerText;
          if (idx !== (arr.length - 1)) {
            s += ',';
          }
        });
        this.answersArr.push(s);
      });

      for (let i = 0; i < this.questionsArr.length; i++) {
        this.qaArr.push(this.prepareBody(this.questionsArr[i], this.answersArr[i], this.questionIdsArr[i]));
      }
    }, err => {

    });
  }

  private prepareBody(que, ans, qId): QuestionAnswer {
    const arr = ans.split(',');
    return {
      id: qId,
      question: que,
      answerArr: arr
    } as QuestionAnswer;
  }

}


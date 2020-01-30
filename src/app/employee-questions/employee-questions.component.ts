import {Component, OnInit} from '@angular/core';
import {QuestionAnswer} from '../search-candidate/modal/question-answer';
import {EmployeeQuestionsService} from './service/employee-questions.service';
import {SearchCandidateService} from '../search-candidate/service/search-candidate.service';
import {EmpQuestionAnswerInput} from './modal/emp-question-answer-input';
import {NotificationService} from '../common/notification/notification.service';

@Component({
  selector: 'app-employee-questions',
  templateUrl: './employee-questions.component.html',
  styleUrls: ['./employee-questions.component.scss']
})
export class EmployeeQuestionsComponent implements OnInit {
  selectedOne;

  dataModal: any[];
  allQuestions: any;
  questionIdsArr: Array<string> = [];
  questionsArr: Array<string> = [];
  answersArr: Array<string> = [];
  qaArr: Array<QuestionAnswer> = [];

  qnaMap = {};

  empName;
  empPhone;
  empEmail;

  constructor(public questionsService: EmployeeQuestionsService,
              public searchCandidateService: SearchCandidateService,
              public notificationService: NotificationService) {
  }

  ngOnInit() {
    this.getQuestions();
  }

  addSelectedOption(questionId, event) {
    this.qnaMap[questionId] = event.value;
    console.log(this.qnaMap);
  }

  saveEmployeeQuestionAndAnswers() {
    if (this.empName && this.empEmail && this.empPhone) {
      this.searchCandidateService.saveEmpQuestionAndAnswers(this.prepareBodyQnA()).subscribe((res) => {
        this.selectedOne = '';
        this.empName = '';
        this.empEmail = '';
        this.empPhone = '';
        this.notificationService.success('Answers saved');
      }, error => {
        this.notificationService.error('Error saving answers');
      });
    } else {
      this.notificationService.warning('Filling employee details is mandatory');
    }

  }

  getQuestions() {
    this.questionsService.getQuestions().subscribe((res) => {
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

  private prepareBodyQnA(): EmpQuestionAnswerInput {
    const content = [];
    for (const key in this.qnaMap) {
      if (this.qnaMap.hasOwnProperty(key)) {
        content.push(`${key}:${this.qnaMap[key]}`);
      }
    }
    return {
      questionAnswers: content.join(),
      empName: this.empName,
      empEmail: this.empEmail,
      empPhone: this.empPhone
    } as EmpQuestionAnswerInput;
  }
}

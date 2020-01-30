import {Component, OnInit} from '@angular/core';
import {QuestionInput} from './modal/question-input';
import {AddQuestionsService} from './service/add-questions.service';
import {NotificationService} from '../common/notification/notification.service';
import {QuestionAnswer} from '../search-candidate/modal/question-answer';
import {QuestionOutput} from './modal/question-output';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.scss']
})
export class AddQuestionsComponent implements OnInit {
  headElements = ['Question', 'Answers', 'Action'];
  dataModal: Array<QuestionInput> = [];

  selectedOption: string;
  question: string;
  answers: string;
  addedOptions: string;

  allQuestions: any;

  constructor(public questionsService: AddQuestionsService,
              public notificationService: NotificationService) {
  }

  ngOnInit() {
    this.getSavedQuestions();
  }

  getSavedQuestions() {
    this.dataModal = [];
    this.questionsService.getSavedQuestions().subscribe((res) => {
      console.log(res);
      this.allQuestions = res;
      this.allQuestions.forEach((element, index, array) => {
        let s = '';
        element.answers.forEach((el, idx, arr) => {
          s += el.answerText;
          if (idx !== (arr.length - 1)) {
            s += ',';
          }
        });
        this.dataModal.push(this.prepareBodyQuestion(element.id, element.question, s));
      });
      console.log(this.dataModal);
    }, error => {

    });
  }

  addQuestionAndAnswers() {
    if (this.question && this.answers) {
      this.questionsService.saveQuestionAndAnswers(this.prepareBody()).subscribe((res) => {
        this.notificationService.success('Question added');
        this.getSavedQuestions();
        this.question = '';
        this.answers = '';
      }, error => {
        this.notificationService.error('Question adding error');
      });
    } else {
      this.notificationService.warning('Fill all fields before submitting');
    }
  }

  private prepareBodyQuestion(id, que, ans): QuestionOutput {
    return {
      questionId: id,
      question: que,
      answers: ans
    } as QuestionOutput;
  }

  private prepareBody(): QuestionInput {
    return {
      question: this.question,
      answers: this.answers
    } as QuestionInput;
  }

  deleteQuestion(element){
    this.questionsService.deleteQuestion(element).subscribe((res) => {
      this.notificationService.success('Question Deleted');
      this.getSavedQuestions();
    }, error => {

    });
    //console.log(element);
  }

}

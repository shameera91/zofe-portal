import {Component, OnInit} from '@angular/core';
import {QuestionInput} from './modal/question-input';
import {AddQuestionsService} from './service/add-questions.service';
import {NotificationService} from '../common/notification/notification.service';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.scss']
})
export class AddQuestionsComponent implements OnInit {
  selectedOption: string;
  question: string;
  answers: string;
  addedOptions: string;

  constructor(public questionsService: AddQuestionsService,
              public notificationService: NotificationService) {
  }

  ngOnInit() {
  }

  addQuestionAndAnswers() {
    if (this.question && this.answers) {
      this.questionsService.saveQuestionAndAnswers(this.prepareBody()).subscribe((res) => {
         this.notificationService.success('question added');
         this.question = '';
         this.answers = '';
      }, error => {
        this.notificationService.error('question adding error');
      });
    } else {
      this.notificationService.warning('fill all fields before submitting');
    }
  }


  private prepareBody(): QuestionInput {
    return {
      question: this.question,
      answers: this.answers
    } as QuestionInput;
  }

}

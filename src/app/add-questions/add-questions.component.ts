import {Component, OnInit} from '@angular/core';
import {QuestionInput} from './modal/question-input';
import {AddQuestionsService} from './service/add-questions.service';

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

  constructor(public questionsService: AddQuestionsService) {
  }

  ngOnInit() {
  }

  addQuestionAndAnswers() {
    if (this.question && this.answers) {
      this.questionsService.saveQuestionAndAnswers(this.prepareBody()).subscribe((res) => {
        console.log('added');
      }, error => {
        console.log('err');
      });
    } else {
      console.log('empty fields');
    }
  }


  private prepareBody(): QuestionInput {
    return {
      question: this.question,
      answers: this.answers
    } as QuestionInput;
  }

}

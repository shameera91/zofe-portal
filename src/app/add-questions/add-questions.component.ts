import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.scss']
})
export class AddQuestionsComponent implements OnInit {
  public selectedOption: string;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-search-candidate',
  templateUrl: './search-candidate.component.html',
  styleUrls: ['./search-candidate.component.scss']
})
export class SearchCandidateComponent implements OnInit {
  selectedOne;
  selectedTwo;
  selectedThree;
  selectedFour;
  selectedFive;
  foods: Food[] = [
    {value: '1', viewValue: '1'}
  ];

  elements: any = [
    {id: 1, first: 'Mark', last: 'Otto', handle: '@mdo'},
    {id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat'},
    {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
    {id: 4, first: 'Larry', last: 'the Bird', handle: '@twitter'}
  ];

  headElements = ['ID', 'Expose', 'Match Level', 'Serial Number'];

  constructor() { }

  ngOnInit() {
  }

}

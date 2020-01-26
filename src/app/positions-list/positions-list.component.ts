import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-positions-list',
  templateUrl: './positions-list.component.html',
  styleUrls: ['./positions-list.component.scss']
})
export class PositionsListComponent implements OnInit {

  elements: any = [
    {id: 1, first: 'Mark', last: 'Otto', handle: '@mdo'},
    {id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat'},
    {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
    {id: 4, first: 'Larry', last: 'the Bird', handle: '@twitter'},
    {id: 5, first: 'Larry', last: 'the Bird', handle: '@twitter'},
    {id: 6, first: 'Larry', last: 'the Bird', handle: '@twitter'}
  ];

  headElements = ['ID', 'In Progress', 'Incoming Candidates', 'Position Title'];

  constructor() { }

  ngOnInit() {
  }

}

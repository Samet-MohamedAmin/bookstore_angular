import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input() value: string;

  constructor() { }

  ngOnInit() {
  }

}

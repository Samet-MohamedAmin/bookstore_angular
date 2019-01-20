import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  array: number[] = [1, 2, 3, 4, 5, 6, 7];
  parts;

  constructor() {}

  ngOnInit() {
    const partLength = 4;
    for (let i = 0; i < this.array.length / partLength; i++) {
      this.array.slice(0, 2);
    }
  }

}

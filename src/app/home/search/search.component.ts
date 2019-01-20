import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-home-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchHomeComponent implements OnInit {
  valueInput = '';
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three', 'Four', 'Five'];
  filteredOptions: Observable<string[]>;


  constructor() { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}

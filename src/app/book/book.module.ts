import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { RouterModule, Routes } from '@angular/router';
import { BookPageComponent } from './book-page/book-page.component';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { BookCardComponent } from './book-card/book-card.component';

const routes: Routes = [
  { path: 'book',
    component: BookPageComponent,
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatButtonModule
  ],
  declarations: [
    BookComponent,
    BookPageComponent,
    BookCardComponent
  ],
  exports: [
    RouterModule,
    BookCardComponent
  ]
})
export class BookModule { }

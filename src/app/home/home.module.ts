import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SearchHomeComponent } from './search/search.component';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatAutocompleteModule,
  MatCommonModule, MatCardModule, MatGridListModule, MatToolbarModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookListComponent } from './book-list/book-list.component';
import { RouterModule, Routes } from '@angular/router';
import { BookModule } from '../book/book.module';

const routes: Routes = [
  { path: 'home',
    component: HomeComponent,
  }
];



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    BookModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatAutocompleteModule,
    MatCommonModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule
  ],
  declarations: [
    HomeComponent,
    SearchHomeComponent,
    BookListComponent,
  ],
  exports: [
    HomeComponent,
    RouterModule
  ]
})
export class HomeModule { }

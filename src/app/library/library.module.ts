import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { LibraryRoutingModule } from './library-routing.module';
import { BookAddComponent } from './book-add/book-add.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorAddComponent } from './author-add/author-add.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';

@NgModule({
  declarations: [
    BookListComponent,
    BookAddComponent,
    AuthorListComponent,
    AuthorAddComponent
  ],
  imports: [
    LibraryRoutingModule,
    NzTableModule,
    NzButtonModule,
    CommonModule,
    FormsModule,
    NzFormModule,
    NzAutocompleteModule
  ]
})
export class LibraryModule { }

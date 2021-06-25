import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { LibraryRoutingModule } from './library-routing.module';
import { BookAddComponent } from './book-add/book-add.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorAddComponent } from './author-add/author-add.component';


@NgModule({
  declarations: [
    BookListComponent,
    BookAddComponent,
    AuthorListComponent,
    AuthorAddComponent
  ],
  imports: [
    LibraryRoutingModule,
    NzFormModule
  ]
})
export class LibraryModule { }

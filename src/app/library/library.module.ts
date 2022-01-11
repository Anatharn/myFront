import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './component/book/book-list/book-list.component';
import { LibraryRoutingModule } from './library-routing.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AuthorListComponent } from './component/author/author-list/author-list.component';
import { AuthorAddComponent } from './component/author/author-add/author-add.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { HeaderComponent } from './component/header/header.component';
import { AuthorUpdateComponent } from './component/author/author-update/author-update.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { BookEditComponent } from './component/book/book-edit/book-edit.component';
import { BookAuthorListComponent } from './component/book/book-author-list/book-author-list.component';
import { NzListModule } from 'ng-zorro-antd/list';
import { BookAuthorListDisplayerComponent } from './component/book/book-author-list-displayer/book-author-list-displayer.component';
import { BookcaseListComponent } from './component/bookcase/bookcase-list/bookcase-list.component';
import { BookcaseEditComponent } from './component/bookcase/bookcase-edit/bookcase-edit.component';
import { BookcaseRackEditorComponent } from './component/bookcase/bookcase-rack-editor/bookcase-rack-editor.component';

@NgModule({
  declarations: [
    BookListComponent,
    AuthorListComponent,
    AuthorAddComponent,
    HeaderComponent,
    AuthorUpdateComponent,
    BookEditComponent,
    BookAuthorListComponent,
    BookAuthorListDisplayerComponent,
    BookcaseListComponent,
    BookcaseEditComponent,
    BookcaseRackEditorComponent
  ],
  imports: [
    LibraryRoutingModule,
    NzTableModule,
    NzButtonModule,
    CommonModule,
    FormsModule,
    NzFormModule,
    NzAutocompleteModule,
    NzIconModule,
    NzModalModule,
    NzToolTipModule,
    NzListModule
  ]
})
export class LibraryModule { }

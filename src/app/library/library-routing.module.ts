import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './component/book/book-list/book-list.component';
import { BookEditComponent } from './component/book/book-edit/book-edit.component';
import { AuthorListComponent } from './component/author/author-list/author-list.component'; 
import { AuthorAddComponent } from './component/author/author-add/author-add.component';
import { AuthorUpdateComponent } from './component/author/author-update/author-update.component';
import { BookcaseListComponent } from './component/bookcase/bookcase-list/bookcase-list.component';
import { BookcaseEditComponent } from './component/bookcase/bookcase-edit/bookcase-edit.component';

const routes: Routes = [
  { path: 'book', component: BookListComponent },
  { path: 'book/edit', component: BookEditComponent },
  { path: 'author', component: AuthorListComponent },
  { path: 'author/add', component: AuthorAddComponent },
  { path: 'author/update', component: AuthorUpdateComponent},
  { path: 'bookcase', component: BookcaseListComponent},
  { path: 'bookcase/edit', component: BookcaseEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }

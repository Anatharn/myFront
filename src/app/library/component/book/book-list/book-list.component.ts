import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { HALPage } from 'src/app/common/domain/HALPage';
import { Book } from 'src/app/library/domain/Book';
import { BookService } from 'src/app/library/service/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];
  page: HALPage;

  constructor(private bookService : BookService, private router : Router, private modalService: NzModalService) {
    this.books = [];
    this.page = new HALPage(1,5);
  }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(){
    this.bookService.findAll(this.page)
    .subscribe(embeddedBooks => {
      this.books = embeddedBooks._embedded.book;
      this.page.totalElements = embeddedBooks.page.totalElements;
      this.page.totalPages = embeddedBooks.page.totalPages;
    })
  }

  onQueryParamsChange(params: NzTableQueryParams){
    this.page.number = params.pageIndex;
    this.loadBooks();
  }

  onUpdate(book: Book): void {
    console.log('on update call');
    this.bookService.selectEntity(book);
    this.router.navigateByUrl("/library/book/edit");
  }

  onCreate(): void {
    this.bookService.resetSelectedEntity();
    this.router.navigateByUrl("/library/book/edit");
  }

  onDelete(book: Book): void {
    this.modalService.confirm({
      nzTitle: 'Êtes vous sûr de vouloir supprimer ce livre?',
      nzContent: 'La suppression est définitive. Et je suis sûr que vous ne l\'avez même pas lu!!',
      nzOkText: 'Oui',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.delete(book),
      nzCancelText: 'Non',
      nzOnCancel: () => console.log('Cancel')
    });
    this.bookService.delete(book);
    console.log("on delete book");
  }
  delete(book: Book){
    this.bookService.delete(book).subscribe((book)=> {
      if(this.books.length === 1){
        this.page.number = this.page.number -1;
      }
      this.loadBooks();
    });
  }
}

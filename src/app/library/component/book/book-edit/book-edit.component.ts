import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/library/domain/Book';
import { BookService } from 'src/app/library/service/book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  public book: Book = new Book("","",[]);
  public isUpdatable: boolean = false;

  constructor(private bookService: BookService, private router: Router ){}

  ngOnInit(): void {
    this.loadBook();
  }

  submitForm(): void {
    if(this.isUpdatable){
      this.bookService.update(this.book).subscribe(_ => this.router.navigateByUrl("library/book"));
    } else {
      this.bookService.add(this.book)
      .subscribe(b => 
        {
          this.bookService.selectEntity(b);
          this.loadBook();
        }
      );
    }
  }

  loadBook() : void {
    let selectedBook = this.bookService.getSelectedEntity();
    console.log('selectedbook', selectedBook);
    if(!!selectedBook && !!selectedBook._links.self){
      this.book = selectedBook;
      this.isUpdatable = true;
    }
  }

  rollback() : void {
    this.router.navigateByUrl("/library/book")
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Author } from 'src/app/library/domain/Author';
import { Book } from 'src/app/library/domain/Book';
import { AuthorService } from 'src/app/library/service/author.service';
import { BookService } from 'src/app/library/service/book.service';

@Component({
  selector: 'app-book-author-list-displayer',
  templateUrl: './book-author-list-displayer.component.html',
  styleUrls: ['./book-author-list-displayer.component.css']
})
export class BookAuthorListDisplayerComponent implements OnInit {

  @Input() book!: Book;
  authorList: Author[] = [];

  constructor(private authorService: AuthorService) { }

  ngOnInit(): void {
    this.authorService.findByUrl(this.book._links.authorList.href).subscribe(aList => this.authorList = aList._embedded.author);
  }

}

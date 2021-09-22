import { Component, OnInit } from '@angular/core';
import { Book } from '../domain/Book';
import { BookService } from '../service/book.service';
import { Router } from '@angular/router';
import { Author } from '../domain/Author';
import { AuthorService } from '../service/author.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  public book: Book = new Book(-1,"","",[]);
  public author: Author  = new Author("", "");
  public options: Author[] = [];
  public inputValue?: string;

  constructor(private bookService: BookService, private authorService: AuthorService, private router: Router ){}

  ngOnInit(): void {
    
  }

  submitForm(): void {
    console.log(this.author);
    //this.bookService.add(this.book).subscribe(_ => this.router.navigateByUrl("library"))
  }

  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    if(value.length > 2 ){
      this.authorService.findByName(value).subscribe(embeddedAuthors => this.options = embeddedAuthors._embedded.author)
    }
  }
  displayAuthor(author: Author): string {
    return author.firstName + " - " + author.lastName.toUpperCase();
  }
  testSelect(): void{
    console.log('Test');
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Author } from 'src/app/library/domain/Author';
import { Book } from 'src/app/library/domain/Book';
import { AuthorService } from 'src/app/library/service/author.service';

@Component({
  selector: 'app-book-author-list',
  templateUrl: './book-author-list.component.html',
  styleUrls: ['./book-author-list.component.css']
})
export class BookAuthorListComponent implements OnInit {

  @Input('book') book!: Book;
  authorList!: Author[];
  options: Author[] = [];
  selectedAuthor!: string;

  constructor(private authorService: AuthorService) { }

  ngOnInit(): void {
    if(!!this.book && !!this.book._links && !!this.book._links.authorList){
      this.authorService.findByUrl(this.book._links.authorList.href).subscribe(alist => this.authorList = alist._embedded.author);
    } else {
      this.authorList = [];
    }
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
  compareWith = (a1 : Author | string, a2: Author)=>{
    if(a1){
      return typeof a1 === 'string' ? a1 === a2.firstName : a1 === a2;
    } else {
      return false;
    }
  }
  onClick(event: Event, author: Author) : void {
    console.log("click!", event, author);
    this.authorList.push(author);
    this.synchronizeAuthorList();
  }
  onDelete(author: Author) : void {
    this.authorList = this.authorList.filter(a => a._links !== author._links);
    this.synchronizeAuthorList();
  }
  synchronizeAuthorList():void {
    this.authorService.updateByUrl(this.book._links.authorList.href, this.authorList.map(a => a._links.self.href)).subscribe(o=> console.log("update ", o));
    this.selectedAuthor = '';
  }
}

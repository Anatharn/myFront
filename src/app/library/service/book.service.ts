import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../domain/Book';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root'
})
export class BookService extends AbstractService<Book>{

  private selectedBook!: Book;

  constructor(private http: HttpClient) { 
    super(http, "book");
  }
  newSelectedEntity(): Book {
      return new Book("","",[]);
  }
}

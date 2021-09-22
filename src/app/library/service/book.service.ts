import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../domain/Book';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root'
})
export class BookService extends AbstractService{

  constructor(private http: HttpClient) { 
    super();
  }

  findAll(): Observable<Book[]> {
    return this.http.get("http://localhost:8081/library/book")
      .pipe (
        //map((response: Response) => response.json()),
        map((data: any) => {return data._embedded.book as Book[];}),
        tap(_ => this.log("find all")),
        catchError(this.handleError<Book[]>("findAll", []))
    );
  }

  add(book: Book): Observable<Book>{
    console.log('call add with ', book);
    return this.http.post<Book>("http://localhost:8081/library/book", book)
    .pipe(
      catchError(this.handleError<Book>("add", book))
    );
  }

}

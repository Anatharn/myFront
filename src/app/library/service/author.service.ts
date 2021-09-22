import { Injectable } from '@angular/core';
import { Author } from '../domain/Author';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EmbeddedResponse } from 'src/app/tools/EmbeddedResponse';
import { EmbeddedAuthor } from '../dto/EmbeddedAUthor';
import { Page } from 'src/app/tools/Page';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorService extends AbstractService{

  constructor(private http: HttpClient) {
    super();
   }

  findAll(page: Page): Observable<EmbeddedResponse<EmbeddedAuthor>> {
    return this.http.get<EmbeddedResponse<EmbeddedAuthor>> (super.buildUrl("library/author", page));
   
  }

  findByName(name: string): Observable<EmbeddedResponse<EmbeddedAuthor>> {
    return this.http.get<EmbeddedResponse<EmbeddedAuthor>>("http://localhost:8081/library/author/search/findByFirstNameContainingOrLastNameContaining?firstName="+name+"&lastName="+name)
  }

  add(author: Author): Observable<Author>{
    console.log('call add with ', author);
    return this.http.post<Author>("http://localhost:8081/library/author", author)
    .pipe(
      catchError(this.handleError<Author>("add", author))
    );
  }

  
}

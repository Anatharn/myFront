import { Injectable } from '@angular/core';
import { Author } from '../domain/Author';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AbstractService } from './abstract.service';
import { HALResponse } from 'src/app/common/domain/HALResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthorService extends AbstractService<Author>{

  constructor(private http: HttpClient) {
    super(http, "library/author");
  }

  newSelectedEntity(): Author {
      return new Author("","");
  }

  findByName(name: string): Observable<HALResponse<Author>> {
    return this.http.get<HALResponse<Author>>(
      super.buildUrl("library/author/search/findByFirstNameContainingOrLastNameContaining?firstName="+name+"&lastName="+name))
  }

  update(author: Author): Observable<Author>{
    console.log("url -> ", super.buildUrl("library/author"));
    return this.http.put<Author>(author._links.self.href, author)
    .pipe(
      catchError(this.handleError<Author>("update", author))
    );
  }
}

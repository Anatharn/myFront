import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bookcase } from '../domain/Bookcase';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root'
})
export class BookcaseService extends AbstractService<Bookcase>{

  constructor(http: HttpClient) {
    super(http, "library/bookcase");
  }
  newSelectedEntity(): Bookcase {
      return new Bookcase();
  }
}

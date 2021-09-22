import { Component, OnInit } from '@angular/core';

import { AuthorService } from '../service/author.service';
import { Author } from '../domain/Author';
import { Page } from 'src/app/tools/Page';
import { NzTableQueryParams } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  authors: Author[] = [];
  page: Page;

  constructor(private authorService: AuthorService) { 
    this.page = new Page(5,0,5,1);
  }

  ngOnInit() {
    this.getAuthors();
  }

  getAuthors(): void{
    this.authorService.findAll(this.page)
    .subscribe(embeddedAuthor => {
      this.authors = embeddedAuthor._embedded.author;
      this.page.totalElements = embeddedAuthor.page.totalElements;
      this.page.totalPages = embeddedAuthor.page.totalPages;
    });
  }

  onQueryParamsChange(params: NzTableQueryParams): void {
    this.page.number=params.pageIndex;
    this.getAuthors();
  }
 
}

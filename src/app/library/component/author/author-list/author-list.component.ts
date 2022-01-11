import { Component, OnInit } from '@angular/core';

import { AuthorService } from '../../../service/author.service';
import { Author } from '../../../domain/Author';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { HALPage } from 'src/app/common/domain/HALPage';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  authors: Author[] = [];
  page: HALPage;

  constructor(private authorService: AuthorService, private  router: Router, private modalService: NzModalService) { 
    this.page = new HALPage(1,5);
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
 
  onUpdate(author: Author){
    this.authorService.selectEntity(author);
    this.router.navigateByUrl("/library/author/update");
  }

  onDelete(author: Author){
    this.modalService.confirm({
      nzTitle: 'Êtes vous sûr de vouloir supprimer cet auteur?',
      nzContent: 'La suppression est définitive. Et cet auteur est vachement bien en plus!!',
      nzOkText: 'Oui',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.delete(author),
      nzCancelText: 'Non',
      nzOnCancel: () => console.log('Cancel')
    });
    
  }

  delete(author: Author){
    this.authorService.delete(author).subscribe((author)=> {
      if(this.authors.length === 1){
        this.page.number = this.page.number -1;
      }
      this.getAuthors()
    });
  }
}

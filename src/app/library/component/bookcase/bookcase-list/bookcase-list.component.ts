import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { HALPage } from 'src/app/common/domain/HALPage';
import { Bookcase } from 'src/app/library/domain/Bookcase';
import { BookcaseService } from 'src/app/library/service/bookcase.service';

@Component({
  selector: 'app-bookcase-list',
  templateUrl: './bookcase-list.component.html',
  styleUrls: ['./bookcase-list.component.css']
})
export class BookcaseListComponent implements OnInit {

  page: HALPage;
  bookcases: Bookcase[];

  constructor(private bookcaseService: BookcaseService, private router: Router) {
    this.page = new HALPage(1,5);
    this.bookcases = [];
  }

  ngOnInit(): void {
    this.loadBookcaseList();
  }

  onCreate(): void {
    this.goOnEditComponent();
  }

  onQueryParamsChange(params: NzTableQueryParams) : void {
    console.log('on query params change')
  }
  
  onUpdate(bookCase: Bookcase): void {
    this.bookcaseService.selectEntity(bookCase);
    this.goOnEditComponent();
  }
  goOnEditComponent(): void {
    this.router.navigateByUrl("/library/bookcase/edit");
  }
  onDelete(bookCase: Bookcase): void {

  }
  loadBookcaseList(): void {
    this.bookcaseService.findAll(this.page).subscribe(response => {
      this.bookcases = response._embedded.bookcase;
      this.page.totalElements = response.page.totalElements;
      this.page.totalPages = response.page.totalPages;
    })
  }
}

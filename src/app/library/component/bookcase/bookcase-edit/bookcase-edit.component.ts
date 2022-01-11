import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bookcase } from 'src/app/library/domain/Bookcase';
import { BookcaseService } from 'src/app/library/service/bookcase.service';

@Component({
  selector: 'app-bookcase-edit',
  templateUrl: './bookcase-edit.component.html',
  styleUrls: ['./bookcase-edit.component.css']
})
export class BookcaseEditComponent implements OnInit {

  bookcase!: Bookcase;
  isUpdatable: boolean = false;

  constructor(private bookcaseService: BookcaseService, private router: Router) { }

  ngOnInit(): void {
    this.load();
  }

  submitForm(): void {
    if(this.isUpdatable){
      this.bookcaseService.update(this.bookcase).subscribe(_ => this.router.navigateByUrl("library/bookcase"));
    } else {
      this.bookcaseService.add(this.bookcase)
      .subscribe(b => 
        {
          this.bookcaseService.selectEntity(b);
          this.load();
        }
      );
    }
  }
  load() : void {
    this.bookcase = this.bookcaseService.getSelectedEntity();
    this.isUpdatable = !!this.bookcase._links.self;
  }

  rollback() : void {
    this.router.navigateByUrl("/library/bookcase")
  }
}

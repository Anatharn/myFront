import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Author } from '../domain/Author';
import { AuthorService } from '../service/author.service';

@Component({
  selector: 'app-author-add',
  templateUrl: './author-add.component.html',
  styleUrls: ['./author-add.component.css']
})
export class AuthorAddComponent implements OnInit {

  author = new Author("", "");

  constructor(private authorService: AuthorService, private router: Router) { }

  ngOnInit(): void {
  }

  submitForm(): void {
    this.authorService.add(this.author)
      .subscribe(_ => this.router.navigateByUrl("library/author"));
  }
}

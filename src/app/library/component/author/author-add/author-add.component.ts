import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Author } from '../../../domain/Author';
import { AuthorService } from '../../../service/author.service';

@Component({
  selector: 'app-author-add',
  templateUrl: './author-add.component.html',
  styleUrls: ['./author-add.component.css']
})
export class AuthorAddComponent implements OnInit {

  //TODO Isoler le constructeur par défaut
  author = new Author("", "");

  constructor(private authorService: AuthorService, private router: Router) { }

  ngOnInit(): void {
  }

  submitForm(): void {
    //TODO isoler l'URL
    this.authorService.add(this.author)
      .subscribe(_ => this.router.navigateByUrl("/library/author"));
  }

  rollback() : void {
    this.router.navigateByUrl("/library/author")
  }
}

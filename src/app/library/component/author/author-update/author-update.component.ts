import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Author } from '../../../domain/Author';
import { AuthorService } from '../../../service/author.service';

@Component({
  selector: 'app-author-update',
  templateUrl: './author-update.component.html',
  styleUrls: ['./author-update.component.css']
})
export class AuthorUpdateComponent implements OnInit {

  //TODO Isoler le constructeur par défaut
  author = new Author("", "");

  constructor(private authorService: AuthorService, private router: Router) { }

  ngOnInit(): void {
    this.author = this.authorService.getSelectedEntity();
  }

  submitForm(): void {
    console.log(this.author);
    this.authorService.update(this.author)
      .subscribe(_ => this.router.navigateByUrl("/library/author"));
  }

  rollback() : void{
    this.router.navigateByUrl("/library/author");
  }
}

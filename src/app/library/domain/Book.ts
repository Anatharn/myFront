import { Author } from './Author';

export class Book{

    constructor(private id: Number, public title: String, public isbn: String, public authors: Author[] ){}
}
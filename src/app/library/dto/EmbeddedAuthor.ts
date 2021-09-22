import { Author } from "../domain/Author";

export class EmbeddedAuthor{

    constructor(public author: Author[]){};
}
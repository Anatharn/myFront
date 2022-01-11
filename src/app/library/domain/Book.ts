import { HALObject } from 'src/app/common/domain/HALObject';
import { Author } from './Author';

export class Book extends HALObject{

    constructor(public title: string, public isbn: string, public authorList: string[] ){
        super();
    }
}
import { Page } from "./Page";

export class EmbeddedResponse<T> {
    constructor(public page: Page, public _embedded: T){};
}
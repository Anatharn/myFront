import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Page } from 'src/app/tools/Page';

@Injectable({
  providedIn: 'root'
})
export class AbstractService {

  protected baseUrl: string = "http://localhost:8081/"

  constructor() { }

  protected buildUrl(action: string, page: Page): string{
    return this.baseUrl + action + "?page="+(page.number-1)+"&size="+page.size ;
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
   protected handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  protected log(message: string) {
    console.log(message);
  }
}

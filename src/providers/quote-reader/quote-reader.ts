import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/*
  Generated class for the QuoteReaderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QuoteReaderProvider {

  constructor(public http: HttpClient) {
    console.log('Hello QuoteReaderProvider Provider');
  }


  getQuote(): Observable<any> {
    return this.http.get("https://api.quotable.io/random");
    }
  
}


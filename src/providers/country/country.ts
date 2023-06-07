import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
/*
  Generated class for the CountryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CountryProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CountryProvider Provider');
  }

  getCountryById(): Observable<any> {
    return this.http.get("https://app.sportdataapi.com/api/v1/soccer/countries?apikey=6b18e660-879b-11ed-9864-45e42a3210f6")
  }

}

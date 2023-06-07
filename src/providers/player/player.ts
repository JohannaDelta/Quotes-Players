import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { from } from 'rxjs/observable/from';


@Injectable()
export class PlayerProvider {

countryid:number;
min_age:number;
max_age:number;


  constructor(public http: HttpClient , private storage: Storage) {
    console.log('Hello PlayerProvider Provider');
  }

  
  getPlayer(): Observable<any> {
    return from(Promise.all([
      this.storage.get("countryid"),
      this.storage.get("min_age"),
      this.storage.get("max_age"),
    ]).then(([countryid, min_age, max_age]) => {
      this.countryid = countryid;
      this.min_age = min_age || 1;
      this.max_age = max_age || 100;
  
      return this.http.get(`https://app.sportdataapi.com/api/v1/soccer/players?apikey=6b18e660-879b-11ed-9864-45e42a3210f6&country_id=${this.countryid}&max_age=${this.max_age}&min_age=${this.min_age}`).toPromise();
    }).catch((err) => {
      alert("Error accessing storage");
    }));
  }
}
 
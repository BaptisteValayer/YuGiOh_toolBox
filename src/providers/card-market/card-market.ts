import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CardMarketProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CardMarketProvider {

   apiUrl = 'https://api.cardmarket.com/ws/v2.0/';
   
  constructor(public http: HttpClient) {
    console.log('Hello CardMarketProvider Provider');
  }
  
  getCard(data) {
     return new Promise(resolve => {
      this.http.post(this.apiUrl+'/products/find', JSON.stringify(data))
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
     });
   }
}

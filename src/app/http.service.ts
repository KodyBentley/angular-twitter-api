import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { ApiData } from './api.data';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

  /**
   * Declare private vaiable to be used for incoming data
   */
  private data: ApiData[];

  constructor(private http: Http) { }

  /**
   * Function to get data from api call
   * Initially post data from form using the hash as a request payload to backend
   * Then get data from backend from api call with hash used
   * @param hash String passed from form
   * @param cb Call back function to be triggered after initial post and get requests
   */
  getData(hash: any, cb: Function): void {
    const requestOptions = {
      data: hash,
    };
    this.http.post('http://localhost:3000/tweets', requestOptions).subscribe(data => {
      this.http.get('http://localhost:3000/tweets').subscribe(data => {
        cb(JSON.parse(data['_body']));
      });
    })
  }

  /**
   * Function to get new data from api call from backend
   */
  updateTweets() {
    return this.http.get('http://localhost:3000/tweets').map((res: Response, err) => res.json())
  }

  /**
   * Function to update data with new data from backend
   * @param data Updated data from backend
   */
  setData(data) {
    this.data = data;
  }

  /**
   * Function to return new data from backend
   */
  getNewData() {
    return this.data;
  }

}

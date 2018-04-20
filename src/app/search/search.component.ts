import { Component, Output } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpService } from './../http.service';
import { ApiData } from './../api.data';
import { Router } from '@angular/router';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {
  /**
   * Variable declaration for data to be stored
   */
  data: ApiData[];

  /**
   * Variable declaration for error to be stored
   */
  error: ApiData[];

  /**
   * Variable declaration for an invalid form to be stored
   */
  formError: string;

  constructor(private http: HttpService, private router: Router) { }

  ngOnInit() {
  }

  /**
   * Function called when the form is submitted.
   * @param hash user string passed from input for hash to search
   * @param event user string passed from input for event name
   */
  getTweets(hash: string, event: string) {
    if (hash === '' || event === '') {
      //Assign form error string
      this.formError = "Please make sure all input fields have been filled out.";
      return;
    } else {
      /**
       * Call get data function from our http service
       */
      this.http.getData(hash, (data) => {
        console.log('inside search', data);
          this.data = data;
          let arr = [];
          arr.push(data, event, hash);
          this.http.setData(arr);
          this.router.navigateByUrl('/gallery');
      })
    }
  }

}

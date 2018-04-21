import { Component, Input } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpService } from './../http.service';
import { ApiData } from './../api.data';
import { SearchComponent } from './../search/search.component';
import { Router } from '@angular/router';
import { TweetsComponent } from './../tweets/tweets.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})

export class GalleryComponent {
  /**
   * Variable declaration for data/hash/event name to be stored
   */
  data: Array<any>;
  hash: string;
  event: string;
  tweets: Array<any> = [];
  users: number;
  loopInit: boolean = false;
  timer: any;
  constructor(private service: HttpService, private router: Router, private search: SearchComponent) {
    /**
     * Set up our gallery variables with appropriate values
     */
    this.data = this.service.getNewData();
    this.hash = this.data[2];
    this.event = this.data[1]
  }

  /**
   * Angular init function for component
   */
  ngOnInit() {
    /**
     * Interval function to get new data every 20 seconds
     */
    this.timer = setInterval(() => {
      this.service.updateTweets().subscribe(data => {
        for (let i of data) {
          if (!this.exists(i, this.tweets, 'idStr', 'id_str')) {
            if (this.loopInit === false) {
              this.tweets.push({ imgSrc: i.entities.media[0].media_url, profileImg: i.user.profile_image_url, screenName: i.user.screen_name, createdAt: i.created_at, idStr: i.id_str });
            } else {
              this.tweets.unshift({ imgSrc: i.entities.media[0].media_url, profileImg: i.user.profile_image_url, screenName: i.user.screen_name, createdAt: i.created_at, idStr: i.id_str });
            }
          }
        }
        this.loopInit = true;
        this.countUsers();
      });
    }, 1000)
  }

  /**
   * Angular on destroy function for component
   */
  ngOnDestroy() {
    /**
     * Clear setinterval on component when back button is pressed to enter new hash
     */
    clearInterval(this.timer);
  }

  /**
   * Function to count unique users from tweets data
   */
  countUsers() {
    let arr: Array<any> = []
    for (let i of this.tweets) {
      if (!this.exists(i, arr, 'profileImg', 'profileImg')) {
        arr.push(i);
      }
    }
    this.users = arr.length;
  }

  /**
   * Function to compare two sets of data by certain props to find duplicates
   * @param obj Set of data to compare against
   * @param arr Second set of data to compare
   * @param prop1 Prop as a string to pass to a set of data to be compared against
   * @param prop2 Prop as a string to pass to a set of data to be compared against
   */
  exists(obj: any, arr: Array<any>, prop1: string, prop2: string) {
    for (let i of arr) {
      if (i[prop1] === obj[prop2]) {
        return true;
      }
    }
    return false;
  }
  /**
   * Function to be able to console log from calling within HTML template
   * @param str String to be passsed to console
   * @param val String or value of type string to be passed to console
   */
  log(str: string, val: string) {
    console.log(str, val);
  }

  /**
   * Function to get a value from an iteration of data in template and return that value in a string
   * to be used for CSS values
   * @param val number to be passed to be converted to a string
   */
  getStyle(val: number) {
    return val.toString();
  }

  /**
   * Function to redirect to home URL if there is no data loaded, or back button is clicked
   */
  redirect() {
    this.router.navigateByUrl('');
  }
}

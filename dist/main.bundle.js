webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search_component__ = __webpack_require__("./src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gallery_gallery_component__ = __webpack_require__("./src/app/gallery/gallery.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__search_search_component__["a" /* SearchComponent */] },
    { path: 'gallery', component: __WEBPACK_IMPORTED_MODULE_3__gallery_gallery_component__["a" /* GalleryComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n    position: relative;\r\n}\r\n\r\n.jumbotron h1{\r\n    position: relative;\r\n    z-index: 999;\r\n    pointer-events: none;\r\n}\r\n\r\n.jumbotron img{\r\n    position: relative;\r\n    z-index: 999;\r\n    pointer-events: none; \r\n    width: 10%;   \r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"jumbotron\" style=\"text-align:center\">\n      <h1>\n          {{ title }}!\n        </h1>\n        <div><particles [style]=\"myStyle\" [width]=\"width\" [height]=\"height\" [params]=\"myParams\"></particles></div>\n        <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n  </div>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        /**
         * Variable declarations to be used with particle JS as well as for title of app
         */
        this.myStyle = {};
        this.myParams = {};
        this.width = 100;
        this.height = 100;
        this.title = 'Twitter API Test Task';
    }
    AppComponent.prototype.ngOnInit = function () {
        /**
         * Set styling for particle JS
         */
        this.myStyle = {
            'position': 'absolute',
            'width': '100%',
            'height': '100%',
            'z-index': 1,
            'top': 0,
            'left': 0,
            'right': 0,
            'bottom': 0,
        };
        /**
         * Set parameters for particle js
         */
        this.myParams = {
            "particles": {
                "number": {
                    "value": 200,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#000000"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 3,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 1,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 10,
                        "opacity_min": 1,
                        "sync": true
                    }
                },
                "size": {
                    "value": 1,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 135,
                    "color": "#000000",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 1.3,
                    "direction": "top",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 1200,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "bubble"
                    },
                    "onclick": {
                        "enable": false,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 200,
                        "size": 10,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        };
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__("./src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_fontawesome_angular2_fontawesome__ = __webpack_require__("./node_modules/angular2-fontawesome/angular2-fontawesome.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_fontawesome_angular2_fontawesome___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_fontawesome_angular2_fontawesome__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_particle__ = __webpack_require__("./node_modules/angular-particle/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__gallery_gallery_component__ = __webpack_require__("./src/app/gallery/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__search_search_component__ = __webpack_require__("./src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__tweets_tweets_component__ = __webpack_require__("./src/app/tweets/tweets.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__gallery_gallery_component__["a" /* GalleryComponent */],
                __WEBPACK_IMPORTED_MODULE_9__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_11__tweets_tweets_component__["a" /* TweetsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5_angular2_fontawesome_angular2_fontawesome__["Angular2FontawesomeModule"],
                __WEBPACK_IMPORTED_MODULE_6_angular_particle__["a" /* ParticlesModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_9__search_search_component__["a" /* SearchComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.component.css":
/***/ (function(module, exports) {

module.exports = "::ng-deep body {\r\n  background-image: none !important;\r\n}\r\n\r\n.row {\r\n  margin-right: 2rem;\r\n  margin-left: 2rem;\r\n}\r\n\r\n.tweet {\r\n  text-align: center;\r\n  padding: 2%;\r\n  padding-bottom: 2rem;\r\n}\r\n\r\n.picture {\r\n  width: 115px;\r\n  height: 115px;\r\n}\r\n\r\n.tweet-inner {\r\n  /* background-color: #ffffff; */\r\n  min-height: 15rem;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  position: relative;\r\n  -webkit-transition: all .2s ease-in-out;\r\n  transition: all .2s ease-in-out;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.tweet-inner:hover {\r\n  -webkit-transform: scale(1.1);\r\n          transform: scale(1.1);\r\n}\r\n\r\n.right {\r\n  float: right;\r\n  text-align: center;\r\n}\r\n\r\n.left {\r\n  float: left;\r\n  text-align: left;\r\n  padding-bottom: 1rem;\r\n}\r\n\r\n.left h1,\r\nh2,\r\nh3 {\r\n  margin: 0;\r\n}\r\n\r\n.post-button {\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  color: #ffffff;\r\n  border-radius: 15px;\r\n  border-color: #ffffff;\r\n}\r\n\r\n.overlay {\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  visibility: hidden;\r\n}\r\n\r\n.tweet-inner:hover .overlay {\r\n  visibility: visible;\r\n}\r\n\r\n.search-btn {\r\n  background-color: #000000;\r\n  font-weight: bolder;\r\n}\r\n\r\n.search-input {\r\n  min-height: 3.4rem;\r\n  padding-left: 1%;\r\n  font-weight: bolder;\r\n}\r\n\r\n.fa-twitter {\r\n  position: absolute;\r\n  color: #ffffff;\r\n  top: 10%;\r\n  right: 6%;\r\n}\r\n\r\n.top-left {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 3%;\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.top-left img {\r\n  border-radius: 50%;\r\n}\r\n\r\n.top-left p {\r\n  color: #ffffff;\r\n  font-size: 8px;\r\n  margin: 0;\r\n}\r\n\r\n.overlay button {\r\n  -webkit-transition: all .2s ease-in-out;\r\n  transition: all .2s ease-in-out;\r\n}\r\n\r\n.overlay button:hover {\r\n  -webkit-transform: scale(1.1);\r\n          transform: scale(1.1);\r\n}\r\n\r\n.hash-container {\r\n  font-weight: bolder;\r\n}\r\n\r\n.user-post-container {\r\n  padding-top: 1%;\r\n  font-weight: bolder;\r\n  color: grey;\r\n}\r\n\r\n@media(max-width: 700px) {\r\n  .right {\r\n    margin: 1rem;\r\n  }\r\n  .search-input {\r\n    border-color: #000000;\r\n  }\r\n  .post-button {\r\n    pointer-events: bounding-box;\r\n  }\r\n}\r\n\r\n@media(min-width: 700px) and (max-width: 800px) {\r\n  .user-post-container span {\r\n    padding-left: 1rem;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/gallery/gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngIf=\"!data\">\n  {{redirect()}}\n</div> -->\n\n<div class=\"row\">\n  <div class=\"col-xs-12 col-lg-6 left\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-lg-12\">\n        <h1>{{event}}</h1>\n      </div>\n      <div class=\"col-xs-4 col-sm-1 col-lg-2 hash-container\">\n        <h3>#{{hash}}</h3>\n      </div>\n      <div class=\"col-xs-8 col-sm-4 col-lg-4 offset-sm-1 user-post-container\">\n        <span>{{data[0].length}} Posts // {{users}} Users</span>\n      </div>\n      <div class=\"col-xs-12 col-lg-12 user-post-container\">\n        <button class=\"btn btn-primary back-btn\" (click)=\"redirect()\">Back</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xs-12 col-lg-4 right\">\n    <input class=\"search-input\" type=\"text\" placeholder=\"Search...\">\n    <button class=\"btn btn-primary search-btn\">Search</button>\n  </div>\n</div>\n\n<div class=\"tweets row no-pad\">\n  <div *ngFor=\"let tweet of tweets\">\n    <app-tweets [imgSrc]=\"tweet.imgSrc\" [profileImg]=\"tweet.profileImg\" [screenName]=\"tweet.screenName\" [createdAt]=\"tweet.createdAt\"\n      [idStr]=\"tweet.idStr\">\n    </app-tweets>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__("./src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search_component__ = __webpack_require__("./src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(service, router, search) {
        this.service = service;
        this.router = router;
        this.search = search;
        this.tweets = [];
        /**
         * Set up our gallery variables with appropriate values
         */
        this.data = this.service.getNewData();
        this.hash = this.data[2];
        this.event = this.data[1];
    }
    /**
     * Angular init function for component
     */
    GalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        /**
         * Interval function to get new data every 20 seconds
         */
        setInterval(function () {
            _this.service.updateTweets().subscribe(function (data) {
                console.log('inside interval', data);
                // this.data = data;
                // let arr = [];
                // arr.push(data, this.hash, this.event);
                // this.service.setData(arr);
                // this.data = this.service.getNewData();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var i = data_1[_i];
                    if (!_this.exists(i, _this.tweets, 'idStr', 'id_str')) {
                        _this.tweets.splice(0, 0, { imgSrc: i.entities.media[0].media_url, profileImg: i.user.profile_image_url, screenName: i.user.screen_name, createdAt: i.created_at, idStr: i.id_str });
                    }
                }
                _this.countUsers();
            });
        }, 1000);
    };
    /**
     * Function to count unique users from tweets data
     */
    GalleryComponent.prototype.countUsers = function () {
        var arr = [];
        for (var _i = 0, _a = this.tweets; _i < _a.length; _i++) {
            var i = _a[_i];
            if (!this.exists(i, arr, 'profileImg', 'profileImg')) {
                arr.push(i);
            }
        }
        this.users = arr.length;
    };
    /**
     * Function to compare two sets of data by certain props to find duplicates
     * @param obj Set of data to compare against
     * @param arr Second set of data to compare
     * @param prop1 Prop as a string to pass to a set of data to be compared against
     * @param prop2 Prop as a string to pass to a set of data to be compared against
     */
    GalleryComponent.prototype.exists = function (obj, arr, prop1, prop2) {
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var i = arr_1[_i];
            if (i[prop1] === obj[prop2]) {
                return true;
            }
        }
        return false;
    };
    /**
     * Function to be able to console log from calling within HTML template
     * @param str String to be passsed to console
     * @param val String or value of type string to be passed to console
     */
    GalleryComponent.prototype.log = function (str, val) {
        console.log(str, val);
    };
    /**
     * Function to get a value from an iteration of data in template and return that value in a string
     * to be used for CSS values
     * @param val number to be passed to be converted to a string
     */
    GalleryComponent.prototype.getStyle = function (val) {
        return val.toString();
    };
    /**
     * Function to redirect to home URL if there is no data loaded, or back button is clicked
     */
    GalleryComponent.prototype.redirect = function () {
        this.router.navigateByUrl('');
    };
    GalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__("./src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__("./src/app/gallery/gallery.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__search_search_component__["a" /* SearchComponent */]])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
    }
    /**
     * Function to get data from api call
     * Initially post data from form using the hash as a request payload to backend
     * Then get data from backend from api call with hash used
     * @param hash String passed from form
     * @param cb Call back function to be triggered after initial post and get requests
     */
    HttpService.prototype.getData = function (hash, cb) {
        var _this = this;
        var requestOptions = {
            data: hash,
        };
        this.http.post('http://localhost:3000/tweets', requestOptions).subscribe(function (data) {
            _this.http.get('http://localhost:3000/tweets').subscribe(function (data) {
                cb(JSON.parse(data['_body']));
            });
        });
    };
    /**
     * Function to get new data from api call from backend
     */
    HttpService.prototype.updateTweets = function () {
        return this.http.get('http://localhost:3000/tweets').map(function (res, err) { return res.json(); });
    };
    /**
     * Function to update data with new data from backend
     * @param data Updated data from backend
     */
    HttpService.prototype.setData = function (data) {
        this.data = data;
    };
    /**
     * Function to return new data from backend
     */
    HttpService.prototype.getNewData = function () {
        return this.data;
    };
    HttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/***/ (function(module, exports) {

module.exports = ".search-container {\r\n  text-align: center;\r\n  float: none;\r\n  margin: auto;\r\n}\r\n\r\n.search-inner {\r\n  background-color: #ffffff;\r\n  min-height: 15rem;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  border-radius: 20px;\r\n}\r\n\r\n.search-items {\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.search-items input {\r\n  border-radius: 5px;\r\n  border-color: gray;\r\n  padding-left: 0.5rem;\r\n  font-weight: bolder;\r\n}\r\n\r\n.event-btn {\r\n  background-color: #666666;\r\n  border-color: #666666;\r\n  font-weight: bolder;\r\n  -webkit-transition: all .2s ease-in-out;\r\n  transition: all .2s ease-in-out;\r\n}\r\n\r\n.event-btn:hover {\r\n  background-color: #848484;\r\n  -webkit-transform: scale(1.1);\r\n          transform: scale(1.1);\r\n}\r\n\r\n.error-container {\r\n  text-align: center;\r\n  float: none;\r\n  margin: auto;\r\n}\r\n\r\n.error-container h3 {\r\n  color: red;\r\n  font-weight: bolder;\r\n}\r\n\r\n@media(max-width: 700px) {\r\n  .search-container {\r\n    padding: 0;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row search-row\">\n  <div class=\"col-xs-8 col-lg-3 col-md-12 col-sm-3 offset-sm-6 offset-md-6 offset-lg-6 search-container\">\n    <div class=\"search-inner\">\n      <form name=\"inputForm\" (ngSubmit)=\"getTweets(hash.value, event.value)\" novalidate>\n        <div class=\"row\">\n          <div class=\"col-lg-12 col-md-12 search-items\">\n            <input #event placeholder=\"Event Name\" value=\"Event\" required minlength=\"4\">\n          </div>\n          <div class=\"col-lg-12 col-md-12 search-items\">\n            <input #hash placeholder=\"Hashtag\" required minlength=\"4\">\n          </div>\n          <div class=\"col-lg-12 col-md-12 search-items\">\n            <button class=\"btn btn-primary event-btn\" type=\"submit\">Start Event</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<div class=\"row error-row\" *ngIf=\"formError\">\n    <div class=\"col-lg-6 offset-lg-3 error-container\">\n      <h3><i>{{formError}}</i></h3>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__("./src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchComponent = /** @class */ (function () {
    function SearchComponent(http, router) {
        this.http = http;
        this.router = router;
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    /**
     * Function called when the form is submitted.
     * @param hash user string passed from input for hash to search
     * @param event user string passed from input for event name
     */
    SearchComponent.prototype.getTweets = function (hash, event) {
        var _this = this;
        if (hash === '' || event === '') {
            //Assign form error string
            this.formError = "Please make sure all input fields have been filled out.";
            return;
        }
        else {
            /**
             * Call get data function from our http service
             */
            this.http.getData(hash, function (data) {
                console.log('inside search', data);
                _this.data = data;
                var arr = [];
                arr.push(data, event, hash);
                _this.http.setData(arr);
                _this.router.navigateByUrl('/gallery');
            });
        }
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search',
            template: __webpack_require__("./src/app/search/search.component.html"),
            styles: [__webpack_require__("./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/tweets/tweets.component.css":
/***/ (function(module, exports) {

module.exports = "::ng-deep body {\r\n    background-image: none !important;\r\n  }\r\n  \r\n  .row {\r\n    margin-right: 2rem;\r\n    margin-left: 2rem;\r\n  }\r\n  \r\n  .tweet {\r\n    text-align: center;\r\n    padding: 2%;\r\n    padding-bottom: 2rem;\r\n  }\r\n  \r\n  .picture {\r\n    width: 115px;\r\n    height: 115px;\r\n  }\r\n  \r\n  .tweet-inner {\r\n    /* background-color: #ffffff; */\r\n    min-height: 15rem;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    position: relative;\r\n    -webkit-transition: all .2s ease-in-out;\r\n    transition: all .2s ease-in-out;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n  }\r\n  \r\n  .tweet-inner:hover {\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n  }\r\n  \r\n  .right {\r\n    float: right;\r\n    text-align: center;\r\n  }\r\n  \r\n  .left {\r\n    float: left;\r\n    text-align: left;\r\n    padding-bottom: 1rem;\r\n  }\r\n  \r\n  .left h1,\r\n  h2,\r\n  h3 {\r\n    margin: 0;\r\n  }\r\n  \r\n  .post-button {\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    color: #ffffff;\r\n    border-radius: 15px;\r\n    border-color: #ffffff;\r\n  }\r\n  \r\n  .overlay {\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    visibility: hidden;\r\n  }\r\n  \r\n  .tweet-inner:hover .overlay {\r\n    visibility: visible;\r\n  }\r\n  \r\n  .search-btn {\r\n    background-color: #000000;\r\n    font-weight: bolder;\r\n  }\r\n  \r\n  .search-input {\r\n    min-height: 3.4rem;\r\n    padding-left: 1%;\r\n    font-weight: bolder;\r\n  }\r\n  \r\n  .fa-twitter {\r\n    position: absolute;\r\n    color: #ffffff;\r\n    top: 10%;\r\n    right: 6%;\r\n  }\r\n  \r\n  .top-left {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 3%;\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n  }\r\n  \r\n  .top-left img {\r\n    border-radius: 50%;\r\n  }\r\n  \r\n  .top-left p {\r\n    color: #ffffff;\r\n    font-size: 8px;\r\n    margin: 0;\r\n  }\r\n  \r\n  .overlay button {\r\n    -webkit-transition: all .2s ease-in-out;\r\n    transition: all .2s ease-in-out;\r\n  }\r\n  \r\n  .overlay button:hover {\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n  }\r\n  \r\n  .hash-container {\r\n    font-weight: bolder;\r\n  }\r\n  \r\n  .user-post-container {\r\n    padding-top: 1%;\r\n    font-weight: bolder;\r\n    color: grey;\r\n  }\r\n  \r\n  @media(max-width: 700px) {\r\n    .right {\r\n      margin: 1rem;\r\n    }\r\n    .search-input {\r\n      border-color: #000000;\r\n    }\r\n    .post-button {\r\n      pointer-events: bounding-box;\r\n    }\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/tweets/tweets.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"tweet col-xs-6 col-sm-3 col-lg-2\">\n    <div class=\"tweet-inner\" [ngStyle]=\"{'background-image': 'url(' + imgSrc + ')'}\">\n      <div>\n        <div class=\"overlay\">\n          <div class=\"top-left\">\n            <img class=\"overlay-img\" src={{profileImg}} />\n            <p>{{screenName}}\n              <br/> {{this.time}} minutes ago</p>\n          </div>\n          <i fa class=\"fa fa-twitter fa-lg\"></i>\n          <a href=\"http://twitter.com/{{screenName}}/status/{{idStr}}\" target=\"_blank\">\n            <button class=\"btn btn-primary post-button\">View Post</button>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/tweets/tweets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TweetsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TweetsComponent = /** @class */ (function () {
    function TweetsComponent() {
    }
    TweetsComponent.prototype.ngOnInit = function () {
        this.time = this.formatTime(this.createdAt);
    };
    /**
     * Function to get difference between time of tweet and the time now
     * @param time date string passed from a tweet iteration from data
     */
    TweetsComponent.prototype.formatTime = function (time) {
        var postDate = new Date(time);
        var postHours = postDate.getHours();
        var postMinutes = postDate.getMinutes();
        var postFormat = postHours + postMinutes;
        var timeNow = Date.now();
        var timeNowDate = new Date(timeNow);
        var timeNowHours = timeNowDate.getHours();
        var timeNowMinutes = timeNowDate.getMinutes();
        var timeNowFormat = timeNowHours + timeNowMinutes;
        var difference = timeNowFormat - postFormat;
        return difference;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TweetsComponent.prototype, "imgSrc", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TweetsComponent.prototype, "profileImg", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TweetsComponent.prototype, "screenName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TweetsComponent.prototype, "createdAt", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TweetsComponent.prototype, "idStr", void 0);
    TweetsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tweets',
            template: __webpack_require__("./src/app/tweets/tweets.component.html"),
            styles: [__webpack_require__("./src/app/tweets/tweets.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TweetsComponent);
    return TweetsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
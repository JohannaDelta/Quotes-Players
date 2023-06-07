webpackJsonp([1],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_player_player__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams, formbuilder, storage, alertCtrl, pp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formbuilder = formbuilder;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.pp = pp;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage.prototype.save = function () {
        // let countryid = null;
        if (this.countryid == null || this.countryid == 0) {
            alert("Please enter a Country ID");
        }
        else {
            this.storage.set("countryid", this.countryid);
            this.storage.set("min_age", this.min_age);
            this.storage.set("max_age", this.max_age);
            this.navCtrl.pop();
            console.log("pressing save button");
        }
    };
    SettingsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get("countryid")
            .then(function (data) {
            _this.countryid = data;
            console.log("the countryid is", data);
        });
        this.storage.get("min_age")
            .then(function (data) {
            _this.min_age = data;
            console.log("the min age is", data);
        });
        this.storage.get("max_age")
            .then(function (data) {
            _this.max_age = data;
            console.log("the max age is", data);
        })
            .catch(function (err) {
            alert("Error accessing storage");
        });
    };
    SettingsPage.prototype.eraseData = function () {
        // this.formgroup.reset();
        this.countryid = null;
        this.min_age = null;
        this.max_age = null;
        console.log("pressing cancel button & deleting input data");
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Users\mobApps\Desktop\G00387928\src\pages\settings\settings.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <form class="form">\n\n    <ion-list> \n\n      <ion-item>\n        <ion-label color="dark" position="fixed"> Enter Country ID </ion-label>\n        <ion-input id="box" placeholder="*required field" type="number" [(ngModel)]="countryid" name="countryid"></ion-input>\n      </ion-item>  \n\n        <h4> Player Ages: </h4>\n\n      <ion-item>\n        <ion-label color="dark" position="fixed">Minimum</ion-label>\n        <ion-input id="box" placeholder="*optional field"type="number" [(ngModel)]="min_age"  name="min_age"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="dark" position="fixed">Maximum</ion-label>\n        <ion-input id="box" placeholder="*optional field" type="number" [(ngModel)]="max_age" name="max_age"></ion-input>\n      </ion-item>\n\n    </ion-list>\n\n        <br/>\n\n      <button (click)="save()" ion-button> SAVE </button>\n      <button (click)="eraseData()" ion-button> CANCEL </button>\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\mobApps\Desktop\G00387928\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_player_player__["a" /* PlayerProvider */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 118:
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
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/settings/settings.module": [
		287,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_settings_settings__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_quote_reader_quote_reader__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_player_player__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_country_country__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, qp, storage, pp, cp) {
        this.navCtrl = navCtrl;
        this.qp = qp;
        this.storage = storage;
        this.pp = pp;
        this.cp = cp;
        //welcome variables
        this.text2 = "Welcome";
        //boolean variables
        this.hiddenFlag = true;
        this.hiddenText = false;
        this.hiddenText1 = true;
        this.hiddenText2 = true;
        this.hiddenTable = true;
        this.hiddenContent = false;
        this.country_code = "ER";
        this.text = "doesn't exist";
    }
    HomePage.prototype.openSettingsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_settings_settings__["a" /* SettingsPage */]);
        console.log("opening SettingsPage...");
    };
    HomePage.prototype.userInfo = function () {
        this.hiddenText2 = false;
        this.hiddenContent = true;
        return this.text2;
    };
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get("countryid")
            .then(function (data) {
            _this.countryid = data;
        })
            .catch(function (err) {
            alert("Error accessing storage");
        });
        this.storage.get("min_age")
            .then(function (data) {
            _this.min_age = data;
        })
            .catch(function (err) {
            alert("Error accessing storage");
        });
        this.storage.get("max_age")
            .then(function (data) {
            _this.max_age = data;
        })
            .catch(function (err) {
            alert("Error accessing storage");
        });
    };
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.qp.getQuote().subscribe(function (data) {
            _this.quotes = data._id;
            _this.author = data.author;
            _this.content = data.content;
            _this.tags = data.tags;
        });
        this.pp.getPlayer().subscribe(function (data) {
            _this.data = data.data;
            _this.country_id = data.countryid;
            _this.min_age = data.min_age;
            _this.max_age = data.max_age;
            console.log(data);
        });
        this.cp.getCountryById().subscribe(function (data) {
            _this.data = data.data;
            _this.country_id = data.countryid;
            _this.country_code = data.country_code;
            for (var i = 0; i < data.data.length; i++) {
                if (data.data[i].country_id == _this.countryid) {
                    if (data.data[i].country_id == _this.countryid) {
                        if (_this.countryid != null && data.data[i].country_code != null) {
                            _this.country_code = data.data[i].country_code.toUpperCase();
                            _this.name = "is " + data.data[i].name;
                            _this.hiddenFlag = false;
                            _this.hiddenTable = false;
                            _this.hiddenText = true;
                            _this.hiddenText1 = false;
                            break;
                        }
                        else {
                            _this.hiddenFlag = true;
                            _this.hiddenTable = true;
                            _this.hiddenText = false;
                            _this.hiddenText1 = true;
                            _this.country_code = "ER";
                            break;
                        }
                    }
                }
                if (_this.country_id == null && _this.country_code == null) {
                    _this.hiddenFlag = true;
                    _this.hiddenTable = true;
                    _this.hiddenText = false;
                    _this.hiddenText1 = true;
                    _this.country_code = "ER";
                }
            }
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\mobApps\Desktop\G00387928\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      G00387928\n	        <br> \n      <button>\n        <ion-icon (click)="openSettingsPage()" name="settings" ></ion-icon>\n      </button>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="user"> \n    <h4 [hidden]="hiddenText2"> {{text2}} {{username}} ! </h4>\n      <div [hidden]="hiddenContent">\n        <ion-item>  \n          <ion-label id="userlabel" stacked color="dark" position="fixed"> Your name: </ion-label>\n          <ion-input id="userinput" ype="text" [(ngModel)]="username" name="username"></ion-input>\n        </ion-item> \n          <br>\n        <button (click)="userInfo()" color="secondary" ion-button round> Enter </button>\n      </div>\n  </div>\n\n    <hr>\n\n  <div class="quotes"> \n    <h2> Quote from {{author}} about:</h2>\n      <ul> \n        <li *ngFor= "let t of tags"> {{t}} </li>	\n      </ul>\n    <h3> {{content}} </h3>\n  </div>\n  \n    <hr>\n\n  <div class="players"> \n\n    <h2 [hidden]="hiddenText1"> CountryID {{countryid}} {{name}} </h2> \n    <h2 [hidden]="hiddenText"> CountryID {{countryid}} {{text}}</h2> \n    \n    <img [hidden]="hiddenFlag" src="https://flagsapi.com/{{country_code}}/shiny/64.png">\n\n      <br>\n\n    <table [hidden]="hiddenTable" class="playersTable"> \n      <tr>\n        <td> <b> First Name </b></td>\n        <td> <b> Surname </b> </td>\n        <td> <b> Age </b> </td>\n        <td> <b> Height </b></td>\n      </tr>\n      <tr *ngFor="let d of data" class="content-row">\n        <td> {{d.firstname}} </td>\n        <td> {{d.lastname}} </td>\n        <td> {{d.age}} </td>\n        <td> {{d.height}} </td>\n      </tr>\n    </table>\n  </div> \n\n</ion-content>'/*ion-inline-end:"C:\Users\mobApps\Desktop\G00387928\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_quote_reader_quote_reader__["a" /* QuoteReaderProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__providers_player_player__["a" /* PlayerProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_country_country__["a" /* CountryProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuoteReaderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the QuoteReaderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var QuoteReaderProvider = /** @class */ (function () {
    function QuoteReaderProvider(http) {
        this.http = http;
        console.log('Hello QuoteReaderProvider Provider');
    }
    QuoteReaderProvider.prototype.getQuote = function () {
        return this.http.get("https://api.quotable.io/random");
    };
    QuoteReaderProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], QuoteReaderProvider);
    return QuoteReaderProvider;
}());

//# sourceMappingURL=quote-reader.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the CountryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CountryProvider = /** @class */ (function () {
    function CountryProvider(http) {
        this.http = http;
        console.log('Hello CountryProvider Provider');
    }
    CountryProvider.prototype.getCountryById = function () {
        return this.http.get("https://app.sportdataapi.com/api/v1/soccer/countries?apikey=6b18e660-879b-11ed-9864-45e42a3210f6");
    };
    CountryProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], CountryProvider);
    return CountryProvider;
}());

//# sourceMappingURL=country.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_quote_reader_quote_reader__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_player_player__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_country_country__ = __webpack_require__(208);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__["a" /* SettingsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* ReactiveFormsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_settings_settings__["a" /* SettingsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_quote_reader_quote_reader__["a" /* QuoteReaderProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_player_player__["a" /* PlayerProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_country_country__["a" /* CountryProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\mobApps\Desktop\G00387928\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\mobApps\Desktop\G00387928\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_from__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_from__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlayerProvider = /** @class */ (function () {
    function PlayerProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        console.log('Hello PlayerProvider Provider');
    }
    PlayerProvider.prototype.getPlayer = function () {
        var _this = this;
        return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_from__["from"])(Promise.all([
            this.storage.get("countryid"),
            this.storage.get("min_age"),
            this.storage.get("max_age"),
        ]).then(function (_a) {
            var countryid = _a[0], min_age = _a[1], max_age = _a[2];
            _this.countryid = countryid;
            _this.min_age = min_age || 1;
            _this.max_age = max_age || 100;
            return _this.http.get("https://app.sportdataapi.com/api/v1/soccer/players?apikey=6b18e660-879b-11ed-9864-45e42a3210f6&country_id=" + _this.countryid + "&max_age=" + _this.max_age + "&min_age=" + _this.min_age).toPromise();
        }).catch(function (err) {
            alert("Error accessing storage");
        }));
    };
    PlayerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], PlayerProvider);
    return PlayerProvider;
}());

//# sourceMappingURL=player.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map
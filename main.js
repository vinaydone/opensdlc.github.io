(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./about/about.module": [
		"./src/app/about/about.module.ts",
		"about-about-module"
	],
	"./admisions/admisions.module": [
		"./src/app/admisions/admisions.module.ts",
		"admisions-admisions-module"
	],
	"./contact/contact.module": [
		"./src/app/contact/contact.module.ts",
		"contact-contact-module"
	],
	"./courses/courses.module": [
		"./src/app/courses/courses.module.ts",
		"courses-courses-module"
	],
	"./home/home.module": [
		"./src/app/home/home.module.ts",
		"home-home-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".head1{\r\n    background-color: #008ED0;\r\n}\r\n.dropdown-submenu {\r\n    position: relative;\r\n  }\r\n.dropdown-submenu .dropdown-menu {\r\n    top: 0;\r\n    left: 100%;\r\n    margin-top: -1px;\r\n   \r\n  }\r\nbtn.focus, .btn:focus {\r\n    outline: 0;\r\n     box-shadow:none!important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGtCQUFrQjtFQUNwQjtBQUVBO0lBQ0UsTUFBTTtJQUNOLFVBQVU7SUFDVixnQkFBZ0I7O0VBRWxCO0FBQ0E7SUFDRSxVQUFVO0tBQ1QseUJBQXlCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZDF7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4RUQwO1xyXG59XHJcbi5kcm9wZG93bi1zdWJtZW51IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgLmRyb3Bkb3duLXN1Ym1lbnUgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IC0xcHg7XHJcbiAgIFxyXG4gIH1cclxuICBidG4uZm9jdXMsIC5idG46Zm9jdXMge1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgICBib3gtc2hhZG93Om5vbmUhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    \n    <div class=\"col-12 p-0\"><a href=\"https://kakatiya.ac.in\">\n      <img src=\"assets/logo3.jpg\" alt=\"\" class=\"img-fluid\"></a>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"container-fluid head1\">\n    <div class=\"row\">\n     <div class=\"col p-0\">\n      <nav class=\"navbar navbar-expand-lg navbar-light  p-0\">\n         \n          <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n          </button>\n        \n          <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n            <ul class=\"navbar-nav ml-5 mr-auto\">\n              <li class=\"nav-item\">\n                <a class=\"nav-link text-white\" href=\"#\">HOME <span class=\"sr-only\">(current)</span></a>\n              </li>\n              <li class=\"nav-item pl-5\">\n                <a class=\"nav-link text-white\" routerLink=\"about/description\">ABOUT</a>\n              </li>\n              <li class=\"nav-item pl-5 dropdown-right \">\n                <div class=\"btn-group dropright\">\n                  <button class=\"btn btn-white text-white dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">COURSES\n                  <span class=\"caret\"></span></button>\n                  <ul class=\"dropdown-menu bg-white text-center \" style=\"position:absolute;top:40px;\">\n                    <li class=\"dropdown-submenu text-success\">\n                      <a class=\"test text-success dropdown-toggle\" tabindex=\"-1\" href=\"#\">B.sc</a>\n                      <ul class=\"dropdown-menu text-center\">\n                        <li><a class=\"text-success\" tabindex=\"-1\" routerLink=\"/courses/MPC\">MPC</a></li>\n                        <li><a class=\"text-success\" tabindex=\"-1\" routerLink=\"courses/MPCs\">MPCs</a></li>\n                        <li><a class=\"text-success\" tabindex=\"-1\" routerLink=\"courses/BZC\">BZC</a></li>\n                      </ul>\n                    </li>\n                    <li class=\"dropdown-submenu  dropdown-toggle text-warning\">\n                      <a class=\"test text-warning\" tabindex=\"-1\" href=\"\">B.com <span class=\"caret\"></span></a>\n                      <ul class=\"dropdown-menu text-center\">\n                        <li><a class=\"text-warning\" tabindex=\"-1\" routerLink=\"/courses/BcomGen\">B.com(Gen)</a></li>\n                        <li><a class=\"text-warning\" tabindex=\"-1\" routerLink=\"/courses/BcomComp\">B.com(Comp)</a></li>\n                      </ul>\n                    </li>\n                    <li class=\"dropdown-submenu  dropdown-toggle text-primary\">\n                      <a class=\"test\" tabindex=\"-1\" href=\"#\">BA <span class=\"caret\"></span></a>\n                      <ul class=\"dropdown-menu text-center\">\n                        <li><a tabindex=\"-1\" routerLink=\"courses/BAEpp\">BA(EPP)</a></li>\n                        <li><a tabindex=\"-1\" routerLink=\"courses/BAHpp\">BA(HPP)</a></li>\n                      </ul>\n                    </li>\n                  </ul>\n                </div>\n              </li>\n                \n              <li class=\"nav-item pl-5\">\n                <a class=\"nav-link  text-white\" routerLink=\"/admin\" >ADMISSIONS</a>\n              </li>\n              <li class=\"nav-item pl-5\">\n                  <a class=\"nav-link  text-white\" routerLink=\"/contact\">CONTACT</a>\n                </li>\n          \n            <form class=\"form-inline  my-lg-0\">\n              <input class=\" ml-5 mr-sm-3\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\" style=\"border:1px solid white;border-radius:5px;\">\n              <button class=\"btn  p-0 pr-2 pl-2 btn-outline-warning  my-sm-0\" type=\"submit\">Search</button>\n            </form>  </ul>\n          </div>\n        </nav>\n    </div>\n</div>\n</div>\n<router-outlet></router-outlet>\n\n<div class=\"container-fluid bg-dark\">\n  <div class=\"row mb\">\n    <div class=\"col p-0 \"><p class=\" mb-1 mt-1 text-white\"><i class=\" text-white far fa-copyright\"></i> Copyrights.Reservered.2019</p></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'SDLC';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var routing = [
    { path: '', loadChildren: './home/home.module#HomeModule' },
    { path: 'about', loadChildren: './about/about.module#AboutModule' },
    { path: 'admin', loadChildren: './admisions/admisions.module#AdmisionsModule' },
    { path: 'courses', loadChildren: './courses/courses.module#CoursesModule' },
    { path: 'contact', loadChildren: './contact/contact.module#ContactModule' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routing)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\vinay\Desktop\angular\SDLC\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
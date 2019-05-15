(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-contact-module"],{

/***/ "./src/app/contact/contact.module.ts":
/*!*******************************************!*\
  !*** ./src/app/contact/contact.module.ts ***!
  \*******************************************/
/*! exports provided: ContactModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactModule", function() { return ContactModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _contact1_contact1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact1/contact1.component */ "./src/app/contact/contact1/contact1.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var routing = [
    { path: '', component: _contact1_contact1_component__WEBPACK_IMPORTED_MODULE_3__["Contact1Component"] }
];
var ContactModule = /** @class */ (function () {
    function ContactModule() {
    }
    ContactModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_contact1_contact1_component__WEBPACK_IMPORTED_MODULE_3__["Contact1Component"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routing)
            ]
        })
    ], ContactModule);
    return ContactModule;
}());



/***/ }),

/***/ "./src/app/contact/contact1/contact1.component.css":
/*!*********************************************************!*\
  !*** ./src/app/contact/contact1/contact1.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdDEvY29udGFjdDEuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/contact/contact1/contact1.component.html":
/*!**********************************************************!*\
  !*** ./src/app/contact/contact1/contact1.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-8 offset-2\">\n      <div class=\"card\">\n        <div class=\"card-head bg-secondary text-white\">\n          <h3>contact Details</h3>\n        </div>\n        <div class=\"card-body\">\n          <h4 class=\"text-danger\">The Director</h4>\n          <h5>KAKATHIYA OPEN UNIVERSITY,\n            <h5>Vidyaranyapuri,<br> \n                Warangal 506 009 (TS) India.</h5>\n          </h5>\n          <h5 class=\"text-success\">IVRS: (24 Hours):\t(0870) 2438877 <br>\n              Phone :\t(0870)  2438899<br>\n              Fax :\t(0870)2438000<br>\n              E-mail :\tinfo@sdlceku.ac.in,sdlceku@gmail.com\n                    </h5>\n          <h6></h6>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/contact/contact1/contact1.component.ts":
/*!********************************************************!*\
  !*** ./src/app/contact/contact1/contact1.component.ts ***!
  \********************************************************/
/*! exports provided: Contact1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact1Component", function() { return Contact1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Contact1Component = /** @class */ (function () {
    function Contact1Component() {
    }
    Contact1Component.prototype.ngOnInit = function () {
    };
    Contact1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact1',
            template: __webpack_require__(/*! ./contact1.component.html */ "./src/app/contact/contact1/contact1.component.html"),
            styles: [__webpack_require__(/*! ./contact1.component.css */ "./src/app/contact/contact1/contact1.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Contact1Component);
    return Contact1Component;
}());



/***/ })

}]);
//# sourceMappingURL=contact-contact-module.js.map
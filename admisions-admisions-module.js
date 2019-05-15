(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admisions-admisions-module"],{

/***/ "./src/app/admisions/adminhome/adminhome.component.css":
/*!*************************************************************!*\
  !*** ./src/app/admisions/adminhome/adminhome.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input{\r\n   outline: none;\r\n}\r\n.form-control {\r\n   \r\n \r\n    border-color: inherit;\r\n    box-shadow: none;\r\n  }\r\n.input {\r\n    -webkit-appearance: textfield;\r\n    background-color: rgb(209, 21, 21);\r\n    -webkit-rtl-ordering: logical;\r\n    cursor: text;\r\n    padding: 1px;\r\n    border-width: 0px!important;\r\n    border-style: inset;\r\n    border-color: initial;\r\n    -o-border-image: initial;\r\n       border-image: initial;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaXNpb25zL2FkbWluaG9tZS9hZG1pbmhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtHQUNHLGFBQWE7QUFDaEI7QUFDQTs7O0lBR0kscUJBQXFCO0lBRXJCLGdCQUFnQjtFQUNsQjtBQUNBO0lBQ0UsNkJBQTZCO0lBQzdCLGtDQUFrQztJQUNsQyw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQix3QkFBcUI7T0FBckIscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvYWRtaXNpb25zL2FkbWluaG9tZS9hZG1pbmhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dHtcclxuICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4uZm9ybS1jb250cm9sIHtcclxuICAgXHJcbiBcclxuICAgIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG4gIC5pbnB1dCB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDksIDIxLCAyMSk7XHJcbiAgICAtd2Via2l0LXJ0bC1vcmRlcmluZzogbG9naWNhbDtcclxuICAgIGN1cnNvcjogdGV4dDtcclxuICAgIHBhZGRpbmc6IDFweDtcclxuICAgIGJvcmRlci13aWR0aDogMHB4IWltcG9ydGFudDtcclxuICAgIGJvcmRlci1zdHlsZTogaW5zZXQ7XHJcbiAgICBib3JkZXItY29sb3I6IGluaXRpYWw7XHJcbiAgICBib3JkZXItaW1hZ2U6IGluaXRpYWw7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admisions/adminhome/adminhome.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admisions/adminhome/adminhome.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row m-0\">\n    <div class=\"col p-0 \" style=\"border-bottom:1px dotted black;\">\n        <marquee BEHAVIOUR=\"scroll\" onmouseover=\"this.stop();\"  onmouseout=\"this.start();\">\n            <a href=\"\" class=\"\" style=\"color:red;\"> \n            <span><i class=\"fas fa-angle-double-right\"></i>\n          </span> Admission Are Open For Acadamic Year 2019-2020</a> </marquee>\n    </div>\n  </div>\n</div>\n\n<div class=\"container-fluid\">\n  <div class=\"container\"  style=\"border:2px solid black;border-radius:30px;\">\n    <div class=\"row mt-2 mb-3\">\n      <div class=\"col\">\n        <h3 class=\"text-center mb-5\"  style=\"border-bottom:2px solid black;\">ADMISSION FORM</h3>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col\">\n          <form action=\"\" name=\"formname\"[formGroup]=\"inputgroup\">\n            <div class=\"row\">\n             <div class=\"col-5 offset-1\">\n              <div class=\"form-group ml-5\">\n                FirstName:\n                <input type=\"text\" class=\"form-control w-75\" formControlName=\"username\" [ngClass]=\"{'is-invalid':inputgroup.get('username').dirty && inputgroup.get('username').invalid}\"/>\n                <div *ngIf=\"inputgroup.get('username').dirty && inputgroup.get('username').invalid\" class=\"invalid-feedback\">\n                  please enter FirstName\n                </div>\n              </div>\n             </div>\n              <div class=\"col-5 offset\">\n                <div class=\"form-group\">\n                  LastName:\n                  <input type=\"text\" class=\"form-control w-75   \" formControlName=\"lastname\" [ngClass]=\"{'is-invalid':inputgroup.get('lastname').dirty && inputgroup.get('lastname').invalid}\"/>\n                  <div *ngIf=\"inputgroup.get('lastname').dirty && inputgroup.get('lastname').invalid\" class=\"invalid-feedback\">\n                    please enter LastName\n                  </div>\n                </div>\n              </div>\n              </div>\n           <div class=\"row\">\n              <div class=\"col-5 offset-1\">  \n                <div class=\"form-group ml-5\">\n                  FatherName:\n                  <input type=\"text\" class=\"form-control w-75   \" formControlName=\"fathername\" [ngClass]=\"{'is-invalid':inputgroup.get('fathername').dirty && inputgroup.get('fathername').invalid}\"/>\n                  <div *ngIf=\"inputgroup.get('fathername').dirty && inputgroup.get('fathername').invalid\" class=\"invalid-feedback\">\n                    please enter FatherName\n                  </div>\n                </div>\n              </div>\n                <div class=\"col-5 offset\"> \n                  <div class=\"form-group\">\n                    MotherName:\n                    <input type=\"text\" class=\"form-control w-75   \" formControlName=\"mothername\" [ngClass]=\"{'is-invalid':inputgroup.get('mothername').dirty && inputgroup.get('mothername').invalid}\"/>\n                    <div *ngIf=\"inputgroup.get('mothername').dirty && inputgroup.get('mothername').invalid\" class=\"invalid-feedback\">\n                      please enter MotherName\n                    </div>\n                  </div>\n                </div>\n                </div><br>\n                \n                 <span class=\" pl-5\" style=\"margin-left:80px\"> DateOfBirth:</span>\n                 <div class=\"row\">\n                  <div class=\"col-2 offset-1 pl-5\"> <select id=\"pass\" class=\" ml-3 form-control \" name=\"day\" formControlName=\"Day\"[ngClass]=\"{'is-invalid':inputgroup.get('Day').dirty && inputgroup.get('Day').invalid}\">\n                    <div *ngIf=\"inputgroup.get('Day').dirty && inputgroup.get('Day').invalid\" class=\"invalid-feedback\">\n                      please select Day\n                    </div>\n                    <option></option> <option>1</option><option>2</option><option>3</option><option>4</option>\n                      <option>5</option><option>6</option><option>7</option><option>8</option>  \n                      <option>9</option><option>10</option><option>11</option><option>12</option>\n                      <option>13</option><option>14</option><option>15</option><option>16</option>\n                      <option>17</option><option>18</option><option>19</option><option>20</option>   \n                      <option>21</option><option>22</option><option>23</option><option>24</option>\n                      <option>25</option><option>26</option><option>27</option><option>28</option>  \n                      <option>29</option><option>30</option><option>31</option>\n                    </select> </div>\n                    <div class=\"col-3\"> \n                    <select id=\"pass\" class=\"form-control ml-5 w-75 \" name=\"month\" formControlName=\"Month\"[ngClass]=\"{'is-invalid':inputgroup.get('Month').dirty && inputgroup.get('Month').invalid}\">\n                      <div *ngIf=\"inputgroup.get('Month').dirty && inputgroup.get('Month').invalid\" class=\"invalid-feedback\">\n                        please enter MotherName\n                      </div>\n                      <option></option>\n                      <option>Jan</option>\n                        <option>Feb</option>\n                        <option>Mar</option>\n                        <option>Apr</option>\n                        <option>May</option>\n                        <option>Jun</option>\n                        <option>Jul</option><option>Aug</option><option>Sep</option><option>Oct</option>\n                        <option>Nov</option><option>Dec</option>  \n                      </select></div>\n                      <div class=\"col-4 pl-5\">\n                      <select id=\"pass\" class=\" ml-5 form-control w-75\" name=\"year\" formControlName=\"Year\"[ngClass]=\"{'is-invalid':inputgroup.get('Year').dirty && inputgroup.get('Year').invalid}\">\n                          <div *ngIf=\"inputgroup.get('Year').dirty && inputgroup.get('Year').invalid\" class=\"invalid-feedback\">\n                              please enter MotherName\n                            </div>\n                         <option></option> <option>2002</option><option>2001</option><option>2000</option><option>1999</option>\n                          <option>1998</option> <option>1997</option> <option>1996</option><option>1995</option>\n                          <option>1994</option> <option>1993</option><option>1992</option>\n                        </select> <br></div>\n                      </div>\n                      \n                      <div class=\"row\">\n                        <div class=\"col-11 offset-1\">\n                            <span class=\"\" style=\"margin-left:50px\">  Education:</span>\n                 &nbsp;<select id=\"Education\" class=\"w-75 ml-5 form-control \" name=\"education\" formControlName=\"Education\"[ngClass]=\"{'is-invalid':inputgroup.get('Education').dirty && inputgroup.get('Education').invalid}\">\n                    <div *ngIf=\"inputgroup.get('Education').dirty && inputgroup.get('Education').invalid\" class=\"invalid-feedback\">\n                      please select\n                    </div>\n                      <option selected> </option>\n                      <option>INTERMEDIATE /10+2</option>\n                      <option>SSC</option>\n                    </select> <br></div></div>\n                    <div class=\"row\">\n                      <div class=\"col-11 offset-1\">\n                          <span class=\"\" style=\"margin-left:50px\">  PassOut  :</span>\n                   &nbsp;&nbsp;&nbsp;<select id=\"pass\" class=\"w-75 ml-5 form-control\" name=\"passing\" formControlName=\"PassOut\"[ngClass]=\"{'is-invalid':inputgroup.get('PassOut').dirty && inputgroup.get('PassOut').invalid}\">\n                      <div *ngIf=\"inputgroup.get('PassOut').dirty && inputgroup.get('PassOut').invalid\" class=\"invalid-feedback\">\n                          please select PassOut\n                        </div>  \n                    <option selected></option>\n                      <option>2018</option>\n                      <option>2017</option>\n                      <option>2016</option>\n                      <option>2015</option>\n                      <option>2014</option>\n                      <option>2013</option>\n                      <option>2012</option><option>2011</option><option>2010</option><option>2009</option>\n                      <option>2008</option><option>2007</option><option>2006</option><option>2005</option>  \n                    </select><br>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-11 offset-1\">\n                      <span class=\"\" style=\"margin-left:50px\">  Course  :</span>\n                    &nbsp;&nbsp;&nbsp;&nbsp;<select id=\"Education\" class=\"w-75 ml-5 form-control\" name=\"course\" formControlName=\"Course\"[ngClass]=\"{'is-invalid':inputgroup.get('Course').dirty && inputgroup.get('Course').invalid}\">\n                        <div *ngIf=\"inputgroup.get('Course').dirty && inputgroup.get('Course').invalid\" class=\"invalid-feedback\">\n                            please select Course\n                          </div> \n                      <option selected> <b></b></option>\n                        <option>MPC</option>\n                        <option>MPCs</option>\n                        <option>MSCs</option>\n                        <option>BZC</option>\n                        <option>B.COM(Genral)</option>\n                        <option>B.COM(Computer's)</option>\n                        <option>B.A(EPP)</option>\n                        <option>B.A(HPP)</option>\n                      </select><br>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-11 offset-1\">\n                        <span class=\"\" style=\"margin-left:50px\">   Cast  :</span>\n                     &nbsp;&nbsp; <select id=\"cast\" class=\"w-75 ml-5 form-control\" name=\"cast\" formControlName=\"Cast\"[ngClass]=\"{'is-invalid':inputgroup.get('Cast').dirty && inputgroup.get('Cast').invalid}\">\n                          <div *ngIf=\"inputgroup.get('Cast').dirty && inputgroup.get('Cast').invalid\" class=\"invalid-feedback\">\n                              please select Cast\n                            </div>\n                        <option selected> </option>\n                      <option>GENRAL</option>\n                      <option>BC-A</option>\n                      <option>BC-B</option>\n                      <option>BC-D</option>\n                      <option>OC</option>\n                      <option>SC</option>\n                      <option>ST</option>\n                      </select><br>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-11 offset-1\">\n                        <span class=\"\" style=\"margin-left:50px\">  Email  :</span>\n                       <input type=\"text\"  class=\"w-75 ml-5 form-control\" name=\"email\" formControlName=\"Email\"[ngClass]=\"{'is-invalid':inputgroup.get('Email').dirty && inputgroup.get('Email').invalid}\"><br>\n                      <div *ngIf=\"inputgroup.get('Email').dirty && inputgroup.get('Email').invalid\" class=\"invalid-feedback\">\n                          please Enter Email.\n                        </div></div>\n                      </div>\n                      <div class=\"row\">\n                        <div class=\"col-11 offset-1\">\n                            <span class=\"\" style=\"margin-left:50px\">  Phone  :</span>\n                      &nbsp;&nbsp;&nbsp;&nbsp; <input type=\"text\"  class=\"w-75 ml-5 form-control\" name=\"phone\" formControlName=\"Phone\" [ngClass]=\"{'is-invalid':inputgroup.get('Phone').dirty && inputgroup.get('Phone').invalid}\"><br>\n                      <div *ngIf=\"inputgroup.get('Phone').dirty && inputgroup.get('Phone').invalid\" class=\"invalid-feedback\">\n                          please Enter Valid Mobile Number\n                        </div></div>\n                      </div>\n                      <div class=\"row\">\n                        <div class=\"col-11 offset-1\">\n                            <span class=\"\" style=\"margin-left:50px\">   Address :</span>\n                     &nbsp; <input type=\"text\"  class=\"w-75 ml-5 form-control\" name=\"address\" formControlName=\"Address\"[ngClass]=\"{'is-invalid':inputgroup.get('Address').dirty && inputgroup.get('Address').invalid}\"><br>\n                      <div *ngIf=\"inputgroup.get('Address').dirty && inputgroup.get('Address').invalid\" class=\"invalid-feedback\">\n                          please Enter Correct Address\n                        </div></div>\n                      </div>\n                      <div class=\"row\">\n                        <div class=\"col-6 text-center offset-3\">\n                            <input type=\"button\" class=\"btn btn-success mt-3 mb-3\" value=\"submit\"[disabled]=\"inputgroup.invalid\" (click)=abc();>\n                            <input type=\"button\" class=\"btn btn-danger mt-3 ml-4 mb-3\" value=\"cancel\">\n                        </div>\n                      </div>\n           \n          </form>\n          <!-- <form action=\"\" [formGroup]=\"inputgroup\">\n            <div class=\"form-group\">\n              UserName:\n              <input type=\"text\" class=\"form-control\" formControlName=\"username\" [ngClass]=\"{'is-invalid':inputgroup.get('username').dirty && inputgroup.get('username').invalid}\"/>\n              <div *ngIf=\"inputgroup.get('username').dirty && inputgroup.get('username').invalid\" class=\"invalid-feedback\">\n                please enter Fname\n              </div>\n            </div>\n            <div class=\"form-group\">\n                Password:\n                <input type=\"password\" class=\"form-control\" formControlName=\"pwd\"  [ngClass]=\"{'is-invalid':inputgroup.get('pwd').dirty && inputgroup.get('pwd').invalid}\"/>\n                <div *ngIf=\"inputgroup.get('pwd').dirty && inputgroup.get('pwd').invalid\" class=\"invalid-feedback\">\n                  please enter password\n                </div>\n              </div>\n              <input type=\"button\" class=\"btn btn-success\" value=\"Login\" (click)=\"login();\">\n          </form> -->\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admisions/adminhome/adminhome.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admisions/adminhome/adminhome.component.ts ***!
  \************************************************************/
/*! exports provided: AdminhomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminhomeComponent", function() { return AdminhomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var AdminhomeComponent = /** @class */ (function () {
    function AdminhomeComponent(forms) {
        this.forms = forms;
    }
    AdminhomeComponent.prototype.abc = function () {
        console.log(this.inputgroup.value);
        console.log('form working');
    };
    AdminhomeComponent.prototype.ngOnInit = function () {
        this.inputgroup = this.forms.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z_.+-]+$')
            ])),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z_.+-]+$')
            ])),
            fathername: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z_.+-]+$')
            ])),
            mothername: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z_.+-]+$')
            ])),
            Day: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Month: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Year: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Education: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            PassOut: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Course: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Cast: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2 - 20), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            Phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9.+-]+$')
            ])),
            Address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(40),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9/:_.+-]+$')
            ])),
        });
    };
    AdminhomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adminhome',
            template: __webpack_require__(/*! ./adminhome.component.html */ "./src/app/admisions/adminhome/adminhome.component.html"),
            styles: [__webpack_require__(/*! ./adminhome.component.css */ "./src/app/admisions/adminhome/adminhome.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], AdminhomeComponent);
    return AdminhomeComponent;
}());

// }
// constructor(public form:FormBuilder) { }
// public inputgroup:FormGroup;
// ngOnInit() {
//   this.inputgroup=this.form.group({
//     username:[null,[Validators.required,Validators.minLength(2-10)]],
//     pwd:['',[Validators.required,Validators.minLength(2-10)]],
//   });
//   console.log(this.inputgroup.value);
// }
// }


/***/ }),

/***/ "./src/app/admisions/admision1/admision1.component.css":
/*!*************************************************************!*\
  !*** ./src/app/admisions/admision1/admision1.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWlzaW9ucy9hZG1pc2lvbjEvYWRtaXNpb24xLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admisions/admision1/admision1.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admisions/admision1/admision1.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  admision1 works!\n</p>\n"

/***/ }),

/***/ "./src/app/admisions/admision1/admision1.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admisions/admision1/admision1.component.ts ***!
  \************************************************************/
/*! exports provided: Admision1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Admision1Component", function() { return Admision1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Admision1Component = /** @class */ (function () {
    function Admision1Component() {
    }
    Admision1Component.prototype.ngOnInit = function () {
    };
    Admision1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admision1',
            template: __webpack_require__(/*! ./admision1.component.html */ "./src/app/admisions/admision1/admision1.component.html"),
            styles: [__webpack_require__(/*! ./admision1.component.css */ "./src/app/admisions/admision1/admision1.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Admision1Component);
    return Admision1Component;
}());



/***/ }),

/***/ "./src/app/admisions/admisions.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admisions/admisions.module.ts ***!
  \***********************************************/
/*! exports provided: AdmisionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmisionsModule", function() { return AdmisionsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admision1_admision1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admision1/admision1.component */ "./src/app/admisions/admision1/admision1.component.ts");
/* harmony import */ var _adminhome_adminhome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./adminhome/adminhome.component */ "./src/app/admisions/adminhome/adminhome.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var routing = [
    { path: '', component: _adminhome_adminhome_component__WEBPACK_IMPORTED_MODULE_4__["AdminhomeComponent"] }
];
var AdmisionsModule = /** @class */ (function () {
    function AdmisionsModule() {
    }
    AdmisionsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_admision1_admision1_component__WEBPACK_IMPORTED_MODULE_3__["Admision1Component"], _adminhome_adminhome_component__WEBPACK_IMPORTED_MODULE_4__["AdminhomeComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routing)
            ]
        })
    ], AdmisionsModule);
    return AdmisionsModule;
}());



/***/ })

}]);
//# sourceMappingURL=admisions-admisions-module.js.map
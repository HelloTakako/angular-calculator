(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <app-calculator></app-calculator>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/calculator/calculator.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/calculator/calculator.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"calculator\">\n    <div class=\"row align-middle\">\n\n    <div class=\"textarea col-12\">\n        <span id=\"input-history\"></span>\n        <span id=\"result\"></span>\n    </div>\n\n    <div class=\"row col-12\">\n        <button (click)=\"operate($event)\" type=\"button\" class=\"btn btn-info col-3\">+</button>\n        <button (click)=\"operate($event)\" type=\"button\" class=\"btn btn-info col-3\">-</button>\n        <button (click)=\"operate($event)\" type=\"button\" class=\"btn btn-info col-3\">*</button>\n        <button (click)=\"operate($event)\" type=\"button\" class=\"btn btn-info col-3\">/</button>\n    </div>\n\n    <div class=\"row row-cols-3 col-9\">\n        <button (click)=\"operate($event)\" type=\"button\" class=\"btn btn-light col\">7</button>\n        <button (click)=\"operate($event)\" type=\"button\" class=\"btn btn-light col\">8</button>\n        <button (click)=\"operate($event)\" type=\"button\" class=\"btn btn-light col\">9</button>\n        \n        <button (click)=\"operate($event)\" type=\"button\" class=\"btn btn-light col\">4</button>\n        <button (click)=\"operate($event)\" type=\"button\" class=\"btn btn-light col\">5</button>\n        <button (click)=\"operate($event)\" type=\"button\" class=\"btn btn-light col\">6</button>\n        \n        <button (click)=\"operate($event)\" type=\"button\" class=\"btn btn-light col\">1</button>\n        <button (click)=\"operate($event)\" type=\"button\" class=\"btn btn-light col\">2</button>\n        <button (click)=\"operate($event)\" type=\"button\" class=\"btn btn-light col\">3</button>\n\n        <button (click)=\"operate($event)\" type=\"button\" class=\"btn btn-light col\">0</button>\n        <button (click)=\"operate($event)\" type=\"button\" class=\"btn btn-light col\">Undo</button>\n        <button (click)=\"operate($event)\" type=\"button\" class=\"btn btn-light col\">Clear</button>\n    </div>\n    \n    <button (click)=\"operate($event)\" type=\"button\" class=\"btn btn-light col-3\">=</button>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid{\n    background: linear-gradient(300deg, rgba(0,0,0,0.2) , rgb(255,255,255));\n    background: -moz-linear-gradient(120deg, rgba(0,0,0,0.2) , rgb(255,255,255));\n    display: -webkit-box;\n    display: flex;\n    height: 100vh;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1RUFBdUU7SUFFdkUsNEVBQTRFO0lBQzVFLG9CQUFhO0lBQWIsYUFBYTtJQUNiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHdCQUF1QjtZQUF2Qix1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWR7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMwMGRlZywgcmdiYSgwLDAsMCwwLjIpICwgcmdiKDI1NSwyNTUsMjU1KSk7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMzAwZGVnLCByZ2JhKDAsMCwwLDAuMikgLCByZ2IoMjU1LDI1NSwyNTUpKTtcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgxMjBkZWcsIHJnYmEoMCwwLDAsMC4yKSAsIHJnYigyNTUsMjU1LDI1NSkpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calculator/calculator.component */ "./src/app/calculator/calculator.component.ts");





let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_4__["CalculatorComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/calculator/calculator.component.css":
/*!*****************************************************!*\
  !*** ./src/app/calculator/calculator.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* reset Bootstrap css */\n.row{\n    margin: 0;\n    padding: 0;\n}\n/* ------------------- */\n.calculator{\n    margin: 0 auto;\n    max-width: 500px;\n    padding: 20px;\n    background: linear-gradient(300deg, rgba(0,0,0,0.05) , rgb(250,250,250));\n    background: -moz-linear-gradient(120deg, rgba(0,0,0,0.05) , rgb(250,250,250));\n    border-radius:10px;\n    box-shadow: 10px 10px 20px rgba(0,0,0,.2),\n                -10px -10px 20px rgb(255,255,255),\n                -5px -5px 20px rgb(255,255,255),\n                -10px -10px 5px rgb(255,255,255);\n}\n.textarea{\n    height: 80px;\n    background-color: #666;\n    color: #fff;\n    word-wrap: break-word;\n    border-radius: 10px 10px 0 0;\n    box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.2) \n}\n.textarea span{\n    display: block;\n    padding: 2%;\n    width: 100%;\n    text-align: right;\n}\n.textarea #input-history{\n    font-size: 14px;\n    height:26%;\n}\n.textarea #result{\n    font-size: 30px;\n    font-weight: bold;\n    height:66%;\n}\nbutton {\n    box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.1);\n    border: none;\n    border-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsY3VsYXRvci9jYWxjdWxhdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0JBQXdCO0FBQ3hCO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDtBQUNBLHdCQUF3QjtBQUV4QjtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHdFQUF3RTtJQUV4RSw2RUFBNkU7SUFDN0Usa0JBQWtCO0lBQ2xCOzs7Z0RBRzRDO0FBQ2hEO0FBQ0E7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCO0FBQ0o7QUFDQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7QUFDZDtBQUNBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGlEQUFpRDtJQUNqRCxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY2FsY3VsYXRvci9jYWxjdWxhdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiByZXNldCBCb290c3RyYXAgY3NzICovXG4ucm93e1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4uY2FsY3VsYXRvcntcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMwMGRlZywgcmdiYSgwLDAsMCwwLjA1KSAsIHJnYigyNTAsMjUwLDI1MCkpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDMwMGRlZywgcmdiYSgwLDAsMCwwLjA1KSAsIHJnYigyNTAsMjUwLDI1MCkpO1xuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDEyMGRlZywgcmdiYSgwLDAsMCwwLjA1KSAsIHJnYigyNTAsMjUwLDI1MCkpO1xuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggMjBweCByZ2JhKDAsMCwwLC4yKSxcbiAgICAgICAgICAgICAgICAtMTBweCAtMTBweCAyMHB4IHJnYigyNTUsMjU1LDI1NSksXG4gICAgICAgICAgICAgICAgLTVweCAtNXB4IDIwcHggcmdiKDI1NSwyNTUsMjU1KSxcbiAgICAgICAgICAgICAgICAtMTBweCAtMTBweCA1cHggcmdiKDI1NSwyNTUsMjU1KTtcbn1cbi50ZXh0YXJlYXtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMjBweCByZ2JhKDAsIDAsIDAsIDAuMikgXG59XG4udGV4dGFyZWEgc3BhbntcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAyJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi50ZXh0YXJlYSAjaW5wdXQtaGlzdG9yeXtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgaGVpZ2h0OjI2JTtcbn1cbi50ZXh0YXJlYSAjcmVzdWx0e1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBoZWlnaHQ6NjYlO1xufVxuYnV0dG9uIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/calculator/calculator.component.ts":
/*!****************************************************!*\
  !*** ./src/app/calculator/calculator.component.ts ***!
  \****************************************************/
/*! exports provided: CalculatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorComponent", function() { return CalculatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CalculatorComponent = class CalculatorComponent {
    constructor() {
        this.inputHistory = [];
    }
    ngOnInit() {
    }
    operate(event, inputValue = event.target.innerText) {
        // assign boolean whether the last input is an operator
        this.isLastInputAnOperator = isNaN(Number(this.inputHistory[this.inputHistory.length - 1]));
        // if an operator is input twice in a row, remove the last operator 
        this.validateInput(event, inputValue);
        // if 'inputHistory' is empty and the current input is either '0' or operators, skip operation
        if (this.inputHistory.length === 0 && /[0+*/-]/.test(inputValue)) {
            return;
        }
        // if '0' is entered after operators, skip operation
        if (this.isLastInputAnOperator && inputValue === '0') {
            return;
        }
        // actual calculation
        if (inputValue === '=' || inputValue === 'Enter') { // when the user clicks '=' button or hit enter key
            if (this.isLastInputAnOperator) {
                this.undoInput();
            }
            this.calculateResult();
        }
        else if (inputValue === 'Clear') { // when the user clicks 'Clear' button
            this.clearInputHistory();
            this.clearResult();
        }
        else if (inputValue === 'Undo' || inputValue === 'Backspace') { // when the user clicks 'Undo' button or hits backspace key
            this.undoInput();
        }
        else { // keep adding numbers or operators
            this.displayInputs(inputValue);
        }
    }
    validateInput(event, inputValue) {
        // check if 'inputHistory' is not empty, and whether the last input is an operator
        if (this.inputHistory !== [] && this.isLastInputAnOperator) {
            // check if the current input is an operator
            if (/[+*/-]/.test(inputValue)) {
                // remove the last operator
                this.undoInput();
            }
        }
        ;
    }
    calculateResult() {
        // check if 'inputHistory' isn't empty
        if (this.inputHistory.length !== 0) {
            // first calculation
            let calculatedResult = eval(this.inputHistory.join('')).toString();
            // if there are more than 6 decimal places in the result, omit it and reassign the value to 'calculatedResult' variable. 
            if (calculatedResult.indexOf('.') > -1 && calculatedResult.length - calculatedResult.indexOf('.') > 7) {
                calculatedResult = Number(calculatedResult).toFixed(6).toString();
            }
            // update the UI
            document.getElementById('result').innerText = calculatedResult;
            this.clearInputHistory();
        }
    }
    // display user's input history before calculation
    displayInputs(input) {
        this.inputHistory.push(input);
        document.getElementById('input-history').innerText = this.inputHistory.join('');
    }
    // undo user's last input
    undoInput() {
        if (this.inputHistory !== []) {
            this.inputHistory.pop();
            document.getElementById('input-history').innerText = this.inputHistory.join('');
        }
    }
    // clear user's input history
    clearInputHistory() {
        document.getElementById('input-history').innerText = '';
        this.inputHistory = [];
    }
    // clear calculated result
    clearResult() {
        document.getElementById('result').innerText = '';
    }
    /*---------------------
      Input from keyboard
    ----------------------*/
    // Get the key value when any key is pressed
    handleKeyDown(event) {
        // accept only number, operators, backspace and enter key
        if (/[=0-9+*-/]|Backspace|Enter/.test(event.key)) {
            this.operate(event, event.key);
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keydown', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], CalculatorComponent.prototype, "handleKeyDown", null);
CalculatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-calculator',
        template: __webpack_require__(/*! raw-loader!./calculator.component.html */ "./node_modules/raw-loader/index.js!./src/app/calculator/calculator.component.html"),
        styles: [__webpack_require__(/*! ./calculator.component.css */ "./src/app/calculator/calculator.component.css")]
    })
], CalculatorComponent);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mainhome/Desktop/GitHub/bcch-angular-exercise/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
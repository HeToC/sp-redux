/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsyncActionType; });
var AsyncActionType;
(function (AsyncActionType) {
    AsyncActionType[AsyncActionType["Request"] = 0] = "Request";
    AsyncActionType[AsyncActionType["Response"] = 1] = "Response";
})(AsyncActionType || (AsyncActionType = {}));
;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAction; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_typed__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_typed___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_typed__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__asyncActionType__ = __webpack_require__(0);
var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let UserAction = class UserAction extends __WEBPACK_IMPORTED_MODULE_0_redux_typed__["Action"] {
    constructor(accountName, asyncOp, payload) {
        super();
        this.accountName = accountName;
        this.asyncOp = asyncOp;
        this.payload = payload;
    }
};
UserAction = __decorate([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_typed__["typeName"])("@@SP-REDUX/USER")], UserAction);

const reducerUsers = (usersState, action) => {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_typed__["isActionType"])(action, UserAction)) {
        const isFetching = action.asyncOp == __WEBPACK_IMPORTED_MODULE_2__asyncActionType__["a" /* AsyncActionType */].Request;
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash__["assign"])({}, usersState, Object.assign({}, usersState, { [action.accountName]: Object.assign({}, action.payload, { isFetching: isFetching }) }));
    }
    ;
};
/* harmony export (immutable) */ __webpack_exports__["b"] = reducerUsers;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = lodash;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = redux-typed;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_typed__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_typed___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_typed__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_user__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__asyncActionType__ = __webpack_require__(0);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncActionType", function() { return __WEBPACK_IMPORTED_MODULE_3__asyncActionType__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UserAction", function() { return __WEBPACK_IMPORTED_MODULE_2__modules_user__["a"]; });





const reducer = (state, action) => {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_typed__["isActionType"])(action, __WEBPACK_IMPORTED_MODULE_2__modules_user__["a" /* UserAction */])) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash__["assign"])({}, state, {
            'sp-redux': Object.assign({}, state['sp-redux'], { users: __WEBPACK_IMPORTED_MODULE_2__modules_user__["b" /* reducerUsers */](state['sp-redux'].users, action) })
        });
    } else {
        return state || {
            'sp-redux': {
                users: {}
            }
        };
    }
};
/* harmony export (immutable) */ __webpack_exports__["reducer"] = reducer;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ })
/******/ ]);
//# sourceMappingURL=sp-redux.js.map
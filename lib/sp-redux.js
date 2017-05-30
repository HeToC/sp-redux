(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"), require("redux-typed"), require("sp-pnp-js"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash", "redux-typed", "sp-pnp-js"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("lodash"), require("redux-typed"), require("sp-pnp-js")) : factory(root["lodash"], root["redux-typed"], root["sp-pnp-js"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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
    AsyncActionType[AsyncActionType["Error"] = 2] = "Error";
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sp_pnp_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sp_pnp_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sp_pnp_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__asyncActionType__ = __webpack_require__(0);
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

;
const actionCreator = {
    fetchUser: accountName => (dispatch, getState) => {
        dispatch(new UserAction(accountName, __WEBPACK_IMPORTED_MODULE_3__asyncActionType__["a" /* AsyncActionType */].Request));
        __WEBPACK_IMPORTED_MODULE_2_sp_pnp_js__["sp"].profiles.getPropertiesFor(accountName).then(profile => dispatch(new UserAction(accountName, __WEBPACK_IMPORTED_MODULE_3__asyncActionType__["a" /* AsyncActionType */].Response, profile))).catch(reason => dispatch(new UserAction(accountName, __WEBPACK_IMPORTED_MODULE_3__asyncActionType__["a" /* AsyncActionType */].Error, reason)));
    }
};
/* unused harmony export actionCreator */

const reducerUsers = (usersState, action) => {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_typed__["isActionType"])(action, UserAction)) {
        const isFetching = action.asyncOp == __WEBPACK_IMPORTED_MODULE_3__asyncActionType__["a" /* AsyncActionType */].Request;
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash__["assign"])({}, usersState, Object.assign({}, usersState, { [action.accountName]: Object.assign({}, action.payload, { isFetching: isFetching }) }));
    }
    ;
};
/* harmony export (immutable) */ __webpack_exports__["b"] = reducerUsers;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

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





const SPRedux = reducer => (state, action) => {
    var newState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash__["assign"])({}, state);
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_typed__["isActionType"])(action, __WEBPACK_IMPORTED_MODULE_2__modules_user__["a" /* UserAction */])) {
        newState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash__["assign"])(newState, {
            'sp-redux': Object.assign({}, state['sp-redux'], { users: __WEBPACK_IMPORTED_MODULE_2__modules_user__["b" /* reducerUsers */](state['sp-redux'].users, action) })
        });
    }
    return reducer(newState, action);
};
/* harmony export (immutable) */ __webpack_exports__["SPRedux"] = SPRedux;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ })
/******/ ]);
});
//# sourceMappingURL=sp-redux.js.map
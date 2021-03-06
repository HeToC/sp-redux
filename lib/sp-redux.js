(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"), require("redux-typed"), require("sp-pnp-js"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash", "redux-typed", "sp-pnp-js"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("lodash"), require("redux-typed"), require("sp-pnp-js")) : factory(root["lodash"], root["redux-typed"], root["sp-pnp-js"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UserProfileManager; });
/* harmony export (immutable) */ __webpack_exports__["a"] = initializeDev;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sp_pnp_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sp_pnp_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sp_pnp_js__);

var UserProfileManager = undefined;
function initializeDev(userProfieManager = __WEBPACK_IMPORTED_MODULE_0_sp_pnp_js__["sp"].profiles) {
    UserProfileManager = userProfieManager;
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sppnpshim__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_user__ = __webpack_require__(4);



class CSPRedux {
    constructor() {
        this.initializeDev = __WEBPACK_IMPORTED_MODULE_1__sppnpshim__["a" /* initializeDev */];
        this.userActions = __WEBPACK_IMPORTED_MODULE_2__modules_user__["a" /* actionsUser */];
    }

    mutateInitialState(initialState) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_lodash__["assign"])({}, initialState, __WEBPACK_IMPORTED_MODULE_2__modules_user__["b" /* initialState */]);
    }

    /*
    interface IMutatorReducer {
        (reducer: Reducer<any>): (state: any, action: Action) => any;
    }
    */
    mutateReducer(reducer) {
        return (state, action) => {
            if (__WEBPACK_IMPORTED_MODULE_2__modules_user__["c" /* checkActionType */](action)) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_lodash__["assign"])({}, __WEBPACK_IMPORTED_MODULE_2__modules_user__["d" /* reducerUsers */](state, action));
            }
            return reducer(state, action);
        };
    }
}
const SPRedux = new CSPRedux();
/* harmony export (immutable) */ __webpack_exports__["SPRedux"] = SPRedux;


/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UserAction */
/* harmony export (immutable) */ __webpack_exports__["c"] = checkActionType;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_typed__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_typed___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_typed__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__asyncActionType__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sppnpshim__ = __webpack_require__(0);
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
function checkActionType(action) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_typed__["isActionType"])(action, UserAction);
}
const actionsUser = {
    fetchUser: accountName => (dispatch, getState) => {
        let state = getState();
        let user = state.entities.users[accountName];
        if (user == null || user == undefined || !(user.isLoaded && user.isFetching)) {
            dispatch(new UserAction(accountName, __WEBPACK_IMPORTED_MODULE_2__asyncActionType__["a" /* AsyncActionType */].Request));
            __WEBPACK_IMPORTED_MODULE_3__sppnpshim__["b" /* UserProfileManager */].getPropertiesFor(accountName).then(profile => dispatch(new UserAction(accountName, __WEBPACK_IMPORTED_MODULE_2__asyncActionType__["a" /* AsyncActionType */].Response, profile))).catch(reason => dispatch(new UserAction(accountName, __WEBPACK_IMPORTED_MODULE_2__asyncActionType__["a" /* AsyncActionType */].Error, reason)));
        }
    },
    fetchUsers: accountNames => (dispatch, getState) => {
        accountNames.forEach(accountName => {
            actionsUser.fetchUser(accountName);
        });
    }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = actionsUser;

const initialState = {
    entities: {
        users: []
    }
};
/* harmony export (immutable) */ __webpack_exports__["b"] = initialState;

const reducerUsers = (state, action) => {
    const isFetching = action.asyncOp == __WEBPACK_IMPORTED_MODULE_2__asyncActionType__["a" /* AsyncActionType */].Request;
    const isLoaded = action.asyncOp == __WEBPACK_IMPORTED_MODULE_2__asyncActionType__["a" /* AsyncActionType */].Response;
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash__["assign"])({}, state, {
        entities: Object.assign({}, state.entities, { users: Object.assign({}, state.entities.users, { [action.accountName]: Object.assign({}, action.payload, { isFetching: isFetching, isLoaded: isLoaded }) }) })
    });
};
/* harmony export (immutable) */ __webpack_exports__["d"] = reducerUsers;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ })
/******/ ]);
});
//# sourceMappingURL=sp-redux.js.map
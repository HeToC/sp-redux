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
/* harmony export (immutable) */ __webpack_exports__["registerModule"] = registerModule;
/* harmony export (immutable) */ __webpack_exports__["mutateInitialState"] = mutateInitialState;
/* harmony export (immutable) */ __webpack_exports__["mutateActionCreator"] = mutateActionCreator;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sppnpshim__ = __webpack_require__(0);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "initializeDev", function() { return __WEBPACK_IMPORTED_MODULE_1__sppnpshim__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_user__ = __webpack_require__(4);



let bInitialized = false;
const registeredModules = [new __WEBPACK_IMPORTED_MODULE_2__modules_user__["a" /* SPRUser */]()];
function registerModule(module) {
    registeredModules.push(module);
    if (!bInitialized) bInitialized = true;
}
function mutateInitialState(initialState) {
    var initialStates = registeredModules.map(m => {
        return m.getInitialState();
    });
    return __WEBPACK_IMPORTED_MODULE_0_lodash__["assign"].apply({}, [initialState, ...initialStates]);
}
;
const mutateReducer = reducer => (state, action) => {
    for (var i = 0; i < registeredModules.length; i++) {
        var m = registeredModules[i];
        if (m.checkActionType(action)) return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_lodash__["assign"])({}, state, m.getReducer(state, action));
    }
    return reducer(state, action);
};
/* harmony export (immutable) */ __webpack_exports__["mutateReducer"] = mutateReducer;

function mutateActionCreator(wrappedActionCreator) {
    var actions = {};
    actions = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_lodash__["assign"])({}, wrappedActionCreator);
    registeredModules.forEach(m => {
        var moduleActions = m.getActions();
        actions = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_lodash__["assign"])({}, actions, moduleActions);
    });
    return actions;
}
;

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
/* unused harmony export BulkUserAction */
/* unused harmony export CurrentUserAction */
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
let BulkUserAction = class BulkUserAction extends __WEBPACK_IMPORTED_MODULE_0_redux_typed__["Action"] {
    constructor(accountNames) {
        super();
        this.accountNames = accountNames;
    }
};
BulkUserAction = __decorate([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_typed__["typeName"])("@@SP-REDUX/USERS")], BulkUserAction);

;
let CurrentUserAction = class CurrentUserAction extends __WEBPACK_IMPORTED_MODULE_0_redux_typed__["Action"] {
    constructor(asyncOp, payload) {
        super();
        this.asyncOp = asyncOp;
        this.payload = payload;
    }
};
CurrentUserAction = __decorate([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_typed__["typeName"])("@@SP-REDUX/USER#CURRENT")], CurrentUserAction);

;
class SPRUser {
    constructor() {
        this.actions = {
            fetchCurrentUser: () => (dispatch, getState) => {
                let state = getState();
                if (state.entities.users.currentUser) return;
                __WEBPACK_IMPORTED_MODULE_3__sppnpshim__["b" /* UserProfileManager */].myProperties.get().then(profile => dispatch(new CurrentUserAction(__WEBPACK_IMPORTED_MODULE_2__asyncActionType__["a" /* AsyncActionType */].Response, profile))).catch(reason => dispatch(new CurrentUserAction(__WEBPACK_IMPORTED_MODULE_2__asyncActionType__["a" /* AsyncActionType */].Error, reason)));
            },
            fetchUser: accountName => (dispatch, getState) => {
                let state = getState();
                let user = state.entities.users[accountName];
                if (user && (user.isLoaded || user.isFetching)) return;
                dispatch(new UserAction(accountName, __WEBPACK_IMPORTED_MODULE_2__asyncActionType__["a" /* AsyncActionType */].Request));
                __WEBPACK_IMPORTED_MODULE_3__sppnpshim__["b" /* UserProfileManager */].getPropertiesFor(accountName).then(profile => dispatch(new UserAction(accountName, __WEBPACK_IMPORTED_MODULE_2__asyncActionType__["a" /* AsyncActionType */].Response, profile))).catch(reason => dispatch(new UserAction(accountName, __WEBPACK_IMPORTED_MODULE_2__asyncActionType__["a" /* AsyncActionType */].Error, reason)));
            },
            fetchUsers: accountNames => (dispatch, getState) => {
                let state = getState();
                accountNames.forEach(an => {
                    let user = state.entities.users[an];
                    if (user && (user.isLoaded || user.isFetching)) return;
                    __WEBPACK_IMPORTED_MODULE_3__sppnpshim__["b" /* UserProfileManager */].getPropertiesFor(an).then(profile => dispatch(new UserAction(an, __WEBPACK_IMPORTED_MODULE_2__asyncActionType__["a" /* AsyncActionType */].Response, profile))).catch(reason => dispatch(new UserAction(an, __WEBPACK_IMPORTED_MODULE_2__asyncActionType__["a" /* AsyncActionType */].Error, reason)));
                });
            }
        };
    }
    getActions() {
        return this.actions;
    }

    getInitialState() {
        return {
            entities: {
                users: {
                    currentUser: undefined
                }
            }
        };
    }

    checkActionType(action) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_typed__["isActionType"])(action, UserAction) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_typed__["isActionType"])(action, CurrentUserAction) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_typed__["isActionType"])(action, BulkUserAction);
    }

    getReducer(state, action) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_typed__["isActionType"])(action, CurrentUserAction)) {
            const entity = action.asyncOp == __WEBPACK_IMPORTED_MODULE_2__asyncActionType__["a" /* AsyncActionType */].Response ? this.mapPayloadToEntity(action.payload) : action.payload;
            const accountName = action.payload && action.payload.AccountName;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash__["assign"])({}, state, {
                entities: Object.assign({}, state.entities, { users: Object.assign({}, state.entities.users, { currentUser: accountName, [accountName]: Object.assign({}, entity, { isFetching: false, isLoaded: true }) }) })
            });
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_typed__["isActionType"])(action, UserAction)) {
            const isFetching = action.asyncOp == __WEBPACK_IMPORTED_MODULE_2__asyncActionType__["a" /* AsyncActionType */].Request;
            const isLoaded = action.asyncOp == __WEBPACK_IMPORTED_MODULE_2__asyncActionType__["a" /* AsyncActionType */].Response;
            const entity = action.asyncOp == __WEBPACK_IMPORTED_MODULE_2__asyncActionType__["a" /* AsyncActionType */].Response ? this.mapPayloadToEntity(action.payload) : action.payload;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash__["assign"])({}, state, {
                entities: Object.assign({}, state.entities, { users: Object.assign({}, state.entities.users, { [action.accountName]: Object.assign({}, entity, { isFetching: isFetching, isLoaded: isLoaded }) }) })
            });
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_typed__["isActionType"])(action, BulkUserAction)) {
            const states = action.accountNames.map(an => {
                return {
                    [an]: {
                        isFetching: true,
                        isLoaded: false
                    }
                };
            });
            const a2o = __WEBPACK_IMPORTED_MODULE_1_lodash__["assign"].apply({}, states);
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash__["assign"])({}, state, {
                entities: Object.assign({}, state.entities, { users: Object.assign({}, state.entities.users, a2o) })
            });
        }
        return state;
    }
    mapPayloadToEntity(payload) {
        if (payload == undefined || payload == null) {
            return {};
        }
        var upp = payload && payload.UserProfileProperties && __WEBPACK_IMPORTED_MODULE_1_lodash__["assign"].apply({}, payload.UserProfileProperties.results.map(function (kvp) {
            return { [kvp.Key]: kvp.Value };
        }));
        var extendedManagers = payload && payload.ExtendedManagers && payload.ExtendedManagers.results.map(s => s.toLowerCase());
        var peers = payload && payload.Peers && payload.Peers.results.map(s => s.toLowerCase());
        var userProps = {
            accountName: upp.AccountName.toLowerCase(),
            pictureUrl: upp.PictureURL.toLowerCase(),
            firstName: upp.FirstName,
            lastName: upp.LastName,
            workEmail: upp.WorkEmail.toLowerCase(),
            workPhone: upp.WorkPhone.toLowerCase(),
            cellPhone: upp.CellPhone.toLowerCase(),
            jobTitle: upp["SPS-JobTitle"].toLowerCase(),
            department: upp["SPS-Department"].toLowerCase(),
            division: upp.Division.toLowerCase(),
            office: upp.Office,
            hashTags: upp["SPS-HashTags"].toLowerCase().split('|'),
            interests: upp["SPS-Interests"].toLowerCase(),
            birthday: new Date(upp["SPS-Birthday"]),
            manager: upp.Manager.toLowerCase(),
            extendedManagers: extendedManagers,
            peers: peers
        };
        return userProps;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SPRUser;


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
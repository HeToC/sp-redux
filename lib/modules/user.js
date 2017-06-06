var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { typeName, isActionType, Action } from 'redux-typed';
import { assign } from 'lodash';
import { AsyncActionType } from './../asyncActionType';
import { UserProfileManager } from './../sppnpshim';
let UserAction = class UserAction extends Action {
    constructor(accountName, asyncOp, payload) {
        super();
        this.accountName = accountName;
        this.asyncOp = asyncOp;
        this.payload = payload;
    }
};
UserAction = __decorate([
    typeName("@@SP-REDUX/USER")
], UserAction);
export { UserAction };
;
let BulkUserAction = class BulkUserAction extends Action {
    constructor(accountNames) {
        super();
        this.accountNames = accountNames;
    }
};
BulkUserAction = __decorate([
    typeName("@@SP-REDUX/USERS")
], BulkUserAction);
export { BulkUserAction };
;
let CurrentUserAction = class CurrentUserAction extends Action {
    constructor(asyncOp, payload) {
        super();
        this.asyncOp = asyncOp;
        this.payload = payload;
    }
};
CurrentUserAction = __decorate([
    typeName("@@SP-REDUX/USER#CURRENT")
], CurrentUserAction);
export { CurrentUserAction };
;
export class SPRUser {
    constructor() {
        this.actions = {
            fetchCurrentUser: () => (dispatch, getState) => {
                let state = getState();
                if (state.entities.users.currentUser)
                    return;
                UserProfileManager.myProperties.get()
                    .then(profile => dispatch(new CurrentUserAction(AsyncActionType.Response, profile)))
                    .catch(reason => dispatch(new CurrentUserAction(AsyncActionType.Error, reason)));
            },
            fetchUser: (accountName) => (dispatch, getState) => {
                let state = getState();
                let user = state.entities.users[accountName];
                if (user && (user.isLoaded || user.isFetching))
                    return;
                dispatch(new UserAction(accountName, AsyncActionType.Request));
                UserProfileManager.getPropertiesFor(accountName)
                    .then(profile => dispatch(new UserAction(accountName, AsyncActionType.Response, profile)))
                    .catch(reason => dispatch(new UserAction(accountName, AsyncActionType.Error, reason)));
            },
            fetchUsers: (accountNames) => (dispatch, getState) => {
                let state = getState();
                accountNames.forEach(an => {
                    let user = state.entities.users[an];
                    if (user && (user.isLoaded || user.isFetching))
                        return;
                    UserProfileManager.getPropertiesFor(an)
                        .then(profile => dispatch(new UserAction(an, AsyncActionType.Response, profile)))
                        .catch(reason => dispatch(new UserAction(an, AsyncActionType.Error, reason)));
                });
            }
        };
    }
    getActions() {
        return this.actions;
    }
    ;
    getInitialState() {
        return {
            entities: {
                users: {
                    currentUser: undefined
                }
            }
        };
    }
    ;
    checkActionType(action) {
        return isActionType(action, UserAction)
            || isActionType(action, CurrentUserAction)
            || isActionType(action, BulkUserAction);
    }
    ;
    getReducer(state, action) {
        if (isActionType(action, CurrentUserAction)) {
            const entity = action.asyncOp == AsyncActionType.Response ? this.mapPayloadToEntity(action.payload) : action.payload;
            const accountName = action.payload && action.payload.AccountName;
            return assign({}, state, {
                entities: Object.assign({}, state.entities, { users: Object.assign({}, state.entities.users, { currentUser: accountName, [accountName]: Object.assign({}, entity, { isFetching: false, isLoaded: true }) }) })
            });
        }
        if (isActionType(action, UserAction)) {
            const isFetching = action.asyncOp == AsyncActionType.Request;
            const isLoaded = action.asyncOp == AsyncActionType.Response;
            const entity = action.asyncOp == AsyncActionType.Response ? this.mapPayloadToEntity(action.payload) : action.payload;
            return assign({}, state, {
                entities: Object.assign({}, state.entities, { users: Object.assign({}, state.entities.users, { [action.accountName]: Object.assign({}, entity, { isFetching: isFetching, isLoaded: isLoaded }) }) })
            });
        }
        if (isActionType(action, BulkUserAction)) {
            const states = action.accountNames.map((an) => {
                return {
                    [an]: {
                        isFetching: true,
                        isLoaded: false,
                    }
                };
            });
            const a2o = assign.apply({}, states);
            return assign({}, state, {
                entities: Object.assign({}, state.entities, { users: Object.assign({}, state.entities.users, a2o) })
            });
        }
        return state;
    }
    mapPayloadToEntity(payload) {
        if (payload == undefined || payload == null) {
            return {};
        }
        var upp = payload
            && payload.UserProfileProperties
            && assign.apply({}, payload.UserProfileProperties.results
                .map(function (kvp) { return { [kvp.Key]: kvp.Value }; }));
        var extendedManagers = payload
            && payload.ExtendedManagers
            && payload.ExtendedManagers.results.map((s) => s.toLowerCase());
        var peers = payload
            && payload.Peers
            && payload.Peers.results.map((s) => s.toLowerCase());
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
//# sourceMappingURL=user.js.map
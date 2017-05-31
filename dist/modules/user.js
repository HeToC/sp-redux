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
export class SPRUser {
    constructor() {
        this.actions = {
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
                throw "NYE";
            }
        };
    }
    checkActionType(action) {
        return isActionType(action, UserAction);
    }
    ;
    getActions() {
        return this.actions;
    }
    ;
    getInitialState() {
        return {
            entities: {
                users: []
            }
        };
    }
    ;
    getReducer(state, action) {
        const isFetching = action.asyncOp == AsyncActionType.Request;
        const isLoaded = action.asyncOp == AsyncActionType.Response;
        return assign({}, state, {
            entities: Object.assign({}, state.entities, { users: Object.assign({}, state.entities.users, { [action.accountName]: Object.assign({}, this.mapPayloadToEntity(action.payload), { isFetching: isFetching, isLoaded: isLoaded }) }) })
        });
    }
    mapPayloadToEntity(payload) {
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
            pictureUrl: upp.PictureUrl.toLowerCase(),
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
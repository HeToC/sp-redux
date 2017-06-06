import { typeName, isActionType, Action, Reducer, ActionCreatorGeneric} from 'redux-typed';
import { assign } from 'lodash';
import { sp as SP } from 'sp-pnp-js';

import { AsyncActionType } from './../asyncActionType';
import { ISPRModule } from './ISPRModule';

import { UserProfileManager } from './../sppnpshim';

@typeName("@@SP-REDUX/USER")
export class UserAction extends Action {
    constructor(public accountName: string, public asyncOp: AsyncActionType, public payload?: any) {
        super();
    }
};

@typeName("@@SP-REDUX/USERS")
export class BulkUserAction extends Action {
    constructor(public accountNames: string[]) {
        super();
    }
};

@typeName("@@SP-REDUX/USER#CURRENT")
export class CurrentUserAction extends Action {
    constructor(public asyncOp: AsyncActionType, public payload?: any) {
        super();
    }
};

export class SPRUser implements ISPRModule {
    actions: any;
    constructor() {
        this.actions = {
            fetchCurrentUser: (): ActionCreatorGeneric<any> => (dispatch, getState) => {
                let state = getState();
                if (state.entities.users.currentUser)
                    return;
                
                UserProfileManager.myProperties.get()
                    .then(profile => dispatch(new CurrentUserAction(AsyncActionType.Response, profile)))
                    .catch(reason => dispatch(new CurrentUserAction(AsyncActionType.Error, reason)));
            },
            fetchUser: (accountName: string): ActionCreatorGeneric<any> => (dispatch, getState) => {
                let state = getState();
                let user = state.entities.users[accountName];

                if (user && (user.isLoaded || user.isFetching))
                    return;
                
                dispatch(new UserAction(accountName, AsyncActionType.Request));
                    
                UserProfileManager.getPropertiesFor(accountName)
                    .then(profile => dispatch(new UserAction(accountName, AsyncActionType.Response, profile)))
                    .catch(reason => dispatch(new UserAction(accountName, AsyncActionType.Error, reason)));
            },
            fetchUsers: (accountNames: string[]): ActionCreatorGeneric<any> => (dispatch, getState) => {
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

    public getActions() {
        return this.actions;
    };

    public getInitialState() {
        return {
            entities: {
                users: { 
                    currentUser: undefined
                }
            }
        };
    };

    public checkActionType(action) {
        return isActionType(action, UserAction)
            || isActionType(action, CurrentUserAction)
            || isActionType(action, BulkUserAction);
    };

    public getReducer(state: any, action: Action): any {
        if (isActionType(action, CurrentUserAction)) {
            const entity = action.asyncOp == AsyncActionType.Response ? this.mapPayloadToEntity(action.payload) : action.payload;

            const accountName = (action.payload ? action.payload.AccountName : "").toLowerCase();
            return assign({}, state, {
                entities: {
                    ...state.entities,
                    users: {
                        ...state.entities.users,
                        currentUser: accountName,
                        [accountName]: {
                            ...entity,
                            isFetching: false,
                            isLoaded: true
                        }
                    }
                }
            });
        }
        
        if (isActionType(action, UserAction)) {
            const isFetching = action.asyncOp == AsyncActionType.Request;
            const isLoaded = action.asyncOp == AsyncActionType.Response;
            const entity = action.asyncOp == AsyncActionType.Response ? this.mapPayloadToEntity(action.payload) : action.payload;

            return assign({}, state, {
                entities: {
                    ...state.entities,
                    users: {
                        ...state.entities.users,
                        [action.accountName]: {
                            ...entity,
                            isFetching: isFetching,
                            isLoaded: isLoaded,
                        }
                    }
                }
            });
        }

        if (isActionType(action, BulkUserAction)) { 
            const states = action.accountNames.map((an) => {
                return {
                    [an]: {
                        isFetching: true,
                        isLoaded: false,
                    }
                }
            });

            const a2o = assign.apply({}, states);

            return assign({}, state, {
                entities: {
                    ...state.entities,
                    users: {
                        ...state.entities.users,
                        ...a2o
                    }
                }
            });
        }
        return state;
    }

    public mapPayloadToEntity(payload: any): any { 
        if (payload == undefined || payload == null) { 
            return {};
        }
        var upp = payload
            && payload.UserProfileProperties
            && assign.apply({},
                payload.UserProfileProperties.results
                    .map(function(kvp) { return { [kvp.Key]: kvp.Value } }));
    
        var extendedManagers = payload
            && payload.ExtendedManagers
            && payload.ExtendedManagers.results.map((s: string) => s.toLowerCase());
    
        var peers = payload
            && payload.Peers
            && payload.Peers.results.map((s: string) => s.toLowerCase());
    
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
            birthday: new Date(upp["SPS-Birthday"]), // TODO: moment this date
            manager: upp.Manager.toLowerCase(),
            extendedManagers: extendedManagers,
            peers: peers
        };
        return userProps;
    }    
}
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


export class SPRUser implements ISPRModule {
    actions: any;
    constructor() {
        this.actions = {
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
                throw "NYE";
            }
        };
    }

    public checkActionType(action) {
        return isActionType(action, UserAction);
    };

    public getActions() {
        return this.actions;
    };

    public getInitialState() {
        return {
            entities: {
                users: []
            }
        };
    };

    public getReducer(state: any, action: UserAction): any {
        if (isActionType(action, UserAction)) {
            const isFetching = action.asyncOp == AsyncActionType.Request;
            const isLoaded = action.asyncOp == AsyncActionType.Response;

            return assign({}, state, {
                entities: {
                    ...state.entities,
                    users: {
                        ...state.entities.users,
                        [action.accountName]: {
                            ...this.mapPayloadToEntity(action.payload),
                            isFetching: isFetching,
                            isLoaded: isLoaded,
                        }
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
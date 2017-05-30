import { typeName, isActionType, Action, Reducer, ActionCreatorGeneric} from 'redux-typed';
import { assign } from 'lodash';
import { sp as SP } from 'sp-pnp-js';

import { AsyncActionType } from './../asyncActionType';

@typeName("@@SP-REDUX/USER")
export class UserAction extends Action {
    constructor(public accountName: string, public asyncOp: AsyncActionType, public payload?: any) {
        super();
    }
};

export const actionCreator = {
    fetchUser: (accountName: string): ActionCreatorGeneric<any> => (dispatch, getState) => {
        dispatch(new UserAction(accountName, AsyncActionType.Request));
        SP.profiles.getPropertiesFor(accountName)
            .then(profile => dispatch(new UserAction(accountName, AsyncActionType.Response, profile)))
            .catch(reason => dispatch(new UserAction(accountName, AsyncActionType.Error, reason)));
    }
};

export const reducerUsers: Reducer<any> = (usersState, action: UserAction) => {
    if (isActionType(action, UserAction)) {
        const isFetching = action.asyncOp == AsyncActionType.Request;

        return assign({}, usersState, {
            ...usersState,
            [action.accountName]: {
                ...action.payload,
                isFetching: isFetching
            }
        });
    };
};
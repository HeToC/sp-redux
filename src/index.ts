import { isActionType, Reducer } from 'redux-typed';
import { assign } from 'lodash';

import * as User from './modules/user';

export { AsyncActionType } from './asyncActionType';
export { UserAction } from './modules/user';

export const SPRedux = (reducer) => (state, action) => {
    var newState = assign({}, state);

    if (isActionType(action, User.UserAction)) {
        newState = assign(newState, {
            'sp-redux': {
                ...state['sp-redux'],
                users: User.reducerUsers(state['sp-redux'].users, action)
            }
        });
    }
    return reducer(newState, action);
};

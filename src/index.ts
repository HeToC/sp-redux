import { isActionType, Reducer } from 'redux-typed';
import { assign } from 'lodash';

import * as User from './modules/user';

export { AsyncActionType } from './asyncActionType';
export { UserAction } from './modules/user';

export const reducer: Reducer<any> = (state, action) => {
    if (isActionType(action, User.UserAction)) {
        return assign({}, state, {
            'sp-redux': {
                ...state['sp-redux'],
                users: User.reducerUsers(state['sp-redux'].users, action)
            }
        });
    } else {
        return state || {
            'sp-redux': {
                users: {

                }
            }
        };
    }
};
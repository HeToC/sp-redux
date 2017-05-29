import { ActionCreatorsMapObject } from 'redux';
import { typeName, isActionType, Action, Reducer, ActionCreatorGeneric } from 'redux-typed';
import { assign } from 'lodash';

import { AsyncActionType } from './../asyncActionType';

@typeName("@@SP-REDUX/USER")
export class UserAction extends Action {
    constructor(public accountName: string, public asyncOp: AsyncActionType, public payload: any) {
        super();
    }
}

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



import { Action } from 'redux-typed';
import { AsyncActionType } from './../asyncActionType';
import { ISPRModule } from './ISPRModule';
export declare class UserAction extends Action {
    accountName: string;
    asyncOp: AsyncActionType;
    payload: any;
    constructor(accountName: string, asyncOp: AsyncActionType, payload?: any);
}
export declare class BulkUserAction extends Action {
    accountNames: string[];
    constructor(accountNames: string[]);
}
export declare class CurrentUserAction extends Action {
    asyncOp: AsyncActionType;
    payload: any;
    constructor(asyncOp: AsyncActionType, payload?: any);
}
export declare class SPRUser implements ISPRModule {
    actions: any;
    constructor();
    getActions(): any;
    getInitialState(): {
        entities: {
            users: {
                currentUser: any;
            };
        };
    };
    checkActionType(action: any): boolean;
    getReducer(state: any, action: Action): any;
    mapPayloadToEntity(payload: any): any;
}

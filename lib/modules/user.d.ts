import { Action } from 'redux-typed';
import { AsyncActionType } from './../asyncActionType';
import { ISPRModule } from './ISPRModule';
export declare class UserAction extends Action {
    accountName: string;
    asyncOp: AsyncActionType;
    payload: any;
    constructor(accountName: string, asyncOp: AsyncActionType, payload?: any);
}
export declare class SPRUser implements ISPRModule {
    actions: any;
    constructor();
    checkActionType(action: any): boolean;
    getActions(): any;
    getInitialState(): {
        entities: {
            users: any[];
        };
    };
    getReducer(state: any, action: UserAction): any;
    mapPayloadToEntity(payload: any): any;
}

import { isActionType, Action, Reducer, ActionCreatorGeneric } from 'redux-typed';
import { assign } from 'lodash';

export { initializeDev } from './sppnpshim';

import * as User from './modules/user';

import { ISPRModule } from './modules/ISPRModule';

let bInitialized: boolean = false;
const registeredModules: ISPRModule[] = [ new User.SPRUser() ];

export function registerModule(module: ISPRModule) { 
    registeredModules.push(module);
    
    if (!bInitialized)
        bInitialized = true;
}

export function mutateInitialState(initialState: any): any {
    var initialStates = registeredModules.map((m: ISPRModule) => { return m.getInitialState() });
    return assign.apply({}, [initialState, ...initialStates]);
};
    
export const mutateReducer = (reducer: Reducer<any>) => (state: any, action: Action) => {
    for (var i = 0; i < registeredModules.length; i++) { 
        var m = registeredModules[i];
        if (m.checkActionType(action))
            return assign({}, state, m.getReducer(state, action));
    }
    return reducer(state, action);
};


export function mutateActionCreator(wrappedActionCreator: any): any {
    var actions = {};
    actions = assign({}, wrappedActionCreator);
    registeredModules.forEach((m: ISPRModule) => {
        var moduleActions = m.getActions();
        actions = assign({}, actions,  moduleActions);
    });
    return actions;
};
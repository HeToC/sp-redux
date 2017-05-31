import { assign } from 'lodash';
export { initializeDev } from './sppnpshim';
import * as User from './modules/user';
let bInitialized = false;
const registeredModules = [new User.SPRUser()];
export function registerModule(module) {
    registeredModules.push(module);
    if (!bInitialized)
        bInitialized = true;
}
export function mutateInitialState(initialState) {
    var initialStates = registeredModules.map((m) => { m.getInitialState(); });
    return assign.apply({}, [initialState, ...initialStates]);
}
;
export const mutateReducer = (reducer) => (state, action) => {
    registeredModules.forEach((m) => {
        if (m.checkActionType(action))
            return assign({}, m.getReducer(state, action));
    });
    return reducer(state, action);
};
export function mutateActionCreator(wrappedActionCreator) {
    var actions = {};
    actions = assign({}, wrappedActionCreator);
    registeredModules.forEach((m) => {
        var moduleActions = m.getActions();
        actions = assign({}, actions, moduleActions);
    });
    return actions;
}
;
//# sourceMappingURL=index.js.map
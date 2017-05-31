export interface ISPRModule { 
    checkActionType(action);
    getActions();
    getInitialState();
    getReducer(state, action): any;
}
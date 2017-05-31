export interface ISPRModule {
    checkActionType(action: any): any;
    getActions(): any;
    getInitialState(): any;
    getReducer(state: any, action: any): any;
}

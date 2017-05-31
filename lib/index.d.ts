import { Action, Reducer } from 'redux-typed';
export { initializeDev } from './sppnpshim';
import { ISPRModule } from './modules/ISPRModule';
export declare function registerModule(module: ISPRModule): void;
export declare function mutateInitialState(initialState: any): any;
export declare const mutateReducer: (reducer: Reducer<any>) => (state: any, action: Action) => any;
export declare function mutateActionCreator(wrappedActionCreator: any): any;

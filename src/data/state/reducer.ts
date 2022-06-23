import {HYDRATE} from 'next-redux-wrapper';
import {combineReducers} from 'redux';
import {ClientState} from './client/state';
import HydrateAction from './hydrate-action';
import {productsReducer} from "./client/products/reducer";
import {authReducer} from "./client/auth/reducer";

export interface AppState {
    client?: ClientState
}

const initialState: AppState = {client: undefined};

export const clientReducer = combineReducers({
    // persisted: persistCombineReducers({key: "persisted", storage}, {}),
    products: productsReducer,
    auth: authReducer,
});

// export const staticReducer = combineReducers({});

export const rootReducer = (state: AppState = initialState, action: any | HydrateAction): AppState => {
    // load the static state on client side
    if (action.type == HYDRATE)
        return {...state};

    return {
        ...state,
        client: clientReducer(state.client, action) as ClientState,
    };
};
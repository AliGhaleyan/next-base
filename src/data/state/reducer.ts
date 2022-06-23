import {HYDRATE} from 'next-redux-wrapper';
import {combineReducers} from 'redux';
import {ClientState} from './client/state';
import HydrateAction from './hydrate-action';
import {staticReducer} from './static/reducer';
import {StaticState} from './static/state';
import {productsReducer} from "./client/products/reducer";
import {cartReducer} from "./client/cart/reducer";
import {authReducer} from "./client/auth/reducer";
import {adminUserReducer} from "./client/admin/user/reducer";

export interface AppState {
    client?: ClientState
    static?: StaticState
}

const initialState: AppState = {static: undefined, client: undefined};

export const clientReducer = combineReducers({
    // persisted: persistCombineReducers({key: "persisted", storage}, {}),
    products: productsReducer,
    cart: cartReducer,
    auth: authReducer,

    admin: combineReducers({
        user: adminUserReducer
    })
});

// export const staticReducer = combineReducers({});

export const rootReducer = (state: AppState = initialState, action: any | HydrateAction): AppState => {
    // load the static state on client side
    if (action.type == HYDRATE)
        return {...state, static: action.payload.static};

    return {
        ...state,
        client: clientReducer(state.client, action) as ClientState,
        static: staticReducer(state.static, action) as StaticState,
    };
};
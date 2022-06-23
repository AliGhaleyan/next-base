import {useSelector} from "react-redux";
import {PersistPartial} from "redux-persist/es/persistReducer";
import {AppState} from "../reducer";
import {ProductsState} from "./products/reducer";
import {AuthState} from "./auth/reducer";

export interface PersistedState {
    //
}

export interface ClientState {
    persisted: PersistedState & PersistPartial,
    products: ProductsState,
    auth: AuthState,
}

export function useClientSelector<TSelected = unknown>(
    selector: (state: ClientState) => TSelected,
    equalityFn?: (left: TSelected, right: TSelected) => boolean
): TSelected {
    return useSelector<AppState, TSelected>((x: AppState): TSelected => {
        return selector(x?.client as ClientState);
    }, equalityFn);
}
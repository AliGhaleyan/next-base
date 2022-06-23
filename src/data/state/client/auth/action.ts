import HasStatus from "../../../has-status";
import {User} from "../../../model/user.model";
import {RemoteEntityState} from "../../remote-entity";

export namespace AuthAction {
    export const SET_USER = "auth/set-user";
    export const LOGIN = "auth/login";
    export const LOGIN_RESULT = "auth/login/result";
    export const RESET_REQUEST_RESULT = "auth/reset-request/result";

    export interface SetUser {
        type: typeof SET_USER,
        user: User
    }

    export interface Login {
        type: typeof LOGIN,
        mobile: string,
        password: string
    }

    export interface LoginResult extends RemoteEntityState, HasStatus {
        type: typeof LOGIN_RESULT,
    }

    export interface ResetRequestResult {
        type: typeof RESET_REQUEST_RESULT,
    }

    export const setUser = (user: User | null) => ({type: SET_USER, user});

    export const login = (mobile: string, password: string): Login => ({type: AuthAction.LOGIN, mobile, password});

    export const loginResult = (payload: RemoteEntityState & HasStatus): LoginResult =>
        ({type: AuthAction.LOGIN_RESULT, ...payload});

    export const resetRequestResult = (): ResetRequestResult => ({type: RESET_REQUEST_RESULT});

    export type Type = Login | LoginResult | SetUser | ResetRequestResult;
}
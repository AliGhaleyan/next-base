import produce from "immer";
import HasStatus from "../../../has-status";
import {User} from "../../../model/user.model";
import {Status} from "../../../status.enum";
import {RemoteEntityState} from "../../remote-entity";
import {AuthAction} from "./action";
import {container} from "tsyringe";
import TokenRepository from "../../../util/token-repository";

export interface AuthState extends RemoteEntityState, HasStatus {
    user: User | null
}

const initialState: AuthState = {
    status: Status.Idle,
    hasError: false,
    user: null
};

const tokenRepository = container.resolve(TokenRepository);
initialState.user = tokenRepository.get();

export const authReducer = produce(handler, initialState);

function handler(draft: AuthState, action: AuthAction.Type) {
    switch (action.type) {
        case AuthAction.LOGIN:
        case AuthAction.REGISTER:
            draft.status = Status.Loading;
            draft.hasError = false;
            break;
        case AuthAction.SET_USER:
            draft.user = action.user;
            break;
        case AuthAction.LOGIN_RESULT:
            draft.status = action.status;
            draft.hasError = action.hasError;
            draft.message = action.message;
            break;
        case AuthAction.RESET_REQUEST_RESULT:
            draft.hasError = false;
            draft.status = Status.Idle;
            break;
    }
}
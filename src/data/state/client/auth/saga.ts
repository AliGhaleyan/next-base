import {call, put, takeLatest} from "@redux-saga/core/effects";
import {container} from "tsyringe";
import {Token} from "../../../model/token.model";
import AuthenticatorService from "../../../service/authenticator.service";
import {Status} from "../../../status.enum";
import TokenRepository from "../../../util/token-repository";
import {AuthAction} from "./action";
import {getExceptionErrorMessage} from "../../../../helpers";

function* login({mobile, password}: AuthAction.Login) {
    const {acquireToken} = container.resolve(AuthenticatorService);
    const tokenRepository = container.resolve(TokenRepository);

    try {
        const response: Token = yield call(acquireToken, {mobile, password});
        tokenRepository.store(response);
        yield put(AuthAction.setUser(tokenRepository.get()));
        yield put(AuthAction.loginResult({status: Status.Success, hasError: false}));
    } catch (e) {
        console.log(getExceptionErrorMessage(e), e);
        yield put(AuthAction.loginResult({
            status: Status.Failure,
            hasError: true,
            message: getExceptionErrorMessage(e)
        }));
    }
}

export function* watchAuth() {
    yield takeLatest(AuthAction.LOGIN, login);
}
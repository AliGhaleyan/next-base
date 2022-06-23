import {Store} from "@reduxjs/toolkit";
import {Task} from "redux-saga";
import {all} from "redux-saga/effects";
import {watchAuth} from "./client/auth/saga";

export interface SagaStore extends Store {
    sagaTask?: Task;
}

// sagas
export default function* rootSaga() {
    yield all([
        // normal user
        watchAuth(),
    ]);
}
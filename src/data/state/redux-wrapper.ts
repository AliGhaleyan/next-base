import {Action, AnyAction, Store} from "@reduxjs/toolkit";
import {Config, createWrapper, MakeStore} from "next-redux-wrapper"

/**
 * this is a custom wrapper over the main redux-wrapper, this method must return our object with required initializers
 * @param makeStore
 * @param config
 */
export const createReduxWrapper = <S extends Store = any, A extends Action = AnyAction>(
    makeStore: MakeStore<S>,
    config: Config<S> = {}
) => {
    return createWrapper(makeStore, config);
};

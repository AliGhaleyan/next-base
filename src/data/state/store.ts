import {MakeStore} from 'next-redux-wrapper';
import {applyMiddleware, createStore, Store} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Persistor, persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import {AppState, rootReducer} from './reducer';
import {createReduxWrapper} from './redux-wrapper';
import rootSaga, {SagaStore} from './saga';

export interface PersistedStore extends Store {
    __persistor?: Persistor,
}

// create a makeStore function
const makeStore: MakeStore<Store<AppState>> = () => {
    const isServer = typeof window === 'undefined';
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
    (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

    if (!isServer)
        (store as PersistedStore).__persistor = persistStore(store);

    return store as Store;
};

// export an assembled wrapper
export const wrapper = createReduxWrapper<Store<AppState>, any>(makeStore, {debug: false});
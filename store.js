import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './src/redux/sagas';
import rootReducer from './src/redux/reducers/index';

const sagaMiddleware = createSagaMiddleware();
console.log("__DEV__", (__DEV__))
const composeEnhancers =
    (typeof window !== 'undefined' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga);

export default store;

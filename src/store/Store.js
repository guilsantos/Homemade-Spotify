import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import createSagaMiddleware from 'redux-saga'

import RootReducer from "./RootReducer";
import RootSaga from "./RootSaga"

const sagaMiddleware = createSagaMiddleware()

const middleware = applyMiddleware(sagaMiddleware);

const Store = createStore(RootReducer, composeWithDevTools(middleware));
sagaMiddleware.run(RootSaga)

export default Store;

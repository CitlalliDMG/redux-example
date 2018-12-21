import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers";
import rootSaga from "./sagas";

const initialState = {};

const sagaMiddleware = createSagaMiddleware();

export default createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(sagaMiddleware)) 
);

sagaMiddleware.run(rootSaga);
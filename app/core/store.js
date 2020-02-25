import { createStore, applyMiddleware, compose } from "redux";
import allReducers from "./reducers/index";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

// This is for Redux Dev Tools https://github.com/zalmoxisus/redux-devtools-extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(allReducers, {}, composeEnhancers(applyMiddleware(createLogger(), thunk, promise())));

export default store;

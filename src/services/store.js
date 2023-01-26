import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { compose } from "redux";
import { rootReducer } from "./reducers/rootReducer";

const composeEnhancers =
  typeof window === "object" && window.window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(rootReducer, enhancer);

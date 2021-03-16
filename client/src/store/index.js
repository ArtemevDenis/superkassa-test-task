import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./rootReducer";
import thunk from "redux-thunk";




const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const middleware = [
    thunk,
]
export const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(...middleware)
))

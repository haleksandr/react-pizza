import {createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import filterReducer from "./filter-reducer";
import pizzasReducer from "./pizzas-reducer";
import cartReducer from "./cart-reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let reducers = combineReducers({
    filterReducer,
    pizzasReducer,
    cartReducer
});

let store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
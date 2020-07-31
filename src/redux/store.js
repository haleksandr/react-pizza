import {createStore, combineReducers} from "redux";

import filterReducer from './filter-reducer';
import pizzasReducer from "./pizzas-reducer";


let reducers = combineReducers({
    filterReducer, pizzasReducer
});

let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
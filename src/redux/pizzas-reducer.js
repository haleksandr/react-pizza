import axios from 'axios';

const SET_PIZZAS = 'SET-PIZZAS';
const SET_LOADED = 'SET_LOADED';

const initialState = {
    items: [],
    isLoaded: false
};

const pizzasReducer = (state = initialState, action) => {

    let stateCopy;

    switch (action.type) {
        case SET_PIZZAS:
            return {
                ...state,
                items: action.payload,
                isLoaded: true
            }
        case SET_LOADED:
            return {
                ...state,
                isLoaded: action.payload
            }
        default:
            return state;
    }
};

export const setPizzasAC = (items) => ({
    type: SET_PIZZAS,
    payload: items
});

export const setLoadedAC = (payload) => ({
    type: SET_LOADED,
    payload
});

export const fetchPizzas = (sortBy, category) => (dispatch) => {
    dispatch(setLoadedAC(false))
    axios.get(`http://localhost:3001/pizzas?${category !== null 
        ? `category=${category}` 
        : '' }&_sort=${sortBy.type}&_order=${sortBy.order}`).then(({data}) => {
        dispatch(setPizzasAC(data));
    });
};

export default pizzasReducer;
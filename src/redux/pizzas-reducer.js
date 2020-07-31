const SET_PIZZAS = 'SET-PIZZAS';

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
        default:
            return state;
    }
};

export let setPizzas = (items) => {
    return {
        type: SET_PIZZAS,
        payload: items
    }
}

export default pizzasReducer;
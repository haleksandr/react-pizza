const SET_TOTAL_PRICE = 'SET-TOTAL-PRICE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const ADD_PIZZA_CART = 'ADD-PIZZA-CART';

const initialState = {
    items: [],
    totalPrice: 0,
    totalCount: 0
};

const cartReducer = (state = initialState, action) => {

    let stateCopy;

    switch (action.type) {
        case SET_TOTAL_PRICE:
            return {
                ...state,
                totalPrice: action.payload
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.payload
            }
        case ADD_PIZZA_CART: {

            const newItems = {
                ...state.items,
                    ...state.items,
                    [action.payload.id]: !state.items[action.payload.id]
                        ? [action.payload]
                        : [...state.items[action.payload.id], action.payload
                        ]
            };

            return {
                ...state,
                items: newItems,
                totalCount: [].concat.apply([], Object.values(newItems)).length,
                totalPrice: [].concat.apply([], Object.values(newItems))
                    .reduce((sum, obj) => obj.price + sum, 0)
            }
        }
        default:
            return state;
    }
};

export const setTotalPriceAC = (payload) => {
    return {
        type: SET_TOTAL_PRICE,
        payload
    }
};

export const setTotalCountAC = (payload) => {
    return {
        type: SET_TOTAL_COUNT,
        payload
    }
};

export const addPizzaToCartAC = (pizzaObj) => {
    return {
        type: ADD_PIZZA_CART,
        payload: pizzaObj
    }
};


export default cartReducer;
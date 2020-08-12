const SET_SORT = 'SET-SORT';
const SET_CATEGORY = 'SET-CATEGORY';

let initialState = {
    category: null,
    sortBy: {
        type: 'popular',
        order: 'desc'
    }
};

const filterReducer = (state = initialState, action) => {

    let stateCopy;

    switch (action.type) {
        case SET_SORT:
            return {
                ...state,
                sortBy: action.payload
            }
        case SET_CATEGORY:
            return {
                ...state,
                category: action.payload
            }
        default:
            return state;
    }
};

export let onSelectSortAC = (sortIndex) => {
    return {
        type: SET_SORT,
        payload: sortIndex
    }
}

export let setCategoryAC = (categoryIndex) => {
    return {
        type: SET_CATEGORY,
        payload: categoryIndex
    }
}

export default filterReducer;
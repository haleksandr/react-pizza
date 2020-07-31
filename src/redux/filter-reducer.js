const SORT = 'SORT';
const SET_CATEGORY = 'SET_CATEGORY';

let initialState = {
    category: 0,
    sortBy: 'popular'
};

const filterReducer = (state = initialState, action) => {

    let stateCopy;

    switch (action.type) {
        case SORT:
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

export let onSelectSortAC = (name) => {
    return {
        type: SORT,
        payload: name
    }
}

export let setCategoryAC = (categoryIndex) => {
    return {
        type: SET_CATEGORY,
        payload: categoryIndex
    }
}

export default filterReducer;
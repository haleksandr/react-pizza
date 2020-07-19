const SORT = 'SORT';

let initialState = {
    category: 0,
    sortBy: 'popular'
};

const usersReducer = (state = initialState, action) => {

    let stateCopy;

    switch (action.type) {
        case SORT:
            return {
                ...state,
                sortBy: action.payload
            }
    }
};

export let onSelectSortAC = (index) => {
    return {
        type: SORT,
        index
    }
}
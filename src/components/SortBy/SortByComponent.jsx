import React from 'react';
import {connect} from 'react-redux';
import SortBy from "./SortBy";
import {onSelectSortAC, setCategoryAC} from '../../redux/filter-reducer';

let mapStateToProps = (state) => {
    return {}
};

let mapDispatchToProps = (dispatch) => {
    return {
        onSelectSort: (name) => {
            dispatch(onSelectSortAC(name));
        },
        onSelectCategory: (categoryIndex) => {
            dispatch(setCategoryAC(setCategoryAC(categoryIndex)))
        }
    }
};

const SortByContainer = connect(mapStateToProps, mapDispatchToProps)(SortBy);

export default SortByContainer;
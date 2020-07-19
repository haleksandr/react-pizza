import React from 'react';
import {connect} from 'react-redux';
import SortBy from "./SortBy";
import {onSelectSortAC} from '../../redux/filter-reducer';

let mapStateToProps = (state) => {
    return {}
};

let mapDispatchToProps = (dispatch) => {
    return {
        onSelectSort: (index) => {
            dispatch(onSelectSortAC(index));
        }
    }
};

const SortByContainer = connect(mapStateToProps, mapDispatchToProps)(SortBy);

export default SortByContainer;
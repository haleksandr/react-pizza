import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import Categories from "../components/Catigories/Catigories";
import SortBy from "../components/SortBy/SortBy";
import PizzaBlock from './../components/PizzaBlock/PizzaBlock';
import {setCategoryAC, onSelectSortAC} from "../redux/filter-reducer";


console.log(setCategoryAC(2));


const Home = (props) => {

    let itemsCategories = ['All', 'Meat', 'Vegetarian', 'Grill', 'Sharp', 'Closed'];
    let itemsSort = ['popularity', 'price: lowest first', 'price: highest first', 'alphabetically'];

    const dispatch = useDispatch();

    const { items } = useSelector(({ pizzasReducer }) => {
        return {
            items: pizzasReducer.items
        }
    });

   const onSetCategories = React.useCallback((itemsCategories) => {
       dispatch(setCategoryAC(itemsCategories));
       console.log('category changed');
   }, []);

   const onSetSort = React.useCallback((itemsSort) => {
       dispatch(onSelectSortAC(itemsSort));
   }, []);

    return (
        <div>
            <div className="container">
                <div className="content__top">
                    <Categories items={itemsCategories}
                                onClickItem={onSetCategories} />
                    <SortBy items={itemsSort}
                            onClickItem={onSetSort} />
                </div>
                <h2 className="content__title">All pizzas</h2>
                <div className="content__items">
                   {
                        items && items.map( (element) => (
                            <PizzaBlock {...element} />
                        ) )
                    }
                </div>
            </div>
        </div>
    )
}

export default Home;
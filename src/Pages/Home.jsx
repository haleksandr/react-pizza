import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import Categories from "../components/Catigories/Catigories";
import SortBy from "../components/SortBy/SortBy";
import PizzaBlock from './../components/PizzaBlock/PizzaBlock';
import {setCategoryAC, onSelectSortAC} from "../redux/filter-reducer";
import {fetchPizzas} from "../redux/pizzas-reducer";
import PizzaBlockLoading from "../components/PizzaBlock/PizzaBlockLoading";


console.log(setCategoryAC(2));


const Home = (props) => {

    let itemsCategories = ['All', 'Meat', 'Vegetarian', 'Grill', 'Sharp', 'Closed'];
    // let itemsSort = ['popularity', 'price: lowest first', 'price: highest first', 'alphabetically'];
    let itemsSort = [
        {name: 'popularity', type: 'popularity'},
        {name: 'price: lowest first', type: 'price: lowest first'},
        {name: 'price: highest first', type: 'price: highest first'},
        {name: 'alphabetically', type: 'alphabetically'}
    ]

    const dispatch = useDispatch();

    const items = useSelector(({pizzasReducer}) => pizzasReducer.items);
    const isLoading = useSelector(({pizzasReducer}) => pizzasReducer.isLoaded);
    const {category, sortBy} = useSelector(({filterReducer}) => filterReducer);

    useEffect(() => {
        dispatch(fetchPizzas());
    }, [category]);

    const onSetCategories = React.useCallback((itemsCategories) => {
        dispatch(setCategoryAC(itemsCategories));
        console.log('category changed');
    }, []);

/*    const onSetSort = React.useCallback((itemsSort) => {
        dispatch(onSelectSortAC(itemsSort));
    }, []);*/

    const onSelectSortType = React.useCallback((type) => {
        dispatch(onSelectSortAC(type));
    }, []);

    return (
        <div>
            <div className="container">
                <div className="content__top">
                    <Categories items={itemsCategories}
                                onClickCategory={onSetCategories}
                                activeCategory={category}/>
                    <SortBy items={itemsSort}
                            onClickItem={onSelectSortType}
                            activeSort={sortBy} />
                </div>
                <h2 className="content__title">All pizzas</h2>
                <div className="content__items">
                    {
                        isLoading
                            ? items.map((element) => <PizzaBlock {...element} />)
                            : Array(4)
                                .fill(0)
                                .map((_, index) => <PizzaBlockLoading key={index}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Home;
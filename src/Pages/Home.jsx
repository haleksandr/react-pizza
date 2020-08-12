import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import Categories from "../components/Catigories/Catigories";
import SortBy from "../components/SortBy/SortBy";
import PizzaBlock from './../components/PizzaBlock/PizzaBlock';
import {setCategoryAC, onSelectSortAC} from "../redux/filter-reducer";
import {addPizzaToCartAC} from '../redux/cart-reducer';
import {fetchPizzas} from "../redux/pizzas-reducer";
import PizzaBlockLoading from "../components/PizzaBlock/PizzaBlockLoading";


const Home = (props) => {

    let itemsCategories = ['Meat', 'Vegetarian', 'Grill', 'Spicy', 'Closed'];
    let itemsSort = [
        {name: 'popularity', type: 'popular', order: 'desc'},
        {name: 'price: highest first', type: 'price', order: 'desc'},
        {name: 'alphabetically', type: 'name', order: 'desc'}
    ];

    const dispatch = useDispatch();

    const items = useSelector(({pizzasReducer}) => pizzasReducer.items);
    const isLoading = useSelector(({pizzasReducer}) => pizzasReducer.isLoaded);
    const cartItems = useSelector(({cartReducer}) => cartReducer.items);
    const {category, sortBy} = useSelector(({filterReducer}) => filterReducer);

    useEffect(() => {
        dispatch(fetchPizzas(sortBy, category));
    }, [sortBy, category]);

    const onSetCategories = React.useCallback((itemsCategories) => {
        dispatch(setCategoryAC(itemsCategories));
    }, []);

    const onSelectSortType = React.useCallback((type) => {
        dispatch(onSelectSortAC(type));
    }, []);

    const onClickAddPizzaToCart = (obj) => {
        dispatch(addPizzaToCartAC(obj));
        console.log(obj);
    };

    return (
        <div>
            <div className="container">
                <div className="content__top">
                    <Categories items={itemsCategories}
                                onClickCategory={onSetCategories}
                                activeCategory={category}/>
                    <SortBy items={itemsSort}
                            onClickItem={onSelectSortType}
                            activeSort={sortBy.type}/>
                </div>
                <h2 className="content__title">All pizzas</h2>
                <div className="content__items">
                    {
                        isLoading
                            ? items.map((element, index) => <PizzaBlock onClickAddPizzaToCart={onClickAddPizzaToCart}
                                                                        id={element.id}
                                                                        imageUrl={element.imageUrl}
                                                                        name={element.name}
                                                                        sizes={element.sizes}
                                                                        types={element.types}
                                                                        price={element.price}
                                                                        addedCount={cartItems[element.id]
                                                                            && cartItems[element.id].length } />)
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
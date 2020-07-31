import React from 'react';
import Categories from "../components/Catigories/Catigories";
import SortByComponent from "../components/SortBy/SortByComponent";
import PizzaBlock from './../components/PizzaBlock/PizzaBlock';
import {useSelector} from "react-redux";

const Home = (props) => {

    let itemsCategories = ['All', 'Meat', 'Vegetarian', 'Grill', 'Sharp', 'Closed'];
    let sort = ['popularity', 'price: lowest first', 'price: highest first', 'alphabetically'];

    const { items } = useSelector((state) => {
        return {
            items: state.items
        }
    });

    return (
        <div>
            <div className="container">
                <div className="content__top">
                    <Categories items={itemsCategories} />
                    <SortByComponent store={props.store} sort={sort} />
                </div>
                <h2 className="content__title">All pizzas</h2>
                <div className="content__items">
                    {
                        items.map( (element) => (
                            <PizzaBlock {...element} />
                        ) )
                    }
                </div>
            </div>
        </div>
    )
}

export default Home;
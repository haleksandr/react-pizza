import React from 'react';
import Categories from "../components/Catigories/Catigories";
import SortBy from "../components/SortBy/SortBy";
import PizzaBlock from './../components/PizzaBlock/PizzaBlock';

const Home = (props) => {

    console.log('props from Home ' + props);

    let items = ['All', 'Meat', 'Vegetarian', 'Grill', 'Sharp', 'Closed'];
    let sort = ['popularity', 'price: lowest first', 'price: highest first', 'alphabetically'];

    return (
        <div>
            <div className="container">
                <div className="content__top">
                    <Categories items={items} />
                    <SortBy sort={sort} />
                </div>
                <h2 className="content__title">All pizzas</h2>
                <div className="content__items">
                    {
                        props.pizzas.map( (element) => (
                            <PizzaBlock {...element} />
                        ) )
                    }
                </div>
            </div>
        </div>
    )
}

export default Home;
import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import {setPizzas} from "./redux/pizzas-reducer";


function App() {

    const dispatch = useDispatch();


    useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
            dispatch(setPizzas(data.pizzas));
        });
    }, []);


    return (
        <div className="App">
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Route exact path="/" component={Home} />
                    <Route exact path="/cart.html" component={Cart}/>
                </div>
            </div>
        </div>
    )
};

export default App;
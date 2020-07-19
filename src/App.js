import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App(props) {

    const [pizzas, setItemsPizzas] = useState([]);

    useEffect( () => {

        /*fetch('http://localhost:3000/db.json')
            .then( (resp) => resp.json())
            .then( (json) => {
                setItemsPizzas(json.pizzas);
            } );*/

        axios.get('http://localhost:3000/db.json').then(({data}) => {
            setItemsPizzas(data.pizzas);
        } )

    }, [] );

    console.log('pizzas from APP: ' + pizzas);

    return (
        <div className="App">
            <div className="wrapper">
                <Header />
                <div className="content">
                    <Route exact path="/" render={ () => <Home store={props.store} pizzas={pizzas} /> } />
                    <Route exact path="/cart.html" component={Cart} />
                </div>
            </div>
        </div>
    );
}

export default App;

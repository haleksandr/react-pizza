import React, {useEffect} from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';


function App() {
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
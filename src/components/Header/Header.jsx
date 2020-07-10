import React from 'react';
import {Link} from 'react-router-dom';
import logo from "../../assets/img/pizza-logo.svg";
import CartButton from './Cart/CartButton';

const Header = (props) => {
    return (
        <div className="header">
            <div className="container">
                <Link to="/">
                    <div className="header__logo">
                        <img width="38" src={logo} alt="Pizza logo"/>
                        <div>
                            <h1>React Pizza</h1>
                            <p>the most delicious pizza in the universe</p>
                        </div>
                    </div>
                </Link>
                <div className="header__cart">
                    <Link to="/cart.html">
                        <CartButton items={3}/>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Header;
import React from 'react';
import './Cart.scss';

import { ReactComponent as LogoBag } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import {toggleCart} from '../../redux/cart/cartAction';

const Cart = ({toggleCart}) => {
    return (
        <div className="cart-icon" onClick={toggleCart}>
            <LogoBag className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCart: () => dispatch(toggleCart())
    }
}

export default connect(null, mapDispatchToProps)(Cart);
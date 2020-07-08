import React from 'react';
import './Cart.scss';

import { ReactComponent as LogoBag } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import {toggleCart} from '../../redux/cart/cartAction';
import { selectCartItemsCount } from '../../redux/cart/cartSelectors';

const Cart = ({toggleCart, itemCount}) => {
    return (
        <div className="cart-icon" onClick={toggleCart}>
            <LogoBag className="shopping-icon"/>
            <span className="item-count">{itemCount}</span>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        itemCount: selectCartItemsCount(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCart: () => dispatch(toggleCart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
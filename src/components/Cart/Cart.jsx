import React from 'react';
import './Cart.scss';

import { ReactComponent as LogoBag } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import {toggleCart} from '../../redux/cart/cartAction';
import { selectCartItemsCount } from '../../redux/cart/cartSelectors';
import { createStructuredSelector } from 'reselect';

const Cart = ({toggleCart, itemCount}) => {
    return (
        <div className="cart-icon" onClick={toggleCart}>
            <LogoBag className="shopping-icon"/>
            <span className="item-count">{itemCount}</span>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
        itemCount: selectCartItemsCount
});

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCart: () => dispatch(toggleCart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
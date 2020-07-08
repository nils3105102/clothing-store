import React from 'react';
import './CheckoutItem.scss';
import { connect } from 'react-redux';
import { clearItemFromCart } from '../../redux/cart/cartAction';

const CheckoutItem = ({cartItem, clearItemFromCart}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img alt="item" src={imageUrl}/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => clearItemFromCart(cartItem)}>&#10005;</div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearItemFromCart: item => dispatch(clearItemFromCart(item))
    }
}

export default connect(null, mapDispatchToProps)(CheckoutItem);
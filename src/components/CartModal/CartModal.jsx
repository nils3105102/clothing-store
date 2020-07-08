import React from 'react';
import './CartModal.scss';
import CustomButton from '../CustomButton/CustomButton';
import { connect } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../redux/cart/cartSelectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCart } from '../../redux/cart/cartAction';

const CartModal = ({cartItems, history, dispatch}) => {
    return (
        <div className="cart-modal">
            <div className="cart-items">
                {   cartItems.length
                    ? cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
                    : <span className="empty-message">Your cart is empty</span>
                }
            </div>
            <CustomButton onClick={() => {history.push("/checkout"); dispatch(toggleCart())}}>GO TO CHECKOUT</CustomButton>
        </div>
    );
}

const mapStateToProps =  createStructuredSelector({
    cartItems: selectCartItems
 
});

export default withRouter(connect(mapStateToProps)(CartModal));
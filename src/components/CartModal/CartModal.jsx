import React from 'react';
import './CartModal.scss';
import CustomButton from '../CustomButton/CustomButton';
import { connect } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../redux/cart/cartSelectors';

const CartModal = ({cartItems}) => {
    return (
        <div className="cart-modal">
            <div className="cart-items">
                {
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
                }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        cartItems: selectCartItems(state)
    }
}

export default connect(mapStateToProps)(CartModal);
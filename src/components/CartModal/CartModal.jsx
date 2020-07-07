import React from 'react';
import './CartModal.scss';
import CustomButton from '../CustomButton/CustomButton';

const CartModal = () => {
    return (
        <div className="cart-modal">
            <div className="cart-items" />
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
}

export default CartModal;
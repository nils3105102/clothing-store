import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishKey = 'pk_test_51H49uHGXL3p3DqxyFHMd7zmlzsY42l1OTXKFCQ5cO7auPaaAXg1AeVKnpZWzjymYR9206XCIJqLkWaKrCBdXvYkF00tSgXFgtG';

    const onToken = () => {
        alert("Payment Successful");
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="Clothing Store"
            billingAddress
            shippingAddress
            image="https://sendeyo.com/up/d/f3eb2117da"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishKey} 
        />
    );
}

export default StripeButton;
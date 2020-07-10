export const addItemToCart = (cartItems, cartItemToAdd) => {
    const exsistingCartItem = cartItems.find(cartItem => {
        return cartItem.id === cartItemToAdd.id;
    });
    if(exsistingCartItem) {
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id 
        ? {...cartItem, quantity: cartItem.quantity + 1} 
        : cartItem
        );
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}];
}

export const removeItemFromCart = (cartItems, cartItemToDelete) => {
    const exsistingCartItem = cartItems.find(cartItem => {
        return cartItem.id === cartItemToDelete.id;
    });

    if(exsistingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToDelete.id)
    }
    return cartItems.map(cartItem => cartItem.id === cartItemToDelete.id
           ? {...cartItem, quantity: cartItem.quantity - 1}
           : cartItem
    )}
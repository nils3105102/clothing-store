import { TOGGLE_CART, ADD_ITEM } from "./cartActionTypes";

const initialState = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_CART:
            return {
                ...state, hidden: !state.hidden
            };
        case ADD_ITEM:
            return {
                ...state, cartItems: [...state.cartItems, action.payload]
            };
        default:
            return state;
    }
      
}

export default cartReducer;
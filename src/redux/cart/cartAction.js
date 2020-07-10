import {TOGGLE_CART, ADD_ITEM, CLEAR_ITEM_FROM_CART, REMOVE_ITEM} from './cartActionTypes'; 

export const toggleCart = () => {
    return {
        type: TOGGLE_CART
    }
}

export const addItem = (item) => {
    return {
        type: ADD_ITEM,
        payload: item
    }
}

export const removeItem = (item) => {
    return {
        type: REMOVE_ITEM,
        payload: item
    }
}

export const clearItemFromCart = (item) => {
    return {
        type: CLEAR_ITEM_FROM_CART,
        payload: item
    }
}

import {TOGGLE_CART, ADD_ITEM} from './cartActionTypes'; 

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

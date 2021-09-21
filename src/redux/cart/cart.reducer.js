import React from 'react';
import cartActionTypes from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utilities';
// we want to hide the drop down when they click the website
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden //no need to pass payload
            }
        case cartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case cartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        case cartActionTypes.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem => cartItem.id != action.payload.id
                    )
            }
        default:
            return state
    }
}

export default cartReducer;

import cartActionTypes from "./cart.types";
const toggleCartHidden = () => ({ //we dont need payload
    type: cartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = item =>({
    type: cartActionTypes.ADD_ITEM,
    payload: item //payload is the item been added to d cartitem
})
export const removeItem = item =>({
    type: cartActionTypes.REMOVE_ITEM,
    payload: item //payload is the item been added to d cartitem
})
export const clearItemFromCart = item => ({
    type: cartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
  })

export default toggleCartHidden


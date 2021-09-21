import React from 'react';
import { connect } from 'react-redux'
import toggleCartHidden from '../redux/cart/cart.actions';


const CartIcon = ({ toggleCartHidden, itemCount})=> {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
           <img className='shopping-icon' src='https://raw.githubusercontent.com/ZhangMYihua/lesson-14/d7b2a9ac1b8466cb63bb2503e79506093ff79411/src/assets/shopping-bag.svg' alt='cart icon'/> 
           <span className='item-count'>{itemCount}</span>
        </div>
    );
}
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: ()=> dispatch(toggleCartHidden())
})
//selector in redux, computing a new value from the state
const mapStateToProps = ({cart: {cartItems}}) => ({
    itemCount: cartItems.reduce(
       (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 
       0
    )
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
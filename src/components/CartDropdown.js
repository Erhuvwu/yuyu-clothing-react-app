import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CartItem from './CartItem';
import { selectCartItems } from '../redux/cart/cart.selector';

const CartDropdown = ({ cartItems, history }) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems.length ? (
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                ) : (
                    <span className='empty-message'>Your cart is empty!!! Start shopping</span>
                )}
            </div>
            <button onClick= {()=> history.push('/checkout')}>GO TO CHECKOUT</button>

        </div>
    );
}

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
  })

export default withRouter(connect(mapStateToProps)(CartDropdown));
import React from 'react';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className='cart-item'>
    <img className='cart-img' src={imageUrl} alt='item' />
    <div className='item-details'>
      <span className='name'>{name} {quantity} x ${price}</span>
      {/* <span className='price'>
        {quantity} x ${price}</span> */}
    </div>
  </div>
);

export default CartItem;
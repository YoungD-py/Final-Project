import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeItem } from '../features/cart/CartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>Unit Price: ${item.price}</p>
        <p>Quantity: {item.quantity}</p>
        <p>Total: ${item.price * item.quantity}</p>
        <div className="cart-item-controls">
          <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
          <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
          <button onClick={() => dispatch(removeItem(item.id))} className="delete-btn">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;

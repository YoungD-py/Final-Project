import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectTotalPrice } from '../features/cart/CartSlice';
import CartItem from './CartItem';

function ShoppingCart() {
  const cartItems = useSelector(state => state.cart.items);
  const totalPrice = useSelector(selectTotalPrice);
  const navigate = useNavigate();

  return (
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="cart-total">
            <h2>Total: ${totalPrice}</h2>
          </div>
          <div className="cart-actions">
            <button onClick={() => navigate('/plants')} className="continue-shopping-btn">
              Continue Shopping
            </button>
            <button onClick={() => alert('Coming Soon')} className="checkout-btn">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default ShoppingCart;

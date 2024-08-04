import React from 'react';
import { useCart } from '../hooks/useCart';
import BookCard from './BookCard';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) return <p>Your cart is empty.</p>;

  return (
    <div className="container">
      <h1>Your Cart</h1>
      <div className="row">
        {cart.map(book => (
          <div className="col-md-4" key={book.id}>
            <BookCard book={book} />
            <button
              onClick={() => removeFromCart(book.id)}
              className="btn btn-danger mt-2"
            >
              Remove from Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
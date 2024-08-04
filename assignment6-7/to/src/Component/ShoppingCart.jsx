// ShoppingCart.jsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ShoppingCart() {
  const [cart, setCart] = useState([]);
  
  // Example products array with images
  const products = [
    {
      id: 1,
      name: 'Samsung Galaxy S21 FE 5G',
      price: '$799',
      image: 'https://m.media-amazon.com/images/I/815U7KIpuKL._SX522_.jpg'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S21',
      price: '$699',
      image: 'https://m.media-amazon.com/images/I/81JHcYDLcHL._SX522_.jpg'
    },
    {
      id: 3,
      name: 'Google Pixel 6',
      price: '$599',
      image: 'https://m.media-amazon.com/images/I/61tp0bHt1FL._SX522_.jpg'
    }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter(item => item.id !== product.id));
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Shopping Cart</h2>
      
      {/* Products Section */}
      <h3>Products</h3>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-3">
            <div className="card">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.price}</p>
                <button className="btn btn-primary" onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <h3>Cart</h3>
      <ul className="list-group">
        {cart.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <img src={item.image} alt={item.name} style={{ width: '50px', marginRight: '10px' }} />
            {item.name} - {item.price}
            <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCart;

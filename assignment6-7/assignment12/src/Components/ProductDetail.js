import React from 'react';
import { useParams } from 'react-router-dom';

const products = [
  { id: 1, name: 'Product 1', description: 'Description for Product 1' },
  { id: 2, name: 'Product 2', description: 'Description for Product 2' },
  { id: 3, name: 'Product 3', description: 'Description for Product 3' },
];

function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <h1>Product not found</h1>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetail;

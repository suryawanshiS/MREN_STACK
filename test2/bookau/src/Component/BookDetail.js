import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import ReviewForm from './ReviewForm';
import { useCart } from '../hooks/useCart';

const BookDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { data: book, loading, error } = useFetch(`https://freetestapi.com/api/v1/books?limit=5${id}`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading book details.</p>;

  return (
    <div className="container">
      <h1>{book.title}</h1>
      <img
        src={book.cover} // Update this field based on your data
        className="img-fluid mb-3"
        alt={book.title}
      />
      <h3>by {book.author}</h3>
      <p>{book.description}</p>
      <button
        onClick={() => addToCart(book)}
        className="btn btn-primary mt-2"
      >
        Add to Cart
      </button>
      <ReviewForm bookId={id} />
    </div>
  );
};

export default BookDetails;
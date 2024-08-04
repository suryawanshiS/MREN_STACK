import React from 'react';
import { useState, useEffect } from 'react';
import BookCard from './BookCard';
import useFetch from '../hooks/useFetch';
import { useCart } from '../hooks/useCart';

const HomePage = () => {
  const { data: books, loading, error } = useFetch('https://freetestapi.com/api/v1/books?limit=5');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading books.</p>;

  return (
    <div className="container">
      <h1>Book List</h1>
      <div className="row">
        {books.map(book => (
          <div className="col-md-4" key={book.id}>
            <BookCard book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
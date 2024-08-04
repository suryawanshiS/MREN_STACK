import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const AddReview = () => {
  const [title, setTitle] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState('');
  const titleRef = useRef();
  const reviewRef = useRef();
  const ratingRef = useRef();
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault();

    // Assuming review submission is successful
    console.log({ title, review, rating });

    // Redirect to the Cart page
    navigate('/cart');
  };

  return (
    <div className="container">
      <h1>Add Review</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Book Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            ref={titleRef}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="review">Review</label>
          <textarea
            className="form-control"
            id="review"
            ref={reviewRef}
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            className="form-control"
            id="rating"
            ref={ratingRef}
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AddReview;
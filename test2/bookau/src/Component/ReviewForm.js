import React, { useState } from 'react';

const ReviewForm = ({ bookId }) => {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log({ bookId, review, rating });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="review">Review</label>
        <textarea
          className="form-control"
          id="review"
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
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ReviewForm;
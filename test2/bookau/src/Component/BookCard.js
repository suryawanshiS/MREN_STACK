// import React from 'react';
// import { Link } from 'react-router-dom';

// const BookCard = ({ book }) => {
//   return (
//     <div className="card mb-4">
//       <img
//         src={book.cover} // Update this field based on your data
//         className="card-img-top"
//         alt={book.title}
//       />
//       <div className="card-body">
//         <h5 className="card-title">{book.title}</h5>
//         <p className="card-text">by {book.author}</p>
//         <Link to={`/book/${book.id}`} className="btn btn-primary">View Details</Link>
//       </div>
//     </div>
//   );
// };

// export default BookCard;
import React from 'react';

const BookCard = ({ book }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <p className="card-text">{book.author}</p>
        <p className="card-text">Rating: {book.rating}</p>
      </div>
    </div>
  );
};

export default BookCard;

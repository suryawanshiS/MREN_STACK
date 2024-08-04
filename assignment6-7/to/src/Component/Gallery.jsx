// Gallery.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Gallery({ images }) {
  return (
    <div className="container mt-4">
      <h2 className="mb-3">Image Gallery</h2>
      <div className="row">
        {images.map((url, index) => (
          <div key={index} className="col-md-4">
            <img src={url} alt={`Gallery ${index}`} className="img-fluid mb-3 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;


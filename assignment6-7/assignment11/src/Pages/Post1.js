// src/Pages/Post1.js
import React from 'react';

// Define content for Post 1
const post1Content = `
  Breaking News: Major Tech Company Announces New Product Line
  In an exciting development for tech enthusiasts, a major tech company has announced a new line of products that promise to revolutionize the industry. The new product range includes advanced gadgets and innovative software solutions designed to enhance user experience.
  
  Key features include:
  - Cutting-edge technology
  - Sleek and modern design
  - Improved performance and battery life

  The company’s CEO stated, "We are thrilled to unveil these groundbreaking products. Our team has worked tirelessly to bring these innovations to life, and we believe they will set a new standard in the tech industry."

  Stay tuned for more updates as the launch date approaches!
`;

const Post1 = () => {
  return (
    <div className="container mt-4">
      <div className="card mb-4">
        <div className="card-header">
          <h2 className="card-title">Post 1</h2>
        </div>
        <div className="card-body">
          <p className="card-text">{post1Content}</p>
        </div>
        <div className="card-footer text-muted">
          <small>Posted just now</small>
        </div>
      </div>
    </div>
  );
};

export default Post1;

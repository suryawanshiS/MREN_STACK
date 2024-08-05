// src/Pages/Blog.js
import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className="container mt-4">
      <h1 className="display-4">Blog</h1>
      <p className="lead">Welcome to the blog. Here are some posts:</p>
      <ul className="list-unstyled">
        <li><Link className="btn btn-primary mb-2" to="post1">Post 1</Link></li>
        <li><Link className="btn btn-primary" to="post2">Post 2</Link></li>
      </ul>
    </div>
  );
};

export default Blog;

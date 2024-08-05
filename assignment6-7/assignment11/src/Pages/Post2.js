// src/Pages/Post2.js
import React from 'react';

// Define content for Post 2
const post2Content = `
  Latest Developments in Renewable Energy Technology
  As the world continues to focus on sustainability, advancements in renewable energy technology are at the forefront. Recent innovations in solar and wind energy have made significant strides towards reducing our carbon footprint and providing cleaner energy solutions.

  Highlights include:
  - New solar panel designs with higher efficiency
  - Advanced wind turbines capable of generating more power
  - Breakthroughs in energy storage solutions

  Experts predict that these advancements will play a crucial role in achieving global climate goals and fostering a more sustainable future.

  Stay informed about the latest developments in renewable energy as they unfold!
`;

const Post2 = () => {
  return (
    <div className="container mt-4">
      <div className="card mb-4">
        <div className="card-header">
          <h2 className="card-title">Post 2</h2>
        </div>
        <div className="card-body">
          <p className="card-text">{post2Content}</p>
        </div>
        <div className="card-footer text-muted">
          <small>Posted just now</small>
        </div>
      </div>
    </div>
  );
};

export default Post2;

import React, { useState } from 'react';

function SearchFilter() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  const items = [
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Elderberry',
    'Fig',
    'Grape',
    'Honeydew',
  ];

  const handleSearch = () => {
    const results = items.filter(item =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(results);
  };

  return (
    <div className="card p-4">
      <h3 className="mb-4">Search Filter</h3>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search for an item..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button 
          className="btn btn-secondary"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {filteredItems.length > 0 ? (
        <ul className="list-group">
          {filteredItems.map((item, index) => (
            <li key={index} className="list-group-item">
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
}

export default SearchFilter;

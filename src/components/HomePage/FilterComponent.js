import React, { useState } from 'react';

const FilterComponent = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    price: 'any',
    location: 'any',
    popularity: 'any',
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const applyFilters = () => {
    onFilter(filters);
  };

  return (
    <div className="w-full md:w-1/2 mx-auto mb-8 flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4">
      <select name="price" className="border p-2 rounded" onChange={handleFilterChange} value={filters.price}>
        <option value="any">Any Price</option>
        <option value="low">Low Price</option>
        <option value="medium">Medium Price</option>
        <option value="high">High Price</option>
      </select>

      <select name="location" className="border p-2 rounded" onChange={handleFilterChange} value={filters.location}>
        <option value="any">Any Location</option>
        <option value="local">Local</option>
        <option value="international">International</option>
      </select>

      <select name="popularity" className="border p-2 rounded" onChange={handleFilterChange} value={filters.popularity}>
        <option value="any">Any Popularity</option>
        <option value="trending">Trending</option>
        <option value="recommended">Recommended</option>
      </select>

      <button className="bg-accent-orange text-white px-4 py-2 hover:bg-accent-yellow" onClick={applyFilters}>
        Apply Filters
      </button>
    </div>
  );
};

export default FilterComponent;

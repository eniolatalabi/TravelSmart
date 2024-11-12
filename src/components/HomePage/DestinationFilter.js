import React, { useState } from 'react';

export default function DestinationFilter({ onLatitudeFilter }) {
  const [latitude, setLatitude] = useState(1500);

  const handleLatitudeChange = (e) => {
    setLatitude(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLatitudeFilter(latitude);
  };

  return (
    <div className="destination-filter my-4">
      <h2 className="text-xl font-semibold">Filter Destinations by Latitude</h2>
      <form onSubmit={handleSubmit} className="mt-2">
        <label htmlFor="latitude" className="block mb-2">Latitude:</label>
        <input
          type="number"
          id="latitude"
          value={latitude}
          onChange={handleLatitudeChange}
          placeholder="Enter latitude"
          className="p-2 border border-gray-300 rounded w-full"
        />
        <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded w-full hover:bg-blue-700">
          Search
        </button>
      </form>
    </div>
  );
}

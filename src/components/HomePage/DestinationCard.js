import React from 'react';

export default function DestinationCard({ city, country, image }) {
  return (
    <div className="destination-card border rounded-lg shadow-md bg-white overflow-hidden">

      <img src={image} alt={city} className="w-full h-64 object-cover" />


      <div className="p-4 text-center">
        <h3 className="text-lg font-bold">{city}</h3>
        <p className="text-sm text-gray-500">{country}</p>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import DestinationCard from './DestinationCard';
import India from './HomeAssets/india.avif';
import Nigeria from './HomeAssets/Nigeria.avif';
import Dubai from './HomeAssets/Dubai.avif';
import Tokyo from './HomeAssets/tokyo.avif';
import Beijing from './HomeAssets/beijing.avif';
import California from './HomeAssets/resort.avif';
import Warsaw from './HomeAssets/resort2.avif';
import Santorini from './HomeAssets/resort3.avif';
import Sydney from './HomeAssets/resort4.avif';
import Lisbon from './HomeAssets/resort5.avif';
import Munich from './HomeAssets/resort6.avif';
import Paris from './HomeAssets/resort7.avif'; 

export default function Destinations() {
  const [destinations, setDestinations] = useState([]);
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const [searchCity, setSearchCity] = useState('');
  const [sortOrder, setSortOrder] = useState('');

 
  const randomImages = [
    Nigeria, India, Dubai, Tokyo, Beijing,
    California, Warsaw, Santorini, Sydney, Lisbon,
    Munich, Paris 
  ];

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch(
          'https://api.opentripmap.com/0.1/en/places/radius?radius=5000&lon=77.2090&lat=28.6139&apikey=YOUR_API_KEY'
        );
        const data = await response.json();

        // Assign random image if the API doesn't provide one
        const enrichedData = data.features.map((destination) => ({
          city: destination.properties.name,
          country: destination.properties.country || 'Unknown',
          latitude: destination.geometry.coordinates[1],
          image: randomImages[Math.floor(Math.random() * randomImages.length)],
        }));

        setDestinations(enrichedData);
        setFilteredDestinations(enrichedData);
      } catch (error) {
        console.error('Error fetching destinations:', error);

        // Fallback destinations with pre-defined images

    const fallbackData = [
    { city: 'Lagos', country: 'Nigeria', latitude: 6.5244, image: Nigeria },
    { city: 'Delhi', country: 'India', latitude: 28.6139, image: India },
    { city: 'Dubai', country: 'UAE', latitude: 25.276987, image: Dubai },
    { city: 'Tokyo', country: 'Japan', latitude: 35.6762, image: Tokyo },
    { city: 'Beijing', country: 'China', latitude: 39.9042, image: Beijing },
    { city: 'California', country: 'USA', latitude: 36.7783, image: California },
    { city: 'Warsaw', country: 'Poland', latitude: 52.2297, image: Warsaw },
    { city: 'Santorini', country: 'Greece', latitude: 36.3932, image: Santorini },
    { city: 'Sydney', country: 'Australia', latitude: -33.8688, image: Sydney },
    { city: 'Lisbon', country: 'Portugal', latitude: 38.7223, image: Lisbon },
    { city: 'Munich', country: 'Germany', latitude: 48.1351, image: Munich }, 
    { city: 'Paris', country: 'France', latitude: 48.8566, image: Paris }, ];
  
        setDestinations(fallbackData);
        setFilteredDestinations(fallbackData);
      }
    };

    fetchDestinations();
  }, []);


  const handleCitySearch = (e) => {
    setSearchCity(e.target.value);
    const filtered = destinations.filter(destination =>
      destination.city.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredDestinations(filtered);
  };


  const handleSortOrder = (order) => {
    const sorted = [...filteredDestinations].sort((a, b) => {
      if (order === 'A-Z') {
        return a.country.localeCompare(b.country);
      }
      return 0;
    });
    setFilteredDestinations(sorted);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-blue-100">

      <div className="text-center py-20 px-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-primary-dark">
          Discover Your Next Adventure
        </h1>
        <p className="text-lg sm:text-xl text-secondary mt-4">
          Explore the world’s most amazing cities and destinations
        </p>
      </div>
      <div className="max-w-4xl mx-auto py-8 flex justify-center space-x-4">

        <input
          type="text"
          placeholder="Search by city"
          value={searchCity}
          onChange={handleCitySearch}
          className="p-2 border border-gray-300 rounded w-1/2 text-sm focus:outline-none focus:border-primary"
        />


        <select
          onChange={(e) => handleSortOrder(e.target.value)}
          className="p-2 border border-gray-300 rounded w-1/2 text-sm focus:outline-none focus:border-primary"
        >
          <option value="">Sort by Country</option>
          <option value="A-Z">A-Z</option>
        </select>
      </div>

 
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-7xl mx-auto px-4 pb-16" style={{ minHeight: '80vh' }}>
        {filteredDestinations.length > 0 ? (
          filteredDestinations.map((destination, index) => (
            <DestinationCard
              key={index}
              city={destination.city}
              country={destination.country}
              image={destination.image}
            />
          ))
        ) : (
          <p className="text-center col-span-full text-lg">No destinations found.</p>
        )}
      </div>
    </section>
  );
}

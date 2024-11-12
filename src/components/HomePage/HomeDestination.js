import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import India from './HomeAssets/india.avif';
import Nigeria from './HomeAssets/Nigeria.avif';
import Dubai from './HomeAssets/Dubai.avif';

const destinations = [
  { name: 'Nigeria', img: Nigeria },
  { name: 'India', img: India },
  { name: 'Dubai', img: Dubai },
];

export default function HomeDestination() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (destination) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(destination)
        ? prevFavorites.filter((fav) => fav !== destination)
        : [...prevFavorites, destination]
    );
  };

  return (
    <section className="min-h-screen bg-white flex flex-col justify-between items-center text-center px-4 md:px-8 py-16">
      <div className="w-full flex justify-between items-center mb-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
          What's your next destination?
        </h2>

        <Link to="/Destination">
          <button className="border-2 border-primary py-2 px-6 rounded-md text-primary hover:bg-primary hover:text-white transition-colors duration-300 text-lg md:text-xl">
            Explore Destinations
          </button>
        </Link>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto">
        {destinations.map((destination) => (
          <div key={destination.name} className="flex flex-col items-center">
            <div className="relative overflow-hidden rounded-lg shadow-lg group w-full">
              <img
                src={destination.img}
                alt={destination.name}
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="flex justify-between items-center w-full  px-4">

              <div className="text-primary text-xl font-semibold">
                {destination.name}
              </div>

              <div className="relative flex flex-col mt-3  items-center group">
                <div
                  className="text-gray-500 hover:text-red-500 cursor-pointer"
                  onClick={() => toggleFavorite(destination.name)}
                >
                  {favorites.includes(destination.name) ? (
                    <AiFillHeart className="text-3xl transition-colors duration-300" />
                  ) : (
                    <AiOutlineHeart className="text-3xl transition-colors duration-300" />
                  )}
                </div>

                <div className="text-xs mt-1 text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {favorites.includes(destination.name) ? 'Added' : 'Add to favorite'}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

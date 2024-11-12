import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import destination from './Logos/destinations.jpeg';
import deals from './Logos/deals.webp';
import planning from './Logos/easytravel.webp';
import experiences from './Logos/unique.jpeg';

const Card = ({ image, text }) => (
  <div 
    className="w-full h-64 md:h-80 bg-white text-black rounded-lg shadow-lg relative overflow-hidden transition-transform transform hover:scale-105 flex flex-col items-center justify-end"
    style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
  >
    <div className="bg-black bg-opacity-60 p-4 w-full rounded-t-lg text-center">
      <p className="text-sm font-semibold mb-2 text-white">{text}</p>
    </div>
  </div>
);

export default function TeaserSection() {
  const [currentCard, setCurrentCard] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  const cards = [
    { image: destination, text: "Explore exclusive destinations and hidden gems." },
    { image: deals, text: "Find the best travel deals curated for you." },
    { image: planning, text: "Plan your trips with confidence and ease." },
    { image: experiences, text: "Discover unique travel experiences tailored for you." },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <section
      id="service-section"
      className="relative min-h-screen bg-[#0A4F69] text-center text-white flex flex-col justify-center items-center overflow-hidden p-4"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Why TravelSmart?</h2>
      <div className="w-full max-w-4xl mx-auto">
        {isMobile ? (
          <div className="relative">
            <Card {...cards[currentCard]} />
            <button onClick={prevCard} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-r">
              &lt;
            </button>
            <button onClick={nextCard} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-l">
              &gt;
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cards.map((card, index) => (
              <div key={index} className="w-full h-64 md:h-80 relative">
                <Card {...card} />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="mt-8">
        <Link to="/signup" className="bg-accent-orange text-white px-8 py-3 rounded-full hover:bg-accent-yellow transition-colors duration-300">
          Join Now
        </Link>
      </div>
    </section>
  );
}

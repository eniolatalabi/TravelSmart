import React, { useState } from 'react';
import { AiFillBulb } from 'react-icons/ai';
import { FaMountain, FaCity, FaUmbrellaBeach, FaHiking, FaUserFriends, FaHeart } from 'react-icons/fa';
import Slider from 'react-slick';

const tipsData = [
  {
    title: 'Places for Honeymoon',
    description: 'Discover romantic getaways perfect for newlyweds.',
    detail: (
      <span>
        Santorini, Greece<br />
        - Famous for its whitewashed buildings and stunning sunsets.<br />
        - A serene environment, ideal for romantic walks along the cliffs.<br />
        - Many boutique hotels and restaurants with breathtaking caldera views.<br /><br />
  
        Maldives<br />
        - Known for private resorts and overwater bungalows.<br />
        - Crystal-clear water for snorkeling and diving.<br />
        - Ultimate privacy and luxury, perfect for newlyweds.
      </span>
    ),
    icon: <FaHeart className="text-pink-500 text-4xl mx-auto" />
  },
  {
    title: 'Best Family Vacation Spots',
    description: 'Find the perfect destinations for family-friendly fun.',
    detail: (
      <span>
        Orlando, Florida<br />
        - Home to Walt Disney World and Universal Studios.<br />
        - Kid-friendly activities, theme parks, and resorts.<br />
        - Many options for day trips and nearby beaches.<br /><br />
  
        Tokyo, Japan<br />
        - Kid-friendly attractions like Tokyo Disneyland and teamLab Borderless.<br />
        - Safe and clean environment with easy public transport.<br />
        - Plenty of cultural experiences like visiting temples and trying Japanese cuisine.
      </span>
    ),
    icon: <FaUserFriends className="text-blue-500 text-4xl mx-auto" />
  },
  {
    title: 'Top Adventure Destinations',
    description: 'For adrenaline junkies and nature enthusiasts.',
    detail: (
      <span>
        Queenstown, New Zealand<br />
        - Known as the adventure capital of the world.<br />
        - Activities like bungee jumping, skydiving, and jet boating.<br />
        - Stunning landscapes perfect for hiking and exploring.<br /><br />
  
        Patagonia, Argentina/Chile<br />
        - Famous for its breathtaking glaciers, mountain ranges, and remote beauty.<br />
        - Ideal for trekking, rock climbing, and exploring untouched wilderness.<br />
        - Iconic treks include Torres del Paine and Fitz Roy.
      </span>
    ),
    icon: <FaMountain className="text-green-500 text-4xl mx-auto" />
  },
  {
    title: 'Luxury Travel Destinations',
    description: 'Experience the epitome of luxury at these exclusive locations.',
    detail: (
      <span>
        Dubai, UAE<br />
        - Ultra-modern city with high-end shopping, fine dining, and luxury hotels.<br />
        - Attractions like Burj Khalifa and artificial islands like Palm Jumeirah.<br />
        - Luxury desert safaris and private yacht cruises.<br /><br />
  
        Paris, France<br />
        - Known for its world-class hotels and Michelin-starred restaurants.<br />
        - Exclusive experiences like private Seine River cruises and Louvre tours.<br />
        - Shop high-end fashion at the Champs-Élysées and luxury boutiques.
      </span>
    ),
    icon: <FaCity className="text-yellow-500 text-4xl mx-auto" />
  },
  {
    title: 'Top Backpacking Destinations',
    description: 'Explore the world on a budget and get closer to nature.',
    detail: (
      <span>
        Southeast Asia (Thailand, Vietnam, Cambodia)<br />
        - Budget-friendly with numerous hostels and street food options.<br />
        - Diverse culture, history, and stunning natural landscapes.<br />
        - Popular backpacking route includes Bangkok, Siem Reap, and Ho Chi Minh City.<br /><br />
  
        Peru<br />
        - Affordable destination with amazing trekking routes like the Inca Trail.<br />
        - Visit Machu Picchu, one of the New Seven Wonders of the World.<br />
        - Great for exploring indigenous culture, Amazon rainforests, and highlands.
      </span>
    ),
    icon: <FaHiking className="text-purple-500 text-4xl mx-auto" />
  },
  {
    title: 'Best Solo Travel Destinations',
    description: 'Safe and exciting destinations for solo adventurers.',
    detail: (
      <span>
        Iceland<br />
        - Famous for its safety, stunning nature, and ease of travel.<br />
        - Visit the Blue Lagoon, geysers, and witness the Northern Lights.<br />
        - Friendly locals and English widely spoken, making it easy to navigate.<br /><br />
  
        Portugal<br />
        - Vibrant cities like Lisbon and Porto offer history and modern culture.<br />
        - Affordable, safe, and with great public transportation.<br />
        - Ideal for solo beachgoers with its vast coastline and surf spots.
      </span>
    ),
    icon: <FaUmbrellaBeach className="text-orange-500 text-4xl mx-auto" />
  }   
];

const TravelTips = () => {
  const [selectedTip, setSelectedTip] = useState(null);

  const handleCardClick = (tip) => {
    setSelectedTip(tip);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id='traveltips' className="bg-gradient-to-b from-white to-blue-100 min-h-screen flex flex-col justify-center items-center p-8">
      <h1 className="text-3xl font-bold text-center mb-8" style={{ color: '#212529' }}>Discover</h1>
      {selectedTip ? (
        <div className="text-center p-6">
          <h2 className="text-xl font-bold mb-4">{selectedTip.title}</h2>
          <p className="text-lg mb-4">{selectedTip.detail}</p>
          <AiFillBulb className="mx-auto text-4xl text-yellow-500" />
          <button
            className="mt-6 py-2 px-6 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
            onClick={() => setSelectedTip(null)}
          >
            Back to Tips
          </button>
        </div>
      ) : (
        <Slider {...sliderSettings} className="px-4 w-full">
          {tipsData.map((tip, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 h-56 m-2 flex flex-col justify-center items-center cursor-pointer transition-transform hover:scale-105"
              onClick={() => handleCardClick(tip)}
            >
              <div className="mb-4">{tip.icon}</div>
              <h3 className="font-semibold text-lg mb-2 text-center">{tip.title}</h3>
              <p className="text-gray-600 text-sm text-center">{tip.description}</p>
            </div>
          ))}
        </Slider>
      )}
    </section>
  );
};

export default TravelTips;

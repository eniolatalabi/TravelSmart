import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'; 
import LargeHeroButton from './Buttons/LargeHeroButton';
import SearchComponent from './SearchComponent'; 

export default function HomeHero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [greeting, setGreeting] = useState('Hi Smart Traveler!');


  const travelPhrases = [
    { text: "Discover New Adventures", highlight: "Adventures" },
    { text: "Explore Hidden Destinations", highlight: "Destinations" },
    { text: "Find Your Perfect Getaway", highlight: "Perfect" }
  ];

  // Automatically switch between phrases every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % travelPhrases.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // Set greeting based on the time of day
  useEffect(() => {
    const hours = new Date().getHours();
    let greetingText = 'Hi Smart Traveler!';

    if (hours < 12) {
      greetingText = 'Good Morning Smart Traveler!';
    } else if (hours < 18) {
      greetingText = 'Good Afternoon Smart Traveler!';
    } else {
      greetingText = 'Good Evening Smart Traveler!';
    }

    setGreeting(greetingText);
  }, []);

  // Handle search functionality
  const handleSearch = (searchTerm) => {
    console.log('Searching for:', searchTerm);
    // To Implement search logic here
  };

  return (
    <section className="bg-gradient-to-b from-white to-blue-100 h-screen flex flex-col justify-center items-center text-center px-4 md:px-8">
 
      <h2 className="text-2xl md:text-4xl font-semibold mb-2 text-primary-dark">
        {greeting}
      </h2>
      <p className="text-base md:text-xl mb-6 text-primary-dark">
        Ready for your next adventure? Discover new travel tips, deals, and destinations just for you!
      </p>

      {/* Search Component */}
      <div className="w-full md:w-1/2 mx-auto mb-8">
        <SearchComponent onSearch={handleSearch} />
      </div>

      {/* Animated Travel Phrases */}
      <h1 className="text-3xl md:text-6xl font-bold mb-4 text-primary-dark">
        {travelPhrases.map((phrase, index) => (
          <span
            key={index}
            className={`${
              index === currentTextIndex ? 'opacity-100 block' : 'opacity-0 hidden'
            } transition-opacity duration-1000 ease-in-out`}
          >
            {phrase.text.split(' ').map((word, i) => (
              <span
                key={i}
                className={`${
                  word === phrase.highlight ? 'text-orange-400' : 'text-primary-dark'
                }`}
              >
                {word}{" "}
              </span>
            ))}
          </span>
        ))}
      </h1>

 
  <div className="mt-8 space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-center items-center">
        <Link to="/explore-destinations">
          <LargeHeroButton
            color="primary"
            size="small"
            className="w-full md:w-auto text-lg md:text-xl px-6 py-3"
          >
            Explore Destinations
          </LargeHeroButton>
        </Link>

      
        <ScrollLink
          to="deals"
          smooth={true}  
          duration={500}  
        >
          <LargeHeroButton
            color="accent"
            size="small"
            className="w-full md:w-auto text-lg md:text-xl px-6 py-3"
          >
            Find Best Deals
          </LargeHeroButton>
        </ScrollLink>

        <Link to="/book">
          <LargeHeroButton
            color="neutral"
            size="small"
            className="w-full md:w-auto text-lg md:text-xl px-6 py-3"
          >
            Search Flight
          </LargeHeroButton>
        </Link>
      </div>
    </section>
  );
}

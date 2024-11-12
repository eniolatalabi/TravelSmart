import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LargeHeroButton from './LandingButtons/Buttons/LargeHeroButton';

export default function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);


  const travelPhrases = [
    { text: "Discover Your Next Adventure", highlight: "Adventure" },
    { text: "Explore Unique Destinations", highlight: "Destinations" },
    { text: "Find the Best Travel Deals", highlight: "Deals" },
    { text: "Plan Your Perfect Getaway", highlight: "Perfect" }
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % travelPhrases.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-b from-white to-blue-100 h-screen flex flex-col justify-center items-center text-center">

      <h1 className="text-6xl font-bold mb-4 text-primary-dark">
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


      <p className="text-2xl mb-8 text-primary-dark">
        Sign up to unlock <span className="text-accent-color">exclusive</span> travel tips, deals, and destination insights.
      </p>

      <Link to="/signup">
        <LargeHeroButton
          color="accent"
          size="large"
          className="hover:bg-accent-yellow"
        >
          Get Started
        </LargeHeroButton>
      </Link>
    </section>
  );
}

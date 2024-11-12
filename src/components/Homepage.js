import React from 'react';
import HomeHero from './HomePage/HomeHero';
import HomeDestination from './HomePage/HomeDestination';
import Deals from './HomePage/Deals';
import TravelTips from './HomePage/TravelTips';
import Review from './HomePage/Review';




const Homepage = () => {
  return (
    <div>
        <HomeHero />
        <HomeDestination/>
        <Deals/>
        <TravelTips/>
        <Review/>

    </div>
  );
};

export default Homepage;

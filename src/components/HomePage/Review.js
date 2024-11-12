import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Budget from './HomeAssets/budget.avif';
import Tech from './HomeAssets/tech.avif';
import Packing from './HomeAssets/packing.avif';
import Europe from './HomeAssets/europe.avif';
import Culinary from './HomeAssets/culinary.avif';

const blogPosts = [
  {
    id: 1,
    title: "Smart Packing Hacks",
    image: Packing,
    excerpt: "Maximize space and minimize stress."
  },
  {
    id: 2,
    title: "Budget Travel Tips",
    image: Budget,
    excerpt: "Explore more for less."
  },
  {
    id: 3,
    title: "Hidden Gems of Europe",
    image: Europe,
    excerpt: "Discover authentic experiences."
  },
  {
    id: 4,
    title: "Tech for Travelers",
    image: Tech,
    excerpt: "Stay connected on the go."
  },
  {
    id: 5,
    title: "Culinary Adventures",
    image: Culinary,
    excerpt: "Taste the world's flavors."
  }
];

const reviews = [
  {
    id: 1,
    name: "Sarah T.",
    rating: 5,
    comment: "Travel Smart's itinerary planner is a game-changer!"
  },
  {
    id: 2,
    name: "Michael R.",
    rating: 4,
    comment: "Great and easy to use."
  },
  {
    id: 3,
    name: "Elena G.",
    rating: 5,
    comment: "Found amazing off-the-beaten-path experiences."
  }
];

const Review = () => {
  const navigate = useNavigate();
  const [currentBlogIndex, setCurrentBlogIndex] = useState(0);

  const nextBlog = () => {
    setCurrentBlogIndex((prevIndex) => 
      (prevIndex + 1) % (blogPosts.length)
    );
  };

  const prevBlog = () => {
    setCurrentBlogIndex((prevIndex) => 
      (prevIndex - 1 + blogPosts.length) % (blogPosts.length)
    );
  };

  return (
    <div id='review' className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <header className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-0">Travel Insights & Experiences</h1>
        <button 
          className="border-2 border-primary py-2 px-6 rounded-md text-primary hover:bg-primary hover:text-white transition-colors duration-300 text-base sm:text-lg"
          onClick={() => navigate('/community')} 
        >
          Explore Community
        </button>
      </header>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4">Latest Travel Guides</h2>
          <div className="relative">
            <div className="flex overflow-x-hidden">
              {blogPosts.map((post, index) => (
                <div 
                  key={post.id}
                  className={`flex-shrink-0 w-full sm:w-1/2 md:w-1/3 p-2 transition-transform duration-300 ease-in-out ${
                    index >= currentBlogIndex && index < currentBlogIndex + 3 ? 'transform translate-x-0' : 'transform translate-x-full hidden sm:block'
                  }`}
                >
                  <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                    <img src={post.image} alt={post.title} className="w-full h-32 object-cover" />
                    <div className="p-3">
                      <h3 className="font-semibold text-base mb-1">{post.title}</h3>
                      <p className="text-gray-600 text-xs">{post.excerpt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={prevBlog} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-md">
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button onClick={nextBlog} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-md">
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4">Traveler Reviews</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {reviews.map(review => (
              <div key={review.id} className="bg-white rounded-lg shadow-md p-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-sm">{review.name}</span>
                  <span className="text-yellow-500 text-xs">{"★".repeat(review.rating)}</span>
                </div>
                <p className="text-gray-600 text-xs">{review.comment}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Review;

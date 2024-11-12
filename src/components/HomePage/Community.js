import React from 'react';

export default function Community() {
  return (
    <section className="bg-gradient-to-b from-white to-blue-100 h-screen flex flex-col justify-center items-center text-center px-4 md:px-8">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text - primary-dark">
        Welcome to the Smart Travelers Community!
      </h1>

      <p className="text-lg md:text-2xl text-secondary-dark mb-8">
        Join the conversation, share your travel experiences, and connect with fellow explorers.
        Discover hidden gems and tips to make your next adventure unforgettable!
      </p>

      <div className="text-2xl md:text-4xl font-bold text-accent-yellow animate-fadeInOut">
        Coming Soon...
      </div>
    </section>
  );
}

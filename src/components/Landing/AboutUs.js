import React from 'react';
import { FaHeadset, FaUserTie, FaTag, FaSuitcaseRolling } from 'react-icons/fa';

const services = [
  {
    icon: <FaSuitcaseRolling className="text-4xl text-accent-yellow" />,
    header: "Travel Planning",
    description: "Offers insights and recommendations for travel destinations, ensuring you make informed choices for your journey.",
  },
  {
    icon: <FaTag className="text-4xl text-accent-yellow" />,
    header: "Accommodation Comparison",
    description: "Allows users to compare different lodging options suited to various budgets, helping you find the best fit for your stay.",
  },
  {
    icon: <FaUserTie className="text-4xl text-accent-yellow" />,
    header: "Activity and Tour Planning",
    description: "Helps users plan activities and tours at their chosen destinations, ensuring a memorable and engaging travel experience.",
  },
];

export default function AboutUs() {
  return (
    <section
      id="about-us"
      className="relative min-h-screen bg-gradient-neutral text-black flex flex-col justify-center items-center p-6"
    >
      <div className="absolute inset-0 z-[-1] bg-gradient-neutral"></div>
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Do</h2>
        <p className="text-lg md:text-xl animate-fadeInOut">Explore our services designed to make your travel experience seamless and enjoyable.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-primary-dark text-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{service.header}</h3>
            <p className="text-neutral-light">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

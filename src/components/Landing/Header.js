import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import CustomButton from './LandingButtons/Buttons/CustomButton';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header id="landing-home" className="bg-white shadow-md py-4 px-8 flex justify-between items-center relative">
      <div className="text-2xl font-bold text-primary-dark">TravelSmart</div>

      {/* Hamburger Icon */}
      <button
        className="lg:hidden text-primary-dark focus:outline-none"
        onClick={toggleMenu}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      {/* Desktop Menu - Hidden on mobile */}
      <nav className={`hidden lg:flex space-x-6 items-center`}>
        <ScrollLink
          to="home-section"
          smooth={true}
          duration={500}
          className="cursor-pointer text-deep-ocean-blue hover:text-primary-dark"
        >
          Home
        </ScrollLink>
        <ScrollLink
          to="service-section"
          smooth={true}
          duration={500}
          className="cursor-pointer text-deep-ocean-blue hover:text-primary-dark"
        >
          Services
        </ScrollLink>
        <ScrollLink
          to="about-us"
          smooth={true}
          duration={500}
          className="cursor-pointer text-deep-ocean-blue hover:text-primary-dark"
        >
          About Us
        </ScrollLink>
        <ScrollLink
          to="faq-section"
          smooth={true}
          duration={500}
          className="cursor-pointer text-deep-ocean-blue hover:text-primary-dark"
        >
          FAQ
        </ScrollLink>
        <ScrollLink
          to="contact-us"
          smooth={true}
          duration={500}
          className="cursor-pointer text-deep-ocean-blue hover:text-primary-dark"
        >
          Contact Us
        </ScrollLink>

        <Link to="/login">
          <CustomButton
            color="neutral"
            size="medium"
            className="text-deep-ocean-blue hover:bg-primary hover:text-white"
          >
            Login
          </CustomButton>
        </Link>

        <Link to="/signup">
          <CustomButton
            color="accent"
            size="medium"
            className="bg-accent-orange text-white border-none hover:bg-accent-yellow"
          >
            Sign Up
          </CustomButton>
        </Link>
      </nav>

      {/* Mobile Dropdown Menu - Shown only when isOpen is true */}
      {isOpen && (
        <nav className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center space-y-4 py-4">
          <ScrollLink
            to="home-section"
            smooth={true}
            duration={500}
            className="cursor-pointer text-deep-ocean-blue hover:text-primary-dark"
            onClick={toggleMenu}
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="service-section"
            smooth={true}
            duration={500}
            className="cursor-pointer text-deep-ocean-blue hover:text-primary-dark"
            onClick={toggleMenu}
          >
            Services
          </ScrollLink>
          <ScrollLink
            to="about-us"
            smooth={true}
            duration={500}
            className="cursor-pointer text-deep-ocean-blue hover:text-primary-dark"
            onClick={toggleMenu}
          >
            About Us
          </ScrollLink>
          <ScrollLink
            to="faq-section"
            smooth={true}
            duration={500}
            className="cursor-pointer text-deep-ocean-blue hover:text-primary-dark"
            onClick={toggleMenu}
          >
            FAQ
          </ScrollLink>
          <ScrollLink
            to="contact-us"
            smooth={true}
            duration={500}
            className="cursor-pointer text-deep-ocean-blue hover:text-primary-dark"
            onClick={toggleMenu}
          >
            Contact Us
          </ScrollLink>

          <Link to="/login">
            <CustomButton
              color="neutral"
              size="medium"
              className="bg-deep-ocean-blue text-white border-none rounded-5 hover:bg-deep-ocean-blue-dark"
            >
              Login
            </CustomButton>
          </Link>
          <Link to="/signup">
            <CustomButton
              color="accent"
              size="medium"
              className="bg-accent-orange text-white border-none rounded-5 hover:bg-accent-yellow"
            >
              Sign Up
            </CustomButton>
          </Link>
        </nav>
      )}
    </header>
  );
}

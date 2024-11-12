import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import CustomButton from './Buttons/CustomButton';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    navigate('/login');
  };

  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center relative">

      <div className="text-2xl font-bold text-primary-dark">TravelSmart</div>

      {/* Hamburger Icon for Small and Medium Screens */}
      <button
        className="md:hidden text-primary-dark focus:outline-none"
        onClick={toggleMenu}
      >
        {isOpen ? (
          <AiOutlineClose className="w-8 h-8" />
        ) : (
          <AiOutlineMenu className="w-8 h-8" />
        )}
      </button>

 
      <nav className={`hidden md:flex md:space-x-4 lg:space-x-6 items-center`}>
        <Link to="/homepage" className="text-deep-ocean-blue hover:text-primary-dark">Home</Link>
        <Link to="/destination" className="text-deep-ocean-blue hover:text-primary-dark">Destination</Link>
        <Link to="/book" className="text-deep-ocean-blue hover:text-primary-dark">Book Now</Link>
        <Link to="/contact" className="text-deep-ocean-blue hover:text-primary-dark">Contact Us</Link>
        <Link to="/community" className="text-deep-ocean-blue hover:text-primary-dark">Community</Link>
        <Link to="/profile" className="text-deep-ocean-blue hover:text-primary-dark">
          <FaUser className="inline-block w-6 h-6" />
        </Link>
        <CustomButton
          className="bg-deep-ocean-blue text-white border-none rounded hover:bg-deep-ocean-blue-dark text-lg md:text-sm"
          onClick={handleLogout}
        >
          Logout
        </CustomButton>
      </nav>

      {/* Mobile Menu */}
      <nav
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center space-y-6 py-4 transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <Link to="/" className="text-deep-ocean-blue hover:text-primary-dark" onClick={toggleMenu}>Home</Link>
        <Link to="/destination" className="text-deep-ocean-blue hover:text-primary-dark" onClick={toggleMenu}>Destination</Link>
        <Link to="/book" className="text-deep-ocean-blue hover:text-primary-dark" onClick={toggleMenu}>Book Now</Link>
        <Link to="/contact" className="text-deep-ocean-blue hover:text-primary-dark" onClick={toggleMenu}>Contact Us</Link>
        <Link to="/community" className="text-deep-ocean-blue hover:text-primary-dark" onClick={toggleMenu}>Community</Link>
        <Link to="/profile" className="text-deep-ocean-blue hover:text-primary-dark" onClick={toggleMenu}>
          <FaUser className="inline-block w-6 h-6" /> Profile
        </Link>
        <button
          className="text-deep-ocean-blue hover:text-primary-dark"
          onClick={() => {
            handleLogout();
            toggleMenu();
          }}
        >
          Logout
        </button>
      </nav>
    </header>
  );
}
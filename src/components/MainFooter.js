import { Link as ScrollLink } from 'react-scroll';
import { Link as RouteLink } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';
import AptechLogo from './Assets/aptech.png';
import MiddlesexLogo from './Assets/middlesex.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-dark text-neutral-light flex flex-col justify-between">
      <div className="container mx-auto flex flex-col lg:flex-row py-6">
        {/* Footer Links */}
        <div className="flex-1 mb-8 lg:mb-0">
          <h4 className="text-xl font-bold mb-4 text-center lg:text-left">Explore</h4>
          <div className="flex flex-col space-y-2 text-center lg:text-left">
          <RouteLink to="/homepage" className="cursor-pointer hover:text-white">
              Homepage
            </RouteLink>
            <ScrollLink to="service-section" smooth={true} duration={500} className="cursor-pointer hover:text-white">
              Services
            </ScrollLink>
            <ScrollLink to="deals" smooth={true} duration={500} className="cursor-pointer hover:text-white">
              Deals
            </ScrollLink>
            <ScrollLink to="tips" smooth={true} duration={500} className="cursor-pointer hover:text-white">
              Tips
            </ScrollLink>
            <ScrollLink to="contact-us" smooth={true} duration={500} className="cursor-pointer hover:text-white">
              Contact Us
            </ScrollLink>
            <ScrollLink to="book-flight" smooth={true} duration={500} className="cursor-pointer hover:text-white">
              Book a Flight
            </ScrollLink>
            <ScrollLink to="restaurants" smooth={true} duration={500} className="cursor-pointer hover:text-white">
              Restaurants
            </ScrollLink>
            <RouteLink to="/community" className="cursor-pointer hover:text-white">
              Community
            </RouteLink>
            <ScrollLink to="reviews" smooth={true} duration={500} className="cursor-pointer hover:text-white">
              Reviews
            </ScrollLink>
          </div>
        </div>

        {/* Section 2: Sponsors (Column Layout) */}
        <div className="flex-1 flex flex-col items-center lg:items-start mb-8 lg:mb-0">
          <h4 className="text-xl font-bold mb-4 text-center lg:text-left">Our Sponsors</h4>
          <div className="flex flex-col space-y-4">
            <div className="border border-primary-light p-4">
              <a href="https://www.aptech-worldwide.com" target="_blank" rel="noopener noreferrer">
                <img src={AptechLogo} alt="Aptech Logo" className="h-12" />
              </a>
            </div>
            <div className="border border-primary-light p-4">
              <a href="https://www.mdx.ac.uk" target="_blank" rel="noopener noreferrer">
                <img src={MiddlesexLogo} alt="Middlesex University Logo" className="h-12" />
              </a>
            </div>
          </div>
        </div>

        {/* Section 3: Social & Contact Information (Column Layout) */}
        <div className="flex-1 text-center lg:text-left">
          <h4 className="text-xl font-bold mb-4">Connect with Us</h4>
          <div className="flex flex-col space-y-2 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start">
              <FaEnvelope className="mr-2" /> info@travelsmart.com
            </div>
            <div className="flex items-center justify-center lg:justify-start">
              <FaPhone className="mr-2" /> +123 456 7890
            </div>
            <div className="flex justify-center lg:justify-start space-x-4 mt-2">
              <a href="#" className="hover:text-white flex items-center space-x-1">
                <FaFacebookF />
                <span>TravelSmart</span>
              </a>
              <a href="#" className="hover:text-white flex items-center space-x-1">
                <FaTwitter />
                <span>@travelsmart</span>
              </a>
              <a href="#" className="hover:text-white flex items-center space-x-1">
                <FaInstagram />
                <span>@travelsmart</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-neutral-light text-neutral-dark py-2">
        <div className="container mx-auto text-center">
          © DevPros {currentYear} · Privacy · Terms
        </div>
      </div>
    </footer>
  );
}

import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <nav className="mb-4">
          <ul className="flex justify-center space-x-4">
            <li>
              <ScrollLink to="home" smooth={true} duration={800} className="hover:underline cursor-pointer">
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="services" smooth={true} duration={800} className="hover:underline cursor-pointer">
                Services
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="about" smooth={true} duration={800} className="hover:underline cursor-pointer">
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="contact" smooth={true} duration={800} className="hover:underline cursor-pointer">
                Contact
              </ScrollLink>
            </li>
          </ul>
        </nav>
        <div className="text-center">
          <p>&copy; 2024 SMMA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

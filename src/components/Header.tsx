import React, { useState, useEffect, useRef } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';
import "../App.css";
import ServicesHoverAccordion from './ui/ServiceHoverAccordion';

const logoVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)"
  }
};

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollThreshold = 200;
  const location = useLocation();
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsScrolled(currentScrollPos < scrollThreshold || currentScrollPos <= prevScrollPos);
      prevScrollPos = currentScrollPos;
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setShouldAnimate(true);
  }, []);

  return (
    <header
      className={`bg-neutral-900 text-white h-20 p-4 flex justify-between items-center fixed top-0 left-0 w-full z-50 transition-opacity duration-300 ${
        isScrolled ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="logo">
        {location.pathname === '/' ? (
          <ScrollLink to="home" smooth={true} duration={800} className="hover:text-gray-400 cursor-pointer">
            <motion.img
              src="/assets/Brand-images/ram_logo_desktop.png"
              alt="SMMA Logo"
              className="logo_brand"
              initial={shouldAnimate ? "hidden" : false}
              animate={shouldAnimate ? "visible" : false}
              variants={logoVariants}
              transition={{
                default: { duration: 2, ease: "easeInOut" },
                fill: { duration: 2, ease: [1, 0, 0.8, 1] }
              }}
              onAnimationComplete={() => setShouldAnimate(false)}
            />
          </ScrollLink>
        ) : (
          <Link to="/" className="hover:text-gray-400 cursor-pointer">
            <img
              src="/assets/Brand-images/ram_logo_desktop.png"
              alt="SMMA Logo"
              className="logo_brand"
            />
          </Link>
        )}
      </div>

      <nav className="hidden lg:block">
        <ul className="container flex space-x-8">
          <li>
            {location.pathname === '/' ? (
              <ScrollLink to="home" smooth={true} duration={800} className="nav-item">
                Home
              </ScrollLink>
            ) : (
              <Link to="/" className="nav-item">
                Home
              </Link>
            )}
          </li>
          <li>
            <ServicesHoverAccordion />
          </li>
          <li>
            {location.pathname === '/' ? (
              <ScrollLink to="about" smooth={true} duration={800} className="nav-item">
                About
              </ScrollLink>
            ) : (
              <Link to="/#about" className="nav-item">
                About
              </Link>
            )}
          </li>
          <li>
            {location.pathname === '/' ? (
              <ScrollLink to="contact" smooth={true} duration={800} className="nav-item">
                Contact
              </ScrollLink>
            ) : (
              <Link to="/contact-us" className="nav-item">
                Contact
              </Link>
            )}
          </li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      <div className="lg:hidden">
        <button
          className="text-3xl focus:outline-none text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>

        {isMenuOpen && (
          <div
            ref={menuRef}
            className="menu-popup absolute top-16 right-4 w-64 h-auto bg-neutral-800 text-white text-xl rounded-lg shadow-lg p-6 z-50 transition-all duration-300 ease-in-out"
            style={{ maxHeight: '50vh' }} // This limits the height of the menu popup
          >
            <ul className="flex flex-col space-y-4">
              <li>
                {location.pathname === '/' ? (
                  <ScrollLink to="home" smooth={true} duration={800} className="nav-item" onClick={() => setIsMenuOpen(false)}>
                    Home
                  </ScrollLink>
                ) : (
                  <Link to="/" className="nav-item" onClick={() => setIsMenuOpen(false)}>
                    Home
                  </Link>
                )}
              </li>
              <li>
                  <Link to="/services" className="nav-item" onClick={() => setIsMenuOpen(false)}>
                    Services
                  </Link>
              </li>
              <li>
                {location.pathname === '/' ? (
                  <ScrollLink to="about" smooth={true} duration={800} className="nav-item" onClick={() => setIsMenuOpen(false)}>
                    About
                  </ScrollLink>
                ) : (
                  <Link to="/#about" className="nav-item" onClick={() => setIsMenuOpen(false)}>
                    About
                  </Link>
                )}
              </li>
              <li>
                {location.pathname === '/' ? (
                  <ScrollLink to="contact" smooth={true} duration={800} className="nav-item" onClick={() => setIsMenuOpen(false)}>
                    Contact
                  </ScrollLink>
                ) : (
                  <Link to="/contact-us" className="nav-item" onClick={() => setIsMenuOpen(false)}>
                    Contact
                  </Link>
                )}
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

import React, { useState, useEffect, useRef, MutableRefObject } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import "../App.css";
import ServicesHoverAccordion from './ui/ServiceHoverAccordion';
import MobileMenu from './ui/MobileMenu';

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

interface HeaderProps {
  panelRef: MutableRefObject<HTMLDivElement | null>;  // Define the type for panelRef
}

const Header: React.FC<HeaderProps> = ({ panelRef }) => {
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
      <MobileMenu panelRef={panelRef} />
    </header>
  );
};

export default Header;

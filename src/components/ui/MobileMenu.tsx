import React, { useRef, useEffect } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useSpring, animated } from 'react-spring';
import { motion } from 'framer-motion';

interface MobileMenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const menuItems = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'services', label: 'Services', href: '/services' },
  { id: 'about', label: 'About', href: '/#about' },
  { id: 'contact', label: 'Contact', href: '/contact-us' },
];

// Updated variants for the "stack" effect
const menuItemVariants = {
  hidden: { opacity: 0, y: -50, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 15,
    },
  },
};

const menuVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { staggerChildren: 0.1 } },
};

const MobileMenu: React.FC<MobileMenuProps> = ({ isMenuOpen, toggleMenu }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  // Spring animation for the menu's horizontal position
  const [{ x }, api] = useSpring(() => ({
    x: isMenuOpen ? 0 : 100,
    config: { tension: 300, friction: 30 },
  }));

  useEffect(() => {
    api.start({ x: isMenuOpen ? 0 : 100 });
  }, [isMenuOpen, api]);

  return (
    <animated.div
      ref={menuRef}
      style={{
        transform: x.to((value) => `translateX(${value}%)`),
        touchAction: 'none',
        zIndex: 10000,
      }}
      className="fixed top-0 right-0 h-full w-64 bg-black shadow-lg"
    >
      <div className="flex justify-end p-4">
        <button
          onClick={toggleMenu}
          className="p-2 text-white hover:text-gray-300 focus:outline-none focus:ring"
          aria-label="Close menu"
        >
          <X className="h-8 w-8" />
        </button>
      </div>

      {/* Staggered "stack" animation for menu items */}
      <motion.nav className="mt-8" initial="hidden" animate={isMenuOpen ? 'visible' : 'hidden'} variants={menuVariants}>
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <motion.li key={item.id} variants={menuItemVariants}>
              {item.id === 'home' || item.id === 'about' ? (
                <ScrollLink
                  to={item.id}
                  smooth={true}
                  duration={800}
                  className="block px-6 py-3 text-4xl font-medium text-white hover:bg-gray-900"
                  onClick={toggleMenu}
                >
                  {item.label}
                </ScrollLink>
              ) : (
                <Link
                  to={item.href}
                  className="block px-6 py-3 text-4xl font-medium text-white hover:bg-gray-900"
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              )}
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </animated.div>
  );
};

export default MobileMenu;

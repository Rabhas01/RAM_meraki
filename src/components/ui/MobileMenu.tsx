import React from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { animated } from 'react-spring';

interface MobileMenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

interface MenuItem {
  id: string;
  label: string;
  href: string;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isMenuOpen, toggleMenu }) => {
  const menuItems: MenuItem[] = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'services', label: 'Services', href: '/services' },
    { id: 'about', label: 'About', href: '/#about' },
    { id: 'contact', label: 'Contact', href: '/contact-us' },
  ];

  return (
    <>
      {/* Overlay: Covers the entire screen when the menu is open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu} // Clicking on the overlay will close the menu
        />
      )}

      {/* Mobile Menu */}
      <animated.div
        className={`fixed top-0 right-0 h-full w-64 bg-black shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
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
        <nav className="mt-8">
          <ul className="space-y-4">
            {menuItems.map((item: MenuItem) => (
              <li key={item.id}>
                {item.id === 'home' || item.id === 'about' ? (
                  <ScrollLink
                    to={item.id}
                    smooth={true}
                    duration={800}
                    className="block px-6 py-3 text-xl font-medium text-white hover:bg-gray-900"
                    onClick={toggleMenu} // Close menu when link is clicked
                  >
                    {item.label}
                  </ScrollLink>
                ) : (
                  <Link
                    to={item.href}
                    className="block px-6 py-3 text-xl font-medium text-white hover:bg-gray-900"
                    onClick={toggleMenu} // Close menu when link is clicked
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </animated.div>
    </>
  );
};

export default MobileMenu;

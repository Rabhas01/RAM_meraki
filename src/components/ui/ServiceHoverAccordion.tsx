import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

interface ServiceItem {
  title: string;
  link: string;
}

const ServicesHoverMenu: React.FC = () => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const services: ServiceItem[] = [
    { title: 'Web Development', link: '/services/1' },
    { title: 'SEO Optimization', link: '/services/2' },
    { title: 'Social Media Management', link: '/services/3' },
    { title: 'Service 4', link: '/services/4' },
  ];

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current); // Clear any closing timeout
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    // Add a delay before closing the menu
    timeoutRef.current = setTimeout(() => {
      setIsHovering(false);
    }, 200); // 200ms delay
  };

  return (
    <div
      className="relative h-8"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Services button with SVG down arrow */}
      <Link to="/services" className="nav-item flex items-center">
        Services
        <svg
          className="ml-1 w-3 h-3" // Adjust size of the arrow
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06 0L10 10.94l3.71-3.73a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </Link>

      {/* Hover menu */}
      {isHovering && (
        <div
          className="absolute top-full mt-2 bg-black shadow-lg rounded-md w-64 overflow-hidden"
          onMouseEnter={handleMouseEnter} // Keep menu open
          onMouseLeave={handleMouseLeave} // Close the menu with delay
        >
          <ul className="space-y-2">
            {services.map((service, index) => (
              <li key={index} className="px-4 py-2 hover:bg-gray-700 text-left">
                <Link to={service.link} className="block text-white text-lg">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ServicesHoverMenu;

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
      {/* Services button with smaller down arrow */}
      <Link to="/services" className="nav-item flex items-center">
        Services <span className="ml-1 text-xs">▼</span>
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

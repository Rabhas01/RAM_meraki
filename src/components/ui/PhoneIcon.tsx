import React, { useState, useEffect } from 'react';
import { FiPhone, FiX } from 'react-icons/fi'; // Use react-icons for phone and close icon

const PhoneIcon: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showMessage, setShowMessage] = useState(true); // Control for message visibility

  useEffect(() => {
    const handleScroll = () => {
      // Show the icon after scrolling 1500px
      if (window.scrollY > 1500) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center md:hidden space-x-2">
      {/* Phone Icon with Spin Animation */}
      <a
        href="tel:+15148021993" // Replace with your actual phone number
        className={`bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 z-50 ${
          isVisible ? 'animate-spin-once' : '' // Custom spin-once animation
        }`}
        aria-label="Give us a call"
      >
        <FiPhone size={24} />
      </a>

      {/* Message and Close Button */}
      {showMessage && (
        <div className="relative bg-gray-800 text-white text-sm rounded-lg py-2 px-4 shadow-lg flex items-center space-x-2">
          <p>Give us a call</p>
          <button
            className="text-white"
            onClick={() => setShowMessage(false)} // Close the message
          >
            <FiX size={16} />
          </button>
        </div>
      )}
    </div>
  );
};

export default PhoneIcon;

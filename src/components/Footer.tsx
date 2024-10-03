import React, { useEffect, useRef } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.playbackRate = 0.5; // Slow down the video playback
    }
  }, []);

  return (
    <footer className="relative bg-gray-800 text-white py-24 overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ objectPosition: 'center bottom' }}
      >
        <source src="/assets/background-images/footer_edit_vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Footer Content */}
      <div className="relative z-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Social Media Links */}
          <div className="text-center md:text-left">
            <h4 className="font-bold text-lg mb-2">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF className="text-xl hover:text-blue-500" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="text-xl hover:text-pink-500" />
              </a>
              <FontAwesomeIcon icon={faXTwitter} className="text-xl hover:text-blue-500" />
              <a href="https://www.linkedin.com/company/rammeraki" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn className="text-xl hover:text-blue-700" />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center">
            <h4 className="font-bold text-lg mb-2">Contact Us</h4>
            <p className="text-sm md:text-base">
              We're here to help with all your digital marketing needs.
            </p>
          </div>

          {/* Phone Number & Useful Links */}
          <div className="text-center md:text-right">
            <h4 className="font-bold text-lg mb-2">Give Us a Call</h4>
            <p>Phone: +1 (555) 555-5555</p>
            <div className="mt-4">
              <ScrollLink to="home" smooth={true} duration={800} className="text-sm hover:underline cursor-pointer">
                Home
              </ScrollLink>
              {' | '}
              <ScrollLink to="services" smooth={true} duration={800} className="text-sm hover:underline cursor-pointer">
                Services
              </ScrollLink>
              {' | '}
              <ScrollLink to="about" smooth={true} duration={800} className="text-sm hover:underline cursor-pointer">
                About
              </ScrollLink>
              {' | '}
              <ScrollLink to="contact" smooth={true} duration={800} className="text-sm hover:underline cursor-pointer">
                Contact
              </ScrollLink>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8">
          <p>&copy; 2024 YourCompany. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

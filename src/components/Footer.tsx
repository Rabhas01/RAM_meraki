import { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Map from './Map'; // Assuming you have a Map component
import { ContactModal } from './ui/contact-modal'; // Import the contact-modal component

export default function Footer() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleOpenContactModal = () => {
    setIsContactModalOpen(true); // Open the modal
  };

  return (
    <footer className="bg-gradient-to-t from-gray-900 via-indigo-900 to-gray-900 text-gray-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-indigo-400">Explore the Cosmos</h3>
            <p className="text-gray-300">
              Join us on a journey through the digital universe. We're here to help you navigate the vast expanse of online possibilities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">
                <FaFacebookF className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">
                <FaInstagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">
                <FontAwesomeIcon icon={faXTwitter} className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-indigo-400">Our Galactic Coordinates</h3>
            <div className="h-64 rounded-lg overflow-hidden">
              <Map />
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <MapPin className="h-5 w-5 text-indigo-400" />
              <span>123 Cosmic Avenue, Digital Galaxy, CY 12345</span>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-indigo-400">Intergalactic Communication</h3>
            <p className="text-gray-300">
              Ready to launch your next project? Our team of cosmic creators is standing by to assist you on your digital odyssey.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-5 w-5 text-indigo-400" />
                <span>+1 (555) 555-5555</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-5 w-5 text-indigo-400" />
                <span>contact@rammeraki.com</span>
              </div>
            </div>
            <button
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition-colors"
              onClick={handleOpenContactModal} // Open modal on button click
            >
              Launch Communication Portal
            </button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <nav className="flex flex-wrap justify-center md:justify-start gap-4 mb-4 md:mb-0">
              <Link href="/" className="text-gray-300 hover:text-indigo-400 transition-colors">Home</Link>
              <Link href="/services" className="text-gray-300 hover:text-indigo-400 transition-colors">Services</Link>
              <Link href="/about" className="text-gray-300 hover:text-indigo-400 transition-colors">About</Link>
              <Link href="/contact" className="text-gray-300 hover:text-indigo-400 transition-colors">Contact</Link>
            </nav>
            <p className="text-gray-400 text-sm">© 2024 rammeraki. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* Communication Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onOpenChange={setIsContactModalOpen} // Modal's open/close state handler
      />
    </footer>
  );
}

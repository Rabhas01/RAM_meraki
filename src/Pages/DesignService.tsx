import { Link } from 'react-router-dom';
import { Palette, Layout, Smartphone } from 'lucide-react';
import designImage from '../assets/services-images/web-design.jpg';

const Heading = () => (
  <h1 className="text-left pt-12 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white mb-8">
    Design Services
    <span className="block text-pink-400">
      Crafting Visual Experiences
    </span>
  </h1>
);

const Content = () => (
  <div className="space-y-6">
    <p className="text-left text-xl text-gray-300">
      Our design team creates stunning visuals that captivate and engage your audience. From sleek user interfaces to eye-catching graphics, we bring your brand's vision to life with creativity and precision.
    </p>
    <ul className="space-y-4">
      <li className="flex items-center space-x-3 text-gray-200">
        <Palette className="h-6 w-6 text-pink-400" />
        <span className="text-lg">Brand Identity Design</span>
      </li>
      <li className="flex items-center space-x-3 text-gray-200">
        <Layout className="h-6 w-6 text-pink-400" />
        <span className="text-lg">User Interface (UI) Design</span>
      </li>
      <li className="flex items-center space-x-3 text-gray-200">
        <Smartphone className="h-6 w-6 text-pink-400" />
        <span className="text-lg">Responsive Web Design</span>
      </li>
    </ul>
    <div className="pt-4">
      <Link
        to="/contact"
        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
      >
        Start Your Design Journey
      </Link>
    </div>
  </div>
);

const Image = ({ className = "" }) => (
  <div className={`relative ${className}`}>
    <div className="absolute inset-0 bg-pink-300 bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-lg"></div>
    <img
      src={designImage}
      alt="Design Services Illustration"
      className="rounded-lg mix-blend-overlay w-full h-full object-cover"
      loading="lazy"
    />
  </div>
);

export default function DesignService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-pink-900 to-gray-900">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Mobile layout */}
        <div className="lg:hidden">
          <Heading />
          <Image className="h-96 mb-12" />
          <Content />
        </div>

        {/* Desktop layout */}
        <div className="hidden lg:flex lg:items-start lg:justify-between">
          <div className="w-1/2">
            <Heading />
            <div className="mt-4">
              <Content />
            </div>
          </div>
          <div className="w-1/2 pt-28">
            <Image className="h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
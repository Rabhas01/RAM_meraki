import { Link } from 'react-router-dom';
import { Code, Zap, ArrowRight } from 'lucide-react';
import webDevImage from '../assets/services-images/web-development.jpg';

const Heading = () => (
  <h1 className="text-left pt-12 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white mb-8">
    Web Development
    <span className="block text-purple-400">
      That Transcends Boundaries
    </span>
  </h1>
);

const Content = () => (
  <div className="space-y-6">
    <p className="text-left text-xl text-gray-300">
      Our expert team crafts high-performance, responsive websites that engage your audience and drive conversions. We blend cutting-edge technology with futuristic design to create digital experiences that launch your brand into the stratosphere.
    </p>
    <ul className="space-y-4">
      <li className="flex items-center space-x-3 text-gray-200">
        <Code className="h-6 w-6 text-purple-400" />
        <span className="text-lg">Quantum-Powered Web Applications</span>
      </li>
      <li className="flex items-center space-x-3 text-gray-200">
        <Zap className="h-6 w-6 text-purple-400" />
        <span className="text-lg">Warp-Speed Performance</span>
      </li>
      <li className="flex items-center space-x-3 text-gray-200">
        <ArrowRight className="h-6 w-6 text-purple-400" />
        <span className="text-lg">Intergalactic User Experience</span>
      </li>
    </ul>
    <div className="pt-4">
      <Link
        to="/contact"
        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
      >
        Launch Your Project
      </Link>
    </div>
  </div>
);

const Image = ({ className = "" }) => (
  <div className={`relative ${className}`}>
    <div className="absolute inset-0 bg-blue-500 bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-lg"></div>
    <img
      src={webDevImage}
      alt="Interstellar Web Development Illustration"
      className="rounded-lg mix-blend-overlay w-full h-full object-cover"
      loading="lazy"
    />
  </div>
);

export default function WebDevelopment() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
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

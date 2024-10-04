import { Link } from 'react-router-dom';
import { Search, TrendingUp, BarChart } from 'lucide-react';
import seoImage from '../assets/services-images/SEO.jpg';

const Heading = () => (
  <h1 className="text-left pt-12 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white mb-8">
    Search Engine Optimization
    <span className="block text-green-400">
      Elevate Your Digital Presence
    </span>
  </h1>
);

const Content = () => (
  <div className="space-y-6">
    <p className="text-left text-xl text-gray-300">
      Our SEO experts employ cutting-edge techniques to boost your website's visibility and drive organic traffic. We optimize your digital footprint to ensure your brand stands out in the vast online universe.
    </p>
    <ul className="space-y-4">
      <li className="flex items-center space-x-3 text-gray-200">
        <Search className="h-6 w-6 text-green-400" />
        <span className="text-lg">Keyword Optimization Strategies</span>
      </li>
      <li className="flex items-center space-x-3 text-gray-200">
        <TrendingUp className="h-6 w-6 text-green-400" />
        <span className="text-lg">Organic Traffic Growth</span>
      </li>
      <li className="flex items-center space-x-3 text-gray-200">
        <BarChart className="h-6 w-6 text-green-400" />
        <span className="text-lg">Analytics-Driven Improvements</span>
      </li>
    </ul>
    <div className="pt-4">
      <Link
        to="/contact"
        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        Boost Your Rankings
      </Link>
    </div>
  </div>
);

const Image = ({ className = "" }) => (
  <div className={`relative ${className}`}>
    <div className="absolute inset-0 bg-green-500 bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-lg"></div>
    <img
      src={seoImage}
      alt="SEO Illustration"
      className="rounded-lg mix-blend-overlay w-full h-full object-cover"
      loading="lazy"
    />
  </div>
);

export default function SEO() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-green-900 to-gray-900">
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
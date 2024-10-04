import { Link } from 'react-router-dom';
import { Share2, Users, TrendingUp } from 'lucide-react';
import socialMediaImage from '../assets/services-images/social-media-management.jpg';

const Heading = () => (
  <h1 className="text-left pt-12 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white mb-8">
    Social Media Marketing
    <span className="block text-teal-400">
      Amplify Your Online Presence
    </span>
  </h1>
);

const Content = () => (
  <div className="space-y-6">
    <p className="text-left text-xl text-gray-300">
      Our social media experts craft engaging strategies to boost your brand's online presence. We leverage the power of social platforms to connect with your audience, drive engagement, and increase your digital footprint.
    </p>
    <ul className="space-y-4">
      <li className="flex items-center space-x-3 text-gray-200">
        <Share2 className="h-6 w-6 text-teal-400" />
        <span className="text-lg">Strategic Content Creation</span>
      </li>
      <li className="flex items-center space-x-3 text-gray-200">
        <Users className="h-6 w-6 text-teal-400" />
        <span className="text-lg">Community Management</span>
      </li>
      <li className="flex items-center space-x-3 text-gray-200">
        <TrendingUp className="h-6 w-6 text-teal-400" />
        <span className="text-lg">Social Media Analytics</span>
      </li>
    </ul>
    <div className="pt-4">
      <Link
        to="/contact"
        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
      >
        Boost Your Social Presence
      </Link>
    </div>
  </div>
);

const Image = ({ className = "" }) => (
  <div className={`relative ${className}`}>
    <div className="absolute inset-0 bg-teal-500 bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-lg"></div>
    <img
      src={socialMediaImage}
      alt="Social Media Marketing Illustration"
      className="rounded-lg mix-blend-overlay w-full h-full object-cover"
      loading="lazy"
    />
  </div>
);

export default function SocialMedia() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-teal-900 to-gray-900">
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
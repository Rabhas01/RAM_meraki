import React from 'react';

const ContentCreation: React.FC = () => {
  return (
    <div className="py-16 bg-gray-800 text-white">
      <div className="w-full h-screen relative">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <video
            className="w-full h-full object-cover"
            src="src/assets/video/your-background-video.mp4"
            autoPlay
            loop
            muted
          ></video>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-left mb-12">
            <h1 className="text-5xl font-bold mb-4 max-w-sm pb-5">Content Creation</h1>
            <a href="/contact-us" className="border border-pink-500 text-pink-500 bg-transparent hover:bg-pink-500 hover:text-white font-bold uppercase py-2 px-4 rounded transition-colors duration-300 p-7">
              Lets get started
            </a>
          </div>
          <p className="text-lg text-center leading-relaxed pt-5">
            High-quality content is the cornerstone of any successful digital marketing strategy. At Rising Above Marketing (RAM), our Content Creation services are designed to engage, inform, and inspire your audience, driving them to take action.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl font-semibold mb-4">What We Offer:</h2>
        <ul className="list-disc list-inside space-y-4 text-lg">
          <li>Blog Writing</li>
          <li>Social Media Content</li>
          <li>Video Production</li>
          <li>Graphic Design</li>
          <li>Copywriting</li>
        </ul>
      </div>
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl font-semibold mb-4">Why Choose RAM for Content Creation?</h2>
        <ul className="list-disc list-inside space-y-4 text-lg">
          <li>Quality</li>
          <li>Engagement</li>
          <li>Strategy</li>
        </ul>
      </div>
      <div className="container mx-auto px-4 text-left mt-8">
        <p className="text-lg leading-relaxed mb-4">
          Looking to create content that captivates your audience and boosts your brand? Contact us today to learn more about our Content Creation services.
        </p>
        <a href="/contact-us" className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
          Contact Us
        </a>
      </div>
    </div>
  );
}

export default ContentCreation;

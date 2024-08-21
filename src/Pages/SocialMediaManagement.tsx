import React from 'react';

const SocialMediaManagement: React.FC = () => {
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
            <h1 className="text-5xl font-bold mb-4 max-w-sm pb-5">Social Media Management</h1>
            <a href="/contact-us" className="border border-pink-500 text-pink-500 bg-transparent hover:bg-pink-500 hover:text-white font-bold uppercase py-2 px-4 rounded transition-colors duration-300 p-7">
              Lets get started
            </a>
          </div>
          <p className="text-lg text-center leading-relaxed pt-5">
            At Rising Above Marketing (RAM), we understand the power of social media in building a strong brand presence. Our Social Media Management service is designed to help you connect with your audience, grow your following, and enhance your online reputation.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl font-semibold mb-4">What We Offer:</h2>
        <ul className="list-disc list-inside space-y-4 text-lg">
          <li>Account Management</li>
          <li>Content Creation</li>
          <li>Audience Engagement</li>
          <li>Analytics and Reporting</li>
        </ul>
      </div>
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl font-semibold mb-4">Why Choose RAM for Social Media Management?</h2>
        <ul className="list-disc list-inside space-y-4 text-lg">
          <li>Expertise</li>
          <li>Consistency</li>
          <li>Customization</li>
        </ul>
      </div>
      <div className="container mx-auto px-4 text-left mt-8">
        <p className="text-lg leading-relaxed mb-4">
          Ready to elevate your social media presence? Contact us today to learn how our Social Media Management service can help you achieve your goals.
        </p>
        <a href="/contact-us" className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
          Contact Us
        </a>
      </div>
    </div>
  );
}

export default SocialMediaManagement

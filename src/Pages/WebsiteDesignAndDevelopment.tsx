import React from 'react';

const WebsiteDesignAndDevelopment: React.FC = () => {
  return (
    <div className="py-24 bg-gray-800 text-white">
      <div className="w-full h-screen relative">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <video
            className="w-full h-full object-cover"
            // src="src/assets/video/8474608-hd_1920_1080_30fps.mp4"
            autoPlay
            loop
            muted
          ></video>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-left mb-12">
            <h1 className="text-5xl font-bold mb-4 max-w-sm pb-5">Website Design and Development</h1>
            <a href="/contact-us" className="border border-pink-500 text-pink-500 bg-transparent hover:bg-pink-500 hover:text-white font-bold uppercase py-2 px-4 rounded transition-colors duration-300 p-7">
              Lets get started
            </a>
          </div>
          <p className="text-lg text-center leading-relaxed pt-5">
            Your website is often the first impression potential customers have of your business. At Rising Above Marketing (RAM), we create stunning, user-friendly websites that not only look great but also drive business growth.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl font-semibold mb-4">What We Offer:</h2>
        <ul className="list-disc list-inside space-y-4 text-lg">
          <li>Custom Website Design</li>
          <li>Responsive Design</li>
          <li>E-Commerce Solutions</li>
          <li>Content Management Systems (CMS)</li>
          <li>Website Maintenance</li>
        </ul>
      </div>
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl font-semibold mb-4">Why Choose RAM for Website Design and Development?</h2>
        <ul className="list-disc list-inside space-y-4 text-lg">
          <li>Creativity</li>
          <li>Functionality</li>
          <li>SEO-Friendly</li>
        </ul>
      </div>
      <div className="container mx-auto px-4 text-left mt-8">
        <p className="text-lg leading-relaxed mb-4">
          Ready to create a stunning website that drives results? Contact us today to learn how our Website Design and Development service can transform your online presence.
        </p>
        <a href="/contact-us" className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
          Contact Us
        </a>
      </div>
    </div>
  );
}

export default WebsiteDesignAndDevelopment;

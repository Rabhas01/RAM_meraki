import React from 'react';

const WebsiteDesignAndDevelopment: React.FC = () => {
  return (
    <div className="py-24 bg-gray-900 text-white">
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
            <h1 className="text-5xl font-bold mb-4 max-w-m pb-5">
              Web Development
            </h1>
            <a
              href="/contact-us"
              className="border border-pink-500 text-pink-500 bg-transparent hover:bg-pink-500 hover:text-white font-bold uppercase py-2 px-4 rounded transition-colors duration-300 p-7"
            >
              Let's get started
            </a>
          </div>
          <p className="text-lg text-center leading-relaxed pt-5">
            Your website is often the first impression potential customers have
            of your business. At Rising Above Marketing (RAM), we create
            stunning, user-friendly websites that not only look great but also
            drive business growth.
          </p>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl font-semibold mb-4">
          Our Portfolio:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Portfolio items would go here */}
          <div className="relative">
            <img
              src={`${import.meta.env.BASE_URL}assets/images/project1.jpg`}
              alt="Project 1"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg">Project Name 1</p>
            </div>
          </div>
          <div className="relative">
            <img
              src={`${import.meta.env.BASE_URL}assets/images/project2.jpg`}
              alt="Project 2"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg">Project Name 2</p>
            </div>
          </div>
          <div className="relative">
            <img
              src={`${import.meta.env.BASE_URL}assets/images/project3.jpg`}
              alt="Project 3"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg">Project Name 3</p>
            </div>
          </div>
          {/* Add more portfolio items as needed */}
        </div>
      </div>

      {/* Design Process Section */}
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl font-semibold mb-4">
          Our Design Process:
        </h2>
        <p className="text-lg leading-relaxed">
          At RAM, we follow a structured approach to design and development
          that ensures every project is delivered with excellence. From
          initial concept to final launch, our process is designed to maximize
          creativity, efficiency, and impact.
        </p>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl font-semibold mb-4">
          What We Offer:
        </h2>
        <ul className="list-disc list-inside space-y-4 text-lg">
          <li>Responsive Design</li>
          <li>Custom Development</li>
          <li>E-Commerce Solutions</li>
          <li>User Experience (UX) and Accessibility</li>
          <li>Website Maintenance</li>
        </ul>
      </div>

      {/* Why Choose Us Section */}
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl font-semibold mb-4">
          Why Choose RAM?
        </h2>
        <ul className="list-disc list-inside space-y-4 text-lg">
          <li>Expertise in modern web technologies</li>
          <li>Creativity and innovation</li>
          <li>Focus on user experience and accessibility</li>
          <li>Proven track record of successful projects</li>
        </ul>
      </div>

      {/* Call to Action Section */}
      <div className="container mx-auto px-4 text-left mt-8">
        <p className="text-lg leading-relaxed mb-4">
          Ready to create a stunning website that drives results? Contact us
          today to learn how our Website Design and Development service can
          transform your online presence.
        </p>
        <a
          href="/contact-us"
          className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}

export default WebsiteDesignAndDevelopment;

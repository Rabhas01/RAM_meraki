import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="relative py-8 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-200" id="about">
      <div className="container mx-auto px-4 flex items-center">
        <div className="absolute left-0 top-3/4 transform">
          <p className="text-3xl font-bold text-slate-50 uppercase transform -rotate-90 origin-left pt-8">About Us</p>
        </div>
        <div className="text-lg mx-auto w-full ml-12 flex justify-between text-start">
        <p className="mb-4 max-w-md">
            Welcome to <span className="font-semibold">Rising Above Marketing (RAM)</span>, based in Montreal, Canada. We specialize in cutting-edge social media marketing and web design solutions tailored to your business needs. 
            <a href="#contact" className="text-blue-500 font-semibold hover:underline"> Contact RAM today</a> and let us help you rise above the competition.
          </p>
          <div className='max-w-md'>AI integration
            <p>Lorem ipsum dolor sit amet consectetur</p>
            <p>Lorem ipsum dolor sit amet consectetur</p>
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </div>
          
          
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

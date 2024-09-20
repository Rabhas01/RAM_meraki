import React from 'react';
import SatelliteMotion from './ufo/SatelliteMotion'; // Import the satellite motion component

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden" id="home">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/assets/Parallax_images/test.mp4"
        autoPlay
        muted
        loop
      />

      {/* Overlay Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="/assets/Parallax_images/mountains_dark.png"
        alt="Overlay"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-opacity-50 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to RAM</h1>
        <p className="text-lg md:text-2xl mb-6">Rising Above Marketing</p>
        <a
          href="#contact"
          className="default_font border tracking-wider text-xl h-[3.3rem] w-32 border-custom-blue text-white bg-transparent hover:bg-yellow-500 hover:text-black hover:border-transparent font-bold uppercase py-2.5 px-4 rounded transition-colors duration-300"
        >
          Enter
        </a>
      </div>

      {/* Satellite Image */}
      <SatelliteMotion />
    </section>
  );
};

export default HeroSection;

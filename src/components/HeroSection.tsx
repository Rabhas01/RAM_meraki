import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SatelliteMotion from './ufo/SatelliteMotion';

gsap.registerPlugin(ScrollTrigger);

const HeroSection: React.FC = () => {
  useEffect(() => {
    // Parallax effect for the text (faster movement)
    gsap.to('.parallax-text', {
      yPercent: -100, // Faster movement for text
      ease: 'none',
      scrollTrigger: {
        trigger: '#home',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Parallax effect for the sky (slower movement)
    gsap.to('.parallax-sky', {
      yPercent: -30, // Slower movement for the sky
      ease: 'none',
      scrollTrigger: {
        trigger: '#home',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    // No parallax effect for mountains to keep them stationary
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden" id="home">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover parallax-sky"
        src="/assets/Parallax_images/test.mp4"
        autoPlay
        muted
        loop
      />

      {/* Overlay Image for Mountains (no parallax effect, keeping it fixed) */}
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="/assets/Parallax_images/mountains_dark.png"
        alt="Overlay"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-opacity-50 text-center text-white parallax-text">
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

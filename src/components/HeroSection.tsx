import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

// Register the plugin
gsap.registerPlugin(MotionPathPlugin);

const satellite = `${import.meta.env.BASE_URL}assets/Parallax_images/Satellite_RAM.png`;

const HeroSection: React.FC = () => {
  const satelliteRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const satelliteElement = satelliteRef.current;

    if (satelliteElement) {
      // GSAP animation for satellite orbit
      gsap.to(satelliteElement, {
        duration: 80, // Duration for smoother animation
        repeat: -1,
        ease: 'power1.inOut', // Adds easing for natural acceleration and deceleration
        immediateRender: true, // Ensure animation starts immediately
        lazy: false, // Ensure animation is not delayed
        motionPath: {
          path: [
            { x: -320, y: -100, scale: 0.6 }, // Start with a smaller size
            { x: -150, y: -200, scale: 0.7 },
            { x: 100, y: -250, scale: 0.8 },
            { x: 250, y: -150, scale: 1 }, // Increase size smoothly
            { x: 350, y: 50, scale: 1.2 },
            { x: 200, y: 200, scale: 1.4 },
            { x: 50, y: 300, scale: 1.3 },
            { x: -200, y: 250, scale: 1.1 },
            { x: -350, y: 100, scale: 0.9 } // Smoothly decrease size
          ],
          curviness: 1, // Smooths out the path by rounding corners
          autoRotate: false, // No automatic rotation
          align: satelliteElement,
          alignOrigin: [0.5, 0.5],
        },
        onStart: () => {
          // Ensure the satellite starts with correct orientation
          gsap.set(satelliteElement, { rotation: 0 });
        },
        onUpdate: () => {
          satelliteElement.style.transform = `translate(-50%, -50%) scale(${satelliteElement.style.scale})`;
        }
      });
    }
  }, []);

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
      <img
        ref={satelliteRef}
        src={satellite}
        alt="satellite"
        className="absolute z-20 h-72"
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
      />
    </section>
  );
};

export default HeroSection;

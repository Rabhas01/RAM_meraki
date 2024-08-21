import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

// Register the plugins
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

// Image paths
const mountains = 'src/assets/Parallax_images/mountains_dark.png';
const satellite = 'src/assets/Parallax_images/Satellite_RAM.png';

const ParallaxSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const satelliteRef = useRef<HTMLImageElement>(null);
  const mountainsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const satellite = satelliteRef.current;
    const mountainsElement = mountainsRef.current;

    if (video && satellite && mountainsElement) {
      // GSAP timeline for scroll-triggered parallax effect
      gsap.timeline({
        scrollTrigger: {
          trigger: video,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      })
        .fromTo(video, { backgroundPosition: '50% 0%' }, { backgroundPosition: '50% 100%', ease: 'none' })
        .fromTo(satellite, { y: '0%' }, { y: '-50%', ease: 'none' }, 0)
        .fromTo(mountainsElement, { y: '0%' }, { y: '-50%', ease: 'none' }, 0);

      // GSAP animation for satellite orbit with increased orbit width
      gsap.to(satellite, {
        duration: 125, // Decreased speed by increasing duration
        repeat: -1,
        ease: 'none',
        motionPath: {
          path: [
            { x: -320, y: 0, scale: 1 },
            { x: -170, y: -150, scale: 0.8 },
            { x: 0, y: -300, scale: 0.6 },
            { x: 170, y: -150, scale: 0.8 },
            { x: 320, y: 0, scale: 1 },
            { x: 170, y: 150, scale: 1.2 },
            { x: 0, y: 300, scale: 1.4 },
            { x: -170, y: 150, scale: 1.2 },
            { x: -320, y: 0, scale: 1 }
          ],
          autoRotate: true,
          align: satellite,
          alignOrigin: [0.5, 0.5],
        },
        onUpdate: () => {
          satellite.style.transform = `translate(-50%, -50%) scale(${satellite.style.scale})`;
        }
      });
    }
  }, []);

  return (
    <section className="relative h-screen overflow-hidden" id="home">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="src/assets/Parallax_images/test.mp4"
        autoPlay
        muted
        loop
      />
      <div
        ref={mountainsRef}
        className="absolute bottom-0 left-0 w-full h-full"
        style={{ backgroundImage: `url(${mountains})`, backgroundSize: 'cover', backgroundPosition: 'bottom', zIndex: 2 }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-opacity-50 text-center text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to RAM</h1>
      <p className="text-lg md:text-2xl mb-6">Rising Above Marketing</p>
      <a
        href="#contact"
        className="default_font border tracking-wider text-xl h-[3.3rem] w-32 border-pink-500 text-white bg-transparent hover:bg-yellow-500 hover:text-black hover:border-transparent font-bold uppercase py-2.5 px-4 rounded transition-colors duration-300"
      >
        Enter
      </a>
    </div>
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

export default ParallaxSection;

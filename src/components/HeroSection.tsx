import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SatelliteMotion from './ufo/SatelliteMotion';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const skyRef = useRef<HTMLVideoElement>(null);
  const mountainsRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const text = textRef.current;
    const sky = skyRef.current;
    const mountains = mountainsRef.current;

    if (!section || !content || !text || !sky || !mountains) return;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        pin: content,
        anticipatePin: 1,
      },
    });

    // Move text, sky, and mountains with the scroll
    timeline
      .to(text, { yPercent: -100, ease: 'none' }, 0)
      .to(sky, { yPercent: -30, ease: 'none' }, 0.5)
      .to(mountains, { yPercent: -15, ease: 'none' }, 0.5)
      .to(
        content,
        {
          opacity: 0,
          ease: 'power2.out',
          duration: 0.3, // Faster fade-out
        },
        0.6
      ); // Adjust timing for smoother transition

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative" id="home">
      <div ref={contentRef} className="h-screen overflow-hidden">
        {/* Background Video */}
        <video
          ref={skyRef}
          className="absolute inset-0 w-full h-full object-cover"
          src="/assets/Parallax_images/test.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Overlay Image for Mountains */}
        <img
          ref={mountainsRef}
          className="absolute inset-0 w-full h-full object-cover"
          src="/assets/Parallax_images/mountains_dark.png"
          alt="Mountains"
        />

        {/* Hero Section Text */}
        <div ref={textRef} className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to RAM</h1>
          <p className="text-lg md:text-2xl mb-6">Rising Above Marketing</p>
          <a
            href="#contact"
            className="default_font border tracking-wider text-xl h-[3.3rem] w-32 border-custom-blue text-white bg-transparent hover:bg-yellow-500 hover:text-black hover:border-transparent font-bold uppercase py-2.5 px-4 rounded transition-colors duration-300"
          >
            Enter
          </a>
        </div>

        <SatelliteMotion />
      </div>
    </section>
  );
}

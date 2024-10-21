import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SatelliteMotion from './ufo/SatelliteMotion';
import { ContactModal } from './contact-modal';
import DynamicText from './ui/DynamicText_hero';
import skyVideo from '../assets/Parallax_images/sky_vid.mp4';
import mountainsImage from '../assets/Parallax_images/mountains_dark.png';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const skyRef = useRef<HTMLVideoElement>(null);
  const mountainsRef = useRef<HTMLImageElement>(null);

  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const dynamicWords = ["Grow", "Convert", "Engage", "Transform", "Thrive"];

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

    // Move text up
    timeline.to(text, { yPercent: -100, ease: 'none', duration: 0.5 });

    // Add a pause
    timeline.to({}, { duration: 0.3 });

    // Move background elements
    timeline.to([sky, mountains], { yPercent: -30, ease: 'none', duration: 0.5 });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[200vh]" id="home">
      <div ref={contentRef} className="sticky top-0 h-screen overflow-hidden">
        <video
          ref={skyRef}
          className="absolute inset-0 w-full h-full object-cover"
          src={skyVideo}
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Overlay Image for Mountains */}
        <img
          ref={mountainsRef}
          className="absolute inset-0 w-full h-full object-cover"
          src={mountainsImage}
          alt="Mountains"
        />

        {/* Hero Section Text */}
        <div ref={textRef} className="relative z-10 flex flex-col items-start justify-center h-full text-left text-white pl-20 md:pl-24 pb-8 md:pb-12 md:pt-24">
          <h1 className="text-4xl md:text-7xl font-bold mb-4">Elevate Your Brand</h1>
          <p className="text-3xl md:text-5xl mb-6">
            We help you{" "}
            <DynamicText
              words={dynamicWords}
              typingSpeed={150}
              deletingSpeed={100}
              delayBetweenWords={1000}
            />
          </p>
          <button
            onClick={() => setIsContactModalOpen(true)}
            className="default_font border tracking-wider text-xl h-[3.3rem] w-64 border-custom-blue text-white bg-transparent hover:bg-yellow-500 hover:text-black hover:border-transparent font-bold uppercase py-2.5 px-4 rounded transition-colors duration-300"
          >
            Become a client
          </button>
        </div>
        <SatelliteMotion />
      </div>
      <ContactModal isOpen={isContactModalOpen} onOpenChange={setIsContactModalOpen} />
    </section>
  );
}
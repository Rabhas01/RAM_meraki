import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SatelliteMotion from './ufo/SatelliteMotion';
import { ContactModal } from './contact-modal';
import skyVideo from '../assets/Parallax_images/sky_vid.mp4';
import mountainsImage from '../assets/Parallax_images/mountains_dark.png';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const skyRef = useRef<HTMLVideoElement>(null);
  const mountainsRef = useRef<HTMLImageElement>(null);

  const [dynamicWord, setDynamicWord] = useState("");
  const [showCaret, setShowCaret] = useState(true); // Controls blinking caret
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const dynamicWords = [
    "Grow",
    "Convert",
    "Engage",
    "Transform",
    "Thrive"
  ];

  const typingSpeed = 150;  // Speed of typing in milliseconds
  const deletingSpeed = 100; // Speed of deleting in milliseconds
  const delayBetweenWords = 1000; // Pause time between words in milliseconds

  useEffect(() => {
    let wordIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;

    const handleTyping = () => {
      const currentWord = dynamicWords[wordIndex];

      if (!isDeleting) {
        // Typing in
        if (letterIndex < currentWord.length) {
          setDynamicWord(currentWord.substring(0, letterIndex + 1)); // Append the next letter
          letterIndex++;
        } else {
          // Pause after typing full word
          setTimeout(() => {
            isDeleting = true;
          }, delayBetweenWords);
        }
      } else {
        // Deleting
        if (letterIndex > 0) {
          setDynamicWord(currentWord.substring(0, letterIndex - 1)); // Remove the last letter
          letterIndex--;
        } else {
          // Move to the next word
          isDeleting = false;
          wordIndex = (wordIndex + 1) % dynamicWords.length;
        }
      }
    };

    const typingInterval = setInterval(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  // Control the blinking caret
  useEffect(() => {
    const caretInterval = setInterval(() => {
      setShowCaret((prev) => !prev); // Toggle caret visibility
    }, 500); // Blink every 500ms

    return () => clearInterval(caretInterval);
  }, []);

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
    timeline.to(text, { yPercent: -100, ease: 'none' }, 0);

    // After text is gone, move sky and mountains up
    timeline.to([sky, mountains], {
      yPercent: -100,
      ease: 'none',
    }, '>');

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
            We help you <span className="dynamic-word font-bold">{dynamicWord}</span>
            {showCaret && <span className="caret">|</span>} {/* Caret */}
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
      
      {/* Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onOpenChange={setIsContactModalOpen} />
    </section>
  );
}

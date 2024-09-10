import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Card from '@/components/ui/Card';

gsap.registerPlugin(ScrollTrigger);

const ServicesSection: React.FC = () => {
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    gsap.fromTo(
      videoElement,
      { scale: 0.35 }, // Start scale
      {
        scale: 1, // Final scale
        // ease: 'slow(0.7, 0.7, false)', // Smooth, relaxed ease
        scrollTrigger: {
          trigger: videoElement,
          start: 'top bottom', // Start when the top of the video hits the bottom of the viewport
          end: 'top top', // Extend the scroll distance for a smoother transition
          scrub: 2, // Slightly slower scrub
        },
      }
    );
  }, []);

  return (
    <section className="py-16 bg-gray-100 service_gradient prefers-reduced-motion" id="services">
      <div className="mx-auto px-4">
        <h2 className="text-9xl font-bold text-center pt-16 text-white">Top-Rated Digital Marketing Solutions</h2>
        
        <div
          ref={videoRef}
          className="mx-auto relative"
          style={{ overflow: 'hidden' }} 
        >
          <video
            className="w-full h-full object-cover"
            src="src/assets/video/8474608-hd_1920_1080_30fps.mp4"
            autoPlay
            loop
            muted
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-4 uppercase font-mono mt-8">
          <Card 
            imageSrc="src/assets/Brand-images/cropped-website design.png"
            title="Website building"
            link="/website-design-and-development"
          />
          <Card 
            imageSrc="src/assets/Brand-images/website design.png"
            title="Social Media Management"
            link="/social-media-management"
          />
          <Card 
            imageSrc="src/assets/Brand-images/pexels-brunoscramgnon-11361901.jpg"
            title="Advertising"
            link="/content-creation"
          />
          <Card 
            imageSrc="src/assets/Brand-images/pexels-alexander-mass-748453803-25489323.jpg"
            title="Design Services"
            link="/learn-more-4"
          />
          <Card 
            imageSrc="src/assets/Brand-images/pexels-alexander-mass-748453803-25489323.jpg"
            title="SEO optimization"
            link="/seo"
          />
        </div>

        <TestimonialCarousel />
        <CallToAction />
        <FAQSection />
      </div>
    </section>
  );
};

export default ServicesSection;

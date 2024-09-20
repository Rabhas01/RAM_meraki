import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const accordionData = [
  {
    title: "Our Skilled Team",
    content: "Our team consists of industry experts who excel in web design, marketing, and development, providing innovative solutions to grow your business.",
  },
  {
    title: "Captivating Designs",
    content: "We create designs that are visually stunning and user-friendly, ensuring an engaging experience for your customers. Our designs are built to captivate and convert.",
  },
  {
    title: "AI-Powered Innovation",
    content: "We leverage AI technology to optimize strategies, streamline processes, and offer smarter solutions to give your business a competitive edge in the market.",
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      section,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'top center',
          toggleActions: 'play none none reverse',
          scrub: true,
        },
      }
    );
  }, []);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="relative py-16 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-200" id="about">
      <div className="flex flex-col lg:flex-row">
        {/* Left Side - Vertical 'About Us' for lg screens */}
        <div className="relative hidden lg:block w-[14%]">
          <div className="absolute left-10 top-[100%] transform -translate-y-1/2 -rotate-90 origin-left">
            <p className="text-4xl font-bold text-slate-50 uppercase">About Us</p>
          </div>
        </div>

        {/* Centered About Us for smaller screens */}
        <div className="lg:hidden w-full text-center mb-8">
          <p className="text-4xl font-bold text-slate-50 uppercase">About Us</p>
        </div>

        {/* Right Side - Description and Accordion */}
        <div className="lg:w-[85%] flex flex-col lg:flex-row justify-between">
          {/* Description */}
          <div className="text-lg mb-6 lg:mb-0 lg:w-1/2 lg:pr-8">
            <p>
              Rising Above Marketing (RAM) is a digital marketing agency based in Montreal, specializing in delivering innovative solutions in social media management, web design, and digital development.
              Our mission is to empower businesses by providing cutting-edge services that drive growth and position you above the competition in the digital landscape.
            </p>
          </div>

          {/* Accordion Section */}
          <div className="lg:w-1/2 mt-4 lg:mt-0">
            {accordionData.map((item, index) => (
              <div key={index} className="w-full mb-2 border-b border-gray-600 cursor-pointer" onClick={() => toggleAccordion(index)}>
                <div className="flex justify-between items-center">
                  <h3 className="text-md font-semibold text-white">{item.title}</h3>
                  <span className="text-white">{activeIndex === index ? '-' : '+'}</span>
                </div>
                <div
                  className={`mt-2 text-gray-400 transition-all duration-300 overflow-hidden ${
                    activeIndex === index ? 'max-h-full' : 'max-h-0'
                  }`}
                >
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

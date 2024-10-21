import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Stellar Innovations Inc.",
    quote: "Cosmic Digital transformed our online presence. Their web development skills are truly out of this world!",
    rating: 5
  },
  {
    name: "Alex Rodriguez",
    company: "Nebula Tech Solutions",
    quote: "The marketing strategies they implemented helped us reach new galaxies of customers. Absolutely stellar results!",
    rating: 5
  },
  {
    name: "Emily Chang",
    company: "Quantum Dynamics Ltd.",
    quote: "Their design services gave our brand a cosmic makeover. We've never looked more futuristic!",
    rating: 4
  },
  {
    name: "Michael Okoye",
    company: "Interstellar Communications",
    quote: "The social media management team at Cosmic Digital helped us navigate the vast expanse of digital platforms with ease.",
    rating: 5
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-[#010b19] relative overflow-hidden" id="testimonials">
      <div className="absolute inset-0 opacity-50">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animation: `twinkle ${Math.random() * 5 + 5}s infinite`,
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center text-[#8badc9] mb-12">Echoes from the Cosmos</h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-[#01132b] bg-opacity-80 backdrop-filter backdrop-blur-sm p-8 rounded-lg shadow-lg border border-[#1e3a5f]"
            >
              <div className="flex flex-col items-center text-center">
                <p className="text-xl text-[#d0e3f5] italic mb-6">"{testimonials[currentIndex].quote}"</p>
                <div className="flex items-center justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-[#8badc9] font-semibold">{testimonials[currentIndex].name}</p>
                <p className="text-[#4a6b8a]">{testimonials[currentIndex].company}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-[#1e3a5f] text-white p-2 rounded-full hover:bg-[#2c5282] transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-[#1e3a5f] text-white p-2 rounded-full hover:bg-[#2c5282] transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        <div className="flex justify-center mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 mx-1 rounded-full ${
                index === currentIndex ? 'bg-[#8badc9]' : 'bg-[#1e3a5f]'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <style>{`
        @keyframes twinkle {
          0% { opacity: 0; }
          50% { opacity: 1; }
           100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
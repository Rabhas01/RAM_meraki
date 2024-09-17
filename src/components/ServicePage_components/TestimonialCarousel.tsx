import React from 'react';
import { Carousel } from '@/components/ui/carousel';

const testimonials = [
  {
    name: 'John Doe',
    company: 'Tech Inc.',
    text: 'Their digital marketing strategies have significantly boosted our online presence.',
  },
  {
    name: 'Jane Smith',
    company: 'E-commerce Co.',
    text: 'The SEO optimization service has dramatically improved our search rankings.',
  },
  {
    name: 'Mike Johnson',
    company: 'Local Business',
    text: 'Our social media engagement has skyrocketed thanks to their management.',
  },
];

const TestimonialCarousel: React.FC = () => {
  return (
    <div className="mt-16">
      <h2 className="text-4xl font-bold text-center text-white mb-8">What Our Clients Say</h2>
      <Carousel>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg mb-4 text-gray-600">"{testimonial.text}"</p>
            <p className="font-bold text-gray-600">{testimonial.name}</p>
            <p className="text-sm text-gray-600">{testimonial.company}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TestimonialCarousel;
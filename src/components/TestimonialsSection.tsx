import React from 'react';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-black" id="testimonials">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <p className="text-gray-300 italic">"Great service and support!" - Client 1</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <p className="text-gray-300 italic">"Highly recommend them!" - Client 2</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <p className="text-gray-300 italic">"Professional and reliable." - Client 3</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

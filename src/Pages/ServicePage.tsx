import React from 'react';
import Card from '../components/ui/Card';

const ServicesSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100 service_gradient prefers-reduced-motion" id="services">
      <div className="mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-4 uppercase font-mono">
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
      </div>
    </section>
  );
};

export default ServicesSection;

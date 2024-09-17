// Import necessary libraries and components
import React from 'react';
import Card from '@/components/ui/Card';
import TestimonialCarousel from '@/components/ServicePage_components/TestimonialCarousel';
import CallToAction from '@/components/ServicePage_components/CallToAction';
import FAQSection from '@/components/ServicePage_components/FAQSection';
import TextMovement from '@/components/ServicePage_components/TextMovement';
import DynamicVideo from '@/components/ServicePage_components/DynamicVideo'; // Import the DynamicVideo component

const ServicesSection: React.FC = () => {
  return (
    <section className="service_gradient prefers-reduced-motion" id="services">
      <div className="mx-auto px-4">
        <h1 className="text-5xl lg:text-7xl 2xl:text-8xl pt-24 pb-16 text-white justify-center flex mb-12 leading-[3.5rem] lg:leading-[5rem] 2xl:leading-[6rem]">
          Top-Rated Digital<br /> Marketing Solutions
        </h1>

        {/* Use the DynamicVideo component */}
        <DynamicVideo
          videoSrc={`${import.meta.env.BASE_URL}assets/video/8474608-hd_1920_1080_30fps.mp4`}
          initialWidth={1}     // Starting from 1% width
          maxWidth={95}        // Expanding to 95% width
          initialHeight={20}   // Starting from 20vh height
          maxHeight={100}      // Expanding to 100vh height
        />

        {/* Content Section */}
        <div className="w-full md:w-4/5 lg:w-4/6 xl:w-3/6">
          <h2 className="text-3xl text-white mt-8 px-6 text-left">
            Empowering businesses to achieve digital excellence through innovative strategies and cutting-edge technology. 
            Our tailored solutions ensure your brand stands out in a crowded market. Let's elevate your online presence 
            and drive real results.
          </h2>
        </div>

        {/* Additional Content */}
        <div className="hidden lg:block relative overflow-hidden py-16 h-96">
          <TextMovement />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 uppercase font-mono mt-8">
      <Card 
        imageSrc={`${import.meta.env.BASE_URL}assets/Brand-images/cropped-website design.png`}
        title="Website building"
        link="/website-design-and-development"
      />

      <Card 
        imageSrc={`${import.meta.env.BASE_URL}assets/Brand-images/website design.png`}
        title="Social Media Management"
        link="/social-media-management"
      />

      <Card 
        imageSrc={`${import.meta.env.BASE_URL}assets/Brand-images/pexels-brunoscramgnon-11361901.jpg`}
        title="Advertising"
        link="/content-creation"
      />

      <Card 
        imageSrc={`${import.meta.env.BASE_URL}assets/Brand-images/pexels-alexander-mass-748453803-25489323.jpg`}
        title="Design Services"
        link="/learn-more-4"
      />

      <Card 
        imageSrc={`${import.meta.env.BASE_URL}assets/Brand-images/pexels-alexander-mass-748453803-25489323.jpg`}
        title="SEO optimization"
        link="/seo"
      />
      </div>

      <TestimonialCarousel />
      <CallToAction />
      <FAQSection />
    </section>
  );
};

export default ServicesSection;

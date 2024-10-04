import React from 'react';
import { motion } from "framer-motion";

const services = [
  {
    icon: "src/assets/icons/web-development-icon-for-marketing-website-service (2).svg",
    title: "Website Development",
    description: "We provide design, upgrades, and management for compelling designs that remain effective in the digital realm.",
    link: "/website-design-and-development"
  },
  {
    icon: "src/assets/icons/marketing-icon.svg",
    title: "Marketing",
    description: "To maximise your company's online presence, we provide marketing material production, SEO, market research, ad creation, and implementation.",
    link: "/marketing"
  },
  {
    icon: "src/assets/icons/a-web-designing-illustration-for-a--website-using-.svg",
    title: "Design Services",
    description: "Our design services include a comprehensive brand kit for a consistent identity, including colours, logos, and image guidelines.",
    link: "/design-services"
  },
  {
    icon: "src/assets/icons/social-media-icon-for-marketing-website-service-se (1).svg",
    title: "Social Media Management",
    description: "By continuous, interesting content and strategic audience targeting, our social media management service enhances your online presence.",
    link: "/social-media-management"
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section className="pt-14 pb-16 bg-white" id="services">
      <div className="mx-auto px-4 max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.a 
              key={index} 
              href={service.link} 
              className={`relative p-5 bg-white hover:shadow-lg transition-shadow duration-300 text-left ${
                index < 3 ? 'border-r-4 border-gray-200' : ''
              }`}
              style={{ textDecoration: 'none' }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              <div className="absolute bg-gray-200 rounded-full top-[-0.5rem] right-[1.5rem] text-gray-400 text-xl font-bold h-[1.9rem] w-[1.9rem]">
                <span className="left-[0.6rem] relative">{index + 1}</span>
              </div>
              <div className="flex flex-col items-start">
                <div className="flex-shrink-0 mr-4">
                  <img src={service.icon} alt={service.title} className="h-24" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg text-gray-700 font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-500">{service.description}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

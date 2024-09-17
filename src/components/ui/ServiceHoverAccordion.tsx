import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface ServiceItem {
  title: string;
  link: string;
}

const ServicesHoverAccordion: React.FC = () => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const services: ServiceItem[] = [
    { title: 'Web-developemnt', link: '/services/1' },
    { title: 'SEO optimization', link: '/services/2' },
    { title: 'Social Media Management', link: '/services/3' },
    { title: 'Service 4', link: '/services/4' },
  ];

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Link to="/services" className="nav-item">
        Services
      </Link>
      {isHovering && (
        <div className="absolute top-full mt-0.5 bg-gray-900 shadow-lg rounded-md overflow-hidden">
          <Accordion type="single" collapsible className="w-48">
            {services.map((service, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger>{service.title}</AccordionTrigger>
                <AccordionContent>
                  <Link to={service.link} className="block px-4 py-2 hover:bg-gray-100">
                    View {service.title}
                  </Link>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      )}
    </div>
  );
};

export default ServicesHoverAccordion;
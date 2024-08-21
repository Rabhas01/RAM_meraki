import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SocialMediaManagement from '../Pages/SocialMediaManagement';
import SEO from '../Pages/SEO';
import WebsiteDesignAndDevelopment from '../Pages/WebsiteDesignAndDevelopment';
import ContentCreation from '../Pages/ContentCreation';
import ContactPage from '@/Pages/ContactPage';
import ServicePage from '@/Pages/ServicePage';

const ServiceRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/social-media-management" element={<SocialMediaManagement />} />
      <Route path="/seo" element={<SEO />} />
      <Route path="/website-design-and-development" element={<WebsiteDesignAndDevelopment />} />
      <Route path="/content-creation" element={<ContentCreation />} />
      <Route path="/contact-us" element={<ContactPage />} />
      <Route path="/services" element={<ServicePage />} />
    </Routes>
  );
};

export default ServiceRoutes;
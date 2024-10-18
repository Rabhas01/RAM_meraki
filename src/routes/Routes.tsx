import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SocialMediaManagement from '../Pages/SocialMediaManagement';
import SEO from '../Pages/SEO';
import WebDevelopment from '../Pages/WebDevelopment';
import DesignService from '../Pages/DesignService';
import ServicePage from '@/Pages/ServicePage';

const ServiceRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/social-media-management" element={<SocialMediaManagement />} />
      <Route path="/website-development" element={<WebDevelopment />} />
      <Route path="/website-design" element={<DesignService />} />
      <Route path="/seo-optimization" element={<SEO />} />
      <Route path="/services" element={<ServicePage />} />
    </Routes>
  );
};

export default ServiceRoutes;
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import Header from '@/components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServiceSection';
import ContactSection from './components/ContactSection';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import Index from './components/Preloader/index';
import ServiceRoutes from './routes/Routes';
import ErrorBoundary from './ErrorBoundary';
import MobileMenu from './components/ui/MobileMenu';
import ParallaxSection from './components/ui/ParallaxSection';
import PhoneIcon from './components/ui/PhoneIcon';

const WELCOME_SCREEN_DURATION = 2200; // Time the welcome screen is shown in milliseconds

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on page load or route change
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  const [showWelcome, setShowWelcome] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const welcomeShown = sessionStorage.getItem('welcomeShown');
    if (!welcomeShown) {
      setShowWelcome(true);
      const timer = setTimeout(() => {
        setShowWelcome(false);
        sessionStorage.setItem('welcomeShown', 'true');
      }, WELCOME_SCREEN_DURATION);

      return () => clearTimeout(timer);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // **Scroll lock functionality**
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <AnimatePresence mode="wait">
          {showWelcome ? (
            <Index key="welcome-screen" />
          ) : (
            <div className="relative">
              <Header handleToggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
              <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
              <div
                className={`transition-transform duration-300 ${
                  isMenuOpen ? 'transform -translate-x-64' : ''
                }`}
              >
                <main>
                  <Routes>
                    <Route
                      path="/"
                      element={
                        <>
                          <HeroSection />
                          <AboutSection />
                          <ParallaxSection backgroundImage="src/assets/background-images/about-us_parallax_img.jpg">
                          </ParallaxSection>
                          <ServicesSection />
                          <ParallaxSection backgroundImage="src/assets/background-images/services_parallax_img.jpg">
                          </ParallaxSection>
                          <TestimonialsSection />
                          <ContactSection />
                          <PhoneIcon />
                        </>
                      }
                    />
                    <Route path="/*" element={<ServiceRoutes />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            </div>
          )}
        </AnimatePresence>
      </Router>
    </ErrorBoundary>
  );
};

export default App;

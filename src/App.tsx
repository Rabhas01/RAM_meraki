import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; // Import useLocation
import "./App.css";
import Header from "@/components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServiceSection";
import ContactSection from "./components/ContactSection";
import AboutSection from "./components/AboutSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Index from './components/Preloader/index';
import ServiceRoutes from './routes/Routes';
import { AnimatePresence } from "framer-motion";
import ErrorBoundary from './ErrorBoundary';

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

  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop /> {/* Add ScrollToTop component */}
        <div>
          <AnimatePresence mode="wait">
            {showWelcome ? (
              <Index key="welcome-screen" />
            ) : (
              <>
                <Header />
                <Routes>
                  <Route path="/" element={
                    <>
                      <HeroSection />
                      <AboutSection />
                      <ServicesSection />
                      <TestimonialsSection />
                      <ContactSection />
                    </>
                  } />
                  <Route path="/*" element={<ServiceRoutes />} />
                </Routes>
                <Footer />
              </>
            )}
          </AnimatePresence>
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;

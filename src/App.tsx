import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

const WELCOME_SCREEN_DURATION = 2200; // Time the welcome screen is shown in milliseconds

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
    <Router basename="/Ram_meraki">
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
                  {/* <ParallaxSection /> */}
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
  );
};

export default App;

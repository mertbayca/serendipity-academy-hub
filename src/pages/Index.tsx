import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import WhyNowSection from '../components/WhyNowSection';
import WhatYouGainSection from '../components/WhatYouGainSection';
import GrowthPathSection from '../components/GrowthPathSection';
import MastermindSection from '../components/MastermindSection';
import LearningModulesSection from '../components/LearningModulesSection';
import EventsSection from '../components/EventsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import DifferenceSection from '../components/DifferenceSection';
import WhoForSection from '../components/WhoForSection';
import MembershipProcessSection from '../components/MembershipProcessSection';
import CoachingSection from '../components/CoachingSection';
import InspiringSection from '../components/InspiringSection';
import Footer from '../components/Footer';


const Index = () => {
  // Smooth scrolling for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Offset for navbar
            behavior: 'smooth'
          });
        }
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  // Scroll to sections if ?scroll parameter is present
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get('scroll');
    
    if (scrollTo) {
      setTimeout(() => {
        const el = document.getElementById(scrollTo);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        // Remove the param from the URL
        params.delete('scroll');
        navigate({ pathname: '/', search: params.toString() }, { replace: true });
      }, 100);
    }
  }, [location, navigate]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WhyNowSection />
      <WhatYouGainSection />
      <GrowthPathSection />
      <MastermindSection />
      <LearningModulesSection />
      <EventsSection />
      <TestimonialsSection />
      <DifferenceSection />
      <WhoForSection />
      <MembershipProcessSection />
      <CoachingSection />
      <InspiringSection />
      <Footer />
    </div>
  );
};

export default Index;

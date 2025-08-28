import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HeroSectionDE from '../components/HeroSectionDE';
import WhyNowSectionDE from '../components/WhyNowSectionDE';
import WhatYouGainSectionDE from '../components/WhatYouGainSectionDE';
import GrowthPathSectionDE from '../components/GrowthPathSectionDE';
import MastermindSectionDE from '../components/MastermindSectionDE';
import LearningModulesSectionDE from '../components/LearningModulesSectionDE';
import EventsSectionDE from '../components/EventsSectionDE';
import TestimonialsSectionDE from '../components/TestimonialsSectionDE';
import DifferenceSectionDE from '../components/DifferenceSectionDE';
import WhoForSectionDE from '../components/WhoForSectionDE';
import MembershipProcessSectionDE from '../components/MembershipProcessSectionDE';
import CoachingSectionDE from '../components/CoachingSectionDE';
import InspiringSectionDE from '../components/InspiringSectionDE';
import FooterDE from '../components/FooterDE';

const IndexDE = () => {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({ top: (targetElement as HTMLElement).offsetTop - 80, behavior: 'smooth' });
        }
      });
    });
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

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
        params.delete('scroll');
        navigate({ pathname: '/de', search: params.toString() }, { replace: true });
      }, 100);
    }
  }, [location, navigate]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSectionDE />
      <WhyNowSectionDE />
      <WhatYouGainSectionDE />
      <GrowthPathSectionDE />
      <MastermindSectionDE />
      <LearningModulesSectionDE />
      <EventsSectionDE />
      <TestimonialsSectionDE />
      <DifferenceSectionDE />
      <WhoForSectionDE />
      <MembershipProcessSectionDE />
      <CoachingSectionDE />
      <InspiringSectionDE />
      <FooterDE />
    </div>
  );
};

export default IndexDE;


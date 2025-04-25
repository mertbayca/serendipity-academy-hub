
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video 
          className="w-full h-full object-cover"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="https://cdn.pixabay.com/vimeo/350990038/brainstorming-29458.mp4?width=1280&hash=68b82b0c93f3d254e58118fdc8af59df5850ac40" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      {/* Hero Content */}
      <div className="container relative z-10 animate-fade-in">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="block">Innovators Serendipity</span>
            <span className="hero-text-gradient">Academy</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-medium">Inspiring Each Other for a Brighter Future</p>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Join a powerful community of leaders, innovators, and changemakers ready to grow—together.
          </p>
          <Button className="bg-blue hover:bg-blue-dark text-white text-lg px-8 py-6">
            Join a Mastermind Group
          </Button>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

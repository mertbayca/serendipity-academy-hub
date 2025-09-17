import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSectionDE = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
          <source src="./assets/herovideo.mp4" type="video/mp4" />
          Ihr Browser unterstützt das Video-Tag nicht.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="container relative z-10 animate-fade-in">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="block">Innovators Serendipity</span>
            <span className="hero-text-gradient">Akademie</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-medium">Führe die Zukunft. Wachse gemeinsam.</p>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Schließe dich einer starken Community von Führungskräften, Innovator:innen und Changemakern an. Entwickle die richtige Haltung, nutze KI sinnvoll und wirke mit Bedeutung.
          </p>
          <Button className="bg-blue hover:bg-blue-dark text-white text-lg px-8 py-6" onClick={() => window.open('https://innovators-serendipity-academy.circle.so/c/welcome/', '_blank')}>
            Einer Mastermind‑Gruppe beitreten
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSectionDE;

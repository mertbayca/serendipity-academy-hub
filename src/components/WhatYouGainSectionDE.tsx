import React from 'react';

const WhatYouGainSectionDE = () => {
  const benefits = [
    {
      title: "Strategische Klarheit",
      description: "Klarheit über deinen Innovationsstil und Führungsstärken. Fokussiere dich auf das, was wirklich zählt."
    },
    {
      title: "KI- & Technologiekönnen",
      description: "Praktische Fähigkeiten, mit KI zu arbeiten statt gegen sie. Nutze moderne Tools ohne dich in Komplexität zu verlieren."
    },
    {
      title: "Community auf Augenhöhe",
      description: "Ein vertrauensvoller Kreis von Changemakern (deine Mastermind-Gruppe). Verbinde dich mit Menschen, die deine Herausforderungen kennen."
    },
    {
      title: "Führung im Wandel",
      description: "Unterstützung für echte Herausforderungen – nicht nur Theorie. Entwickle Führung, die digital stark und menschlich bleibt."
    },
    {
      title: "Innovations-Mindset",
      description: "Persönliche Entwicklung, die professionelle Wirkung entfacht. Denke bahnbrechend und nachhaltig."
    },
    {
      title: "Verbindlichkeit",
      description: "Struktur und sanfter Druck, um Absichten in Ergebnisse zu verwandeln – gemeinsam statt allein."
    }
  ];

  return (
    <section id="what-you-gain" className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">Was du <span className="text-blue">gewinnst</span></h2>
        <h3 className="text-xl text-center font-medium mb-6">Das verändert sich, wenn du dich verpflichtest:</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-blue-light text-white flex items-center justify-center mr-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
              </div>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGainSectionDE;


import React from 'react';

const WhoForSectionDE = () => {
  const personas = [
    {
      title: "Innovationsleiter:innen",
      description: "Verantwortliche für Transformation und Innovationskultur in Organisationen.",
      icon: (
        <svg className="w-12 h-12 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
        </svg>
      )
    },
    {
      title: "Gründer:innen & Unternehmer:innen",
      description: "Visionär:innen, die Unternehmen und Lösungen für unsere gemeinsame Zukunft bauen.",
      icon: (
        <svg className="w-12 h-12 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      )
    },
    {
      title: "Führungskräfte",
      description: "Entscheider:innen, die komplexe Herausforderungen in dynamischen Branchen navigieren.",
      icon: (
        <svg className="w-12 h-12 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
        </svg>
      )
    },
    {
      title: "Technologiestrateg:innen",
      description: "Menschen, die Unternehmen helfen, neue Technologien strategisch einzusetzen.",
      icon: (
        <svg className="w-12 h-12 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
        </svg>
      )
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <h2 className="section-title">Für wen ist das?</h2>
        <p className="section-subtitle">
          Für Führungskräfte, die mit Innovation Positives bewirken wollen. Besonders wertvoll für:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {personas.map((persona, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col items-center text-center">
              <div className="mb-4">{persona.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{persona.title}</h3>
              <p className="text-gray-600">{persona.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoForSectionDE;


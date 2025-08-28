import React from 'react';

const GrowthPathSectionDE = () => {
  const pillars = [
    {
      title: "12-monatige Mastermind-Gruppen",
      description: "Tiefes, begleitetes Peer-Lernen. Eine Gruppe. Ein Jahr. Große Ergebnisse.",
      icon: "🌀",
      link: "#mastermind"
    },
    {
      title: "Innovations-Lernmodule",
      description: "Fokussierte Lernmodule, um Fähigkeiten zu schärfen und den Horizont zu erweitern.",
      icon: "⚡",
      link: "#learning-modules"
    },
    {
      title: "Akademie-Events",
      description: "Für mutige Gespräche und bedeutsame Verbindungen.",
      icon: "🎯",
      link: "#events"
    },
    {
      title: "Individuelles 1:1 Coaching",
      description: "Ein maßgeschneiderter Entwicklungsweg für dich oder dein Team.",
      icon: "🌱",
      link: "#coaching",
      isNew: true
    }
  ];

  return (
    <section id="growth-path" className="section bg-white">
      <div className="container">
        <h2 className="section-title">Dein <span className="text-blue">Wachstumspfad</span></h2>
        <p className="section-subtitle">Wähle deinen nächsten Schritt:</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {pillars.map((pillar, index) => (
            <a key={index} href={pillar.link} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group cursor-pointer hover:border-blue hover:-translate-y-1">
              <div className="text-4xl mb-4">{pillar.icon}</div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue transition-colors">
                {pillar.title}
                {pillar.isNew && (
                  <span className="ml-2 text-sm text-blue">(NEU mit deinem Human‑AI Coach)</span>
                )}
              </h3>
              <p className="text-gray-600">{pillar.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrowthPathSectionDE;


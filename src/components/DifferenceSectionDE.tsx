import React from 'react';

const DifferenceSectionDE = () => {
  const differences = [
    { title: "Lernen in Echtzeit, nicht von gestern", description: "Wir fokussieren aktuelle Chancen und Herausforderungen – keine veralteten Playbooks." },
    { title: "Tiefe menschliche Verbindung, kein Smalltalk", description: "Beziehungen auf Basis von Vertrauen, Verletzlichkeit und echtem Wachstum." },
    { title: "Praxis vor Theorie", description: "Alles ist darauf ausgelegt, direkt in deinem Alltag Wirkung zu entfalten." },
    { title: "Individuelle Entwicklung, kein Einheitsbrei", description: "Dein Weg ist auf deine Ziele, Kontexte und Stärken zugeschnitten." },
    { title: "Peer‑Power statt Experten‑Abhängigkeit", description: "Exzellente Facilitation, aber die Magie liegt in der kollektiven Weisheit." },
    { title: "Kontinuierliche Evolution, kein statischer Lehrplan", description: "Wir entwickeln uns so schnell weiter wie die Welt um uns herum." },
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">Keine Schule. <span className="text-blue">Echtes Leben.</span></h2>
        <p className="section-subtitle">Klassische Bildung passt nicht zum Tempo und Kontext heutiger Innovationsführung. So sind wir anders:</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {differences.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferenceSectionDE;


import React from 'react';

const LearningModulesSectionDE = () => {
  const modules = [
    {
      title: "KI für Führungskräfte",
      description: "Praktische Rahmenwerke, um KI sinnvoll zu nutzen – ohne technische Expert:in zu sein.",
      color: "bg-blue-50 border-blue"
    },
    {
      title: "Bewusste Führung",
      description: "Führungsansätze, die Innovation mit Verantwortung und Menschlichkeit verbinden.",
      color: "bg-green-50 border-green-400"
    },
    {
      title: "Strategische Innovation",
      description: "Methoden, um Chancen zu erkennen und systematische Innovation umzusetzen.",
      color: "bg-purple-50 border-purple-400"
    },
    {
      title: "Digitale Transformation",
      description: "Technische und menschliche Aspekte des Wandels klug navigieren.",
      color: "bg-orange-50 border-orange-400"
    },
    {
      title: "Zukunftsdenken",
      description: "Trends antizipieren und Organisationen auf mögliche Zukünfte vorbereiten.",
      color: "bg-teal-50 border-teal-400"
    },
    {
      title: "Resiliente Organisationen",
      description: "Teams und Systeme aufbauen, die schnell anpassungsfähig bleiben – mit Sinn.",
      color: "bg-red-50 border-red-400"
    }
  ];

  return (
    <section id="learning-modules" className="section bg-white">
      <div className="container">
        <h2 className="section-title">Fokussiertes <span className="text-blue">Lernen</span> für deinen Weg</h2>
        <p className="section-subtitle">
          Lernen bedeutet für uns Gewohnheiten zu entwickeln – nicht To‑dos abzuhaken. Zwischen Mastermind‑Sessions und Praxis stärken unsere Module dein Können.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {modules.map((module, index) => (
            <div key={index} className={`p-6 rounded-lg border-l-4 ${module.color} hover:shadow-md transition-shadow`}>
              <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
              <p className="text-gray-600">{module.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningModulesSectionDE;


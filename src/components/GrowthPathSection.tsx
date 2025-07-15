import React from 'react';

const GrowthPathSection = () => {
  const pillars = [
    {
      title: "12-Month Mastermind Groups",
      description: "Deep, guided peer learning. One group. One year. Big results.",
      icon: "🌀",
      link: "#mastermind"
    },
    {
      title: "Innovation Learning Modules",
      description: "Focused learning modules to sharpen your skills and expand your mindset.",
      icon: "⚡",
      link: "#learning-modules"
    },
    {
      title: "Academy Events",
      description: "For bold conversations and meaningful connections.",
      icon: "🎯",
      link: "#events"
    },
    {
      title: "Custom 1:1 Coaching",
      description: "A tailored growth experience just for you or your team.",
      icon: "🌱",
      link: "#coaching",
      isNew: true
    }
  ];

  return (
    <section id="growth-path" className="section bg-white">
      <div className="container">
        <h2 className="section-title">Your <span className="text-blue">Growth Path</span></h2>
        <p className="section-subtitle">
          Choose how you move forward:
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {pillars.map((pillar, index) => (
            <a 
              key={index} 
              href={pillar.link}
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group cursor-pointer hover:border-blue hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{pillar.icon}</div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue transition-colors">
                {pillar.title}
                {pillar.isNew && (
                  <span className="ml-2 text-sm text-blue">(NEW with your human AI coach)</span>
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

export default GrowthPathSection;

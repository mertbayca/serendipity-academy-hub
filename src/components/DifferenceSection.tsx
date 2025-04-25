
import React from 'react';

const DifferenceSection = () => {
  const differences = [
    {
      title: "Real-time learning, not outdated knowledge",
      description: "We focus on emerging challenges and opportunities, not yesterday's playbooks."
    },
    {
      title: "Deep human connection, not superficial networking",
      description: "Build relationships based on vulnerability, trust, and mutual growth."
    },
    {
      title: "Practice-based, not theory-heavy",
      description: "Everything we offer is designed to be immediately applicable to your real-world challenges."
    },
    {
      title: "Personalized growth, not one-size-fits-all",
      description: "Your journey is tailored to your specific needs, goals, and leadership context."
    },
    {
      title: "Peer-powered, not expert-dependent",
      description: "While we have exceptional facilitators, the real magic happens in the collective wisdom of the community."
    },
    {
      title: "Continuous evolution, not static curriculum",
      description: "Our content and approaches evolve as rapidly as the landscape you're navigating."
    }
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">This Is Not School. <span className="text-blue">This Is Real Life.</span></h2>
        <p className="section-subtitle">
          Traditional education wasn't designed for today's pace of change or the unique challenges faced by innovation leaders.
          Here's how we're different:
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {differences.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferenceSection;

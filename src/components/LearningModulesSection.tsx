
import React from 'react';

const LearningModulesSection = () => {
  const modules = [
    {
      title: "AI for Leaders",
      description: "Practical frameworks for leveraging artificial intelligence without needing to become a technical expert.",
      color: "bg-blue-50 border-blue"
    },
    {
      title: "Conscious Leadership",
      description: "Develop leadership approaches that balance innovation with responsibility and human-centered values.",
      color: "bg-green-50 border-green-400"
    },
    {
      title: "Strategic Innovation",
      description: "Methods for identifying opportunities and implementing systematic innovation in your organization.",
      color: "bg-purple-50 border-purple-400"
    },
    {
      title: "Digital Transformation",
      description: "Navigate the human and technical aspects of organizational change in the digital era.",
      color: "bg-orange-50 border-orange-400"
    },
    {
      title: "Future Thinking",
      description: "Tools for anticipating trends and preparing your organization for multiple possible futures.",
      color: "bg-teal-50 border-teal-400"
    },
    {
      title: "Resilient Organizations",
      description: "Building teams and systems that can adapt quickly to changing circumstances while maintaining purpose.",
      color: "bg-red-50 border-red-400"
    }
  ];

  return (
    <section id="learning-modules" className="section bg-white">
      <div className="container">
        <h2 className="section-title">Fuel Your Journey with <span className="text-blue">Focused Learning</span></h2>
        <p className="section-subtitle">
          Our learning modules are designed to provide practical knowledge you can apply immediately,
          taught by practitioners who understand the real-world challenges you face.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {modules.map((module, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-lg border-l-4 ${module.color} hover:shadow-md transition-shadow`}
            >
              <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
              <p className="text-gray-600">{module.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningModulesSection;

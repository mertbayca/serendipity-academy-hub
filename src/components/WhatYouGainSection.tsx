
import React from 'react';

const WhatYouGainSection = () => {
  const benefits = [
    {
      title: "Strategic Clarity",
      description: "Cut through the noise and gain actionable insights to focus your efforts where they matter most."
    },
    {
      title: "AI & Technology Mastery",
      description: "Develop practical skills for leveraging cutting-edge tools without getting lost in technical complexity."
    },
    {
      title: "Community of Equals",
      description: "Connect with high-caliber peers who understand your challenges and celebrate your victories."
    },
    {
      title: "Leadership Evolution",
      description: "Transform your leadership approach for the digital age while staying true to human-centered values."
    },
    {
      title: "Innovation Mindset",
      description: "Cultivate the mental frameworks that lead to breakthrough thinking and sustainable innovation."
    },
    {
      title: "Accountability",
      description: "Receive the supportive structure and gentle pressure needed to turn intentions into outcomes."
    }
  ];

  return (
    <section id="what-you-gain" className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">What You'll <span className="text-blue">Gain</span></h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
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

export default WhatYouGainSection;

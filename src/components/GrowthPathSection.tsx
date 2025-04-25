
import React from 'react';

const GrowthPathSection = () => {
  const pillars = [
    {
      title: "12-Month Mastermind Groups",
      description: "Join a curated circle of peers who will challenge, support, and inspire your growth through regular meetings and deep discussions.",
      icon: (
        <svg className="w-12 h-12 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
        </svg>
      )
    },
    {
      title: "Innovation Learning Modules",
      description: "Access specialized content designed to build practical skills in leadership, technology, and innovation frameworks.",
      icon: (
        <svg className="w-12 h-12 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
        </svg>
      )
    },
    {
      title: "Academy Events",
      description: "Participate in exclusive gatherings that blend learning, networking, and the serendipitous exchanges that spark breakthrough ideas.",
      icon: (
        <svg className="w-12 h-12 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
      )
    },
    {
      title: "Custom 1:1 Coaching",
      description: "Receive personalized guidance from experienced mentors who understand your unique challenges and growth opportunities.",
      icon: (
        <svg className="w-12 h-12 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="growth-path" className="section bg-white">
      <div className="container">
        <h2 className="section-title">Your <span className="text-blue">Growth Path</span></h2>
        <p className="section-subtitle">
          We've designed a comprehensive ecosystem to nurture your development through multiple complementary pathways.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col items-center text-center"
            >
              <div className="mb-4">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{pillar.title}</h3>
              <p className="text-gray-600">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrowthPathSection;

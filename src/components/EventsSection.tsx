
import React from 'react';

const EventsSection = () => {
  const upcomingEvents = [
    {
      title: "Innovation Summit 2025",
      date: "March 15-17, 2025",
      location: "San Francisco, CA",
      description: "Our flagship annual gathering bringing together academy members and thought leaders for three days of inspiration and connection."
    },
    {
      title: "AI Ethics Workshop",
      date: "June 5, 2025",
      location: "Virtual Event",
      description: "A hands-on session exploring the ethical dimensions of implementing AI in your organization."
    },
    {
      title: "Leadership Retreat",
      date: "September 10-12, 2025",
      location: "Sedona, AZ",
      description: "An immersive experience focused on personal renewal and leadership vision in a stunning natural setting."
    }
  ];

  return (
    <section id="events" className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">Where Innovation Meets <span className="text-blue">Serendipity</span></h2>
        <p className="section-subtitle">
          Our carefully curated events create the perfect conditions for meaningful connections,
          unexpected insights, and the collaborative spirit that sparks breakthrough ideas.
        </p>
        
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Upcoming Events</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <h4 className="text-xl font-semibold mb-2">{event.title}</h4>
                <div className="flex items-center text-gray-600 mb-1">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span>{event.location}</span>
                </div>
                <p className="text-gray-600">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;

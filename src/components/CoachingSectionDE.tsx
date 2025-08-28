import React from 'react';

const CoachingSectionDE = () => {
  const coaches = [
    { name: 'Raquel M. Katigbak', role: 'KI & Innovations‑Coach', description: 'Expertin für KI‑gestützte Transformation und Innovationsstrategie.', image: '/assets/raquel.png' },
    { name: 'Elisabeth Drzaic-Lang', role: 'Leadership & Transformations‑Coach', description: 'Spezialisiert auf bewusste Führung und Organisationswandel.', image: '/assets/elisabeth.png' }
  ];

  return (
    <section id="coaching" className="section bg-white py-20">
      <div className="container max-w-4xl mx-auto px-6">
        <h2 className="section-title text-center mb-2">Dein Human <span className="text-blue">AI Coach</span></h2>
        <p className="section-subtitle text-center mb-10">Individuelle Begleitung durch Expert:innen, die menschliche Weisheit mit KI‑Insights verbinden.</p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-10">
          {coaches.map((coach) => (
            <div key={coach.name} className="flex flex-col items-center">
              <img src={coach.image} alt={coach.name} className={`w-32 h-32 rounded-full object-cover shadow-md mb-3 border-4 border-blue-100 ${coach.name.startsWith('Elisabeth') ? 'scale-90' : ''}`} style={coach.name.startsWith('Elisabeth') ? { objectPosition: 'center', objectFit: 'cover' } : {}} />
              <div className="text-center">
                <p className="font-semibold text-lg">{coach.name}</p>
                <p className="text-gray-500 text-sm">{coach.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a href="#" className="inline-block bg-blue hover:bg-blue-dark text-white font-medium px-6 py-2 rounded shadow transition" onClick={(e) => { e.preventDefault(); window.open('https://innovators-serendipity-academy.circle.so/join?invitation_token=a70ffb53792bb9dec38bdaafe659b603c34c5d8e-9d20cbdd-0e46-4990-a7f6-ac66d99bad20', '_blank'); }}>
            Coaching‑Sitzung anfragen
          </a>
        </div>
      </div>
    </section>
  );
};

export default CoachingSectionDE;


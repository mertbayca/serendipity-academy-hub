import React from 'react';
import { Button } from '@/components/ui/button';

const MembershipProcessSectionDE = () => {
  const steps = [
    { number: '01', title: 'Bewerben', description: 'Kurze Bewerbung, damit wir deine Ziele, Herausforderungen und Erwartungen verstehen.' },
    { number: '02', title: 'Kennenlernen', description: 'Wir melden uns für ein Gespräch – wie die Akademie dich unterstützt und wie du andere inspirierst.' },
    { number: '03', title: 'Beitreten', description: 'Nach Aufnahme erhältst du Zugang zu Events, Inhalten und unserem Alumni‑Netzwerk.' }
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">Mitgliedschafts<span className="text-blue">prozess</span></h2>
        <p className="section-subtitle">Einfach, persönlich und passgenau – für die richtige Community‑Passung.</p>
        <div className="max-w-3xl mx-auto mt-12">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col items-center text-center relative">
                <div className="absolute -top-6 bg-blue text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center">{step.number}</div>
                <h3 className="text-xl font-semibold mt-4 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button className="bg-blue hover:bg-blue-dark text-white text-lg px-8 py-6" onClick={() => window.open('https://innovators-serendipity-academy.circle.so/join?invitation_token=a70ffb53792bb9dec38bdaafe659b603c34c5d8e-9d20cbdd-0e46-4990-a7f6-ac66d99bad20', '_blank')}>
              Starte deine Reise
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipProcessSectionDE;


import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const MastermindSectionDE = () => {
  return (
    <section id="mastermind" className="section bg-gray-50 py-20">
      <div className="container max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-4">
          Dein Inner Circle für <span className="text-blue">äußere Wirkung</span>
        </h2>

        <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          Unsere Mastermind‑Gruppen sind klein, divers und stark engagiert. 
          Für 12 Monate wirst du:
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <img src="./assets/e-master.jpg" alt="Mastermind-Gruppe" className="rounded-xl shadow-lg" />
          </div>

          <div>
            <ul className="list-disc list-inside text-gray-700 text-lg space-y-4 mb-6">
              <li><strong>Echte Herausforderungen</strong> mit echten Peers lösen</li>
              <li><strong>Verbindlichkeit üben, reflektieren und Klarheit gewinnen</strong></li>
              <li><strong>In deinem Wachstum unterstützt – und gefordert – werden</strong></li>
            </ul>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Bonus: Jede Gruppe wird von einem/einer erfahrenen Facilitator (<em>Chair</em>) 
              der Innovators Serendipity Akademie begleitet – inklusive spezieller Coachings vor den Workshops.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Die Gruppenzusammenstellung basiert auf unserer besonderen Formel:
            </p>

            <ul className="list-disc list-inside text-gray-700 text-lg space-y-3 mb-8">
              <li>„Principles You/Us“ von Ray Dalio und Adam Grant</li>
              <li>Bewertung deines Innovationswissens</li>
              <li>Ein freundliches Gespräch mit einem/einer unserer Chairs</li>
            </ul>

            <p className="text-lg text-gray-700 font-semibold mb-6">
              Plätze sind begrenzt.<br />
              Ein Jahr Commitment. Wirkung für immer.
            </p>

            <Link to="/mastermind/de">
              <Button className="w-full md:w-auto bg-blue hover:bg-blue-dark text-white">
                Die Mastermind‑Erfahrung entdecken
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MastermindSectionDE;

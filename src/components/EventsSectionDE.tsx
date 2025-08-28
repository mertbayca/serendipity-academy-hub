import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const EventsSectionDE = () => {
  return (
    <section id="events" className="section bg-gray-50 py-20">
      <div className="container max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Wo Innovation auf <span className="text-blue">Serendipität</span> trifft
        </h2>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
          Ein Raum für unerwartete Ideen, mutige Gespräche und wertvolle Verbindungen.
          <br className="hidden md:block" />
          Nimm an unseren Events teil, um:
        </p>

        <ul className="text-left text-gray-700 text-lg max-w-2xl mx-auto mb-8 space-y-3">
          <li>✅ Dich mit Gleichgesinnten zu vernetzen</li>
          <li>✅ Direkt von Expert:innen und Innovator:innen zu lernen</li>
          <li>✅ Den Dialog über die Zukunft von Arbeit, Lernen und Verbindung mitzugestalten</li>
        </ul>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
          Jede Veranstaltung inspiriert, fordert heraus und erweitert Perspektiven.
          <br />
          <strong>Bereit für den nächsten Schritt?</strong>
          <br />
          Sei nicht nur dabei – gestalte mit.
        </p>

        {/* Keine bevorstehenden Veranstaltungen Hinweis */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 max-w-4xl mx-auto mb-12">
          <div className="p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">Keine bevorstehenden Veranstaltungen</span>
            </div>
            <h3 className="text-2xl font-bold mb-3">
              Wir legen eine kurze Pause ein.
            </h3>
            <p className="text-gray-700 mb-6">
              Schau dir unsere vergangenen Events an und tritt der Community bei, um über neue Termine informiert zu werden.
            </p>
            <Link to="/events">
              <Button className="bg-blue hover:bg-blue-dark text-white">
                Vergangene Events ansehen
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSectionDE;

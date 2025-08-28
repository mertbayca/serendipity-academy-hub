import React from 'react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';

const AboutDE = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Über die <span className="text-blue">Innovators Serendipity Akademie</span>
          </h1>
        </div>
      </section>

      {/* Inspiring Section */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Wir inspirieren einander für eine hellere Zukunft</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            In der Innovators Serendipity Akademie glauben wir an die Kraft des gemeinsamen Wachstums. 
            Unsere Community beruht auf geteilter Weisheit und gegenseitiger Inspiration – für exzellente 
            Führung und verantwortungsvolle Innovation.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Unsere Gründerin</h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3 flex justify-center">
              <img src="./assets/elisabeth.png" alt="Elisabeth Drzaic-Lang" className="rounded-lg shadow-lg w-40 h-40 object-cover border-4 border-blue-100" />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold mb-4">Elisabeth Drzaic-Lang</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Elisabeth Drzaic-Lang ist eine treibende Kraft in Markenstrategie und Leadership. 
                Als Global Marketing Director und Executive Coach hat sie preisgekrönte Kampagnen verantwortet 
                (u.a. Cannes Lions für Milka). Ihr Stil: sinnorientiert, ermächtigend, und auf klare Resultate ausgerichtet –
                für Menschen und Unternehmen, die ihr volles Potenzial entfalten wollen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Non-Executive Board Director Section */}
      <section className="py-12 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-bold mb-8">Non-Executive Board Director</h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3 flex justify-center">
              <img src="./assets/christian.png" alt="Christian Bennewitz" className="rounded-lg shadow-lg w-40 h-40 object-cover border-4 border-blue-100" />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold mb-4">Christian Bennewitz</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Christian Bennewitz verbindet strategische Weitsicht mit konkreter Wirkung. Als Senior Sales Leader bei Salesforce 
                unterstützt er Unternehmen in Europa dabei, CRM und KI für menschlichere Kundenbeziehungen einzusetzen. 
                Mit über 20 Jahren Erfahrung in digitaler Transformation setzt er auf wertebasierte Führung und nachhaltiges Wachstum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our People Section */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Unsere Menschen</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                name: 'Raquel M. Katigbak',
                img: './assets/raquel.png',
                bio: `Co‑Founder & CEO von SUSI Tech und Gründerin von The AI Edge. 25+ Jahre Tech‑Leadership, klare Haltung und verantwortungsvolle Innovation – Raquel macht KI greifbar und anwendbar.`
              },
              {
                name: 'Francesco "Frank" Pagano',
                img: './assets/frank.png',
                bio: `Senior Partner bei JAKALA. MarTech‑Innovation, Storytelling und Strategie – Frank baut die Zukunft, er spricht nicht nur darüber.`
              },
              {
                name: 'Uli Haist',
                img: './assets/uli.png',
                bio: `Marken‑ und Innovationsstratege, u.a. P&G, Wrigley; heute Head of Strategy bei Logic Design Schweiz. Visionär und bodenständig zugleich.`
              },
              {
                name: 'Karin Fuchs-Häseli',
                img: './assets/karin.png',
                bio: `Gründerin von SunHeart Business Leaders. Verbindet Philosophie, Kultur und menschliches Potenzial für regenerative Führung.`
              },
              {
                name: 'Costas Papaikonomou',
                img: './assets/costas.png',
                bio: `Co‑Founder von Happen Group (heute Accenture). Provokateur, Investor, Autor – schafft Milliardenwerte durch Produktinnovation.`
              },
              {
                name: 'Anna Schmidt',
                img: './assets/anna.png',
                bio: `CEO von Career Partners International; Arbeits‑ und Organisationspsychologin. Fokus auf Resilienz, Verbindung und Entwicklung in Übergängen.`
              },
              {
                name: 'Dr. Guenther Dobrauz-Saldapenna',
                img: './assets/guenther.png',
                bio: `VC‑Partner, Longevity‑Vordenker, Bestsellerautor. Investiert in Kreislaufwirtschaft; prägt die Zukunft von Arbeit und Technologie.`
              },
              {
                name: 'Julie Smith',
                img: './assets/julie.png',
                bio: `Karrierecoach aus London (PRESSUREVALVE). Sichtbar werden ohne Selbstdarstellung – klare, menschliche Entwicklung.`
              }
            ].map(expert => (
              <div key={expert.name} className="flex flex-col items-center bg-white rounded-lg shadow-sm border border-gray-100 p-6 text-center">
                <img src={expert.img} alt={expert.name} className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-blue-100" />
                <h4 className="text-lg font-semibold mb-2">{expert.name}</h4>
                <p className="text-gray-700 text-sm">{expert.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Bereit, dich anzuschließen?</h2>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button className="bg-blue hover:bg-blue-dark text-white text-lg px-8 py-6" onClick={() => window.open('https://innovators-serendipity-academy.circle.so/join?invitation_token=a70ffb53792bb9dec38bdaafe659b603c34c5d8e-9d20cbdd-0e46-4990-a7f6-ac66d99bad20', '_blank')}>
              Einer Mastermind‑Gruppe beitreten
            </Button>
            <Button className="bg-white border border-blue text-blue hover:bg-blue-50 text-lg px-8 py-6" onClick={() => window.open('https://innovators-serendipity-academy.circle.so/join?invitation_token=a70ffb53792bb9dec38bdaafe659b603c34c5d8e-9d20cbdd-0e46-4990-a7f6-ac66d99bad20', '_blank')}>
              Mehr erfahren
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutDE;


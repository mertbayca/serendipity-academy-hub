import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { datenschutzSections } from '@/data/datenschutzSections';

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100/40 text-blue-900">
      <Navbar />
      <main className="pt-32 pb-20">
        <section className="container max-w-4xl mx-auto px-6 mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Datenschutz</h1>
          <div className="space-y-6 text-left text-lg text-blue-800 leading-relaxed">
            <p>
              Sofern innerhalb des Internetangebotes die Möglichkeit zur Eingabe persönlicher oder geschäftlicher Daten
              (Emailadressen, Namen, Anschriften) besteht, so erfolgt die Preisgabe dieser Daten seitens des Nutzers auf
              ausdrücklich freiwilliger Basis. Die Inanspruchnahme und Bezahlung aller angebotenen Dienste ist – soweit
              technisch möglich und zumutbar – auch ohne Angabe solcher Daten bzw. unter Angabe anonymisierter Daten oder
              eines Pseudonyms gestattet.
            </p>
            <div>
              <h2 className="text-2xl font-semibold text-blue-900 mb-2">Judikative</h2>
              <p>
                Keine Abmahnung ohne vorherigen Kontakt! Sollte irgendwelcher Inhalt oder die designtechnische Gestaltung
                einzelner Seiten oder Teile dieser Internetseite Rechte Dritter oder gesetzliche Bestimmungen verletzen oder
                anderweitig in irgendeiner Form wettbewerbsrechtliche Probleme hervorbringen, so bitten wir unter Berufung
                auf § 8 Abs. 4 UWG, um eine angemessene, ausreichend erläuternde und schnelle Nachricht ohne Kostennote. Wir
                garantieren, dass die zu Recht beanstandeten Passagen oder Teile dieser Website in angemessener Frist entfernt
                bzw. den rechtlichen Vorgaben umfänglich angepasst werden, ohne dass von Ihrer Seite die Einschaltung eines
                Rechtsbeistandes erforderlich ist. Die Einschaltung eines Anwalts zur für den Diensteanbieter kostenpflichtigen
                Abmahnung entspricht nicht dessen wirklichem oder mutmaßlichem Willen und würde damit einen Verstoß gegen das
                UWG wegen der Verfolgung sachfremder Ziele als beherrschendes Motiv der Verfahrenseinleitung, insbesondere einer
                Kostenerzielungsabsicht als eigentliche Triebfeder, sowie einen Verstoß gegen die Schadensminderungspflicht darstellen.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-blue-900 mb-2">Datenschutzerklärung</h2>
              <p>
                Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere der
                EU-Datenschutzgrundverordnung (DSGVO), ist:
              </p>
              <p className="font-semibold text-blue-900">Empowering from Within GmbH/ Innovators Serendipity Academy</p>
              <p className="font-semibold text-blue-900">Elisabeth Drzaic-Lang</p>
              <p className="font-semibold text-blue-900">8304 Wallisellen</p>
            </div>
          </div>
        </section>

        <section className="container max-w-4xl mx-auto px-6">
          <div className="bg-white shadow-xl rounded-3xl border border-blue-100/70 overflow-hidden">
            <Accordion type="multiple" className="divide-y divide-blue-100">
              {datenschutzSections.map((section, index) => (
                <AccordionItem key={section.title} value={`section-${index}`} className="px-6">
                  <AccordionTrigger className="text-left text-lg md:text-xl font-semibold text-blue-900 py-6">
                    {section.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div
                      className="text-base md:text-lg text-gray-700 leading-relaxed space-y-4 pb-6 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_a]:text-blue-600 [&_a]:underline [&_strong]:font-semibold"
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz;

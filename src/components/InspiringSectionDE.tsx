import React from 'react';

const InspiringSectionDE = () => (
  <section className="section bg-gray-50 py-16">
    <div className="container max-w-3xl mx-auto px-6">
      <h2 className="section-title mb-2 text-center text-3xl md:text-4xl font-extrabold">
        <span className="text-blue">Innovators Serendipity</span> Akademie
      </h2>
      <h3 className="section-subtitle italic mb-8 text-center text-lg text-blue-700 font-medium">Wir inspirieren einander für eine hellere Zukunft</h3>
      <div className="text-base md:text-lg text-gray-800 space-y-5 text-center">
        <p>
          Wir sind eine vertrauensvolle, nicht‑akademische Akademie – <b>inklusive, nicht exklusiv</b>.<br/>
          Für Führungskräfte, die wissen, dass alte Wege nicht mehr funktionieren. Wir bringen neugierige Köpfe und mutige Herzen zusammen, um Zukunft zu gestalten.
        </p>
        <div className="flex flex-col items-center space-y-2">
          <span><b>Keine Noten</b>, aber volles Commitment und Accountability.</span>
          <span><b>Keine Gurus</b>, sondern Business‑Leader, Top‑Coaches und Expert:innen, die begleiten.</span>
        </div>
        <p>
          <b>Starke Gespräche, echtes Wachstum</b> und ein <b>geteilter Zweck</b>.
        </p>
        <p>
          Lernen ist bei uns fluide. Wir wählen Anpassungsfähigkeit statt starre Pläne – im Rhythmus einer sich wandelnden Welt.
          Wir glauben: Eine neue Welt entsteht bereits:
        </p>
        <ul className="list-disc list-inside mx-auto text-left inline-block space-y-1">
          <li>Eine Welt mutigen Lernens und bedeutsamer menschlicher Verbindung.</li>
          <li>Eine Welt, in der Unternehmen und Menschen gemeinsam wachsen.</li>
          <li>Eine Welt stetiger Herausforderungen – und geteilter Lösungen.</li>
        </ul>
        <p className="font-semibold text-lg mt-6">Und du? Bist du bereit, Teil davon zu sein?</p>
        <div className="mt-4">
          <a href="https://innovators-serendipity-academy.circle.so/c/welcome/" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue hover:bg-blue-dark text-white font-medium px-6 py-2 rounded shadow transition">
            Jetzt beitreten
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default InspiringSectionDE;

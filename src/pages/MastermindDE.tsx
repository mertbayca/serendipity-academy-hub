import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import FooterDE from '@/components/FooterDE';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const membershipProcess = [
  { step: '01', title: 'Bewerben', desc: 'Kurze Bewerbung, damit wir deine Ziele, Herausforderungen und Erwartungen verstehen.', icon: '📝' },
  { step: '02', title: 'Kennenlernen', desc: 'Wir melden uns für ein Gespräch – wie die Akademie dich unterstützt und wie du andere inspirierst.', icon: '🤝' },
  { step: '03', title: 'Beitreten', desc: 'Nach Aufnahme erhältst du Zugang zu Events, Inhalten und unserem Alumni‑Netzwerk.', icon: '🎯' }
];

const coreFeatures = [
  { icon: '🎯', title: 'Einzigartiger Aufnahmeprozess', desc: 'Mit Prinzipien von Ray Dalio & Adam Grant – für ein ganzheitliches Profil und bestes Matching.' },
  { icon: '👥', title: 'Passgenaues Gruppen‑Matching', desc: 'Unser Matching bringt dich mit den richtigen, gleichgesinnten Innovator:innen zusammen.' },
  { icon: '⚡', title: 'Co‑Creation & Zusammenarbeit', desc: 'Mit deiner Gruppe und dem/der Chair große Herausforderungen lösen und Innovationen bauen.' },
  { icon: '🌱', title: 'Werte im Alltag', desc: 'Vertrauen, Intuition, Nurturing, Challenge & Growth – für echte Transformation.' }
];

const chairBenefits = [
  'Ehemalige Senior/Executive Business Leaders',
  'Aufsichtsrät:innen & Unternehmer:innen',
  'Motiviert, etwas zurückzugeben',
  'Erfahrung teilen & Wirkung unterstützen',
  'Mindset Richtung Wachstum & Unternehmertum verschieben',
  'Nachhaltige Veränderung in dir und im Unternehmen aufbauen'
];

const journeyHighlights = [
  { icon: '📚', title: 'Innovation & persönliches Wachstum', desc: 'Innovation im Team/Unternehmen führen – und Alltagsherausforderungen mit Peers bearbeiten.' },
  { icon: '🏆', title: 'EDUQUA‑Zertifizierung', desc: 'Zertifikat nach EDUQUA‑Standard, verknüpft mit Innovations‑ und persönlichen Zielen.' },
  { icon: '🎓', title: 'Alumni‑Status', desc: 'Prestigeträchtiger Alumni‑Status der Innovators Serendipity Akademie mit Netzwerkzugang.' }
];

const testimonials = [
  { quote: 'Die Mastermind‑Gruppe hat nicht nur meinen Führungsstil, sondern meinen Ansatz zu Innovation verändert. Die Chairs bringen beeindruckende Weisheit.', author: 'Sarah Chen', role: 'CTO, MedTech Innovation' },
  { quote: '12 Monate, die alles verändert haben. Schon der Aufnahmeprozess war erhellend, die Gruppe wurde mein strategischer Vorteil.', author: 'Marcus Weber', role: 'Founder & CEO, GreenTech Solutions' },
  { quote: 'Vom Matching bis zur EDUQUA‑Zertifizierung – jedes Detail ist auf Wirkung ausgerichtet. Jede Minute wert.', author: 'Elena Rodriguez', role: 'VP Innovation, Fortune 500' }
];

const MastermindDE = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-blue-800/20"></div>
        <div className="container max-w-4xl mx-auto px-6 relative z-10 text-center">
          <Badge className="mb-6 bg-blue/20 text-blue-light border-blue/30 hover:bg-blue/30 transition-all duration-300">Exklusives Leadership‑Programm</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Mastermind‑Gruppen</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Wo Innovation auf Transformation trifft. Durch unseren besonderen Aufnahmeprozess und perfekt abgestimmte Gruppen Co‑Creation erleben.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-blue to-blue-light hover:from-blue-dark hover:to-blue text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfOBFVAeOR1LOH8W7gii5E0V8fv_myycPkSLizkTrEN5N_wPA/viewform?usp=dialog', '_blank')}>
              Starte deine Reise
            </Button>
            <p className="text-blue-light text-sm">12‑monatiges Transformationsprogramm</p>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Was macht unsere Mastermind aus?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Ein Prozess, der zu dir passt. Eine Gruppe, die dich fordert und stärkt.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {coreFeatures.map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-all">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Process */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Mitglied werden</h2>
            <p className="text-xl text-gray-600">Einfach. Persönlich. Passgenau.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {membershipProcess.map((step, i) => (
              <div key={i} className="bg-white rounded-xl p-8 border border-gray-100 text-center shadow-sm hover:shadow-md transition">
                <div className="mx-auto w-14 h-14 rounded-full bg-blue/10 text-blue flex items-center justify-center text-xl mb-4">{step.icon}</div>
                <div className="text-sm text-blue font-bold mb-1">{step.step}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chairs */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200 order-2 md:order-1">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue to-blue-light rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/></svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert:innen‑Mentoring</h3>
                <p className="text-gray-600 leading-relaxed">Unsere Chairs helfen dir, dein Mindset Richtung Wachstum & Unternehmertum zu verschieben – und nachhaltige Veränderung in dir und deinem Unternehmen zu verankern.</p>
              </div>
            </div>
            <div className="order-1 md:order-2 bg-white rounded-2xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold mb-6">Wer sind unsere Chairs?</h3>
              <div className="space-y-3">
                {chairBenefits.map((benefit, i) => (
                  <div key={i} className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-blue mr-3" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12-Month Journey */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-slate-800 text-white">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Deine 12‑Monats‑Reise</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">Innovation führen, täglich wachsen – zusammen mit gleichgesinnten Peers. Lernen, das persönliches und berufliches Wachstum vereint.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {journeyHighlights.map((highlight, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-blue/30 transition-all duration-300 group">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{highlight.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-blue-light">{highlight.title}</h3>
                <p className="text-gray-300 leading-relaxed">{highlight.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center bg-gradient-to-r from-blue/20 to-blue-light/20 rounded-2xl p-8 border border-blue/20">
            <h3 className="text-2xl font-bold mb-4 text-blue-light">Nach Abschluss</h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">Am Ende deiner 12‑Monats‑Reise erhältst du ein <span className="font-semibold text-white">Zertifikat nach EDUQUA‑Standard</span> (Innovation & persönliche Ziele) und den <span className="font-semibold text-blue-light">Alumni‑Status</span> der Innovators Serendipity Akademie.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Stimmen aus der Community</h2>
            <p className="text-xl text-gray-600">Eindrücke unserer Alumni – aus Führung und Organisation</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue">
                <div className="text-blue text-4xl mb-4">"</div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">{t.quote}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue to-blue-light rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">{t.author.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{t.author}</p>
                    <p className="text-blue text-sm font-medium">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue to-blue-light text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-dark/20 to-blue/20"></div>
        <div className="container max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Bereit für den nächsten Schritt?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">Plätze sind begrenzt. Bewerbungen werden sorgfältig geprüft. Deine Transformation beginnt mit einem Klick.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="bg-white text-blue hover:bg-gray-100 px-10 py-4 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105" onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfOBFVAeOR1LOH8W7gii5E0V8fv_myycPkSLizkTrEN5N_wPA/viewform?usp=dialog', '_blank')}>
              Für Mastermind bewerben
            </Button>
          </div>
          <div className="flex justify-center items-center space-x-8 text-blue-200">
            <div className="text-center"><div className="text-2xl font-bold">12</div><div className="text-sm">Monate</div></div>
            <div className="text-center"><div className="text-2xl font-bold">EDUQUA</div><div className="text-sm">Zertifikat</div></div>
            <div className="text-center"><div className="text-2xl font-bold">Alumni</div><div className="text-sm">Netzwerk</div></div>
          </div>
        </div>
      </section>

      <FooterDE />
    </div>
  );
};

export default MastermindDE;

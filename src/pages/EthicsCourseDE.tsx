import React from 'react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircleIcon, LightBulbIcon, Cog6ToothIcon, RocketLaunchIcon, UserGroupIcon, ClockIcon } from '@heroicons/react/24/solid';

const modules = [
  {
    icon: <LightBulbIcon className="w-8 h-8 text-blue-500 mb-2" />, 
    title: "Modul 1: Ethische Grundlagen von Innovation und Führung",
    teaching: [
      "Die kritische Rolle des Geschäfts verstehen",
      "Die Risiken erforschen, die von Ego und Angst angetrieben werden",
      "Wie ethische Prinzipien den Weg für langfristigen Erfolg ebnen",
      "Rahmen für ethische Entscheidungsfindung",
      "Vertrauen durch transparente Führung aufbauen",
      "Die Verbindung zwischen Ethik und nachhaltigem Unternehmenswachstum"
    ],
    practical: [
      "Persönliche Ethik-Bewertungsübung",
      "Workshop zur Bewertung von Innovationsrisiken",
      "Szenarien für ethische Entscheidungsfindung",
      "Gruppendiskussion über ethische Dilemmata",
      "Aktionsplan für die Umsetzung ethischer Praktiken"
    ]
  },
  {
    icon: <Cog6ToothIcon className="w-8 h-8 text-blue-500 mb-2" />, 
    title: "Modul 2: Genialität entfalten durch natürliche Ethik und Selbstführung",
    teaching: [
      "Ausrichtung an den Prinzipien der Natur für bahnbrechende Ideen",
      "Verbindung mit zukünftigen Bedürfnissen durch intuitive Innovation",
      "Unser gesamtes Wesen verstehen: physisch, emotional, mental, spirituell",
      "Entwicklung einer resilienten Future Mindset",
      "Selbstbewusstseinstechniken für innovative Führungskräfte",
      "Integration natürlicher Ethik in Geschäftspraktiken"
    ],
    practical: [
      "Image Streaming geführte Übung",
      "Selbstbewertung unserer Präferenzen - physisch, emotional, mental, spirituell",
      "Zukunftsvision Workshop",
      "Naturinspiriertes Innovations-Brainstorming",
      "Persönlicher Führungsentwicklungsplan"
    ]
  },
  {
    icon: <RocketLaunchIcon className="w-8 h-8 text-blue-500 mb-2" />, 
    title: "Modul 3: Servant Leadership - Andere für Wirkung befähigen",
    teaching: [
      "Prinzipien der ethischen Führung in modernen Organisationen",
      "Fokus auf Stärkung und Befähigung anderer",
      "Anderen helfen, ihren Lebenszweck zu erreichen",
      "Wie ethische Führung Zusammenarbeit und Innovation fördert",
      "Hochleistungsfähige ethische Teams aufbauen",
      "Wirkung über den Profit hinaus messen"
    ],
    practical: [
      "Ethische Führungsbewertung",
      "Workshop zu Team-Befähigungsstrategien",
      "Ihren Führungseinfluss-Plan erstellen",
      "Peer-Coaching-Übungen",
      "Aktionsschritte zur Entwicklung anderer"
    ]
  }
];

const sessions = [
  {
    id: 1,
    title: 'September Sessions',
    month: 'September 2025',
    dates: [
      { date: '3. September', day: 'Mi' },
      { date: '10. September', day: 'Mi' },
      { date: '17. September', day: 'Mi' }
    ],
    timeslots: ['08:00-09:00 MEZ', '17:00-18:00 MEZ'],
    isPopular: true
  },
  {
    id: 2,
    title: 'November Sessions',
    month: 'November 2025',
    dates: [
      { date: '5. November', day: 'Mi' },
      { date: '12. November', day: 'Mi' },
      { date: '19. November', day: 'Mi' }
    ],
    timeslots: ['08:00-09:00 MEZ', '17:00-18:00 MEZ'],
    isPopular: false
  }
];

const outcomes = [
  { icon: <CheckCircleIcon className="w-6 h-6 text-green-500 mr-2" />, text: "Vertrauen zu Ihrem Wettbewerbsvorteil machen" },
  { icon: <CheckCircleIcon className="w-6 h-6 text-green-500 mr-2" />, text: "Führung mit Kernwerten und langfristiger Vision ausrichten" },
  { icon: <CheckCircleIcon className="w-6 h-6 text-green-500 mr-2" />, text: "Komplexe Dilemmata mit Klarheit und Vertrauen navigieren" },
  { icon: <CheckCircleIcon className="w-6 h-6 text-green-500 mr-2" />, text: "Teams mit Respekt und Zweck führen" },
  { icon: <CheckCircleIcon className="w-6 h-6 text-green-500 mr-2" />, text: "Nachhaltige Innovation fördern" }
];

const testimonial = {
  quote: "Dieser Kurs hat die Art, wie ich an Innovation herangehe, völlig verändert. Ich führe jetzt mit einem klaren Zweck und sehe die tiefgreifende Wirkung, die ethische Führung auf mein Team und unsere Ergebnisse hat.",
  author: "Marcus T.",
  role: "Innovationsdirektor, Genf"
};

const heroInfo = [
  { label: "Startdatum", value: "3. September 2025" },
  { label: "Format", value: "Zwei Terminoptionen" },
  { label: "Preis", value: "€250 pro Modul oder €750 für das Gesamtprogramm" }
];

const moduleLinks = [
  "https://innovators-serendipity-academy.circle.so/checkout/ethics-and-innovation-1st-moduleethical-foundations-of-innovation-and-leadership",
  "https://innovators-serendipity-academy.circle.so/checkout/ethics-and-innovation-2nd-module-unlocking-genius-through-natural-ethics-and-self-leadership",
  "https://innovators-serendipity-academy.circle.so/checkout/ethics-and-innovation-3rd-module-servant-leadership-empowering-others-for-impact"
];

const EthicsCourseDE = () => (
  <div className="min-h-screen bg-white">
    <Navbar />
    
    {/* Hero Section */}
    <section className="relative pt-36 pb-20 bg-gradient-to-br from-blue-50 via-white to-amber-50 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Single Large Circle */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#3b82f6" strokeWidth="0.3"/>
          </svg>
        </div>
        {/* Warm Yellow Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-amber-200 opacity-10 transform rotate-45 translate-x-1/4 -translate-y-1/4"></div>
        {/* Blue Accents */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-blue-200 rounded-full opacity-15 blur-3xl"></div>
        {/* Yellow Accent Circle */}
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-amber-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

      {/* Language switcher entfernt: wird in der Navbar angezeigt */}

      <div className="container max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8 relative z-10">
        <div className="flex-1 flex flex-col items-start justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 text-blue-900 leading-tight">Ethik als Strategie</h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-blue-700">Ethik für langfristigen Erfolg zum Leben erwecken</h2>
          
          <div className="mb-6 max-w-xl space-y-3">
            <p className="text-base md:text-lg text-blue-800 leading-relaxed">Priorisieren Sie als Führungskraft Gewinne auf Kosten Ihrer Werte, Prinzipien oder sogar Ihrer Kunden?</p>
            <p className="text-base md:text-lg text-blue-800 leading-relaxed">Könnten Ihre Handlungen (wissentlich oder unwissentlich) der Natur und der Umwelt schaden?</p>
            <p className="text-base md:text-lg text-blue-800 leading-relaxed font-medium">Dieser Kurs bietet die Chance, neu zu beginnen, eine Wachstumsmentalität anzunehmen und mit Integrität voranzugehen, frei von Schuld und Reputationsrisiko.</p>
          </div>
          <div className="flex flex-wrap gap-3 mb-6">
            {heroInfo.map((item, i) => (
              <span key={i} className="inline-block bg-white/90 border border-blue-200 text-blue-900 text-sm rounded-full px-4 py-2 font-semibold shadow-sm">
                <span className="font-bold">{item.label}:</span> <span className="font-bold">{item.value}</span>
              </span>
            ))}
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
            alt="Ethik und Innovation" 
            className="rounded-xl shadow-lg w-64 h-64 object-cover border-4 border-blue-100"
          />
        </div>
      </div>
    </section>

    {/* Key Details Section */}
    <section className="py-8 bg-white">
      <div className="container max-w-4xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 flex flex-col items-center">
          <UserGroupIcon className="w-8 h-8 text-blue-400 mb-2" />
          <h4 className="text-lg font-semibold text-blue-800 mb-2">Für wen ist dieser Kurs?</h4>
          <p className="text-base text-gray-700 leading-relaxed"><span className="font-bold">Fachleute und Führungskräfte</span>, die ethische Prinzipien in ihre Innovationsbemühungen integrieren und nachhaltige Wirkung erzielen möchten.</p>
        </div>
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 flex flex-col items-center">
          <ClockIcon className="w-8 h-8 text-blue-400 mb-2" />
          <h4 className="text-lg font-semibold text-blue-800 mb-2">Format</h4>
          <p className="text-base text-gray-700 leading-relaxed"><span className="font-bold">Drei 1-Stunden-Module</span>, die jeweils Lehre mit praktischen Übungen kombinieren. <span className="font-bold">Zwei Terminoptionen</span> verfügbar.</p>
        </div>
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 flex flex-col items-center">
          <CheckCircleIcon className="w-8 h-8 text-green-500 mb-2" />
          <h4 className="text-lg font-semibold text-blue-800 mb-2">Ergebnis</h4>
          <p className="text-base text-gray-700 leading-relaxed">Gehen Sie mit einem <span className="font-bold">ethischen Framework für Führung</span> und bauen Sie Glaubwürdigkeit bei Stakeholdern auf (Kunden, Mitarbeiter, Investoren und die Öffentlichkeit) für langfristigen Erfolg.</p>
        </div>
      </div>
    </section>

    {/* Course Overview */}
    <section className="py-16 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Kursübersicht</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:gap-8">
          {modules.map((mod, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex flex-col h-full hover:shadow-lg transition-shadow duration-200">
              <div className="flex-1 flex flex-col">
                <div className="flex items-center mb-6">
                  {mod.icon}
                  <div className="ml-3">
                    <div className="text-sm font-bold text-blue-500 mb-1">MODUL {i + 1}</div>
                    <h3 className="text-lg font-bold text-blue-900 leading-tight">{mod.title.replace(/^Modul \d+:\s*/, '')}</h3>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-base font-bold text-blue-700 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Unterricht
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
                    {mod.teaching.map((t, j) => <li key={j} className="flex items-start"><span className="text-blue-400 mr-2 flex-shrink-0 mt-1">•</span><span>{t}</span></li>)}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-base font-bold text-blue-700 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Praktisch
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
                    {mod.practical.map((p, j) => <li key={j} className="flex items-start"><span className="text-green-400 mr-2 flex-shrink-0 mt-1">•</span><span>{p}</span></li>)}
                  </ul>
                </div>
              </div>
              <Button className="bg-blue hover:bg-blue-dark text-white text-sm px-6 py-3 mt-4 font-semibold transition-transform duration-200 hover:scale-105 shadow-sm" onClick={() => window.open(moduleLinks[i], '_blank')}>
                Modul {i + 1} buchen
              </Button>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button className="bg-blue hover:bg-blue-dark text-white text-lg px-10 py-6 transition-transform duration-200 hover:scale-105 shadow-lg font-bold" onClick={() => window.open('#signup', '_self')}>
            Jetzt Gesamtprogramm buchen
          </Button>
        </div>
      </div>
    </section>

    {/* Outcomes */}
    <section className="py-10 bg-white">
      <div className="container max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Was Sie mitnehmen werden</h2>
        <ul className="text-gray-700 text-lg mb-6 text-left mx-auto max-w-xl">
          {outcomes.map((o, i) => (
            <li key={i} className="flex items-center mb-2">{o.icon}<span className="font-bold">{o.text.split(':')[0]}</span>{o.text.includes(':') ? ':' + o.text.split(':').slice(1).join(':') : ''}</li>
          ))}
        </ul>
      </div>
    </section>

    {/* Testimonial */}
    <section className="py-10 bg-gradient-to-r from-blue-100 to-blue-50">
      <div className="container max-w-2xl mx-auto px-6">
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center border border-blue-100">
          <svg className="w-10 h-10 text-blue-300 mb-4" fill="currentColor" viewBox="0 0 32 32"><path d="M10.722 6.052c-5.607 2.055-9.294 7.148-9.294 12.948v7h7v-7h-3.788c0-3.556 2.214-6.685 5.442-7.905l.64-.247v-4.796zm13 0c-5.607 2.055-9.294 7.148-9.294 12.948v7h7v-7h-3.788c0-3.556 2.214-6.685 5.442-7.905l.64-.247v-4.796z" /></svg>
          <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
          <div>
            <p className="font-semibold text-blue-900">{testimonial.author}</p>
            <p className="text-gray-500 text-sm">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </section>

    {/* About Instructor */}
    <section className="py-12 bg-gray-50">
      <div className="container max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 flex justify-center mb-6 md:mb-0">
          <img 
            src="/assets/karin.png" 
            alt="Karin Fuchs-Häseli" 
            className="rounded-xl shadow-lg w-48 h-48 object-cover border-4 border-blue-100"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-blue-900 mb-2">Lernen Sie Ihre Dozentin kennen: Karin Fuchs-Häseli</h3>
          <p className="text-gray-700 mb-2">Mitgründerin & CEO, SunHeart Switzerland AG</p>
          <p className="text-gray-700 mb-2">Karin bringt umfassende Erfahrung in ethischer Unternehmensführung und menschlicher Entwicklung mit. Mit Erfahrung im Bankwesen, HR, Change Management und Unternehmenscoaching hat sie ihre Laufbahn der Förderung nachhaltiger Führung gewidmet. Ihre Arbeit integriert Erkenntnisse aus globalen Kulturen, Philosophien und Naturprinzipien und wendet diese an, um ethische, regenerative Geschäftspraktiken zu schaffen.</p>
        </div>
      </div>
    </section>

    {/* Pricing & Dates */}
    <section className="py-12 bg-white">
      <div className="container max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-8 text-blue-900">Preise & Termine</h2>
        
        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-blue-50 rounded-xl p-6 border-4 border-blue-300 shadow-xl relative">
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">Bester Wert</span>
            <h4 className="text-lg font-semibold text-blue-800 mb-2">Preisoptionen</h4>
            <ul className="text-blue-900 text-base mb-2">
              <li>Pro Modul: <span className="font-bold">€250</span></li>
              <li>Gesamtprogramm: <span className="font-bold">€750</span></li>
            </ul>
          </div>
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <h4 className="text-lg font-semibold text-blue-800 mb-2">Was ist enthalten</h4>
            <ul className="text-blue-900 text-base space-y-1">
              <li>• 3 transformative Sitzungen</li>
              <li>• Praktische ethische Frameworks</li>
              <li>• Führungsentwicklungstools</li>
              <li>• Lebenslanger Zugang zu Materialien</li>
            </ul>
          </div>
        </div>

        {/* Schedule Selection */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-center mb-6 text-blue-900">Verfügbare Zeitpläne</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {sessions.map((session) => (
              <div key={session.id} className={`bg-white rounded-xl shadow-lg border-2 p-6 relative ${session.isPopular ? 'border-blue-300 ring-2 ring-blue-100' : 'border-gray-200'} hover:shadow-xl transition-shadow duration-200`}>
                {session.isPopular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    Als Nächstes
                  </span>
                )}
                
                <div className="text-center mb-4">
                  <h4 className="text-lg font-bold text-blue-900 mb-1">{session.title}</h4>
                  <p className="text-sm text-gray-600 mb-3">{session.month}</p>
                  <div className="flex justify-center items-center gap-2 mb-4">
                    <ClockIcon className="w-5 h-5 text-blue-500" />
                    <span className="text-sm text-gray-600">3 Sitzungen</span>
                  </div>
                </div>

                {/* Session Dates */}
                <div className="space-y-3 mb-4">
                  {session.dates.map((dateInfo, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{dateInfo.date}</p>
                          <p className="text-sm text-gray-500">{dateInfo.day}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Time Options */}
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Wählen Sie Ihr Zeitfenster nach der Anmeldung:</p>
                  <div className="flex flex-wrap gap-2">
                    {session.timeslots.map((slot, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium">
                        {slot}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button className="bg-blue hover:bg-blue-dark text-white text-lg px-8 py-6 transition-transform duration-200 hover:scale-105 shadow-lg" id="signup" onClick={() => window.open('https://innovators-serendipity-academy.circle.so/checkout/ethics-and-innovation-bundle', '_blank')}>Jetzt Gesamtprogramm buchen</Button>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default EthicsCourseDE; 

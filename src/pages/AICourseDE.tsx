import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircleIcon, LightBulbIcon, Cog6ToothIcon, RocketLaunchIcon, UserGroupIcon, ClockIcon } from '@heroicons/react/24/solid';

const modules = [
  {
    icon: <LightBulbIcon className="w-8 h-8 text-blue-500 mb-2" />, 
    title: "Modul 1: Was ist KI wirklich?",
    teaching: [
      "Begrüßung und Kursübersicht",
      "Kurzgeschichte zur Veranschaulichung der Auswirkungen von KI im wirklichen Leben",
      "Was KI ist und was nicht, in einfachen Worten",
      "So funktioniert KI: Muster, Daten und Modelle",
      "Übersicht über die Arten von KI-Tools: Text, Bild, Audio, prädiktiv",
      "Was KI heute kann und was nicht",
      "Gängige KI-Tools, die bereits im Alltag eingesetzt werden"
    ],
    practical: [
      "KI & Sie – Post-It-Wand am Arbeitsplatz",
      "Probieren Sie gemeinsam ein einfaches KI-Tool aus",
      "Kurzes Quiz zur Mythenzerstörung: KI-Fakten vs. Fiktion",
      "Arbeitsblatt: Planen Sie, wie KI in mein Arbeitsleben passen könnte"
    ]
  },
  {
    icon: <Cog6ToothIcon className="w-8 h-8 text-blue-500 mb-2" />, 
    title: "Modul 2: Lasst uns praktisch werden",
    teaching: [
      "KI-Einsatz im Arbeitsalltag: Fallbeispiele",
      "Was eine gute Eingabeaufforderung ausmacht: So steuern Sie KI effektiv",
      "Rollenbasierte Beispiele: Wie KI in Marketing, Personalwesen, Projektmanagement usw. hilft",
      "Wichtige Einschränkungen und Risiken: Voreingenommenheit, Fehlinformationen und Datenschutz",
      "Mensch-KI-Partnerschaften: Wo der Mensch immer noch am wichtigsten ist"
    ],
    practical: [
      "Geführte Übung zum Erstellen von Eingabeaufforderungen",
      "Rollenspiel-Challenge zu zweit oder in kleinen Gruppen",
      "Teilen und diskutieren Sie: Was hat funktioniert, was hat Sie überrascht",
      "Optional: Notieren Sie sich die wichtigsten Tools oder Ideen, um sie später zu erkunden"
    ]
  },
  {
    icon: <RocketLaunchIcon className="w-8 h-8 text-blue-500 mb-2" />, 
    title: "Modul 3: KI mit Absicht",
    teaching: [
      "So bewerten Sie ein KI-Tool: Wert, Ethik, Genauigkeit und Wirkung",
      "Die Zukunft der Arbeit mit KI: wichtige Trends und Veränderungen",
      "Aufbau einer KI-fähigen Denkweise: Seien Sie ein Entdecker, kein Experte",
      "Verantwortungsvoller Einsatz: Wann man KI nicht vertrauen kann",
      "So fangen Sie klein an und gewinnen Vertrauen in die KI"
    ],
    practical: [
      "Erstellen Sie Ihren persönlichen KI-Aktionsplan: 3 Dinge, die Sie in Ihrer Rolle ausprobieren sollten",
      "Überlegen Sie: Was würden Sie mit KI automatisieren, erweitern oder verbessern?",
      "Teilen Sie Ihren Aktionsplan oder Ihre wichtigsten Erkenntnisse mit der Gruppe",
      "Optionales Mitbringsel: ein selbstgemachtes Prompt Journal oder ein wöchentlicher Lerntracker"
    ]
  }
];

const sessions = [
  {
    id: 1,
    month: 'September 2025',
    dates: [
      { date: '11. September', day: 'Mi' },
      { date: '18. September', day: 'Mi' }, 
      { date: '25. September', day: 'Mi' }
    ],
    timeslots: ['12:00–13:00 MEZ', '17:00–18:00 MEZ'],
    isPopular: true
  },
  {
    id: 2,
    month: 'November 2025',
    dates: [
      { date: '13. November', day: 'Do' },
      { date: '20. November', day: 'Do' },
      { date: '27. November', day: 'Do' }
    ],
    timeslots: ['12:00–13:00 MEZ', '17:00–18:00 MEZ'],
    isPopular: false
  }
];

const outcomes = [
  { icon: <CheckCircleIcon className="w-6 h-6 text-green-500 mr-2" />, text: "Ein grundlegender KI-Aktionsplan für Ihren Job" },
  { icon: <CheckCircleIcon className="w-6 h-6 text-green-500 mr-2" />, text: "Praktische Übungen zum Weiterführen zu Hause" },
  { icon: <CheckCircleIcon className="w-6 h-6 text-green-500 mr-2" />, text: "Selbstvertrauen, neue KI-Tools auszuprobieren" },
  { icon: <CheckCircleIcon className="w-6 h-6 text-green-500 mr-2" />, text: "Klarheit darüber, was KI kann und was nicht" },
  { icon: <CheckCircleIcon className="w-6 h-6 text-green-500 mr-2" />, text: "Den Wunsch, weiter zu lernen und zu erkunden" }
];

const testimonial = {
  quote: "Ich hätte nie gedacht, dass ich KI bei der Arbeit einsetzen würde, aber dieser Kurs hat es einfach und unterhaltsam gemacht. Jetzt nutze ich ChatGPT wöchentlich für Berichte und Brainstorming!",
  author: "Anna S.",
  role: "Projektmanagerin, Zürich"
};

const heroInfo = [
  { label: "Startdatum", value: "11. September 2025" },
  { label: "Zeitfenster", value: "12:00–13:00 oder 17:00–18:00 MEZ" },
  { label: "Preis", value: "€299 pro Modul oder €800 für das Gesamtprogramm" }
];

const moduleLinks = [
  "https://innovators-serendipity-academy.circle.so/checkout/ai-module-1-what-is-ai",
  "https://innovators-serendipity-academy.circle.so/checkout/ai-module-2-lets-get-practical",
  "https://innovators-serendipity-academy.circle.so/checkout/ai-module-3-ai-with-intention"
];

const AICourseDE = () => (
  <div className="min-h-screen bg-white">
    <Navbar />
    {/* Hero Section */}
    <section className="relative pt-36 pb-20 bg-blue-50 overflow-hidden">
      <svg className="absolute left-0 top-0 w-full h-full z-0" style={{opacity:0.18}} viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#3b82f6" fillOpacity="1" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
      <div className="container max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 relative z-10">
        <div className="flex-1 flex flex-col items-start justify-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-blue-900 leading-tight">Praktisch mit KI arbeiten</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-700">Für Nicht-Techniker</h2>
          <p className="text-lg md:text-xl text-blue-800 mb-8 max-w-xl leading-relaxed font-light">Ein praxisnaher, jargonfreier Kurs für Fachleute, die von KI-Verwirrung zu KI-Selbstvertrauen gelangen möchten.</p>
          <div className="flex flex-wrap gap-4 mb-8">
            {heroInfo.map((item, i) => (
              <span key={i} className="inline-block bg-white/90 border border-blue-200 text-blue-900 text-sm md:text-base rounded-full px-5 py-2 font-semibold shadow-sm">
                <span className="font-bold">{item.label}:</span> <span className="font-bold">{item.value}</span>
              </span>
            ))}
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img src="/assets/raquel2.png" alt="Raquel M. Katigbak" className="rounded-xl shadow-lg w-72 h-72 object-cover border-4 border-blue-100" />
        </div>
      </div>
    </section>

    {/* Key Details Section */}
    <section className="py-8 bg-white">
      <div className="container max-w-4xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 flex flex-col items-center">
          <UserGroupIcon className="w-8 h-8 text-blue-400 mb-2" />
          <h4 className="text-lg font-semibold text-blue-800 mb-2">Für wen ist dieser Kurs?</h4>
          <p className="text-base text-gray-700 leading-relaxed"><span className="font-bold">Unternehmensprofis</span> und die breite Öffentlichkeit, die KI-Tools wie ChatGPT nutzen möchten, ohne Programmierer zu werden.</p>
        </div>
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 flex flex-col items-center">
          <ClockIcon className="w-8 h-8 text-blue-400 mb-2" />
          <h4 className="text-lg font-semibold text-blue-800 mb-2">Format</h4>
          <p className="text-base text-gray-700 leading-relaxed"><span className="font-bold">Drei 1-Stunden-Module</span>, jeweils mit 30 Minuten Unterricht und 30 Minuten praktischen Übungen. <span className="font-bold">Zwei Zeitfenster</span> pro Sitzung.</p>
        </div>
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 flex flex-col items-center">
          <CheckCircleIcon className="w-8 h-8 text-green-500 mb-2" />
          <h4 className="text-lg font-semibold text-blue-800 mb-2">Ergebnis</h4>
          <p className="text-base text-gray-700 leading-relaxed">Gehen Sie mit einem <span className="font-bold">grundlegenden KI-Aktionsplan</span> für Ihren Job, praktischen Übungen zum Weiterführen zu Hause und dem Wunsch, mehr zu lernen.</p>
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
                    Unterricht (30 min)
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
                    {mod.teaching.map((t, j) => <li key={j} className="flex items-start"><span className="text-blue-400 mr-2 flex-shrink-0 mt-1">•</span><span>{t}</span></li>)}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-base font-bold text-blue-700 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Praktisch (30 min)
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

    {/* About Raquel */}
    <section className="py-12 bg-gray-50">
      <div className="container max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 flex justify-center mb-6 md:mb-0">
          <img src="/assets/raquel.png" alt="Raquel M. Katigbak" className="rounded-xl shadow-lg w-48 h-48 object-cover border-4 border-blue-100" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-blue-900 mb-2">Lernen Sie Ihre Dozentin kennen: Raquel M. Katigbak</h3>
          <p className="text-gray-700 mb-2">Mitgründerin & CEO, SUSI Tech | Autorin, Discovering AI: In Our Town</p>
          <p className="text-gray-700 mb-2">Raquel ist eine vertrauenswürdige Stimme zu KI und Transformation, mit über 25 Jahren Erfahrung in aufstrebenden Technologien und Führung. Sie hilft KMUs durch verantwortungsvolle Innovation nachhaltig zu wachsen und hat kürzlich <a href="https://www.theaiedge.space" target="_blank" rel="noopener noreferrer" className="text-blue underline">The AI Edge</a> gestartet, eine Plattform für Führungskräfte, um KI gezielt zu erkunden und einzusetzen.</p>
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
              <li>Pro Modul: <span className="font-bold">€299</span></li>
              <li>Gesamtprogramm: <span className="font-bold">€800</span> <span className="text-green-700 font-bold">(10% sparen)</span></li>
            </ul>
          </div>
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <h4 className="text-lg font-semibold text-blue-800 mb-2">Was ist enthalten</h4>
            <ul className="text-blue-900 text-base space-y-1">
              <li>• 3 interaktive Live-Sessions</li>
              <li>• Praktische Übungen & Vorlagen</li>
              <li>• Community-Zugang</li>
              <li>• Lebenslanger Zugang zu Kursmaterialien</li>
            </ul>
          </div>
        </div>

        {/* Session Selection */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-center mb-6 text-blue-900">Verfügbare Sessions</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {sessions.map((session) => (
              <div key={session.id} className={`bg-white rounded-xl shadow-lg border-2 p-6 relative ${session.isPopular ? 'border-blue-300 ring-2 ring-blue-100' : 'border-gray-200'} hover:shadow-xl transition-shadow duration-200`}>
                {session.isPopular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    Als Nächstes
                  </span>
                )}
                
                <div className="text-center mb-4">
                  <h4 className="text-lg font-bold text-blue-900 mb-2">{session.month}</h4>
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
          <Button className="bg-blue hover:bg-blue-dark text-white text-lg px-8 py-6 transition-transform duration-200 hover:scale-105 shadow-lg" id="signup" onClick={() => window.open('https://innovators-serendipity-academy.circle.so/checkout/getting-practical-with-ai', '_blank')}>Jetzt Gesamtprogramm buchen</Button>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default AICourseDE; 

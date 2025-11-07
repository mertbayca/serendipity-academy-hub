import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DiscountBanner from '@/components/DiscountBanner';
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
    month: 'November 2025',
    dates: [
      { date: '13. November', day: 'Do' },
      { date: '20. November', day: 'Do' },
      { date: '27. November', day: 'Do' }
    ],
    timeslots: ['12:00–13:00 MEZ', '17:00–18:00 MEZ'],
    isPopular: true
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
  quote: "Der AI-Kurs von Innovators Serendipity war ein Gamechanger für mich! Ich habe so viele praxisnahe Tipps mitgenommen, die ich sofort umsetzen konnte – besonders fürs kreative Arbeiten. Dank der klaren Anleitungen kann ich jetzt nicht nur gezielter prompten, sondern setze KI aktiv für mein eigenes Buchprojekt und meine Business-Ideen ein. Absolute Empfehlung für alle, die KI kreativ und strategisch nutzen wollen!",
  author: "Simone M.",
  role: "Co-Founder"
};

const heroInfo = [
  { label: "Startdatum", value: "13. November 2025" },
  { label: "Zeitfenster", value: "12:00–13:00 oder 17:00–18:00 MEZ" }
];

const moduleLinks = [
  // Modul 1
  "/w#/bookcart?fcourses=module_1_what_is_ai_really",
  // Modul 2
  "/w#/bookcart?fcourses=module_2_lets_get_practical",
  // Modul 3
  "/w#/bookcart?fcourses=2_module_3_ai_with_intention"
];

const AICourseDE = () => (
  <div className="min-h-screen bg-white">
    <Navbar />
    {/* Hero Section */}
    <section className="relative pt-36 pb-20 bg-blue-50 overflow-hidden">
      <svg className="absolute left-0 top-0 w-full h-full z-0" style={{opacity:0.18}} viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#3b82f6" fillOpacity="1" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
      <div className="container max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 relative z-10">
        <div className="flex-1 flex flex-col items-start justify-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-blue-900 leading-tight">Lassen Sie sich inspirieren <span className="block">von KI</span></h1>
          <p className="text-lg md:text-xl text-blue-800 mb-3 max-w-xl leading-relaxed">Entwickeln Sie Ihre Ideen weiter, indem Sie KI einsetzen.</p>
          <p className="text-lg md:text-xl text-blue-800 mb-3 max-w-xl leading-relaxed">Die meisten von uns kennen KI-Tools und haben sie ausprobiert. Dieser Kurs richtet sich an Fachleute, die Inspiration suchen: Was lässt sich mit KI noch tun? Wie kann sie Innovationen vorantreiben? Wie spart sie Zeit bei alltäglichen Aufgaben?</p>
          <p className="text-lg md:text-xl text-blue-700 mb-8 max-w-xl leading-relaxed font-semibold">Lassen Sie sich inspirieren und nehmen Sie an unserem November-Kurs teil!</p>
          <div className="flex flex-wrap gap-4 mb-6">
            {heroInfo.map((item, i) => (
              <span key={i} className="inline-block bg-white/90 border border-blue-200 text-blue-900 text-sm md:text-base rounded-full px-5 py-2 font-semibold shadow-sm">
                <span className="font-bold">{item.label}:</span> <span className="font-bold">{item.value}</span>
              </span>
            ))}
          </div>
          <DiscountBanner
            title="Frühbucher: Spare 25 % auf das Gesamtprogramm"
            description="Melden Sie sich bis zum 30. November an und sichern Sie sich 25 % Rabatt auf unsere kommenden Sessions."
            code="EB2025"
            validity="Gültig bis 30. Nov 2025"
            className="mt-2"
          />
        </div>
        <div className="flex-1 flex justify-center">
          <img src="/assets/raquel2.png" alt="Raquel M. Katigbak" className="rounded-xl shadow-lg w-72 h-72 object-cover border-4 border-blue-100" />
        </div>
      </div>
      {/* Butlerapp Kurstabelle */}
      <div className="container max-w-5xl mx-auto px-6 relative z-10 mt-8">
        <wscourselist
          className="ws-element"
          fcourses="getting_practical_with_ai_for_non_techies"
          data-ftagsnot="intern"
          data-columns="course,place,price,from,to,info,infolink,remaining,booklink"
          data-fixed-columns="course,place,booklink"
        ></wscourselist>
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
          <Button className="bg-blue hover:bg-blue-dark text-white text-lg px-10 py-6 transition-transform duration-200 hover:scale-105 shadow-lg font-bold" id="signup" onClick={() => window.open('/w#/bookcart?fcourses=getting_practical_with_ai_for_non_techies', '_blank')}>
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

    {/* Termine */}
    <section className="py-12 bg-white">
      <div className="container max-w-6xl mx-auto px-6">
        {/* Was ist enthalten */}
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 mb-12">
          <h4 className="text-lg font-semibold text-blue-800 mb-2">Was ist enthalten</h4>
          <ul className="text-blue-900 text-base space-y-1">
            <li>• 3 live-interaktive Sessions</li>
            <li>• Praktische Übungen & Vorlagen</li>
            <li>• Zugang zur Community</li>
            <li>• Lebenslanger Zugriff auf Kursmaterialien</li>
          </ul>
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
          <Button className="bg-blue hover:bg-blue-dark text-white text-lg px-8 py-6 transition-transform duration-200 hover:scale-105 shadow-lg" id="signup" onClick={() => window.open('/w#/bookcart?fcourses=getting_practical_with_ai_for_non_techies', '_blank')}>Jetzt Gesamtprogramm buchen</Button>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default AICourseDE; 

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DiscountBanner from '@/components/DiscountBanner';
import { Button } from '@/components/ui/button';
import {
  LightBulbIcon,
  MagnifyingGlassCircleIcon,
  PuzzlePieceIcon,
  ArrowPathIcon,
  CheckCircleIcon,
  UserGroupIcon,
  ClockIcon,
} from '@heroicons/react/24/solid';

const modules = [
  {
    icon: <LightBulbIcon className="w-8 h-8 text-blue-500 mb-2" />, 
    title: 'Modul 1: Stolpersteine in etablierten Unternehmen',
    teaching: [
      'Ingeborgs Weg durch 26 Jahre Corporate Innovation und was sie aus hohen Misserfolgsquoten gelernt hat',
      'Außenperspektive: Warum Innovationsprogramme in Großunternehmen ins Stocken geraten',
      'Stolperstein 1: Wir stellen nicht die richtigen Fragen – unklare Problemstellungen führen zu unscharfen Strategien',
      'Stolperstein 2: Wir wissen zu viel – wie Erfahrung, Annahmen und “Das hat noch nie funktioniert” Fortschritt blockieren',
      'Stolperstein 3: Wir können nicht loslassen – warum Zusammenarbeit stärker ist als Insellösungen',
    ],
    practical: [
      'Interaktive Arbeitssession: Testen Sie die Problemstellungen, mit denen Ihr Team arbeitet',
      'Bias-Breaker: Machen Sie “Wir wissen das schon”-Narrative sichtbar und hinterfragen Sie die Annahmen dahinter',
      'Collaboration Mapping: Wo könnten externe Partner Lernen und Umsetzung beschleunigen?',
    ],
  },
  {
    icon: <MagnifyingGlassCircleIcon className="w-8 h-8 text-blue-500 mb-2" />, 
    title: 'Modul 2: Raketenstarts & Immunsysteme',
    teaching: [
      'Stolperstein 4: Die Raketenstart-Mentalität – warum Weniger, Größer, Besser Innovation verlangsamt',
      'Zusammenhang zwischen hohen Fehlkosten, geringer Risikobereitschaft und verlorenen Speed-to-Market-Rennen',
      'Startup-Instrumente: Hypothesenbasierte Experimente, Rapid Iteration, Kill Gates und Metered Funding',
      'Stolperstein 5: Das Immunsystem des Kerngeschäfts – wie KPIs und Prozesse Neues abwehren',
      'Praxisbeispiele aus Einkauf, Logistik, Vertrieb und Marketing, die die Immunreaktion zeigen',
    ],
    practical: [
      'Funnel-Review: Analysieren Sie Ihr Verhältnis von Big Bets und Small Bets',
      'Diagnostics Lab: Verfolgen Sie, wo Supportfunktionen Innovation blockieren, und entwickeln Sie Gegenmaßnahmen',
      'Aktionsplanung: Skizzieren Sie ein schlankes Experiment, das interne Hürden umgeht',
    ],
  },
  {
    icon: <PuzzlePieceIcon className="w-8 h-8 text-blue-500 mb-2" />, 
    title: 'Modul 3: Innovation, die den Kern stärkt',
    teaching: [
      'Stolperstein 6: Innovation als Zusatz statt zur Stärkung des Kerngeschäfts',
      'Doblin\'s Ten Types of Innovation nutzen, um über “neue Produkte” hinauszugehen',
      'Stolperstein 7: KPIs des Kerngeschäfts übernehmen und so unbeabsichtigt den Status quo festigen',
      'Erfolgskennzahlen gestalten, die wirklich auf Zukunftsfähigkeit einzahlen',
    ],
    practical: [
      'Ten-Types-Ideation: Plattform-, Geschäftsmodell- und Go-to-Market-Konzepte für Ihren Kontext entwickeln',
      'KPI-Clinic: Kennzahlen definieren, die zur Ambition aus Modul 1 passen',
      'Reflexion: Neue KPIs mit klaren Problemstellungen verknüpfen',
    ],
  },
  {
    icon: <ArrowPathIcon className="w-8 h-8 text-blue-500 mb-2" />, 
    title: 'Modul 4: Mindshifts & nächste Schritte',
    teaching: [
      'Fünf Mindshifts, die Corporate Innovation zum Erfolg führen',
      'Von Entweder-oder zu Sowohl-als-auch bei Zukunftsszenarien',
      'Von Weniger-Größer-Besser zu Mehr-Schneller-Günstiger',
      'Von Stage-Gate-Validierung zu Test & Learn, Rapid Iteration und Early Kill',
      'Von Geschlossen/Wettbewerb zu Offen/Kollaboration',
      'Wrap-up: Sieben entscheidende Fragen, bevor Sie mit Innovation starten',
    ],
    practical: [
      'Mythen-Check: Was wir wirklich von Startups übernehmen sollten',
      'Mindshift-Selbstcheck: Wo steht Ihre Organisation heute?',
      'Commitment-Workshop: Fragen, Kollaborationen und KPIs priorisieren, die Sie vorantreiben wollen',
    ],
  },
];

const sessions = [
  {
    id: 1,
    title: 'Herbst-Sessions',
    month: '30. Okt – 20. Nov 2025',
    dates: [
      { date: '30. Okt', day: 'Do' },
      { date: '6. Nov', day: 'Do' },
      { date: '13. Nov', day: 'Do' },
      { date: '20. Nov', day: 'Do' },
    ],
    timeslots: ['17:00–18:00 MEZ'],
    isPopular: true,
  },
  {
    id: 2,
    title: 'Spät-Herbst-Sessions',
    month: '27. Nov – 18. Dez 2025',
    dates: [
      { date: '27. Nov', day: 'Do' },
      { date: '4. Dez', day: 'Do' },
      { date: '11. Dez', day: 'Do' },
      { date: '18. Dez', day: 'Do' },
    ],
    timeslots: ['17:00–18:00 MEZ'],
    isPopular: false,
  },
];

const outcomes = [
  { icon: <CheckCircleIcon className="w-6 h-6 text-green-500 mr-2" />, text: 'Geschärfte Problemstellungen und Innovationsstrategien, die on brief bleiben' },
  { icon: <CheckCircleIcon className="w-6 h-6 text-green-500 mr-2" />, text: 'Ein Toolkit, um Big Bets mit einem Portfolio kleiner Experimente auszubalancieren' },
  { icon: <CheckCircleIcon className="w-6 h-6 text-green-500 mr-2" />, text: 'Ansätze, um das Corporate Immunsystem zu neutralisieren und Ideen am Leben zu halten' },
  { icon: <CheckCircleIcon className="w-6 h-6 text-green-500 mr-2" />, text: 'Kennzahlen, die Zukunftsfähigkeit messen statt kurzfristige ROI-Ziele' },
  { icon: <CheckCircleIcon className="w-6 h-6 text-green-500 mr-2" />, text: 'Fünf Mindshifts, die Teams, Partner und Führung mitziehen' },
];

const heroInfo = [
  { label: 'Startdatum', value: '30. Oktober 2025' },
  { label: 'Format', value: 'Vier Live-Sessions à 60 Minuten' },
  { label: 'Zeitfenster', value: '17:00–18:00 MEZ' },
];

const moduleLinks = [
  '/w#/bookcart?fcourses=module_1_stumbling_blocks_inside_established_companies',
  '/w#/bookcart?fcourses=module_2_rocket_launches_immune_systems',
  '/w#/bookcart?fcourses=innovation_that_grows_the_core',
  '/w#/bookcart?fcourses=module_4_mindshifts_next_moves',
];

const StumblingBlocksCourseDE = () => (
  <div className="min-h-screen bg-white">
    <Navbar />

    {/* Hero Section */}
    <section className="relative pt-36 pb-20 bg-gradient-to-br from-blue-50 via-white to-amber-50 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#3b82f6" strokeWidth="0.3" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-amber-200 opacity-10 transform rotate-45 translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-blue-200 rounded-full opacity-15 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-amber-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8 relative z-10">
        <div className="flex-1 flex flex-col items-start justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 text-blue-900 leading-tight">Stolpersteine in der Corporate Innovation</h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-blue-700">Wiederkehrende Blockaden in wiederholbare Durchbrüche verwandeln</h2>

          <div className="mb-6 max-w-xl space-y-3">
            <p className="text-base md:text-lg text-blue-800 leading-relaxed">Entdecken Sie die sieben Stolpersteine, die Innovation in Großunternehmen bremsen – und lernen Sie die Mindshifts kennen, die den Weg freimachen.</p>
            <p className="text-base md:text-lg text-blue-800 leading-relaxed">Jedes Modul verbindet echte Geschichten von Ingeborg Gasser-Kriss mit Werkzeugen, die Sie direkt im Team anwenden können.</p>
            <p className="text-base md:text-lg text-blue-800 leading-relaxed font-medium">Werden Sie zukunftsfit und halten Sie Ihr Innovationsportfolio in Bewegung.</p>
          </div>
          <div className="flex flex-wrap gap-3 mb-6">
            {heroInfo.map((item, i) => (
              <span key={i} className="inline-block bg-white/90 border border-blue-200 text-blue-900 text-sm rounded-full px-4 py-2 font-semibold shadow-sm">
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
          <img
            src="/assets/ingeborg.png"
            alt="Ingeborg Gasser-Kriss"
            className="rounded-xl shadow-lg w-64 h-64 object-cover border-4 border-blue-100"
          />
        </div>
      </div>

      {/* Butlerapp Course Table */}
      <div className="container max-w-5xl mx-auto px-6 relative z-10 mt-8">
        <wscourselist
          className="ws-element"
          fcourses="stumbling_blocks_in_corporate_innovation"
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
          <p className="text-base text-gray-700 leading-relaxed"><span className="font-bold">Leiter*innen für Innovation, Strategie und Transformation</span>, die ihr Momentum zurückgewinnen und ihr Portfolio zukunftssicher machen wollen.</p>
        </div>
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 flex flex-col items-center">
          <ClockIcon className="w-8 h-8 text-blue-400 mb-2" />
          <h4 className="text-lg font-semibold text-blue-800 mb-2">Format</h4>
          <p className="text-base text-gray-700 leading-relaxed"><span className="font-bold">Vier Module à 60 Minuten</span>, mit Geschichten, Frameworks und interaktiven Arbeitssessions. <span className="font-bold">Ein Live-Zeitfenster</span> um 17:00–18:00 MEZ.</p>
        </div>
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 flex flex-col items-center">
          <CheckCircleIcon className="w-8 h-8 text-green-500 mb-2" />
          <h4 className="text-lg font-semibold text-blue-800 mb-2">Ergebnis</h4>
          <p className="text-base text-gray-700 leading-relaxed">Sie erhalten <span className="font-bold">ein Playbook mit Mindshifts, Tools und KPIs</span>, das Innovation in komplexen Organisationen lebendig hält.</p>
        </div>
      </div>
    </section>

    {/* Course Overview */}
    <section className="py-16 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Kursübersicht</h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 lg:gap-8">
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
                    Theorie (30 min)
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
                    {mod.teaching.map((t, j) => (
                      <li key={j} className="flex items-start">
                        <span className="text-blue-400 mr-2 flex-shrink-0 mt-1">•</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-base font-bold text-blue-700 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Praxis (30 min)
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
                    {mod.practical.map((p, j) => (
                      <li key={j} className="flex items-start">
                        <span className="text-green-400 mr-2 flex-shrink-0 mt-1">•</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <Button
                className="bg-blue hover:bg-blue-dark text-white text-sm px-6 py-3 mt-4 font-semibold transition-transform duration-200 hover:scale-105 shadow-sm"
                onClick={() => window.open(moduleLinks[i], '_blank')}
              >
                Modul {i + 1} buchen
              </Button>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button
            className="bg-blue hover:bg-blue-dark text-white text-lg px-10 py-6 transition-transform duration-200 hover:scale-105 shadow-lg font-bold"
            id="signup"
            onClick={() => window.open('/w#/bookcart?fcourses=full_course', '_blank')}
          >
            Gesamtprogramm jetzt buchen
          </Button>
        </div>
      </div>
    </section>

    {/* Outcomes */}
    <section className="py-10 bg-white">
      <div className="container max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Das nehmen Sie mit</h2>
        <ul className="text-gray-700 text-lg mb-6 text-left mx-auto max-w-xl">
          {outcomes.map((o, i) => (
            <li key={i} className="flex items-center mb-2">
              {o.icon}
              <span className="font-bold">{o.text.split(':')[0]}</span>
              {o.text.includes(':') ? ':' + o.text.split(':').slice(1).join(':') : ''}
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* Über Ingeborg */}
    <section className="py-12 bg-gray-50">
      <div className="container max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <img
            src="/assets/ingeborg2.png"
            alt="Porträt von Ingeborg Gasser-Kriss"
            className="rounded-xl shadow-lg w-56 h-56 object-cover border-4 border-blue-100"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold text-blue-900 mb-3">Geleitet von Ingeborg Gasser-Kriss</h3>
          <p className="text-gray-700 mb-2">Beirats- und Verwaltungsrätin in etablierten Unternehmen sowie Startups in den Bereichen Food, FoodTech und Foodservice.</p>
          <p className="text-gray-700 mb-2">Senior Innovation Advisor und Owner von Agent21, begleitet Führungsteams bei strategischen Innovationsherausforderungen.</p>
          <p className="text-gray-700 mb-2">Ehemalige Global VP Innovation bei Mondelez International; Initiatorin des SnackFutures-Inkubators.</p>
          <p className="text-gray-700 mb-2">Direktorin des Founder Institute Schweiz, Keynote Speakerin zur Zukunft der Ernährung und Mentorin führender Acceleratoren.</p>
          <p className="text-gray-700">Bringt 26 Jahre Marketing- und Innovationsexpertise mit, um Konsumgüterunternehmen fit für Innovation im 21. Jahrhundert zu machen.</p>
        </div>
      </div>
    </section>

    {/* Termine */}
    <section className="py-12 bg-white">
      <div className="container max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-8 text-blue-900">Termine & Ablauf</h2>

        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 mb-12">
          <h4 className="text-lg font-semibold text-blue-800 mb-2">Was ist enthalten</h4>
          <ul className="text-blue-900 text-base space-y-1">
            <li>• 4 interaktive Live-Sessions</li>
            <li>• Vorlagen und Tools zur direkten Anwendung</li>
            <li>• Community-Zugang für Peer-Austausch</li>
            <li>• Aufzeichnungen und Materialien nach jeder Session</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-center mb-6 text-blue-900">Verfügbare Sessions</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {sessions.map((session) => (
              <div
                key={session.id}
                className={`bg-white rounded-xl shadow-lg border-2 p-6 relative ${session.isPopular ? 'border-blue-300 ring-2 ring-blue-100' : 'border-gray-200'} hover:shadow-xl transition-shadow duration-200`}
              >
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
                    <span className="text-sm text-gray-600">4 Sessions</span>
                  </div>
                </div>

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

                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Session-Zeit:</p>
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
          <Button
            className="bg-blue hover:bg-blue-dark text-white text-lg px-8 py-6 transition-transform duration-200 hover:scale-105 shadow-lg"
            id="signup"
            onClick={() => window.open('/w#/bookcart?fcourses=full_course', '_blank')}
          >
            Gesamtprogramm jetzt buchen
          </Button>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default StumblingBlocksCourseDE;

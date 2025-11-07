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
    title: 'Module 1: Stumbling Blocks Inside Established Companies',
    teaching: [
      'Ingeborg\'s journey through 26 years of corporate innovation and what she learned from high failure rates',
      'Outside-in observations on how innovation programs inside large enterprises stall',
      'Stumbling block 1: We are not asking the right questions — weak problem statements cause fuzzy strategies',
      'Stumbling block 2: We know too much — how expertise, assumptions, and “that never worked” stories block progress',
      "Stumbling block 3: We can't let go — why collaboration beats going it alone",
    ],
    practical: [
      'Interactive working session: stress-test the problem statements you are using today',
      'Bias breaker: surface “we already know” narratives and reframe the underlying assumptions',
      'Collaboration mapping: identify where outside partners could accelerate learning and delivery',
    ],
  },
  {
    icon: <MagnifyingGlassCircleIcon className="w-8 h-8 text-blue-500 mb-2" />, 
    title: 'Module 2: Rocket Launches & Immune Systems',
    teaching: [
      'Stumbling block 4: The rocket-launch mindset - why fewer, bigger, better innovations slow you down',
      'Linking high cost of failure to low risk appetite, slower validation, and losing the race to market',
      'Startup-inspired toolset: hypothesis-led experiments, rapid iteration, kill gates, and metered funding',
      'Stumbling block 5: The corporate immune system - how core KPIs and processes reject anything different',
      'Real-life examples from procurement, logistics, sales, and marketing that illustrate the immune response',
    ],
    practical: [
      'Innovation funnel review: assess your mix of big bets and small bets',
      'Diagnostics lab: trace where support functions block innovation and design countermeasures',
      'Action planning: outline one lightweight experiment that bypasses internal roadblocks',
    ],
  },
  {
    icon: <PuzzlePieceIcon className="w-8 h-8 text-blue-500 mb-2" />, 
    title: 'Module 3: Innovation That Grows the Core',
    teaching: [
      'Stumbling block 6: Treating innovation as an add-on instead of strengthening the core business',
      "Using Doblin's Ten Types of Innovation to expand beyond “new products”",
      'Stumbling block 7: Borrowing KPIs from the core business and accidentally reinforcing the status quo',
      'Designing measures of success that reflect future-proof goals',
    ],
    practical: [
      'Ten Types ideation: generate platform, business model, and route-to-market concepts for your context',
      'KPI clinic: define metrics that align with the ambition you set in Module 1',
      'Reflection: connect refreshed KPIs back to sharp problem statements',
    ],
  },
  {
    icon: <ArrowPathIcon className="w-8 h-8 text-blue-500 mb-2" />, 
    title: 'Module 4: Mindshifts & Next Moves',
    teaching: [
      'Five mindshifts that enable corporate innovation to succeed',
      'From either-or to both/and thinking about future scenarios',
      'From fewer, bigger, better to more, faster, cheaper experiments',
      'From stage-gate validation to test-and-learn, rapid iteration, and early kill decisions',
      'From closed and competitive to open and collaborative models',
      'Wrap-up: the seven essential questions to ask before you start innovating',
    ],
    practical: [
      'Quick myth-busting: what to actually borrow from startups',
      'Mindshift self-assessment: where does your organisation sit today?',
      'Commitment workshop: prioritise the questions, collaborations, and KPIs you will take forward',
    ],
  },
];

const sessions = [
  {
    id: 1,
    title: 'Autumn Sessions',
    month: '30 Oct – 20 Nov 2025',
    dates: [
      { date: '30 Oct', day: 'Thu' },
      { date: '6 Nov', day: 'Thu' },
      { date: '13 Nov', day: 'Thu' },
      { date: '20 Nov', day: 'Thu' },
    ],
    timeslots: ['17:00–18:00 CET'],
    isPopular: true,
  },
  {
    id: 2,
    title: 'Late Autumn Sessions',
    month: '27 Nov – 18 Dec 2025',
    dates: [
      { date: '27 Nov', day: 'Thu' },
      { date: '4 Dec', day: 'Thu' },
      { date: '11 Dec', day: 'Thu' },
      { date: '18 Dec', day: 'Thu' },
    ],
    timeslots: ['17:00–18:00 CET'],
    isPopular: false,
  },
];

const outcomes = [
  { icon: <CheckCircleIcon className="w-6 h-6 text-green-500 mr-2" />, text: 'Sharper problem statements and innovation strategies that stay on brief' },
  { icon: <CheckCircleIcon className="w-6 h-6 text-green-500 mr-2" />, text: 'A toolkit for balancing big bets with a healthy portfolio of small experiments' },
  { icon: <CheckCircleIcon className="w-6 h-6 text-green-500 mr-2" />, text: 'Ways to neutralise the corporate immune system and keep ideas alive' },
  { icon: <CheckCircleIcon className="w-6 h-6 text-green-500 mr-2" />, text: 'A refreshed KPI set that measures future-proofing instead of short-term ROI' },
  { icon: <CheckCircleIcon className="w-6 h-6 text-green-500 mr-2" />, text: 'Five mindshifts to cascade through teams, partners, and leadership' },
];

const heroInfo = [
  { label: 'Start Date', value: '30 October 2025' },
  { label: 'Format', value: 'Four 60-minute live sessions' },
  { label: 'Timeslot', value: '17:00–18:00 CET' },
];

const moduleLinks = [
  '/w#/bookcart?fcourses=module_1_stumbling_blocks_inside_established_companies',
  '/w#/bookcart?fcourses=module_2_rocket_launches_immune_systems',
  '/w#/bookcart?fcourses=innovation_that_grows_the_core',
  '/w#/bookcart?fcourses=module_4_mindshifts_next_moves',
];

const StumblingBlocksCourse = () => (
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
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 text-blue-900 leading-tight">Stumbling Blocks in Corporate Innovation</h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-blue-700">Turn recurring roadblocks into repeatable breakthroughs</h2>

          <div className="mb-6 max-w-xl space-y-3">
            <p className="text-base md:text-lg text-blue-800 leading-relaxed">Discover the seven stumbling blocks that slow innovation inside large organisations and learn the mindshifts that unblock progress.</p>
            <p className="text-base md:text-lg text-blue-800 leading-relaxed">Each module mixes real-world stories from Ingeborg Gasser-Kriss with actionable tools you can apply immediately with your teams.</p>
            <p className="text-base md:text-lg text-blue-800 leading-relaxed font-medium">Know how to future-proof your innovation practice and keep your portfolio moving.</p>
          </div>
          <div className="flex flex-wrap gap-3 mb-6">
            {heroInfo.map((item, i) => (
              <span key={i} className="inline-block bg-white/90 border border-blue-200 text-blue-900 text-sm rounded-full px-4 py-2 font-semibold shadow-sm">
                <span className="font-bold">{item.label}:</span> <span className="font-bold">{item.value}</span>
              </span>
            ))}
          </div>
          <DiscountBanner
            title="Early Bird: Save 25% on the full program"
            description="Enroll before 30 November to lock in 25% off our upcoming sessions."
            code="EB2025"
            validity="Valid through 30 Nov 2025"
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
          <h4 className="text-lg font-semibold text-blue-800 mb-2">Who Is This For?</h4>
          <p className="text-base text-gray-700 leading-relaxed"><span className="font-bold">Corporate innovation, strategy, and transformation leaders</span> who need to unblock momentum and future-proof their portfolios.</p>
        </div>
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 flex flex-col items-center">
          <ClockIcon className="w-8 h-8 text-blue-400 mb-2" />
          <h4 className="text-lg font-semibold text-blue-800 mb-2">Format</h4>
          <p className="text-base text-gray-700 leading-relaxed"><span className="font-bold">Four 60-minute modules</span>, each combining stories, frameworks, and interactive working sessions. <span className="font-bold">Single live timeslot</span> at 17:00–18:00 CET.</p>
        </div>
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 flex flex-col items-center">
          <CheckCircleIcon className="w-8 h-8 text-green-500 mb-2" />
          <h4 className="text-lg font-semibold text-blue-800 mb-2">Outcome</h4>
          <p className="text-base text-gray-700 leading-relaxed">Walk away with <span className="font-bold">a playbook of mindshifts, tools, and KPIs</span> that keep innovation alive inside complex organisations.</p>
        </div>
      </div>
    </section>

    {/* Course Overview */}
    <section className="py-16 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Course Overview</h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 lg:gap-8">
          {modules.map((mod, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 flex flex-col h-full hover:shadow-lg transition-shadow duration-200">
              <div className="flex-1 flex flex-col">
                <div className="flex items-center mb-6">
                  {mod.icon}
                  <div className="ml-3">
                    <div className="text-sm font-bold text-blue-500 mb-1">MODULE {i + 1}</div>
                    <h3 className="text-lg font-bold text-blue-900 leading-tight">{mod.title.replace(/^Module \d+:\s*/, '')}</h3>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-base font-bold text-blue-700 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Teaching (30 min)
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
                    Practical (30 min)
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
                Book Module {i + 1}
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
            Book Full Program Now
          </Button>
        </div>
      </div>
    </section>

    {/* Outcomes */}
    <section className="py-10 bg-white">
      <div className="container max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">What You'll Walk Away With</h2>
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

    {/* About Ingeborg */}
    <section className="py-12 bg-gray-50">
      <div className="container max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <img
            src="/assets/ingeborg2.png"
            alt="Ingeborg Gasser-Kriss portrait"
            className="rounded-xl shadow-lg w-56 h-56 object-cover border-4 border-blue-100"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold text-blue-900 mb-3">Led by Ingeborg Gasser-Kriss</h3>
          <p className="text-gray-700 mb-2">Board and advisory board member across established companies and startups in Food, FoodTech, and Foodservice.</p>
          <p className="text-gray-700 mb-2">Senior innovation advisor and owner of Agent21, supporting executive teams on strategic innovation challenges.</p>
          <p className="text-gray-700 mb-2">Former Global VP Innovation at Mondelez International; architect of the SnackFutures incubator.</p>
          <p className="text-gray-700 mb-2">Director of Founder Institute Switzerland, keynote speaker on the future of food, and mentor at leading accelerators.</p>
          <p className="text-gray-700">Brings 26 years of marketing and innovation leadership experience to help consumer goods companies master 21st-century innovation.</p>
        </div>
      </div>
    </section>

    {/* Dates */}
    <section className="py-12 bg-white">
      <div className="container max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-8 text-blue-900">Dates & Schedule</h2>

        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 mb-12">
          <h4 className="text-lg font-semibold text-blue-800 mb-2">What's Included</h4>
          <ul className="text-blue-900 text-base space-y-1">
            <li>• 4 live, interactive sessions</li>
            <li>• Templates and tools to apply immediately</li>
            <li>• Community access for peer support</li>
            <li>• Recordings and materials after each session</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-center mb-6 text-blue-900">Available Sessions</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {sessions.map((session) => (
              <div
                key={session.id}
                className={`bg-white rounded-xl shadow-lg border-2 p-6 relative ${session.isPopular ? 'border-blue-300 ring-2 ring-blue-100' : 'border-gray-200'} hover:shadow-xl transition-shadow duration-200`}
              >
                {session.isPopular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    Up Next
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
                  <p className="text-sm font-medium text-gray-700 mb-2">Session time:</p>
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
            Book Full Program Now
          </Button>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default StumblingBlocksCourse;

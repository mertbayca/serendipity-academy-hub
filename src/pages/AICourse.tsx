import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircleIcon, LightBulbIcon, Cog6ToothIcon, RocketLaunchIcon, UserGroupIcon, ClockIcon } from '@heroicons/react/24/solid';

const modules = [
  {
    icon: <LightBulbIcon className="w-8 h-8 text-blue-500 mb-2" />, 
    title: "Module 1: What Is AI, Really?",
    teaching: [
      "Welcome and course overview",
      "Short story to illustrate the impact of AI in real life",
      "What AI is, and what it isn't, in simple terms",
      "How AI works: patterns, data, and models",
      "Overview of types of AI tools: text, image, audio, predictive",
      "What AI can and cannot do today",
      "Common AI tools already used in everyday life",
    ],
    practical: [
      "AI & You - Workplace Post-It Wall",
      "Try a Simple AI Tool Together",
      "Quick Myth-Busting Quiz: AI Facts vs Fiction",
      "Worksheet: Map Out 'Where Could AI Fit in My Work Life?'",
    ],
  },
  {
    icon: <Cog6ToothIcon className="w-8 h-8 text-blue-500 mb-2" />, 
    title: "Module 2: Let's Get Practical",
    teaching: [
      "Everyday uses of AI at work: case stories",
      "What makes a good prompt: how to guide AI effectively",
      "Role-based examples: how AI helps in marketing, HR, project management, etc.",
      "Key limitations and risks: bias, misinformation, and privacy",
      "Human + AI partnerships: where people still matter most",
    ],
    practical: [
      "Guided prompt-building exercise",
      "Role scenario challenge in pairs or small groups",
      "Share and discuss: what worked, what surprised you",
      "Optional: note down top tools or ideas to explore later",
    ],
  },
  {
    icon: <RocketLaunchIcon className="w-8 h-8 text-blue-500 mb-2" />, 
    title: "Module 3: AI With Intention",
    teaching: [
      "How to assess an AI tool: value, ethics, accuracy, and impact",
      "The future of work with AI: key trends and shifts",
      "Building an AI-ready mindset: be an explorer, not an expert",
      "Responsible use: when not to trust AI",
      "How to start small and build confidence with AI",
    ],
    practical: [
      "Build your personal 'AI Action Plan': 3 things to try in your role",
      "Reflect on: 'What would you automate, augment, or improve with AI?'",
      "Share your action plan or top insight with the group",
      "Optional takeaway: a DIY 'prompt journal' or weekly learning tracker",
    ],
  },
];

const sessions = [
  {
    id: 1,
    month: 'November 2025',
    dates: [
      { date: 'November 13', day: 'Thu' },
      { date: 'November 20', day: 'Thu' },
      { date: 'November 27', day: 'Thu' }
    ],
    timeslots: ['12:00–13:00 CET', '17:00–18:00 CET'],
    isPopular: true
  }
];

const outcomes = [
  { icon: <CheckCircleIcon className="w-6 h-6 text-green-500 mr-2" />, text: "A basic AI action plan for your job" },
  { icon: <CheckCircleIcon className="w-6 h-6 text-green-500 mr-2" />, text: "Practical exercises to continue at home" },
  { icon: <CheckCircleIcon className="w-6 h-6 text-green-500 mr-2" />, text: "Confidence to try new AI tools" },
  { icon: <CheckCircleIcon className="w-6 h-6 text-green-500 mr-2" />, text: "Clarity on what AI can and can't do" },
  { icon: <CheckCircleIcon className="w-6 h-6 text-green-500 mr-2" />, text: "Desire to keep learning and exploring" },
];

const testimonial = {
  quote: "I never thought I'd use AI at work, but this course made it simple and fun. Now I use ChatGPT for reports and brainstorming every week!",
  author: "Anna S.",
  role: "Project Manager, Zurich"
};

const heroInfo = [
  { label: "Start Date", value: "November 13, 2025" },
  { label: "Timeslots", value: "12:00–13:00 or 17:00–18:00 CET" },
  { label: "Price", value: "€299 per module or €800 for full program" },
];

const moduleLinks = [
  // Module 1
  "/w#/bookcart?fcourses=module_1_what_is_ai_really",
  // Module 2
  "/w#/bookcart?fcourses=module_2_lets_get_practical",
  // Module 3
  "/w#/bookcart?fcourses=2_module_3_ai_with_intention"
];

const AICourse = () => (
  <div className="min-h-screen bg-white">
    <Navbar />
    {/* Hero Section */}
    <section className="relative pt-36 pb-20 bg-blue-50 overflow-hidden">
      <svg className="absolute left-0 top-0 w-full h-full z-0" style={{opacity:0.18}} viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#3b82f6" fillOpacity="1" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
      <div className="container max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 relative z-10">
        <div className="flex-1 flex flex-col items-start justify-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-blue-900 leading-tight">Getting Practical with AI</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-700">For Non-Techies</h2>
          <p className="text-lg md:text-xl text-blue-800 mb-8 max-w-xl leading-relaxed font-light">A hands-on, jargon-free course for professionals who want to move from AI confusion to AI confidence.</p>
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
      {/* Butlerapp Course Table */}
      <div className="container max-w-5xl mx-auto px-6 relative z-10 mt-8">
        <div className="w-full bg-white/80 backdrop-blur-xl border border-gray-100/50 rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-900 mb-1">Book Your Course</h3>
            <p className="text-sm text-gray-500">Select your preferred dates and modules</p>
          </div>
          <div className="websail overflow-hidden">
            <wscourselist className="ws-element" fcourses="getting_practical_with_ai_for_non_techies" data-ftagsnot="intern"></wscourselist>
          </div>
        </div>
      </div>
    </section>

    {/* Key Details Section */}
    <section className="py-8 bg-white">
      <div className="container max-w-4xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 flex flex-col items-center">
          <UserGroupIcon className="w-8 h-8 text-blue-400 mb-2" />
          <h4 className="text-lg font-semibold text-blue-800 mb-2">Who Is This For?</h4>
          <p className="text-base text-gray-700 leading-relaxed"><span className="font-bold">Corporate professionals</span> and the general public who want to use AI tools like ChatGPT, but don't want to become programmers.</p>
        </div>
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 flex flex-col items-center">
          <ClockIcon className="w-8 h-8 text-blue-400 mb-2" />
          <h4 className="text-lg font-semibold text-blue-800 mb-2">Format</h4>
          <p className="text-base text-gray-700 leading-relaxed"><span className="font-bold">Three 1-hour modules</span>, each with 30 minutes of teaching and 30 minutes of practical exercises. <span className="font-bold">Two timeslots</span> per session.</p>
        </div>
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 flex flex-col items-center">
          <CheckCircleIcon className="w-8 h-8 text-green-500 mb-2" />
          <h4 className="text-lg font-semibold text-blue-800 mb-2">Outcome</h4>
          <p className="text-base text-gray-700 leading-relaxed">Walk away with a <span className="font-bold">basic AI action plan</span> for your job, practical exercises to continue at home, and the desire to learn more.</p>
        </div>
      </div>
    </section>

    {/* Course Overview */}
    <section className="py-16 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Course Overview</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:gap-8">
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
                    {mod.teaching.map((t, j) => <li key={j} className="flex items-start"><span className="text-blue-400 mr-2 flex-shrink-0 mt-1">•</span><span>{t}</span></li>)}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-base font-bold text-blue-700 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Practical (30 min)
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
                    {mod.practical.map((p, j) => <li key={j} className="flex items-start"><span className="text-green-400 mr-2 flex-shrink-0 mt-1">•</span><span>{p}</span></li>)}
                  </ul>
                </div>
              </div>
              <Button className="bg-blue hover:bg-blue-dark text-white text-sm px-6 py-3 mt-4 font-semibold transition-transform duration-200 hover:scale-105 shadow-sm" onClick={() => window.open(moduleLinks[i], '_blank')}>
                Book Module {i + 1}
              </Button>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button className="bg-blue hover:bg-blue-dark text-white text-lg px-10 py-6 transition-transform duration-200 hover:scale-105 shadow-lg font-bold" onClick={() => window.open('/w#/bookcart?fcourses=getting_practical_with_ai_for_non_techies', '_blank')}>
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
          <p className="text-gray-700 italic mb-4">“{testimonial.quote}”</p>
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
          <h3 className="text-xl font-bold text-blue-900 mb-2">Meet Your Instructor: Raquel M. Katigbak</h3>
          <p className="text-gray-700 mb-2">Co-Founder & CEO, SUSI Tech | Author, Discovering AI: In Our Town</p>
          <p className="text-gray-700 mb-2">Raquel is a trusted voice on AI and transformation, with 25+ years in emerging technology and leadership. She helps SMEs grow sustainably through responsible innovation and recently launched <a href="https://www.theaiedge.space" target="_blank" rel="noopener noreferrer" className="text-blue underline">The AI Edge</a>, a platform for executives to explore and adopt AI intentionally.</p>
        </div>
      </div>
    </section>

    {/* Pricing & Dates */}
    <section className="py-12 bg-white">
      <div className="container max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-8 text-blue-900">Pricing & Dates</h2>
        
        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-blue-50 rounded-xl p-6 border-4 border-blue-300 shadow-xl relative">
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">Best Value</span>
            <h4 className="text-lg font-semibold text-blue-800 mb-2">Pricing Options</h4>
            <ul className="text-blue-900 text-base mb-2">
              <li>Per Module: <span className="font-bold">€299</span></li>
              <li>Full Program: <span className="font-bold">€800</span> <span className="text-green-700 font-bold">(save 10%)</span></li>
            </ul>
          </div>
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <h4 className="text-lg font-semibold text-blue-800 mb-2">What's Included</h4>
            <ul className="text-blue-900 text-base space-y-1">
              <li>• 3 live interactive sessions</li>
              <li>• Practical exercises & templates</li>
              <li>• Community access</li>
              <li>• Lifetime course materials</li>
            </ul>
          </div>
        </div>

        {/* Session Selection */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-center mb-6 text-blue-900">Available Sessions</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {sessions.map((session) => (
              <div key={session.id} className={`bg-white rounded-xl shadow-lg border-2 p-6 relative ${session.isPopular ? 'border-blue-300 ring-2 ring-blue-100' : 'border-gray-200'} hover:shadow-xl transition-shadow duration-200`}>
                {session.isPopular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    Up Next
                  </span>
                )}
                
                <div className="text-center mb-4">
                  <h4 className="text-lg font-bold text-blue-900 mb-2">{session.month}</h4>
                  <div className="flex justify-center items-center gap-2 mb-4">
                    <ClockIcon className="w-5 h-5 text-blue-500" />
                    <span className="text-sm text-gray-600">3 Sessions</span>
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
                  <p className="text-sm font-medium text-gray-700 mb-2">Choose your timeslot after enrollment:</p>
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
          <Button className="bg-blue hover:bg-blue-dark text-white text-lg px-8 py-6 transition-transform duration-200 hover:scale-105 shadow-lg" id="signup" onClick={() => window.open('/w#/bookcart?fcourses=getting_practical_with_ai_for_non_techies', '_blank')}>Book Full Program Now</Button>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default AICourse; 

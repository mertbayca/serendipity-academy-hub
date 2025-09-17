import React from 'react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircleIcon, LightBulbIcon, Cog6ToothIcon, RocketLaunchIcon, UserGroupIcon, ClockIcon } from '@heroicons/react/24/solid';

const modules = [
  {
    icon: <LightBulbIcon className="w-8 h-8 text-blue-500 mb-2" />, 
    title: "Module 1: Ethical Foundations of Innovation and Leadership",
    teaching: [
      "Understanding the critical role of business",
      "Exploring the risks fueled by ego and fear",
      "How ethical principles pave the way for long-term success",
      "Framework for ethical decision-making",
      "Building trust through transparent leadership",
      "The connection between ethics and sustainable business growth"
    ],
    practical: [
      "Personal ethics assessment exercise",
      "Innovation risk evaluation workshop",
      "Ethical decision-making scenarios",
      "Group discussion on ethical dilemmas",
      "Action plan for implementing ethical practices"
    ]
  },
  {
    icon: <Cog6ToothIcon className="w-8 h-8 text-blue-500 mb-2" />, 
    title: "Module 2: Unlocking Genius Through Natural Ethics and Self-Leadership",
    teaching: [
      "Aligning with nature's principles to inspire groundbreaking ideas",
      "Connecting with future needs through intuitive innovation",
      "Understanding our entire being: physical, emotional, mental, spiritual",
      "Developing a resilient Future Mindset",
      "Self-awareness techniques for innovative leaders",
      "Integrating natural ethics into business practices"
    ],
    practical: [
      "Image streaming guided exercise",
      "Self-assessment of our preferences - physical, emotional, mental, spiritual",
      "Future visioning workshop",
      "Nature-inspired innovation brainstorming",
      "Personal leadership development plan"
    ]
  },
  {
    icon: <RocketLaunchIcon className="w-8 h-8 text-blue-500 mb-2" />, 
    title: "Module 3: Servant Leadership - Empowering Others for Impact",
    teaching: [
      "Principles of ethical leadership in modern organizations",
      "Focusing on uplifting and empowering others",
      "Helping others achieve their life purpose",
      "How ethical leadership fosters collaboration and innovation",
      "Building high-performing ethical teams",
      "Measuring impact beyond profit"
    ],
    practical: [
      "Ethical Leadership Assessment",
      "Team empowerment strategies workshop",
      "Creating your leadership impact plan",
      "Peer coaching exercises",
      "Developing others action steps"
    ]
  }
];

const sessions = [
  {
    id: 1,
    title: 'November Sessions',
    month: 'November 2025',
    dates: [
      { date: 'November 5', day: 'Wed' },
      { date: 'November 12', day: 'Wed' },
      { date: 'November 19', day: 'Wed' }
    ],
    timeslots: ['08:00-09:00 CET', '17:00-18:00 CET'],
    isPopular: true
  }
];

const outcomes = [
  { icon: <CheckCircleIcon className="w-6 h-6 text-green-500 mr-2" />, text: "Making trust your competitive advantage" },
  { icon: <CheckCircleIcon className="w-6 h-6 text-green-500 mr-2" />, text: "Aligning leadership with core values and a long-term vision" },
  { icon: <CheckCircleIcon className="w-6 h-6 text-green-500 mr-2" />, text: "Navigating complex dilemmas with clarity and confidence" },
  { icon: <CheckCircleIcon className="w-6 h-6 text-green-500 mr-2" />, text: "Leading teams with respect and purpose" },
  { icon: <CheckCircleIcon className="w-6 h-6 text-green-500 mr-2" />, text: "Fostering sustainable innovation" }
];

const testimonial = {
  quote: "This course transformed how I approach innovation. I now lead with purpose and see the profound impact ethical leadership has on my team and our results.",
  author: "Marcus T.",
  role: "Innovation Director, Geneva"
};

const heroInfo = [
  { label: "Start Date", value: "November 5, 2025" },
  { label: "Format", value: "Two schedule options" },
  { label: "Price", value: "€250 per module or €750 for full program" }
];

const moduleLinks = [
  // Module 1 (production)
  "/w#/bookcart?fcourses=module_1_ethical_foundations_of_innovation_and_leadership",
  // Module 2 (production)
  "/w#/bookcart?fcourses=module_2_unlocking_genius_through_natural_ethics_and_self_leadership",
  // Module 3 (production)
  "/w#/bookcart?fcourses=module_3_servant_leadership_empowering_others_for_impact"
];

const EthicsCourse = () => (
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

      {/* Language switcher removed: handled by Navbar */}

      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        {/* Main Hero Content */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="flex-1 flex flex-col items-start justify-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-3 text-blue-900 leading-tight">Ethics as Strategy</h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-blue-700">Bring Ethics to Life For Long Term Success</h2>
            
            <div className="mb-6 max-w-xl space-y-3">
              <p className="text-base md:text-lg text-blue-800 leading-relaxed">Are you, as a leader, prioritizing profits at the expense of your values, principles, or even your customers?</p>
              <p className="text-base md:text-lg text-blue-800 leading-relaxed">Could your actions (knowingly or unknowingly) be harming nature and the environment?</p>
              <p className="text-base md:text-lg text-blue-800 leading-relaxed font-medium">This course offers a chance to reset, adopt a growth mindset, and move forward with integrity, free from guilt and reputational risk.</p>
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
              alt="Ethics and Innovation" 
              className="rounded-xl shadow-lg w-64 h-64 object-cover border-4 border-blue-100"
            />
          </div>
        </div>

        {/* Butlerapp Course Table */}
        <div className="w-full bg-white/80 backdrop-blur-xl border border-gray-100/50 rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-all duration-500 mt-8">
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-1">Book Your Course</h3>
            <p className="text-sm text-gray-500">Select your preferred dates and modules</p>
          </div>
          <div className="websail overflow-hidden">
            <wscourselist
              className="ws-element"
              fcourses="ethics_as_strategy"
              data-ftagsnot="intern"
            ></wscourselist>
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
          <p className="text-base text-gray-700 leading-relaxed"><span className="font-bold">Professionals and leaders</span> who want to integrate ethical principles into their innovative efforts and create sustainable impact.</p>
        </div>
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 flex flex-col items-center">
          <ClockIcon className="w-8 h-8 text-blue-400 mb-2" />
          <h4 className="text-lg font-semibold text-blue-800 mb-2">Format</h4>
          <p className="text-base text-gray-700 leading-relaxed"><span className="font-bold">Three 1-hour modules</span>, each combining teaching with practical exercises. <span className="font-bold">Two schedule options</span> available.</p>
        </div>
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 flex flex-col items-center">
          <CheckCircleIcon className="w-8 h-8 text-green-500 mb-2" />
          <h4 className="text-lg font-semibold text-blue-800 mb-2">Outcome</h4>
          <p className="text-base text-gray-700 leading-relaxed">Walk away with an <span className="font-bold">ethical framework for leadership</span> and build credibility with stakeholders (customers, employees, investors, and the public) for long-term success.</p>
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
                    Teaching
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
                    {mod.teaching.map((t, j) => <li key={j} className="flex items-start"><span className="text-blue-400 mr-2 flex-shrink-0 mt-1">•</span><span>{t}</span></li>)}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-base font-bold text-blue-700 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Practical
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
          <Button className="bg-blue hover:bg-blue-dark text-white text-lg px-10 py-6 transition-transform duration-200 hover:scale-105 shadow-lg font-bold" onClick={() => window.open('/w#/bookcart?fcourses=full_course', '_blank')}>
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
          <h3 className="text-xl font-bold text-blue-900 mb-2">Meet Your Instructor: Karin Fuchs-Häseli</h3>
          <p className="text-gray-700 mb-2">Co-Founder & CEO, SunHeart Switzerland AG</p>
          <p className="text-gray-700 mb-2">Karin brings extensive expertise in ethical business leadership and human development. With experience in banking, HR, change management, and corporate coaching, she has devoted her career to fostering sustainable leadership. Her work integrates insights from global cultures, philosophies, and natural principles, applying these to create ethical, regenerative business practices.</p>
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
              <li>Per Module: <span className="font-bold">€250</span></li>
              <li>Full Program: <span className="font-bold">€750</span></li>
            </ul>
          </div>
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <h4 className="text-lg font-semibold text-blue-800 mb-2">What's Included</h4>
            <ul className="text-blue-900 text-base space-y-1">
              <li>• 3 transformative sessions</li>
              <li>• Practical ethical frameworks</li>
              <li>• Leadership development tools</li>
              <li>• Lifetime access to materials</li>
            </ul>
          </div>
        </div>

        {/* Schedule Selection */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-center mb-6 text-blue-900">Available Schedules</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {sessions.map((session) => (
              <div key={session.id} className={`bg-white rounded-xl shadow-lg border-2 p-6 relative ${session.isPopular ? 'border-blue-300 ring-2 ring-blue-100' : 'border-gray-200'} hover:shadow-xl transition-shadow duration-200`}>
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
          <Button className="bg-blue hover:bg-blue-dark text-white text-lg px-8 py-6 transition-transform duration-200 hover:scale-105 shadow-lg" id="signup" onClick={() => window.open('/w#/bookcart?fcourses=full_course', '_blank')}>Book Full Program Now</Button>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default EthicsCourse; 

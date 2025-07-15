import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const mastermindBenefits = [
  {
    icon: '🤝',
    title: 'Peer Power',
    desc: 'Grow with a trusted circle of high-caliber leaders who challenge and support you.'
  },
  {
    icon: '🧭',
    title: 'Expert Guidance',
    desc: 'Each group is led by a seasoned facilitator and supported by top coaches.'
  },
  {
    icon: '🚀',
    title: 'Real Results',
    desc: 'Solve real challenges, gain clarity, and accelerate your personal and professional growth.'
  }
];

const howItWorks = [
  {
    step: '1',
    title: 'Apply',
    desc: 'Tell us about your goals and what you hope to gain.'
  },
  {
    step: '2',
    title: 'Connect',
    desc: 'We will schedule a friendly call to ensure the right fit.'
  },
  {
    step: '3',
    title: 'Join',
    desc: 'Get matched, meet your group, and start your journey.'
  }
];

const benefits = [
  '12 months of deep, guided peer learning',
  'Small, diverse, and committed groups',
  'Accountability and real-world problem solving',
  'Confidential, supportive environment',
  'Exclusive access to expert sessions',
  'Personal and professional transformation'
];

const testimonials = [
  {
    quote: "My mastermind group became my secret weapon. The clarity and support I gained changed my leadership.",
    author: 'Sarah J.',
    role: 'CTO, Healthcare Innovation'
  },
  {
    quote: "I've never grown so much, so fast. The group's insights and accountability are priceless.",
    author: 'Michael L.',
    role: 'Founder & CEO, Tech Startup'
  }
];

const Mastermind = () => (
  <div className="min-h-screen bg-white">
    <Navbar />
    {/* Hero Section */}
    <section className="relative pt-32 pb-16 bg-gray-900 text-white text-center">
      <div className="container max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Mastermind Groups</h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Your inner circle for outer impact. Transform your leadership with a year of deep, guided peer learning.
        </p>
        <Button className="bg-blue hover:bg-blue-dark text-white text-lg px-8 py-6" onClick={() => window.open('https://innovators-serendipity-academy.circle.so/join?invitation_token=a70ffb53792bb9dec38bdaafe659b603c34c5d8e-9d20cbdd-0e46-4990-a7f6-ac66d99bad20', '_blank')}>Apply Now</Button>
      </div>
    </section>

    {/* What Makes Special */}
    <section className="py-12 bg-white">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {mastermindBenefits.map((item, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* How It Works */}
    <section className="py-12 bg-gray-50">
      <div className="container max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {howItWorks.map((step, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-blue text-white text-2xl font-bold flex items-center justify-center mb-4">{step.step}</div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Benefits Grid */}
    <section className="py-12 bg-white">
      <div className="container max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-8">What You'll Gain</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((b, i) => (
            <div key={i} className="bg-gray-50 rounded-lg p-6 border border-gray-100 flex items-center">
              <span className="w-8 h-8 rounded-full bg-blue-light text-blue flex items-center justify-center mr-4 text-lg font-bold">✓</span>
              <span className="text-gray-700 text-base">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-12 bg-gray-50">
      <div className="container max-w-3xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-8">What Leaders Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col">
              <p className="text-gray-700 italic mb-4">"{t.quote}"</p>
              <div className="mt-auto">
                <p className="font-semibold text-gray-900">{t.author}</p>
                <p className="text-gray-500 text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="py-16 bg-blue text-white text-center">
      <div className="container max-w-2xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Leadership?</h2>
        <p className="text-lg mb-8">Spots are limited. Commit for one year. Transform forever.</p>
        <Button className="bg-white text-blue hover:bg-blue-50 text-lg px-8 py-6 font-semibold" onClick={() => window.open('https://innovators-serendipity-academy.circle.so/join?invitation_token=a70ffb53792bb9dec38bdaafe659b603c34c5d8e-9d20cbdd-0e46-4990-a7f6-ac66d99bad20', '_blank')}>Apply for Mastermind Group Access</Button>
      </div>
    </section>
    <Footer />
  </div>
);

export default Mastermind; 
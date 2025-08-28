import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const membershipProcess = [
  {
    step: '01',
    title: 'Apply',
    desc: 'Submit a simple application that helps us understand your goals, challenges, and what you hope to gain from the Academy.',
    icon: '📝'
  },
  {
    step: '02',
    title: 'Connect',
    desc: "We'll reach out/contact you to schedule a friendly call to understand how the Academy can support your journey and how you might inspire others.",
    icon: '🤝'
  },
  {
    step: '03',
    title: 'Join',
    desc: "Once accepted, you'll receive your official member access, including invites to events, member-only content, and your connection to our alumni network.",
    icon: '🎯'
  }
];

const coreFeatures = [
  {
    icon: '🎯',
    title: 'Unique Application Process',
    desc: 'Experience principles by Ray Dalio & Adam Grant that guarantee the best results for a holistic member profile.'
  },
  {
    icon: '👥',
    title: 'Perfect Group Matching',
    desc: 'Our sophisticated matching process ensures you connect with the ideal group of like-minded innovators.'
  },
  {
    icon: '⚡',
    title: 'Co-creation & Collaboration',
    desc: 'Harness the energy of collaboration with your group and chair to solve biggest challenges and build innovations.'
  },
  {
    icon: '🌱',
    title: 'Core Values Integration',
    desc: 'Built on trust, intuition, nurturing, challenge and growth - enabling transformational results.'
  }
];

const chairBenefits = [
  'Former Senior/Executive Business Leaders',
  'Board Members & Entrepreneurs',
  'Motivated by giving back',
  'Sharing experience & supporting influence',
  'Shift mindset towards growth & entrepreneur mentality',
  'Build sustainable change within yourself & company'
];

const journeyHighlights = [
  {
    icon: '📚',
    title: 'Innovation & Personal Growth',
    desc: 'Lead innovation within your team/company while working on daily challenges with like-minded peers.'
  },
  {
    icon: '🏆',
    title: 'EDUQUA Certification',
    desc: 'Receive a certificate with EDUQUA standard, linked to innovation and personal objectives.'
  },
  {
    icon: '🎓',
    title: 'Alumni Status',
    desc: 'Obtain the prestigious status of Innovators Serendipity Academy Alumni with lifelong network access.'
  }
];

const testimonials = [
  {
    quote: "The mastermind group transformed not just my leadership style, but my entire approach to innovation. The chairs bring incredible wisdom.",
    author: 'Sarah Chen',
    role: 'CTO, MedTech Innovation'
  },
  {
    quote: "12 months that changed everything. The application process alone was enlightening, and the group became my strategic advantage.",
    author: 'Marcus Weber',
    role: 'Founder & CEO, GreenTech Solutions'
  },
  {
    quote: "From the unique matching process to the EDUQUA certification, every detail is designed for maximum impact. Worth every moment.",
    author: 'Elena Rodriguez',
    role: 'VP Innovation, Fortune 500'
  }
];

const Mastermind = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
    <Navbar />
    
    {/* Hero Section */}
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-blue-800/20"></div>
      <div className="container max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center">
          <Badge className="mb-6 bg-blue/20 text-blue-light border-blue/30 hover:bg-blue/30 transition-all duration-300">
            Elite Leadership Program
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Mastermind Groups
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Where innovation meets transformation. Join an elite community of leaders through our unique application process 
            and experience the power of co-creation with carefully matched peers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue to-blue-light hover:from-blue-dark hover:to-blue text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfOBFVAeOR1LOH8W7gii5E0V8fv_myycPkSLizkTrEN5N_wPA/viewform?usp=dialog', '_blank')}
            >
              Start Your Journey
            </Button>
            <p className="text-blue-light text-sm">12-month transformational program</p>
          </div>
        </div>
      </div>
    </section>

    {/* Membership Process */}
    <section className="py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Membership Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've made joining as straightforward as possible while ensuring the right fit for our community.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {membershipProcess.map((step, i) => (
            <div key={i} className="relative group">
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-blue-200 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue to-blue-light text-white text-2xl font-bold flex items-center justify-center mr-4 shadow-lg">
                    {step.step}
                  </div>
                  <div className="text-4xl">{step.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
              {i < membershipProcess.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-light to-blue transform -translate-y-1/2 z-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Core Features */}
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">The Core of Our Academy</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our Mastermind Groups are where you'll go through a unique application process that guarantees 
            the best results for a holistic member profile and allows us to match the perfect group of people.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreFeatures.map((feature, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            The energy that comes from co-creation and collaboration of these groups, together with their chair, 
            bundled with our values of <span className="font-semibold text-blue">trust, intuition, nurturing, challenge and growth </span> 
            enables us to solve our biggest challenges together and build amazing innovations for the future.
          </p>
        </div>
      </div>
    </section>

    {/* Our Chairs */}
    <section className="py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Chairs</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Carefully selected, former Senior/Executive Business Leaders, Board Members, and Entrepreneurs, 
              motivated by giving back through sharing their experience and supporting those who influence so many others.
            </p>
            <div className="space-y-4">
              {chairBenefits.map((benefit, i) => (
                <div key={i} className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue to-blue-light flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue to-blue-light rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Mentorship</h3>
              <p className="text-gray-600 leading-relaxed">
                They will help you shift your mindset towards growth and entrepreneur mentality, 
                and also build sustainable change within yourself and your company.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* 12-Month Journey */}
    <section className="py-20 bg-gradient-to-br from-gray-900 to-slate-800 text-white">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Your 12-Month Transformation Journey</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Leading innovation within your team/company while working on your daily challenges with 
            like-minded peers - a new way of learning about your personal and professional growth.
          </p>
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
          <h3 className="text-2xl font-bold mb-4 text-blue-light">Upon Completion</h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            At the end of your 12-month journey, you will receive a <span className="font-semibold text-white">certificate with the EDUQUA standard</span>, 
            linked to two objectives (innovation and personal), and you will obtain the prestigious status of an 
            <span className="font-semibold text-blue-light"> Innovators Serendipity Academy Alumni</span>.
          </p>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">What Leaders Say</h2>
          <p className="text-xl text-gray-600">Hear from our alumni who've transformed their leadership and organizations</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue">
              <div className="text-blue text-4xl mb-4">"</div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue to-blue-light rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">{testimonial.author.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-blue text-sm font-medium">{testimonial.role}</p>
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
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Join the Elite?</h2>
        <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
          Spots are limited. Applications are carefully reviewed. Your transformation starts with a single click.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            size="lg"
            className="bg-white text-blue hover:bg-gray-100 px-10 py-4 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfOBFVAeOR1LOH8W7gii5E0V8fv_myycPkSLizkTrEN5N_wPA/viewform?usp=dialog', '_blank')}
          >
            Apply for Mastermind Groups
          </Button>
        </div>
        <div className="flex justify-center items-center space-x-8 text-blue-200">
          <div className="text-center">
            <div className="text-2xl font-bold">12</div>
            <div className="text-sm">Month Program</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">EDUQUA</div>
            <div className="text-sm">Certification</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">Alumni</div>
            <div className="text-sm">Network Access</div>
          </div>
        </div>
      </div>
    </section>
    
    <Footer />
  </div>
  );
};

export default Mastermind; 
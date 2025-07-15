import React from 'react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    quote: "My mastermind group has become my most valuable professional resource. The insights I've gained and relationships I've built have transformed how I approach innovation in my company.",
    author: "Sarah J.",
    role: "CTO, Healthcare Innovation",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=facearea&w=256&h=256&facepad=2&q=80"
  },
  {
    quote: "What sets the Academy apart is how they seamlessly blend cutting-edge content with deeply human connections. I've found both the practical tools and the supportive community I needed to lead through uncertainty.",
    author: "Michael L.",
    role: "Founder & CEO, Tech Startup",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=facearea&w=256&h=256&facepad=2&q=80"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="section bg-white py-20">
      <div className="container max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
          Real Words from <span className="text-blue">Real Leaders</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col"
            >
              <div className="flex-grow">
                <svg className="w-10 h-10 text-blue opacity-20 mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10.722 6.052c-5.607 2.055-9.294 7.148-9.294 12.948v7h7v-7h-3.788c0-3.556 2.214-6.685 5.442-7.905l.64-.247v-4.796zm13 0c-5.607 2.055-9.294 7.148-9.294 12.948v7h7v-7h-3.788c0-3.556 2.214-6.685 5.442-7.905l.64-.247v-4.796z" />
                </svg>
                <p className="text-gray-700 italic mb-6">{testimonial.quote}</p>
              </div>
              <div className="flex items-center mt-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join the Movement Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Join the Movement</h3>
          <p className="text-lg text-gray-700 mb-6">
            You don't need another course. You need a community.
          </p>
          <p className="text-md text-gray-600 mb-4">This is for the ones who:</p>
            <ul className="text-left text-md text-gray-600 list-disc list-inside mb-6 max-w-md mx-auto">
              <li>Are done with outdated leadership playbooks.</li>
              <li>Crave connection, reflection, and challenge.</li>
              <li>Want to grow in sync with the world, not behind it.</li>
            </ul>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
            <Button className="bg-blue hover:bg-blue-700 text-white px-6 py-3 rounded-full" onClick={() => window.open('https://innovators-serendipity-academy.circle.so/join?invitation_token=a70ffb53792bb9dec38bdaafe659b603c34c5d8e-9d20cbdd-0e46-4990-a7f6-ac66d99bad20', '_blank')}>
              🚀 Join a Mastermind Group Now
            </Button>
            <Button className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-6 py-3 rounded-full" onClick={() => window.open('https://innovators-serendipity-academy.circle.so/join?invitation_token=a70ffb53792bb9dec38bdaafe659b603c34c5d8e-9d20cbdd-0e46-4990-a7f6-ac66d99bad20', '_blank')}>
              💬 Talk to an Advisor
            </Button>
            <Button className="bg-white border border-blue text-blue hover:bg-blue-50 px-6 py-3 rounded-full" onClick={() => window.open('https://innovators-serendipity-academy.circle.so/join?invitation_token=a70ffb53792bb9dec38bdaafe659b603c34c5d8e-9d20cbdd-0e46-4990-a7f6-ac66d99bad20', '_blank')}>
              📚 Explore Learning Modules
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

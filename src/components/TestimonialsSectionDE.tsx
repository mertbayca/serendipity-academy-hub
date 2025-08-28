import React from 'react';
import { Button } from '@/components/ui/button';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Meine Mastermind‑Gruppe ist zu meiner wertvollsten Ressource geworden. Die Einblicke und Beziehungen haben meine Innovationsarbeit nachhaltig verändert.",
    author: "Sarah J.",
    role: "CTO, Healthcare Innovation",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=facearea&w=256&h=256&facepad=2&q=80"
  },
  {
    quote: "Die Akademie verbindet modernste Inhalte mit echter Menschlichkeit. Ich habe die Tools und die Community gefunden, um durch Unsicherheit zu führen.",
    author: "Michael L.",
    role: "Founder & CEO, Tech Startup",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=facearea&w=256&h=256&facepad=2&q=80"
  }
];

const TestimonialsSectionDE = () => {
  return (
    <section className="section bg-white py-20">
      <div className="container max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
          Echte Stimmen von <span className="text-blue">Führungskräften</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {testimonials.map((testimonial: Testimonial, index: number) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col">
              <div className="flex-grow">
                <svg className="w-10 h-10 text-blue opacity-20 mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10.722 6.052c-5.607 2.055-9.294 7.148-9.294 12.948v7h7v-7H4.64c0-3.556 2.214-6.685 5.442-7.905l.64-.247V6.052zm13 0c-5.607 2.055-9.294 7.148-9.294 12.948v7h7v-7h-3.788c0-3.556 2.214-6.685 5.442-7.905l.64-.247V6.052z" />
                </svg>
                <p className="text-gray-700 italic mb-6">{testimonial.quote}</p>
              </div>
              <div className="flex items-center mt-4">
                <img src={testimonial.image} alt={testimonial.author} className="w-12 h-12 rounded-full object-cover mr-4" />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" onClick={() => (window.location.href = '/mastermind#testimonials')}>
            Weitere Erfolgsgeschichten lesen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSectionDE;



import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "My mastermind group has become my most valuable professional resource. The insights I've gained and relationships I've built have transformed how I approach innovation in my company.",
      author: "Sarah J.",
      role: "CTO, Healthcare Innovation",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
    },
    {
      quote: "What sets the Academy apart is how they seamlessly blend cutting-edge content with deeply human connections. I've found both the practical tools and the supportive community I needed to lead through uncertainty.",
      author: "Michael L.",
      role: "Founder & CEO, Tech Startup",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <h2 className="section-title">Quotes from <span className="text-blue">Real Leaders</span></h2>
        
        <div className="grid md:grid-cols-2 gap-10 mt-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col"
            >
              <div className="flex-grow">
                <svg className="w-10 h-10 text-blue opacity-20 mb-4" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.722 6.052c-5.607 2.055-9.294 7.148-9.294 12.948v7h7v-7h-3.788c0-3.556 2.214-6.685 5.442-7.905l.64-.247v-4.796zm13 0c-5.607 2.055-9.294 7.148-9.294 12.948v7h7v-7h-3.788c0-3.556 2.214-6.685 5.442-7.905l.64-.247v-4.796z" />
                </svg>
                <p className="text-gray-700 italic mb-6">{testimonial.quote}</p>
              </div>
              
              <div className="flex items-center">
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
      </div>
    </section>
  );
};

export default TestimonialsSection;

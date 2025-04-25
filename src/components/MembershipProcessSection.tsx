
import React from 'react';
import { Button } from '@/components/ui/button';

const MembershipProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Apply",
      description: "Submit a simple application that helps us understand your goals, challenges, and what you hope to gain from the Academy."
    },
    {
      number: "02",
      title: "Connect",
      description: "Have a conversation with our team to explore the right path for you and answer any questions about the Academy experience."
    },
    {
      number: "03",
      title: "Join",
      description: "If there's alignment, you'll be invited to join the Academy and matched with your optimal mastermind group."
    }
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">Membership <span className="text-blue">Process</span></h2>
        <p className="section-subtitle">
          We've made joining as straightforward as possible while ensuring the right fit for our community.
        </p>
        
        <div className="max-w-3xl mx-auto mt-12">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col items-center text-center relative"
              >
                <div className="absolute -top-6 bg-blue text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mt-4 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button className="bg-blue hover:bg-blue-dark text-white text-lg px-8 py-6">
              Start your journey
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipProcessSection;

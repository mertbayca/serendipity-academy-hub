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
      description: "We'll reach out/contact you to schedule a friendly call to understand how the Academy can support your journey and how you might inspire others."

    },
    {
      number: "03",
      title: "Join",
      description: "Once accepted, you'll receive your official member access, including invites to events, member-only content, and your connection to our alumni network."
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
            <Button className="bg-blue hover:bg-blue-dark text-white text-lg px-8 py-6" onClick={() => window.open('https://innovators-serendipity-academy.circle.so/join?invitation_token=a70ffb53792bb9dec38bdaafe659b603c34c5d8e-9d20cbdd-0e46-4990-a7f6-ac66d99bad20', '_blank')}>
              Start your journey
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipProcessSection;


import React from 'react';
import { Button } from '@/components/ui/button';

const MastermindSection = () => {
  return (
    <section id="mastermind" className="section bg-gray-50">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Your Inner Circle for <span className="text-blue">Outer Impact</span></h2>
          
          <div className="mt-12 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                alt="Mastermind group meeting" 
                className="rounded-lg shadow-md"
              />
            </div>
            
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our flagship offering brings together carefully selected leaders in intimate groups designed for maximum impact. 
                These are not networking events or casual meetups – they're structured, committed relationships built around 
                real challenges, honest feedback, and collaborative problem-solving.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Each group is guided by an experienced chair and formed using our proprietary matching methodology that 
                balances diversity of perspective with alignment of values. The result? A trusted circle of peers who will 
                become your most valuable asset in navigating an uncertain future.
              </p>
              
              <Button className="w-full md:w-auto bg-blue hover:bg-blue-dark text-white">
                Apply Now for Mastermind Group Access
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MastermindSection;

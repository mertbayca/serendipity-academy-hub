import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const MastermindSection = () => {
  return (
    <section id="mastermind" className="section bg-gray-50 py-20">
      <div className="container max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-4">
          Your Inner Circle for <span className="text-blue">Outer Impact</span>
        </h2>

        <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          Our Mastermind Groups are small, diverse, and powerfully committed.  
          For 12 months, you'll:
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Image */}
          <div>
            <img 
              src="./assets/e-master.jpg"
              alt="Mastermind group meeting"
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* Right: Text */}
          <div>
            <ul className="list-disc list-inside text-gray-700 text-lg space-y-4 mb-6">
              <li><strong>Solve real challenges</strong> with real peers</li>
              <li><strong>Apply accountability, practice reflection, and gain clarity</strong></li>
              <li><strong>Be supported -and challenged- in your growth</strong></li>
            </ul>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Bonus: Each group is guided by a trusted facilitator (<em>= Chair</em>) 
              from the Innovators Serendipity Academy with special coaching sessions before the workshops.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              How the groups will be matched is our special formula:
            </p>

            <ul className="list-disc list-inside text-gray-700 text-lg space-y-3 mb-8">
              <li>Using "Principles You/Us" from Ray Dalio and Adam Grant</li>
              <li>Evaluating your knowledge of innovation and</li>
              <li>Conducting a friendly conversation with one of our chairs</li>
            </ul>

            <p className="text-lg text-gray-700 font-semibold mb-6">
              Spots are limited.<br />
              Commit for one year. Transform forever.
            </p>

            <Link to="/mastermind">
              <Button className="w-full md:w-auto bg-blue hover:bg-blue-700 text-white">
                Discover the Mastermind Experience
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MastermindSection;

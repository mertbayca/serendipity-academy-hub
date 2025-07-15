import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const EventsSection = () => {
  return (
    <section id="events" className="section bg-gray-50 py-20">
      <div className="container max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Where Innovation Meets <span className="text-blue">Serendipity</span>
        </h2>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
          Step into a space where unexpected ideas are sparked, bold conversations unfold, and meaningful connections are made.
          <br className="hidden md:block" />
          Join our events to:
        </p>

        <ul className="text-left text-gray-700 text-lg max-w-2xl mx-auto mb-8 space-y-3">
          <li>✅ Connect with like-minded thinkers and doers</li>
          <li>✅ Learn directly from industry experts and innovators</li>
          <li>✅ Be part of the dialogue shaping the future of work, learning, and human connection</li>
        </ul>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
          Each gathering is designed to inspire, challenge, and expand your perspective.
          <br />
          <strong>Ready to elevate/improve your journey?</strong>
          <br />
          Don't just attend - participate. Experience growth in real time.
        </p>

        {/* Featured Event Preview */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 max-w-4xl mx-auto mb-12">
          <div className="p-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-blue text-white text-sm rounded-full">Featured Event</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Upcoming</span>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">
              The Value of Staying Connected, When the World Is Pulling Us Apart
            </h3>
            
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
              <span>📅 May 12, 2025</span>
              <span>🕓 18:00 – 20:00 CET</span>
              <span>📍 Zurich</span>
            </div>

            <p className="text-gray-700 mb-6">
              Join us for an evening of meaningful connections and insights with industry leaders.
            </p>

            <Link to="/events">
              <Button className="bg-blue hover:bg-blue-dark text-white">
                View All Events
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;

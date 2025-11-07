import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CoursesShowcaseSection = () => {
  return (
    <section id="courses" className="py-24 bg-gradient-to-b from-white via-blue-50/40 to-white">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="uppercase tracking-widest text-blue-500 font-semibold mb-3">Upcoming Courses</p>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Learn With Innovators Serendipity Academy
          </h2>
          <p className="text-lg text-blue-800">
            Explore hands-on programs that blend innovation, leadership, and AI fluency. See what is running next and secure your spot.
          </p>
        </div>

        <div className="mb-4 md:mb-6 text-left">
          <h3 className="text-xl font-semibold text-blue-900 mb-1">Featured Calendar</h3>
          <p className="text-sm text-slate-500">Updated live via Butlerapp · Real-time availability</p>
        </div>
        <div className="websail">
          <wscourselist
            className="ws-element"
            data-ftagsnot="intern"
            data-columns="course,place,price,from,to,info,infolink,remaining,booklink"
            data-fixed-columns="course,place,booklink"
          ></wscourselist>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-10">
          <Button asChild size="lg" variant="secondary" className="w-full md:w-auto px-6">
            <Link to="/ai-course">Be Inspired By AI</Link>
          </Button>
          <Button asChild size="lg" variant="secondary" className="w-full md:w-auto px-6">
            <Link to="/ethics-course">Ethics as Strategy</Link>
          </Button>
          <Button asChild size="lg" variant="secondary" className="w-full md:w-auto px-6">
            <Link to="/stumbling-blocks-course">Stumbling Blocks in Corporate Innovation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesShowcaseSection;

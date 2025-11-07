import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Courses = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50 text-blue-900">
      <Navbar />
      <main className="pt-32 pb-20">
        <section className="container max-w-4xl mx-auto px-6 mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Courses Overview</h1>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto leading-relaxed">
            Browse the full catalogue of Innovators Serendipity Academy programs. Select any course below to view dates,
            modules, and enrollment options directly through our booking partner.
          </p>
        </section>

        <section className="container max-w-5xl mx-auto px-6">
          <div className="w-full bg-white/90 backdrop-blur-xl border border-gray-100/70 rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.05)]">
            <div className="mb-6 text-left">
              <h2 className="text-2xl font-semibold text-blue-900 mb-1">All Available Courses</h2>
              <p className="text-sm text-gray-500">Powered by Butlerapp · Live updates refreshed automatically</p>
            </div>
            <div className="websail">
              <wscourselist
                className="ws-element"
                data-ftagsnot="intern"
                data-columns="course,place,price,from,to,info,infolink,remaining,booklink"
                data-fixed-columns="course,place,booklink"
              ></wscourselist>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;

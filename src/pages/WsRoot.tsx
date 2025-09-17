import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const WsRoot = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-28 pb-16 bg-gradient-to-br from-blue-50 via-white to-amber-50">
        <div className="container max-w-5xl mx-auto px-6">
          <div className="w-full mx-auto bg-white/80 backdrop-blur-xl border border-gray-100/60 rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            {/* Butlerapp main root. Hash routes control content: #/courses or #/bookcart */}
            <div className="websail">
              <div className="ws-element" data-ws-type="wsroot" data-ftagsnot="intern"></div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WsRoot;

import React from 'react';

const InspiringSection = () => (
  <section className="section bg-gray-50 py-16">
    <div className="container max-w-3xl mx-auto px-6">
      <h2 className="section-title mb-2 text-center text-3xl md:text-4xl font-extrabold">
        <span className="text-blue">Innovators Serendipity</span> Academy
      </h2>
      <h3 className="section-subtitle italic mb-8 text-center text-lg text-blue-700 font-medium">Inspiring Each Other for a Brighter Future</h3>
      <div className="text-base md:text-lg text-gray-800 space-y-5 text-center">
        <p>
          We are a trusted, non-academic Academy, <b>inclusive, not exclusive</b>.<br/>
          We are for Leaders who know the old ways don't work anymore. We bring together curious minds and courageous hearts to create the future together.
        </p>
        <div className="flex flex-col items-center space-y-2">
          <span><b>No grades</b>, but full commitment and accountability.</span>
          <span><b>No gurus</b>, but business leaders, top coaches and experts to guide you.</span>
        </div>
        <p>
          <b>Just powerful conversations, real growth</b>, and a <b>shared purpose</b>.
        </p>
        <p>
          Learning is fluid for us. We choose adaptability over rigid plans, responding to the ever-changing world around us.<br/>
          We believe a new world is not only possible but already emerging:
        </p>
        <ul className="list-disc list-inside mx-auto text-left inline-block space-y-1">
          <li>A world of bold learning and meaningful human connection.</li>
          <li>A world where companies and professionals grow together.</li>
          <li>A world of constant challenges and shared solutions.</li>
        </ul>
        <p className="font-semibold text-lg mt-6">
          And you? Are you ready to be part of it?
        </p>
        <div className="mt-4">
          <a
            href="https://innovators-serendipity-academy.circle.so/join?invitation_token=a70ffb53792bb9dec38bdaafe659b603c34c5d8e-9d20cbdd-0e46-4990-a7f6-ac66d99bad20"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue hover:bg-blue-dark text-white font-medium px-6 py-2 rounded shadow transition"
          >
            Join us now
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default InspiringSection; 
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { termsSections } from '@/data/termsSections';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100/40 text-blue-900">
      <Navbar />
      <main className="pt-32 pb-20">
        <section className="container max-w-4xl mx-auto px-6 mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Terms of Service &amp; Use</h1>
          <div className="space-y-6 text-left text-lg text-blue-800 leading-relaxed">
            <p>
              Your privacy is critically important to us. At <span className="font-semibold">Empowering from Within/Innovators Serendipity Academy</span> we don&apos;t:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ask you for personal information unless we truly need it. (We can&apos;t stand services that ask you for things like your gender or income level for no apparent reason.)</li>
              <li>Share your personal information with anyone except to comply with the law.</li>
              <li>Store personal information on our servers for longer than necessary.</li>
            </ul>
          </div>
        </section>

        <section className="container max-w-4xl mx-auto px-6">
          <div className="bg-white shadow-xl rounded-3xl border border-blue-100/70 overflow-hidden">
            <Accordion type="multiple" className="divide-y divide-blue-100">
              {termsSections.map((section, index) => (
                <AccordionItem key={section.title} value={`terms-section-${index}`} className="px-6">
                  <AccordionTrigger className="text-left text-lg md:text-xl font-semibold text-blue-900 py-6">
                    {section.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div
                      className="text-base md:text-lg text-gray-700 leading-relaxed space-y-4 pb-6 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_a]:text-blue-600 [&_a]:underline [&_strong]:font-semibold"
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;

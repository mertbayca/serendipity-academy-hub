import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Users, Target, Lightbulb, TrendingUp, Calendar, Award, ArrowRight, ChevronDown, ChevronUp, MessageCircle, Brain, Zap, Quote, X } from 'lucide-react';

const Mastermind = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-40 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80"
            alt="Business meeting"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Geometric Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>

        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-400/30 hover:bg-blue-500/30 transition-all duration-300 px-4 py-1.5">
              12-Month Peer Advisory Program
            </Badge>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Your Inner Circle for <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Outer Impact</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Join a 12-month peer advisory group designed for innovation-driven leaders in DACH. Navigate complexity, sharpen your edge, and grow with peers who challenge and support you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 text-lg font-semibold shadow-xl transition-all duration-300 group"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfOBFVAeOR1LOH8W7gii5E0V8fv_myycPkSLizkTrEN5N_wPA/viewform?usp=dialog', '_blank')}
              >
                Apply for 2026 Cohort
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 px-8 py-6 text-lg font-semibold backdrop-blur-sm"
                onClick={() => window.location.href = 'mailto:office@innovators-serendipity.com?subject=Exploratory Call Request'}
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Schedule Call
              </Button>
            </div>

            {/* Trust Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-3">
                <Award className="w-5 h-5 text-blue-300" />
                <div>
                  <div className="text-white font-semibold text-sm">EDUQUA Certified</div>
                  <div className="text-xs text-gray-400">Swiss Quality</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Users className="w-5 h-5 text-indigo-300" />
                <div>
                  <div className="text-white font-semibold text-sm">Limited to 20</div>
                  <div className="text-xs text-gray-400">Seats Only</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Calendar className="w-5 h-5 text-purple-300" />
                <div>
                  <div className="text-white font-semibold text-sm">March 2026</div>
                  <div className="text-xs text-gray-400">Start Date</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <TrendingUp className="w-5 h-5 text-amber-300" />
                <div>
                  <div className="text-white font-semibold text-sm">12 Months</div>
                  <div className="text-xs text-gray-400">Transformation</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(249, 250, 251)"/>
          </svg>
        </div>
      </section>

      {/* PROBLEM SECTION - Asymmetric Split Layout */}
      <section className="py-24 bg-gray-50 relative">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Testimonial */}
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-12 shadow-2xl">
                <Quote className="w-16 h-16 text-blue-400 mb-6" />
                <blockquote className="text-2xl text-white font-medium leading-relaxed mb-6">
                  "The quality of thinking that emerges when you put the right leaders together is remarkable."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500"></div>
                  <div>
                    <div className="text-white font-semibold">Former C-Suite Executive</div>
                    <div className="text-gray-400">Mastermind Chair</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content Column */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
                Leading Innovation Shouldn't Feel This Isolating
              </h2>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Navigating complexity alone</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      Your strategic decisions happen in a vacuum. You need a trusted circle to pressure-test ideas and challenge your thinking.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Old playbooks failing</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      The pace of change is relentless. You need fresh perspectives and real-time learning from peers facing similar challenges.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Stuck between strategy and execution</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      You know what needs to change, but organizational inertia holds you back. You need accountability and momentum.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-white rounded-2xl border-l-4 border-blue-500 shadow-lg">
                <p className="text-xl text-gray-700 font-medium italic">
                  Sound familiar? You're not alone. And you shouldn't be solving this alone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT NUMBERS SECTION - Sophisticated Design */}
      <section className="py-20 bg-white relative">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl font-bold text-gray-900 mb-2">72</div>
              <div className="text-sm uppercase tracking-wider text-gray-500 font-semibold">Hours of Group Sessions</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-gray-900 mb-2">24</div>
              <div className="text-sm uppercase tracking-wider text-gray-500 font-semibold">Hours of 1:1 Coaching</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-gray-900 mb-2">4</div>
              <div className="text-sm uppercase tracking-wider text-gray-500 font-semibold">Expert Sessions</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-gray-900 mb-2">∞</div>
              <div className="text-sm uppercase tracking-wider text-gray-500 font-semibold">Alumni Network Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION - Bento Grid Layout */}
      <section className="py-24 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              A Circle That Fits You. A Year That Transforms You.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Mastermind Groups bring together 6-8 carefully matched leaders for 12 months of deep peer learning.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Large Card - Monthly Sessions */}
            <div className="lg:col-span-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold mb-3">Monthly Mastermind Sessions</h3>
                <p className="text-xl text-blue-100 mb-6">4 hours per month</p>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 mt-0.5 flex-shrink-0" />
                    <span>Work through your real challenges with your peer group</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 mt-0.5 flex-shrink-0" />
                    <span>Get constructive feedback and fresh perspectives</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 mt-0.5 flex-shrink-0" />
                    <span>Structured problem-solving with accountability</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Tall Card - 1:1 Coaching */}
            <div className="lg:row-span-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="relative h-full flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold mb-3">1:1 Chair Coaching</h3>
                <p className="text-xl text-indigo-100 mb-6">2 hours per month</p>
                <ul className="space-y-3 text-lg flex-grow">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 mt-0.5 flex-shrink-0" />
                    <span>Personal guidance before & after sessions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 mt-0.5 flex-shrink-0" />
                    <span>Confidential space for leadership challenges</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 mt-0.5 flex-shrink-0" />
                    <span>Direct support applying insights</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Expert Sessions */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-10 text-white shadow-2xl">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                <Brain className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold mb-3">Expert Sessions</h3>
              <p className="text-xl text-purple-100 mb-4">Quarterly</p>
              <p className="text-lg leading-relaxed">
                Learn from global innovators and thought leaders with cutting-edge frameworks.
              </p>
            </div>

            {/* Alumni Network */}
            <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-3xl p-10 text-white shadow-2xl">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold mb-3">Alumni Network</h3>
              <p className="text-xl text-amber-100 mb-4">Lifelong</p>
              <p className="text-lg leading-relaxed">
                Join 200+ Academy Alumni with permanent network access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DIFFERENTIATION SECTION - Comparison Table */}
      <section className="py-24 bg-white">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Makes Our Mastermind Groups Different
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've engineered every element for maximum impact
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-slate-900 to-gray-900">
                    <th className="px-8 py-6 text-left text-white font-bold text-lg">Feature</th>
                    <th className="px-8 py-6 text-center text-white font-bold text-lg">Generic Programs</th>
                    <th className="px-8 py-6 text-center bg-blue-600 text-white font-bold text-lg">ISA Mastermind</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-8 py-6">
                      <div className="font-semibold text-gray-900 mb-1">Scientific Group Matching</div>
                      <div className="text-sm text-gray-600">Using <span className="font-semibold text-blue-600">Principles You</span> (Ray Dalio) & Adam Grant research</div>
                    </td>
                    <td className="px-8 py-6 text-center">
                      <X className="w-6 h-6 text-red-500 mx-auto" />
                    </td>
                    <td className="px-8 py-6 text-center bg-blue-50">
                      <CheckCircle2 className="w-6 h-6 text-green-600 mx-auto" />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-8 py-6">
                      <div className="font-semibold text-gray-900 mb-1">Innovation-Specific Focus</div>
                      <div className="text-sm text-gray-600">Dedicated to innovation challenges, not generic leadership</div>
                    </td>
                    <td className="px-8 py-6 text-center">
                      <X className="w-6 h-6 text-red-500 mx-auto" />
                    </td>
                    <td className="px-8 py-6 text-center bg-blue-50">
                      <CheckCircle2 className="w-6 h-6 text-green-600 mx-auto" />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-8 py-6">
                      <div className="font-semibold text-gray-900 mb-1">Practitioner-Led Chairs</div>
                      <div className="text-sm text-gray-600">Former C-suite executives & entrepreneurs, not consultants</div>
                    </td>
                    <td className="px-8 py-6 text-center">
                      <div className="text-gray-400 text-sm">Sometimes</div>
                    </td>
                    <td className="px-8 py-6 text-center bg-blue-50">
                      <CheckCircle2 className="w-6 h-6 text-green-600 mx-auto" />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-8 py-6">
                      <div className="font-semibold text-gray-900 mb-1">Individual 1:1 Coaching</div>
                      <div className="text-sm text-gray-600">24 hours of personal coaching included</div>
                    </td>
                    <td className="px-8 py-6 text-center">
                      <X className="w-6 h-6 text-red-500 mx-auto" />
                    </td>
                    <td className="px-8 py-6 text-center bg-blue-50">
                      <CheckCircle2 className="w-6 h-6 text-green-600 mx-auto" />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-8 py-6">
                      <div className="font-semibold text-gray-900 mb-1">Psychological Safety Protocol</div>
                      <div className="text-sm text-gray-600">Structured confidentiality & trust-building process</div>
                    </td>
                    <td className="px-8 py-6 text-center">
                      <div className="text-gray-400 text-sm">Basic</div>
                    </td>
                    <td className="px-8 py-6 text-center bg-blue-50">
                      <CheckCircle2 className="w-6 h-6 text-green-600 mx-auto" />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-8 py-6">
                      <div className="font-semibold text-gray-900 mb-1">EDUQUA Certification</div>
                      <div className="text-sm text-gray-600">Swiss quality standard with recognized diploma</div>
                    </td>
                    <td className="px-8 py-6 text-center">
                      <X className="w-6 h-6 text-red-500 mx-auto" />
                    </td>
                    <td className="px-8 py-6 text-center bg-blue-50">
                      <CheckCircle2 className="w-6 h-6 text-green-600 mx-auto" />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-8 py-6">
                      <div className="font-semibold text-gray-900 mb-1">Lifelong Alumni Network</div>
                      <div className="text-sm text-gray-600">200+ leaders across DACH, permanent access</div>
                    </td>
                    <td className="px-8 py-6 text-center">
                      <div className="text-gray-400 text-sm">Limited</div>
                    </td>
                    <td className="px-8 py-6 text-center bg-blue-50">
                      <CheckCircle2 className="w-6 h-6 text-green-600 mx-auto" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Principles You Callout */}
          <div className="mt-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-10 border-2 border-blue-200">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Scientific Matching Process</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  We use <span className="font-bold text-blue-600">Principles You</span>, an assessment tool based on Ray Dalio's decades of research on effective team dynamics, combined with Adam Grant's organizational psychology insights on cognitive diversity.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  This ensures each Mastermind Group has complementary thinking styles, diverse problem-solving approaches, and aligned values—creating the cognitive tension necessary for breakthrough thinking while maintaining psychological safety.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY TIMELINE - Linear Horizontal */}
      <section className="py-24 bg-gray-50 relative">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-5">
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&q=80"
            alt="Professional growth"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Path from Application to Alumni
            </h2>
          </div>

          {/* Linear Timeline */}
          <div className="relative max-w-6xl mx-auto">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 via-purple-500 to-amber-500"></div>

            <div className="grid md:grid-cols-4 gap-8 relative">
              {/* Step 1 */}
              <div className="relative text-center">
                <div className="bg-white rounded-2xl p-6 border-2 border-blue-500 shadow-xl mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                    1
                  </div>
                  <div className="text-4xl mb-3">📝</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Apply</h3>
                  <p className="text-gray-600 text-sm">
                    Submit your application
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative text-center">
                <div className="bg-white rounded-2xl p-6 border-2 border-indigo-500 shadow-xl mb-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500 flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <div className="text-4xl mb-3">👥</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Match</h3>
                  <p className="text-gray-600 text-sm">
                    Scientific group matching
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative text-center">
                <div className="bg-white rounded-2xl p-6 border-2 border-purple-500 shadow-xl mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500 flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <div className="text-4xl mb-3">🤝</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Transform</h3>
                  <p className="text-gray-600 text-sm">
                    12-month journey
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative text-center">
                <div className="bg-white rounded-2xl p-6 border-2 border-amber-500 shadow-xl mb-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                    4
                  </div>
                  <div className="text-4xl mb-3">🎓</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Graduate</h3>
                  <p className="text-gray-600 text-sm">
                    EDUQUA diploma & Alumni
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Investment */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-900 to-gray-900 rounded-3xl p-12 text-white text-center shadow-2xl border border-gray-700">
              <div className="inline-block px-6 py-2 bg-blue-500/20 rounded-full text-blue-300 font-semibold mb-6">
                Investment
              </div>
              <div className="text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                CHF 12,000
              </div>
              <p className="text-2xl text-gray-300 mb-6">for 12 months (CHF 1,000/month)</p>
              <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
                Includes all sessions, coaching, materials, and lifetime Alumni access. Payment plans available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR - Split Layout */}
      <section className="py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - Headline & Personas */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
                You Belong Here If You're...
              </h2>

              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-blue-500">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Leaders Navigating Change</h3>
                      <p className="text-gray-600">
                        Leading teams through digital transformation, restructuring, or strategic pivots.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-indigo-500">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation Executives</h3>
                      <p className="text-gray-600">
                        Building innovation functions, driving new business models, embedding innovation culture.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-purple-500">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Founders & Entrepreneurs</h3>
                      <p className="text-gray-600">
                        Scaling companies, managing growth complexity, navigating market disruption.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-amber-500">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Functional Leaders</h3>
                      <p className="text-gray-600">
                        VPs and Directors responsible for innovation, strategy, R&D, or transformation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Ideal Profile */}
            <div className="lg:mt-20">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-10 text-white shadow-2xl">
                <h3 className="text-3xl font-bold mb-8">Ideal Profile</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 mt-1 flex-shrink-0" />
                    <span className="text-lg">€1M-€50M revenue range companies</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 mt-1 flex-shrink-0" />
                    <span className="text-lg">10-200 employees</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 mt-1 flex-shrink-0" />
                    <span className="text-lg">Based in DACH region (Switzerland, Germany, Austria)</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 mt-1 flex-shrink-0" />
                    <span className="text-lg">English or German fluency</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 mt-1 flex-shrink-0" />
                    <span className="text-lg">Able to commit 6 hours/month for 12 months</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAIRS SECTION - Image Grid */}
      <section className="py-24 bg-gray-50 relative">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-5">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80"
            alt="Leadership"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Your Guides
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our Chairs are carefully selected former executives and entrepreneurs who are motivated by giving back.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img src="/assets/frank.png" alt="Chair" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img src="/assets/costas.png" alt="Chair" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img src="/assets/guenther.png" alt="Chair" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img src="/assets/uli.png" alt="Chair" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <div className="bg-white rounded-3xl p-10 border-2 border-gray-200 shadow-xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-8">Expert Leadership from Those Who've Been There</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 text-lg">Former C-suite executives and board members</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 text-lg">Successful entrepreneurs with exit experience</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 text-lg">Deep expertise in innovation and transformation</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 text-lg">Motivated by giving back and creating impact</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CURRICULUM - Horizontal Timeline */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-gray-900 text-white">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What You'll Work On Together
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              12-month journey shaped by your challenges and goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Q1 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl blur-xl opacity-50"></div>
              <div className="relative bg-slate-800/90 rounded-3xl p-8 border border-blue-400/30">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-2xl font-bold">
                    1-3
                  </div>
                  <h3 className="text-3xl font-bold text-blue-300">Foundation</h3>
                </div>
                <ul className="space-y-3 text-gray-300 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400">•</span>
                    <span>Innovation assessment and baseline</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400">•</span>
                    <span>Personal leadership style and blind spots</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400">•</span>
                    <span>Group dynamics and trust-building</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400">•</span>
                    <span>Setting transformational objectives</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Q2 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-3xl blur-xl opacity-50"></div>
              <div className="relative bg-slate-800/90 rounded-3xl p-8 border border-indigo-400/30">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center text-2xl font-bold">
                    4-6
                  </div>
                  <h3 className="text-3xl font-bold text-indigo-300">Strategic Clarity</h3>
                </div>
                <ul className="space-y-3 text-gray-300 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-400">•</span>
                    <span>Innovation strategy and positioning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-400">•</span>
                    <span>Decision-making frameworks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-400">•</span>
                    <span>Organizational dynamics and politics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-400">•</span>
                    <span>Leading through resistance</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Q3 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 rounded-3xl blur-xl opacity-50"></div>
              <div className="relative bg-slate-800/90 rounded-3xl p-8 border border-purple-400/30">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-2xl font-bold">
                    7-9
                  </div>
                  <h3 className="text-3xl font-bold text-purple-300">Implementation</h3>
                </div>
                <ul className="space-y-3 text-gray-300 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400">•</span>
                    <span>Turning strategy into action</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400">•</span>
                    <span>Building innovation capabilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400">•</span>
                    <span>Stakeholder management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400">•</span>
                    <span>Measuring and communicating impact</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Q4 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl blur-xl opacity-50"></div>
              <div className="relative bg-slate-800/90 rounded-3xl p-8 border border-amber-400/30">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-2xl font-bold">
                    10-12
                  </div>
                  <h3 className="text-3xl font-bold text-amber-300">Sustainability</h3>
                </div>
                <ul className="space-y-3 text-gray-300 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400">•</span>
                    <span>Embedding change</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400">•</span>
                    <span>Scaling innovation practices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400">•</span>
                    <span>Personal transformation reflection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400">•</span>
                    <span>Building your ongoing support system</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="container max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Common Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How much time commitment is required?",
                a: "6 hours per month minimum: 4 hours for group sessions (typically half-day format), 2 hours for 1:1 coaching. Plus informal homework and reflection between sessions."
              },
              {
                q: "How are groups matched?",
                a: "We use a multi-factor approach combining psychometric assessment (Principles You), innovation mindset evaluation, professional background, and a personal conversation with a Chair. Our goal is complementary thinking styles and aligned commitment."
              },
              {
                q: "What if I can't attend a session?",
                a: "Attendance is expected for all sessions—commitment is critical to group dynamics. In exceptional circumstances, we offer makeup sessions or remote participation options."
              },
              {
                q: "Is this confidential?",
                a: "Absolutely. What's shared in Mastermind Groups stays in Mastermind Groups. This is a foundational principle that enables honest, vulnerable conversations."
              },
              {
                q: "What language are sessions conducted in?",
                a: "We offer both English and German groups, plus bilingual options depending on group composition and preference."
              },
              {
                q: "How is this different from executive coaching?",
                a: "Executive coaching is 1:1 with a coach. Mastermind Groups add the power of peer learning—you benefit from multiple perspectives, diverse experiences, and mutual accountability. Plus you get 1:1 coaching alongside the group work."
              },
              {
                q: "What's the ROI?",
                a: "Members typically report: clearer strategic direction, faster decision-making, stronger leadership presence, reduced isolation, and concrete innovation outcomes. The real value is both tangible (better decisions, new initiatives) and intangible (confidence, perspective, network)."
              },
              {
                q: "When does the next cohort start?",
                a: "We launch new cohorts twice annually in March and September. Applications for March 2026 are open now, with spots limited to 20 participants across 3 groups."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900 text-left">{faq.q}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6 bg-gray-50">
                    <p className="text-gray-600 leading-relaxed text-lg">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1920&q=80"
            alt="Success"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
            Ready to Stop Leading Alone?
          </h2>
          <p className="text-2xl md:text-3xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Applications close February 28, 2026. Your transformation starts with a conversation.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-8 text-2xl font-bold shadow-2xl transition-all duration-300 group"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfOBFVAeOR1LOH8W7gii5E0V8fv_myycPkSLizkTrEN5N_wPA/viewform?usp=dialog', '_blank')}
            >
              Apply Now for 2026 Cohort
              <ArrowRight className="ml-3 w-7 h-7" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-2 border-white/30 hover:bg-white/20 px-12 py-8 text-2xl font-semibold backdrop-blur-sm"
              onClick={() => window.location.href = 'mailto:office@innovators-serendipity.com?subject=Exploratory Call Request'}
            >
              <MessageCircle className="mr-3 w-7 h-7" />
              Schedule Call
            </Button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 text-blue-100">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6" />
              <span className="text-lg">No obligation</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6" />
              <span className="text-lg">48-hour response</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6" />
              <span className="text-lg">Rolling admissions</span>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="py-24 bg-white">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            The Leaders Who Transform. Together.
          </h2>
          <p className="text-2xl text-gray-600 leading-relaxed mb-6">
            You've built something. You're leading something.
          </p>
          <p className="text-2xl text-gray-600 leading-relaxed mb-6">
            You know the path ahead requires new thinking.
          </p>
          <p className="text-2xl font-semibold text-gray-900 mb-12">
            The question isn't whether you need to grow—it's whether you'll do it alone or with others.
          </p>
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl border-2 border-blue-200">
            <p className="text-xl text-gray-900 font-semibold">
              Mastermind Groups exist for leaders who choose the latter.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Mastermind;

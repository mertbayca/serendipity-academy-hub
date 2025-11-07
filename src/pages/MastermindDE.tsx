import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import FooterDE from '@/components/FooterDE';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Users, Target, Lightbulb, TrendingUp, Calendar, Award, Lock, ArrowRight, ChevronDown, ChevronUp, MessageCircle, Brain, Zap } from 'lucide-react';

const MastermindDE = () => {
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
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(99,102,241,0.1),transparent_50%)]"></div>

        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-400/30 hover:bg-blue-500/30 transition-all duration-300 px-4 py-1.5">
              12-monatiges Peer-Advisory-Programm
            </Badge>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Dein innerer Kreis für <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">äußere Wirkung</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Tritt einer 12-monatigen Peer-Gruppe bei, entwickelt für innovationsgetriebene Leader in der DACH-Region. Navigiere Komplexität, schärfe deine Fähigkeiten und wachse mit Peers, die dich fordern und unterstützen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfOBFVAeOR1LOH8W7gii5E0V8fv_myycPkSLizkTrEN5N_wPA/viewform?usp=dialog', '_blank')}
              >
                Bewerbung 2026 Kohorte
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 px-8 py-6 text-lg font-semibold backdrop-blur-sm"
                onClick={() => window.location.href = 'mailto:office@innovators-serendipity.com?subject=Anfrage Kennenlerngespräch'}
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Kennenlerngespräch vereinbaren
              </Button>
            </div>

            {/* Trust Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-sm">
              <div className="flex items-center justify-center gap-2 text-blue-200">
                <Award className="w-4 h-4" />
                <span>EDUQUA-zertifiziert</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-blue-200">
                <Calendar className="w-4 h-4" />
                <span>12-Monats-Programm</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-blue-200">
                <Users className="w-4 h-4" />
                <span>Limitiert auf 20 Plätze</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-blue-200">
                <TrendingUp className="w-4 h-4" />
                <span>Start März 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Innovation führen sollte nicht so isolierend sein
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Du navigierst Komplexität allein
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Deine strategischen Entscheidungen entstehen im Vakuum. Du brauchst einen vertrauten Kreis, um Ideen zu testen und dein Denken herauszufordern.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 rounded-xl bg-indigo-50 flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Alte Spielbücher funktionieren nicht mehr
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Das Tempo der Veränderung ist unerbittlich. Du brauchst frische Perspektiven und Echtzeit-Lernen von Peers mit ähnlichen Herausforderungen.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 rounded-xl bg-purple-50 flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Du steckst zwischen Strategie und Umsetzung fest
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Du weißt, was sich ändern muss, aber organisatorische Trägheit hält dich zurück. Du brauchst Accountability und Momentum.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 italic">
              Kommt dir bekannt vor? Du bist nicht allein. Und du solltest das nicht allein lösen.
            </p>
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className="py-24 bg-white">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ein Kreis, der zu dir passt. Ein Jahr, das dich transformiert.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Mastermind-Gruppen bringen 6-8 sorgfältig ausgewählte Leader für 12 Monate tiefes Peer-Learning zusammen, begleitet von einem erfahrenen Chair, der den Weg schon gegangen ist.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Monthly Mastermind Sessions */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mr-4 flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Monatliche Mastermind-Sessions</h3>
                  <p className="text-blue-600 font-semibold">4 Stunden pro Monat</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Bearbeite deine echten Herausforderungen mit deiner Peer-Gruppe</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Erhalte konstruktives Feedback und frische Perspektiven</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Strukturierte Problemlösung mit begleiteter Accountability</span>
                </li>
              </ul>
            </div>

            {/* 1:1 Chair Coaching */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center mr-4 flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">1:1 Chair-Coaching</h3>
                  <p className="text-indigo-600 font-semibold">2 Stunden pro Monat</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Persönliche Begleitung vor und nach jeder Gruppensession</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Vertraulicher Raum für Leadership-Herausforderungen</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Direkte Unterstützung bei der Anwendung von Insights</span>
                </li>
              </ul>
            </div>

            {/* Expert Sessions */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center mr-4 flex-shrink-0">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Expert-Sessions</h3>
                  <p className="text-purple-600 font-semibold">Quartalsweise</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Lerne von globalen Innovatoren und Thought Leaders</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Zugang zu modernsten Frameworks und Methodologien</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Vernetzung mit Fachexperten on demand</span>
                </li>
              </ul>
            </div>

            {/* Alumni Network */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-600 flex items-center justify-center mr-4 flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Alumni-Netzwerk</h3>
                  <p className="text-amber-600 font-semibold">Lebenslang</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Tritt 200+ Academy Alumni in der DACH-Region bei</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Lebenslanger Zugang zu Events und weiterem Lernen</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Ein permanentes Netzwerk vertrauenswürdiger Advisors</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DIFFERENTIATION SECTION */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-gray-900 text-white">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Was macht unsere Mastermind-Gruppen anders
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Scientific Matching */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-400/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6">
                <Brain className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-300">Wissenschaftliches Matching</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Wir teilen dich nicht einfach einer Gruppe zu. Wir matchen dich.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Mit Principles You (basierend auf Ray Dalios Arbeit) und Adam Grants Forschung kreieren wir Gruppen mit komplementären Denkstilen, diversen Perspektiven und gemeinsamen Werten. Das garantiert kognitive Vielfalt und echte Herausforderung in jeder Session.
              </p>
            </div>

            {/* Innovation-Focused */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-indigo-400/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-6">
                <Lightbulb className="w-7 h-7 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-indigo-300">Innovationsfokussiert</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Das ist keine generische Executive-Entwicklung.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Jede Mastermind-Gruppe konzentriert sich auf Innovations-Herausforderungen: Disruption navigieren, neue Geschäftsmodelle aufbauen, organisatorischen Wandel vorantreiben und durch Komplexität führen. Deine Peers sprechen deine Sprache.
              </p>
            </div>

            {/* Practitioner-Led */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-300">Praktiker-geführt</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Dein Chair ist kein Berater. Sie haben den Job gemacht.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Ehemalige C-Suite-Executives, Aufsichtsräte und Unternehmer, die Unternehmen aufgebaut, Transformationen geleitet und genau die Herausforderungen gemeistert haben, denen du gegenüberstehst. Sie leiten mit Erfahrung, nicht Theorie.
              </p>
            </div>

            {/* Safe Space, Real Challenge */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-amber-400/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-amber-500/20 flex items-center justify-center mb-6">
                <Lock className="w-7 h-7 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-amber-300">Sicherer Raum, echte Herausforderung</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Vertraulich. Committed. Konstruktiv.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Was in der Gruppe geteilt wird, bleibt in der Gruppe. Diese psychologische Sicherheit ermöglicht die Art von ehrlichen, herausfordernden Gesprächen, die echtes Wachstum antreiben. Peer-Accountability ohne Workplace-Politik.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS FLOW SECTION */}
      <section className="py-24 bg-white">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Dein Weg von der Bewerbung zum Alumni
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {/* Step 1: Apply */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border-2 border-blue-200 h-full">
                <div className="text-4xl mb-4">📝</div>
                <div className="text-sm font-bold text-blue-600 mb-2">SCHRITT 1</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Bewerben</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Reiche eine kurze Bewerbung ein mit deinem Hintergrund, aktuellen Herausforderungen und Erwartungen.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 transform -translate-y-1/2 z-10">
                <ArrowRight className="absolute -right-2 -top-2 w-5 h-5 text-indigo-400" />
              </div>
            </div>

            {/* Step 2: Match */}
            <div className="relative">
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-6 border-2 border-indigo-200 h-full">
                <div className="text-4xl mb-4">👥</div>
                <div className="text-sm font-bold text-indigo-600 mb-2">SCHRITT 2</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Matching</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Wir prüfen dein Profil, führen ein Gespräch mit einem Chair und matchen dich mit 5-7 komplementären Peers.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 transform -translate-y-1/2 z-10">
                <ArrowRight className="absolute -right-2 -top-2 w-5 h-5 text-purple-400" />
              </div>
            </div>

            {/* Step 3: Commit */}
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border-2 border-purple-200 h-full">
                <div className="text-4xl mb-4">🤝</div>
                <div className="text-sm font-bold text-purple-600 mb-2">SCHRITT 3</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">12-Monats-Reise</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  12 monatliche Zyklen mit:
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• 4-stündigen Gruppensessions</li>
                  <li>• 2-stündigem 1:1 Coaching</li>
                  <li>• Expert-Sessions</li>
                  <li>• Kontinuierlichem Feedback</li>
                </ul>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-purple-400 to-amber-400 transform -translate-y-1/2 z-10">
                <ArrowRight className="absolute -right-2 -top-2 w-5 h-5 text-amber-400" />
              </div>
            </div>

            {/* Step 4: Graduate */}
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 border-2 border-amber-200 h-full">
              <div className="text-4xl mb-4">🎓</div>
              <div className="text-sm font-bold text-amber-600 mb-2">SCHRITT 4</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Abschluss</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Schließe deine Reise mit EDUQUA-Diplom und permanentem Alumni-Status mit lebenslangem Netzwerkzugang ab.
              </p>
            </div>
          </div>

          {/* Investment Box */}
          <div className="bg-gradient-to-br from-slate-900 to-gray-900 rounded-2xl p-8 text-white text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Investition</h3>
            <div className="text-5xl font-bold mb-2">CHF 12.000</div>
            <p className="text-xl text-gray-300 mb-6">für 12 Monate (CHF 1.000/Monat)</p>
            <p className="text-gray-400 leading-relaxed">
              Beinhaltet alle Sessions, Coaching, Materialien und lebenslangen Alumni-Zugang.
            </p>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Du gehörst hierher, wenn du...
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Leader im Wandel</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Teams durch digitale Transformation, Restrukturierung oder strategische Pivots führst.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation Executive</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Innovationsfunktionen aufbaust, neue Geschäftsmodelle treibst oder Innovationskultur verankerst.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Founder & Unternehmer</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Unternehmen skalierst, Wachstumskomplexität managst oder Marktdisruption navigierst.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Funktionsleiter</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Als VP oder Director für Innovation, Strategie, F&E oder Transformation verantwortlich bist.
              </p>
            </div>
          </div>

          {/* Ideal Profile */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Ideales Profil</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">€1M-€50M Umsatzbereich</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">10-200 Mitarbeitende</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Ansässig in DACH-Region (Schweiz, Deutschland, Österreich)</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Englisch- oder Deutschkenntnisse</span>
              </div>
              <div className="flex items-start md:col-span-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">In der Lage, 6 Stunden/Monat für 12 Monate zu committen</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAIRS SECTION */}
      <section className="py-24 bg-white">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Triff deine Guides
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Unsere Chairs sind sorgfältig ausgewählte ehemalige Executives und Unternehmer, motiviert durch Zurückgeben. Sie saßen auf deinem Stuhl, trafen die schweren Entscheidungen und meisterten die Herausforderungen, denen du gegenüberstehst.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-12 border border-blue-100 text-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 mx-auto mb-6 flex items-center justify-center">
              <Users className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert-Leadership von denen, die da waren</h3>
            <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Ehemalige C-Suite-Executives und Aufsichtsräte</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Erfolgreiche Unternehmer mit Exit-Erfahrung</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Tiefe Expertise in Innovation und Transformation</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Motiviert durch Zurückgeben und Impact kreieren</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CURRICULUM SECTION */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-gray-900 text-white">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Woran ihr zusammen arbeitet
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Jede Mastermind-Gruppe ist einzigartig (geformt durch eure Herausforderungen und Ziele). Hier sind die Kernthemen, die wir über 12 Monate erkunden:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Months 1-3 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-blue-300">1-3</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-300">Fundament</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>• Innovations-Assessment und Baseline</li>
                <li>• Persönlicher Führungsstil und blinde Flecken</li>
                <li>• Gruppendynamik und Vertrauensaufbau</li>
                <li>• Transformationsziele setzen</li>
              </ul>
            </div>

            {/* Months 4-6 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-indigo-300">4-6</span>
                </div>
                <h3 className="text-2xl font-bold text-indigo-300">Strategische Klarheit</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>• Innovationsstrategie und Positionierung</li>
                <li>• Entscheidungs-Frameworks</li>
                <li>• Organisationsdynamik und Politik</li>
                <li>• Führen durch Widerstand</li>
              </ul>
            </div>

            {/* Months 7-9 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-purple-300">7-9</span>
                </div>
                <h3 className="text-2xl font-bold text-purple-300">Implementierung</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>• Strategie in Action verwandeln</li>
                <li>• Innovationsfähigkeiten aufbauen</li>
                <li>• Stakeholder-Management</li>
                <li>• Impact messen und kommunizieren</li>
              </ul>
            </div>

            {/* Months 10-12 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-amber-300">10-12</span>
                </div>
                <h3 className="text-2xl font-bold text-amber-300">Nachhaltigkeit</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>• Veränderung verankern</li>
                <li>• Innovationspraktiken skalieren</li>
                <li>• Persönliche Transformations-Reflexion</li>
                <li>• Dein Support-System aufbauen</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto">
            <h4 className="text-xl font-bold text-blue-300 mb-4">Plus kontinuierlich:</h4>
            <div className="grid md:grid-cols-2 gap-4 text-gray-300">
              <div>• Echtzeit-Herausforderungslösung</div>
              <div>• Peer-Accountability</div>
              <div>• Expert-Sessions on demand</div>
              <div>• Individuelles Coaching-Anwendung</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="container max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Häufige Fragen
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Wie viel Zeitaufwand ist erforderlich?",
                a: "Mindestens 6 Stunden pro Monat: 4 Stunden für Gruppensessions (typischerweise Halbtagesformat), 2 Stunden für 1:1 Coaching. Plus informelle Hausaufgaben und Reflexion zwischen den Sessions."
              },
              {
                q: "Wie werden Gruppen gematcht?",
                a: "Wir verwenden einen Multi-Faktor-Ansatz, der psychometrisches Assessment (Principles You), Innovations-Mindset-Evaluation, beruflichen Hintergrund und ein persönliches Gespräch mit einem Chair kombiniert. Unser Ziel sind komplementäre Denkstile und aligned Commitment."
              },
              {
                q: "Was, wenn ich an einer Session nicht teilnehmen kann?",
                a: "Teilnahme wird für alle Sessions erwartet – Commitment ist kritisch für Gruppendynamik. In Ausnahmefällen bieten wir Ersatz-Sessions oder Remote-Teilnahme-Optionen."
              },
              {
                q: "Ist das vertraulich?",
                a: "Absolut. Was in Mastermind-Gruppen geteilt wird, bleibt in Mastermind-Gruppen. Das ist ein fundamentales Prinzip, das ehrliche, verletzliche Gespräche ermöglicht."
              },
              {
                q: "In welcher Sprache finden Sessions statt?",
                a: "Wir bieten sowohl englische als auch deutsche Gruppen an, plus bilinguale Optionen je nach Gruppenzusammensetzung und Präferenz."
              },
              {
                q: "Wie unterscheidet sich das von Executive Coaching?",
                a: "Executive Coaching ist 1:1 mit einem Coach. Mastermind-Gruppen fügen die Kraft von Peer-Learning hinzu – du profitierst von multiplen Perspektiven, diversen Erfahrungen und gegenseitiger Accountability. Plus du erhältst 1:1 Coaching zusätzlich zur Gruppenarbeit."
              },
              {
                q: "Was ist der ROI?",
                a: "Mitglieder berichten typischerweise: klarere strategische Ausrichtung, schnellere Entscheidungsfindung, stärkere Leadership-Präsenz, reduzierte Isolation und konkrete Innovations-Outcomes. Der echte Wert ist sowohl tangibel (bessere Entscheidungen, neue Initiativen) als auch intangibel (Vertrauen, Perspektive, Netzwerk)."
              },
              {
                q: "Wann startet die nächste Kohorte?",
                a: "Wir starten neue Kohorten zweimal jährlich im März und September. Bewerbungen für März 2026 sind jetzt offen, mit Plätzen limitiert auf 20 Teilnehmer über 3 Gruppen."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900 text-left">{faq.q}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>

        <div className="container max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Bereit, nicht mehr allein zu führen?
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Plätze sind limitiert. Bewerbungen schließen am 28. Februar 2026. Deine Transformation beginnt mit einem Gespräch.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-6 text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 group"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfOBFVAeOR1LOH8W7gii5E0V8fv_myycPkSLizkTrEN5N_wPA/viewform?usp=dialog', '_blank')}
            >
              Jetzt für 2026 bewerben
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 px-10 py-6 text-xl font-semibold backdrop-blur-sm"
              onClick={() => window.location.href = 'mailto:office@innovators-serendipity.com?subject=Anfrage Kennenlerngespräch'}
            >
              <MessageCircle className="mr-2 w-6 h-6" />
              Kennenlerngespräch vereinbaren
            </Button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-blue-100 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Keine Verpflichtung zur Bewerbung</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Persönliche Antwort innerhalb 48 Stunden</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Laufende Aufnahme bis Kapazität</span>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING SECTION */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Die Leader, die transformieren. Zusammen.
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Du hast etwas aufgebaut. Du führst etwas. Du weißt, der Weg vorwärts erfordert neues Denken.
          </p>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Die Frage ist nicht, ob du wachsen musst – sondern ob du es allein oder mit anderen tust.
          </p>
          <p className="text-xl font-semibold text-gray-900 mb-8">
            Mastermind-Gruppen existieren für Leader, die sich für Letzteres entscheiden.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-6 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfOBFVAeOR1LOH8W7gii5E0V8fv_myycPkSLizkTrEN5N_wPA/viewform?usp=dialog', '_blank')}
          >
            Für 2026 Kohorte bewerben
          </Button>
        </div>
      </section>

      <FooterDE />
    </div>
  );
};

export default MastermindDE;

import React from 'react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            About <span className="text-blue">Innovators Serendipity Academy</span>
          </h1>
        </div>
      </section>

      {/* Inspiring Section */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Inspiring Each Other for a Brighter Future</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            At Innovators Serendipity Academy, we believe in the power of collective growth and shared wisdom. 
            Our community is built on the foundation of mutual inspiration, where each member contributes to and 
            benefits from the collective journey toward innovation and leadership excellence.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Our Founder</h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3 flex justify-center">
              <img 
                src="./assets/elisabeth.png" 
                alt="Elisabeth Drzaic-Lang" 
                className="rounded-lg shadow-lg w-40 h-40 object-cover border-4 border-blue-100"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold mb-4">Elisabeth Drzaic-Lang</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Elisabeth Drzaic-Lang is a powerhouse in FMCG and luxury brand strategy. A Global Marketing Director and Executive Coach, she led award-winning campaigns like Milka's Cannes Lion wins. Her style is purpose-driven, empowering, and fiercely results-focused, helping individuals and companies alike step into their fullest potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Non-Executive Board Director Section */}
      <section className="py-12 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-bold mb-8">Non-Executive Board Director</h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3 flex justify-center">
              <img 
                src="./assets/christian.png" 
                alt="Christian Bennewitz" 
                className="rounded-lg shadow-lg w-40 h-40 object-cover border-4 border-blue-100"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold mb-4">Christian Bennewitz</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Christian Bennewitz brings a rare mix of strategic vision and real-world impact to the Innovators Serendipity Academy board. As a senior sales leader at Salesforce, he helps businesses across Europe harness CRM and AI to build stronger, more human customer relationships. With 20+ years in digital transformation, Christian is passionate about purposeful leadership and authentic growth. He's on a mission to help companies turn tech into trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our People Section */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Our People</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Expert cards */}
            {[
              {
                name: 'Raquel M. Katigbak',
                img: './assets/raquel.png',
                bio: `Meet Raquel M. Katigbak, Co-Founder & CEO of SUSI Tech and creator of The AI Edge. With 25+ years in tech leadership, she brings a rare mix of clarity, purpose, and impact to AI. Whether she's guiding SMEs or writing children's books about AI, Raquel makes complex innovation feel personal, responsible, and actionable. If you're looking to understand AI with intention, she's your guide.`
              },
              {
                name: 'Francesco "Frank" Pagano',
                img: './assets/frank.png',
                bio: `Frank Pagano is a Senior Partner at JAKALA and a powerhouse in MarTech innovation. With two decades of global experience in FMCG and fashion, he fuses data, strategy, and storytelling to drive real transformation. From AI to the Metaverse, Frank doesn't just talk about the future. He builds it. Expect sharp insights and boundary-pushing ideas that inspire action.`
              },
              {
                name: 'Uli Haist',
                img: './assets/uli.png',
                bio: `Uli Haist is a branding and innovation strategist with a visionary edge. Having led marketing at global giants like P&G and Wrigley, he now shapes the future as Head of Strategy at Logic Design Switzerland. Uli blends creative dreaming with commercial grounding. He brings the same energy to every lecture, brand, or team he touches.`
              },
              {
                name: 'Karin Fuchs-Häseli',
                img: './assets/karin.png',
                bio: `Karin Fuchs-Häseli is the founder of SunHeart Business Leaders, a Swiss network for regenerative and ethical business. She bridges philosophy, cultural wisdom, and human potential into a powerful lens for leadership. Whether she's coaching executives or guiding transformation, Karin teaches how to lead in harmony with nature's laws, with deep purpose.`
              },
              {
                name: 'Costas Papaikonomou',
                img: './assets/costas.png',
                bio: `Costas Papaikonomou has helped create over $5 billion in value through bold product innovation. Co-founder of Happen Group (now part of Accenture), he's a provocateur, impact investor, and author who thrives on turning old systems into fresh opportunities. With a flair for practicality and provocation, Costas brings both fire and function to every discussion.`
              },
              {
                name: 'Anna Schmidt',
                img: './assets/anna.png',
                bio: `Anna Schmidt is the CEO of Career Partners International and a seasoned organizational psychologist. With expertise in outplacement, leadership coaching, and age-neutral workplace strategy, she helps people thrive through transition. Her work spans continents. It always centers on resilience, connection, and meaningful career evolution.`
              },
              {
                name: 'Dr. Guenther Dobrauz-Saldapenna',
                img: './assets/guenther.png',
                bio: `Dr. Guenther Dobrauz-Saldapenna is a venture capital partner, longevity visionary, and bestselling author. He's invested in circular economy startups, written 12 books, and spoken on the future of work and technology worldwide. With law, business, and Harvard in his background, he's not just thinking ahead. He's helping shape what's next.`
              },
              {
                name: 'Julie Smith',
                img: './assets/julie.png',
                bio: `Julie Smith is the no-fluff career coach behind PRESSUREVALVE. Based in London, she helps mid-career professionals get noticed, without cringey self-promotion. With years of coaching experience and sharp insight, Julie empowers people to unlock their next chapter by simply being more of themselves.`
              }
            ].map(expert => (
              <div key={expert.name} className="flex flex-col items-center bg-white rounded-lg shadow-sm border border-gray-100 p-6 text-center">
                <img src={expert.img} alt={expert.name} className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-blue-100" />
                <h4 className="text-lg font-semibold mb-2">{expert.name}</h4>
                <p className="text-gray-700 text-sm">{expert.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Join the Movement?</h2>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button className="bg-blue hover:bg-blue-dark text-white text-lg px-8 py-6" onClick={() => window.open('https://innovators-serendipity-academy.circle.so/join?invitation_token=a70ffb53792bb9dec38bdaafe659b603c34c5d8e-9d20cbdd-0e46-4990-a7f6-ac66d99bad20', '_blank')}>
              Join a Mastermind Group
            </Button>
            <Button className="bg-white border border-blue text-blue hover:bg-blue-50 text-lg px-8 py-6" onClick={() => window.open('https://innovators-serendipity-academy.circle.so/join?invitation_token=a70ffb53792bb9dec38bdaafe659b603c34c5d8e-9d20cbdd-0e46-4990-a7f6-ac66d99bad20', '_blank')}>
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 
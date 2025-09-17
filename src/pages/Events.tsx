import React from 'react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Events = () => {
  const stats = [
    { number: "30+", label: "Events Held", icon: "🗓️" },
    { number: "1700+", label: "Innovators Attended", icon: "👥" },
    { number: "150+", label: "Companies Represented", icon: "🏢" }
  ];

  const pastEvents = {
    "2025": [
      {
        title: "The Value of Staying Connected, When the World Is Pulling Us Apart",
        description: "An evening of meaningful connections and insights with industry leaders.",
        speaker: "Dean Aragon and Simona Scarpaleggia",
        date: "May 12, 2025",
        time: "18:00–20:00 CET",
        format: "In-person | Free Event | No recordings or photos",
        image: "./assets/pulling.png"
      }
    ],
    "2024": [
      {
        title: "Academy Get Together",
        description: "Let's talk about how AI can impact your business.",
        speaker: "Steven McAuley – AI Manager – Customer Engineering – EMEA North – Google Cloud",
        date: "December 4, 2024",
        time: "6:00–8:00 PM CET",
        format: "Online",
        link: "#",
        image: "./assets/ai.png"
      }
    ],
    "2023": [
      { 
        title: "Ethics & Innovation", 
        format: "In-person",
        image: "./assets/ethics.png"
      },
      { 
        title: "All Is Crazy – No, We Just Need to Innovate for Human Needs", 
        format: "Online",
        image: "./assets/all.png"
      },
      { 
        title: "Serendipity At Its Best", 
        format: "In-person",
        image: "./assets/serendipity.png"
      }
    ],
    "2022": [
      { 
        title: "Social Innovation – Is Herding Cats Worth It?", 
        format: "In-person",
        image: "./assets/social.png"
      },
      { 
        title: "Waking Up from the Green Dream", 
        format: "In-person",
        image: "./assets/waking.png"
      },
      { 
        title: "Women in Tech Disrupting Old Worlds", 
        format: "Online",
        image: "./assets/women.png"
      }
    ],
    "2021": [
      { 
        title: "Innovators Serendipity Community with Paul Polman", 
        format: "Online",
        image: "./assets/paul.png"
      },
      { 
        title: "When Technology Is Not The Answer", 
        format: "Online",
        image: "./assets/when.png"
      },
      { 
        title: "Innovators Serendipity Academy 3 Years Celebration", 
        format: "Online",
        image: "./assets/innovators.png"
      },
      { 
        title: "Failure: Do We Really Learn From It?", 
        format: "Online",
        image: "./assets/failure.png"
      },
      { 
        title: "Disruption Accomplished?", 
        format: "In-person",
        image: "./assets/disruption.png"
      },
      { 
        title: "Re: Inspire Re:Set Re:2021", 
        format: "Online",
        image: "./assets/re.png"
      }
    ],
    "2020": [
      { 
        title: "When Nothing Is Normal – What's Next", 
        format: "Online",
        image: "./assets/when.png"
      },
      { 
        title: "Bounce Forward!", 
        format: "Online",
        image: "./assets/bounce.png"
      },
      { 
        title: "A New Agenda for the Boards of the Future?", 
        format: "Online",
        image: "./assets/agenda.png"
      },
      { 
        title: "Cultivating Serendipity for Innovation, Impact, and Good Luck", 
        format: "Online",
        image: "./assets/cultivating.png"
      },
      { 
        title: "Change, Reset, Transform...What are you up for in 2021?", 
        format: "Online",
        image: "./assets/change.png"
      },
      { 
        title: "From Purpose to Impact", 
        format: "Online",
        image: "./assets/purpose.png"
      },
      { 
        title: "Stop Chasing Certainty", 
        format: "Online",
        image: "./assets/stop.png"
      },
      { 
        title: "Passion: Getting to the Heart, Gut and Brain of Innovation", 
        format: "Online",
        image: "./assets/passion.png"
      }
    ],
    "2019": [
      { 
        title: "Circular Ecosystems: Spin it!", 
        format: "In-person",
        image: "./assets/circular.png"
      },
      { 
        title: "Mastering Disruption", 
        format: "In-person",
        image: "./assets/mastering.png"
      }
    ],
    "2018": [
      { 
        title: "Circular Ecosystems: Spin it!", 
        format: "In-person",
        image: "./assets/circular.png"
      },
      { 
        title: "Mastering Disruption", 
        format: "In-person",
        image: "./assets/mastering.png"
      },
      { 
        title: "Categories Are Dead", 
        format: "In-person",
        image: "./assets/categories.png"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-white">
            Academy <span className="text-blue">Events</span>
          </h1>
          <p className="text-xl text-gray-200 text-center max-w-3xl mx-auto">
            Join us for transformative conversations, meaningful connections, and bold ideas that shape the future of innovation.
          </p>
        </div>
      </section>

      {/* No Upcoming Event Notice */}
      <section className="py-16 bg-gray-900 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="container max-w-3xl mx-auto px-6 relative z-10 flex justify-center items-center min-h-[300px]">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 w-full text-center">
            <div className="flex items-center justify-center mb-4">
              <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">No Upcoming Events</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              We’ll announce new events soon.
            </h2>
            <p className="text-gray-700 mb-6">
              In the meantime, explore our past events below.
            </p>
            <a href="#past-events">
              <Button className="bg-blue hover:bg-blue-dark text-white text-lg px-6">Explore Past Events</Button>
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-4xl font-bold text-blue mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section id="past-events" className="py-16">
        <div className="container max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Past Events</h2>
          
          <div className="space-y-16">
            {Object.entries(pastEvents).reverse().map(([year, events]) => (
              <div key={year}>
                <h3 className="text-2xl font-semibold mb-8">{year}</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {events.map((event, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                      <div className="relative h-[300px]">
                        <img 
                          src={event.image} 
                          alt={event.title}
                          className="absolute inset-0 w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                          <h4 className="text-2xl font-semibold text-white mb-3">{event.title}</h4>
                          <div className="flex items-center gap-4 text-sm text-gray-200">
                            <span>📌 {event.format}</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-8">
                        {event.description && (
                          <p className="text-gray-600 text-lg mb-6">{event.description}</p>
                        )}
                        {event.speaker && (
                          <p className="text-gray-600 text-lg mb-6">With: {event.speaker}</p>
                        )}
                        <div className="flex items-center gap-6 text-base text-gray-500">
                          {event.date && <span>📅 {event.date}</span>}
                          {event.time && <span>⏱️ {event.time}</span>}
                        </div>
                        {event.link && (
                          <a href={event.link} className="text-blue hover:underline mt-6 inline-block text-lg">
                            More Details →
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to know about our next event?</h2>
          <Button 
            className="bg-blue hover:bg-blue-dark text-white text-lg px-8 py-6"
            onClick={() => window.open('https://innovators-serendipity-academy.circle.so/c/welcome/', '_blank')}
          >
            Join the Community
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events; 

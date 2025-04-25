
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-gray-900">
          ISA
        </a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? 
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path> :
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            }
          </svg>
        </button>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#why-now" className="text-gray-700 hover:text-blue transition-colors">Why Now</a>
          <a href="#what-you-gain" className="text-gray-700 hover:text-blue transition-colors">Benefits</a>
          <a href="#growth-path" className="text-gray-700 hover:text-blue transition-colors">Growth Path</a>
          <a href="#mastermind" className="text-gray-700 hover:text-blue transition-colors">Mastermind</a>
          <a href="#events" className="text-gray-700 hover:text-blue transition-colors">Events</a>
          <Button className="bg-blue hover:bg-blue-dark text-white">Join Now</Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-screen bg-white' : 'max-h-0'}`}>
        <div className="container mx-auto py-4 flex flex-col space-y-4">
          <a href="#why-now" className="text-gray-700 hover:text-blue transition-colors px-4 py-2">Why Now</a>
          <a href="#what-you-gain" className="text-gray-700 hover:text-blue transition-colors px-4 py-2">Benefits</a>
          <a href="#growth-path" className="text-gray-700 hover:text-blue transition-colors px-4 py-2">Growth Path</a>
          <a href="#mastermind" className="text-gray-700 hover:text-blue transition-colors px-4 py-2">Mastermind</a>
          <a href="#events" className="text-gray-700 hover:text-blue transition-colors px-4 py-2">Events</a>
          <Button className="bg-blue hover:bg-blue-dark text-white mx-4">Join Now</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

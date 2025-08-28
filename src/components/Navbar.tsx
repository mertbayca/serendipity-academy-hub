import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGrowthPathOpen, setIsGrowthPathOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const coursesDropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout>();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // If not on the homepage, always use scrolled (white) navbar for contrast
    if (location.pathname !== '/') {
      setIsScrolled(true);
      return;
    }
    // Otherwise, use scroll logic
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setIsGrowthPathOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsGrowthPathOpen(false);
    }, 300); // 300ms delay before closing
  };

  const handleCoursesMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setIsCoursesOpen(true);
  };

  const handleCoursesMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsCoursesOpen(false);
    }, 300);
  };

  // Scroll or navigate to mastermind section
  const goToMastermind = () => {
    if (location.pathname === '/') {
      setIsGrowthPathOpen(false);
      setIsMenuOpen(false);
      setTimeout(() => {
        const el = document.getElementById('mastermind');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      navigate('/?scroll=mastermind');
      setIsGrowthPathOpen(false);
      setIsMenuOpen(false);
    }
  };

  // Navigate to Why Now section
  const goToWhyNow = () => {
    setIsMenuOpen(false);
    if (location.pathname === '/') {
      setTimeout(() => {
        const el = document.getElementById('why-now');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      navigate('/?scroll=why-now');
    }
  };

  // Navigate to Benefits section
  const goToBenefits = () => {
    setIsMenuOpen(false);
    if (location.pathname === '/') {
      setTimeout(() => {
        const el = document.getElementById('what-you-gain');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      navigate('/?scroll=what-you-gain');
    }
  };

  const growthPathItems: Array<{title: string; href?: string; onClick?: () => void}> = [
    { title: "12-Month Mastermind Groups", href: "/mastermind" },
    { title: "Innovation Learning Modules", href: "#learning-modules" },
    { title: "Academy Events", href: "#events" },
    { title: "Custom 1:1 Coaching", href: "#coaching" }
  ];

  const courseItems = [
    { title: "Getting Practical with AI", href: "/ai-course" },
    { title: "Ethics as Strategy", href: "/ethics-course" }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src="/assets/isalogo.png" alt="Innovators Serendipity Academy Logo" className="h-10 w-auto" />
        </Link>
        
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
          <button onClick={goToWhyNow} className={`transition-colors hover:text-blue ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Why Now</button>
          <button onClick={goToBenefits} className={`transition-colors hover:text-blue ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Benefits</button>
          
          {/* Growth Path Dropdown */}
          <div 
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center space-x-1">
              <a 
                href="#growth-path"
                className={`transition-colors hover:text-blue ${isScrolled ? 'text-gray-700' : 'text-white'}`}
              >
                Growth Path
              </a>
              <svg 
                className={`w-4 h-4 transition-transform duration-200 ${isGrowthPathOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                style={{ color: isScrolled ? '#374151' : '#ffffff' }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            
            {/* Dropdown Menu */}
            {isGrowthPathOpen && (
              <div 
                className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-lg py-2 z-50"
                style={{ marginTop: '0.5rem' }}
              >
                {/* Invisible area to make hover more forgiving */}
                <div className="absolute -top-4 left-0 w-full h-4" />
                
                {growthPathItems.map((item, index) => (
                  item.href?.startsWith('/') ? (
                    <Link
                      key={index}
                      to={item.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue transition-colors"
                      onClick={() => setIsGrowthPathOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ) : item.onClick ? (
                    <button
                      key={index}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue transition-colors"
                      onClick={item.onClick}
                    >
                      {item.title}
                    </button>
                  ) : (
                  <a
                    key={index}
                    href={item.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue transition-colors"
                    onClick={() => setIsGrowthPathOpen(false)}
                  >
                    {item.title}
                  </a>
                  )
                ))}
              </div>
            )}
          </div>

          {/* Courses Dropdown */}
          <div 
            ref={coursesDropdownRef}
            className="relative"
            onMouseEnter={handleCoursesMouseEnter}
            onMouseLeave={handleCoursesMouseLeave}
          >
            <div className="flex items-center space-x-1">
              <a 
                href="#"
                className={`transition-colors hover:text-blue ${isScrolled ? 'text-gray-700' : 'text-white'}`}
              >
                Courses
              </a>
              <svg 
                className={`w-4 h-4 transition-transform duration-200 ${isCoursesOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                style={{ color: isScrolled ? '#374151' : '#ffffff' }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            
            {/* Courses Dropdown Menu */}
            {isCoursesOpen && (
              <div 
                className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-lg py-2 z-50"
                style={{ marginTop: '0.5rem' }}
              >
                {/* Invisible area to make hover more forgiving */}
                <div className="absolute -top-4 left-0 w-full h-4" />
                
                {courseItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue transition-colors"
                    onClick={() => setIsCoursesOpen(false)}
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            )}
          </div>
          
          <a href="/about" className={`transition-colors hover:text-blue ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Who We Are</a>
          <div className="flex items-center space-x-4">
            <a
              href="https://innovators-serendipity-academy.circle.so/join?invitation_token=a70ffb53792bb9dec38bdaafe659b603c34c5d8e-9d20cbdd-0e46-4990-a7f6-ac66d99bad20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-blue hover:bg-blue-dark text-white">
                Join Our Community Now
              </Button>
            </a>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-screen bg-white' : 'max-h-0'}`}>
        <div className="container mx-auto py-4 flex flex-col space-y-4">
          <button onClick={goToWhyNow} className={`transition-colors hover:text-blue text-left ${isMenuOpen ? 'text-gray-800' : (isScrolled ? 'text-gray-700' : 'text-white')}`}>Why Now</button>
          <button onClick={goToBenefits} className={`transition-colors hover:text-blue text-left ${isMenuOpen ? 'text-gray-800' : (isScrolled ? 'text-gray-700' : 'text-white')}`}>Benefits</button>
          
          {/* Mobile Growth Path Items */}
          <div className="pl-4 border-l-2 border-gray-200">
            <a href="#growth-path" className={`font-semibold mb-2 block ${isMenuOpen ? 'text-gray-800' : (isScrolled ? 'text-gray-700' : 'text-white')}`}>Growth Path</a>
            {growthPathItems.map((item, index) => (
              item.href?.startsWith('/') ? (
                <Link
                  key={index}
                  to={item.href}
                  className={`block py-2 transition-colors hover:text-blue ${isMenuOpen ? 'text-gray-800' : (isScrolled ? 'text-gray-700' : 'text-white')}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ) : item.onClick ? (
                <button
                  key={index}
                  className={`block w-full text-left py-2 transition-colors hover:text-blue ${isMenuOpen ? 'text-gray-800' : (isScrolled ? 'text-gray-700' : 'text-white')}`}
                  onClick={item.onClick}
                >
                  {item.title}
                </button>
              ) : (
                <a
                  key={index}
                  href={item.href}
                  className={`block py-2 transition-colors hover:text-blue ${isMenuOpen ? 'text-gray-800' : (isScrolled ? 'text-gray-700' : 'text-white')}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </a>
              )
            ))}
          </div>

          {/* Mobile Courses Items */}
          <div className="pl-4 border-l-2 border-gray-200">
            <span className={`font-semibold mb-2 block ${isMenuOpen ? 'text-gray-800' : (isScrolled ? 'text-gray-700' : 'text-white')}`}>Courses</span>
            {courseItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`block py-2 transition-colors hover:text-blue ${isMenuOpen ? 'text-gray-800' : (isScrolled ? 'text-gray-700' : 'text-white')}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </a>
            ))}
          </div>
          
          <a href="/about" className={`transition-colors hover:text-blue ${isMenuOpen ? 'text-gray-800' : (isScrolled ? 'text-gray-700' : 'text-white')}`}>Who We Are</a>
          <div className="flex items-center space-x-4">
            <a
              href="https://innovators-serendipity-academy.circle.so/join?invitation_token=a70ffb53792bb9dec38bdaafe659b603c34c5d8e-9d20cbdd-0e46-4990-a7f6-ac66d99bad20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-blue hover:bg-blue-dark text-white">
                Join Our Community Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

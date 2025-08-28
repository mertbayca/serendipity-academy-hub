import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const BackToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <Button
        aria-label="Back to top"
        className="rounded-full shadow-lg bg-blue hover:bg-blue-dark text-white h-12 w-12"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
        >
          <path fillRule="evenodd" d="M12 4.5a.75.75 0 01.53.22l6.75 6.75a.75.75 0 11-1.06 1.06L12.75 7.06V19.5a.75.75 0 01-1.5 0V7.06L5.78 12.53a.75.75 0 11-1.06-1.06l6.75-6.75a.75.75 0 01.53-.22z" clipRule="evenodd" />
        </svg>
      </Button>
    </div>
  );
};

export default BackToTopButton;


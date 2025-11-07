import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const flagClass = 'h-5 w-7 md:h-5 md:w-7 rounded-sm shadow-sm border border-gray-200 hover:scale-105 transition-transform';

const LanguageSwitcher: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const toGerman = () => {
    const path = location.pathname;
    // Already German? (home paths or course-style suffix /de)
    if (path === '/de' || path.startsWith('/de/') || path.endsWith('/de')) return;
    if (path.startsWith('/about')) return navigate('/de/about');
    if (path.startsWith('/mastermind')) return navigate('/mastermind/de');
    if (path.startsWith('/ai-course')) return navigate('/ai-course/de');
    if (path.startsWith('/ethics-course')) return navigate('/ethics-course/de');
    if (path.startsWith('/stumbling-blocks')) return navigate('/stumbling-blocks/de');
    return navigate('/de');
  };

  const toEnglish = () => {
    const path = location.pathname;
    // No-op if already in English context
    if (!(path === '/de' || path.startsWith('/de/') || path.endsWith('/de'))) return;

    if (path === '/de') return navigate('/');
    if (path.startsWith('/de/about')) return navigate('/about');
    if (path.startsWith('/mastermind/de')) return navigate('/mastermind');
    if (path.startsWith('/ai-course/de')) return navigate('/ai-course');
    if (path.startsWith('/ethics-course/de')) return navigate('/ethics-course');
    if (path.startsWith('/stumbling-blocks/de')) return navigate('/stumbling-blocks');
    // Fallback for unknown /de routes
    return navigate('/');
  };

  return (
    <div className="flex items-center gap-2" aria-label="Language selector">
      <button onClick={toEnglish} title="English" aria-label="Switch to English">
        <img src="/assets/flags/gb.svg" alt="English" className={flagClass} />
      </button>
      <button onClick={toGerman} title="Deutsch" aria-label="Auf Deutsch umschalten">
        <img src="/assets/flags/de.svg" alt="Deutsch" className={flagClass} />
      </button>
    </div>
  );
};

export default LanguageSwitcher;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Events from "./pages/Events";
import Mastermind from "./pages/Mastermind";
import MastermindDE from "./pages/MastermindDE";
import AICourse from "./pages/AICourse";
import AICourseDE from "./pages/AICourseDE";
import EthicsCourse from "./pages/EthicsCourse";
import EthicsCourseDE from "./pages/EthicsCourseDE";
import StumblingBlocksCourse from "./pages/StumblingBlocksCourse";
import StumblingBlocksCourseDE from "./pages/StumblingBlocksCourseDE";
import IndexDE from "./pages/IndexDE";
import WsRoot from "./pages/WsRoot";
import AboutDE from "./pages/AboutDE";
import Datenschutz from "./pages/Datenschutz";
import TermsOfService from "./pages/TermsOfService";
import Courses from "./pages/Courses";
import BackToTopButton from "./components/BackToTopButton";

const queryClient = new QueryClient();

// Tracks GA4 page views on SPA route changes
const GATracker = () => {
  const location = useLocation();
  useEffect(() => {
    const g = (window as any).gtag;
    if (typeof g === 'function') {
      g('event', 'page_view', {
        page_path: location.pathname + location.search,
        page_title: document.title,
      });
    }
  }, [location]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/serendipity-academy-hub">
        <GATracker />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/de" element={<IndexDE />} />
          <Route path="/de/about" element={<AboutDE />} />
          <Route path="/events" element={<Events />} />
          <Route path="/mastermind" element={<Mastermind />} />
          <Route path="/mastermind/de" element={<MastermindDE />} />
          <Route path="/ai-course" element={<AICourse />} />
          <Route path="/ai-course/de" element={<AICourseDE />} />
          <Route path="/ethics-course" element={<EthicsCourse />} />
          <Route path="/ethics-course/de" element={<EthicsCourseDE />} />
          <Route path="/stumbling-blocks" element={<StumblingBlocksCourse />} />
          <Route path="/stumbling-blocks/de" element={<StumblingBlocksCourseDE />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/w" element={<WsRoot />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* Global UI helpers */}
        <BackToTopButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

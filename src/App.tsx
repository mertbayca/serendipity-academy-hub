import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import IndexDE from "./pages/IndexDE";
import AboutDE from "./pages/AboutDE";
import BackToTopButton from "./components/BackToTopButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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

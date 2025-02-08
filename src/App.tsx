import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HumanCare from "./pages/HumanCare";
import MiniGames from "./pages/MiniGames";
import Forum from "./pages/Forum";
import PeerSupport from "./pages/PeerSupport";
import PeacefulSounds from "./pages/games/PeacefulSounds";
import MindfulPuzzles from "./pages/games/MindfulPuzzles";
import MemoryGames from "./pages/games/MemoryGames";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/human-care" element={<HumanCare />} />
          <Route path="/mini-games" element={<MiniGames />} />
          <Route path="/mini-games/peaceful-sounds" element={<PeacefulSounds />} />
          <Route path="/mini-games/mindful-puzzles" element={<MindfulPuzzles />} />
          <Route path="/mini-games/memory-games" element={<MemoryGames />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/peer-support" element={<PeerSupport />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import ONas from "./pages/ONas";
import Cinnosti from "./pages/Cinnosti";
import Kontakt from "./pages/Kontakt";
import Eshop from "./pages/Eshop";
import PodporteNas from "./pages/PodporteNas";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/o-nas" element={<ONas />} />
          <Route path="/cinnosti" element={<Cinnosti />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/eshop" element={<Eshop />} />
          <Route path="/podporte-nas" element={<PodporteNas />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

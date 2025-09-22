import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Home from "./pages/Home";
import Grounding from "./pages/Grounding";
import Grounding543221 from "./pages/Grounding543221";
import GroundingCategories from "./pages/GroundingCategories";
import DiarioAnsiedadeList from "./pages/DiarioAnsiedadeList";
import DiarioAnsiedadeForm from "./pages/DiarioAnsiedadeForm";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/informativo" element={<Index />} />
          <Route path="/grounding" element={<Grounding />} />
          <Route path="/grounding/5-4-3-2-1" element={<Grounding543221 />} />
          <Route path="/grounding/categorias" element={<GroundingCategories />} />
          <Route path="/diario-ansiedade" element={<DiarioAnsiedadeList />} />
          <Route path="/diario-ansiedade/novo" element={<DiarioAnsiedadeForm />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

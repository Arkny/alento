import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Index from "./pages/Index";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Grounding from "./pages/Grounding";
import Grounding543221 from "./pages/Grounding543221";
import GroundingCategories from "./pages/GroundingCategories";
import DiarioAnsiedadeList from "./pages/DiarioAnsiedadeList";
import DiarioAnsiedadeForm from "./pages/DiarioAnsiedadeForm";
import MinhaConta from "./pages/MinhaConta";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/informativo" element={<ProtectedRoute><Index /></ProtectedRoute>} />
            <Route path="/grounding" element={<ProtectedRoute><Grounding /></ProtectedRoute>} />
            <Route path="/grounding/5-4-3-2-1" element={<ProtectedRoute><Grounding543221 /></ProtectedRoute>} />
            <Route path="/grounding/categorias" element={<ProtectedRoute><GroundingCategories /></ProtectedRoute>} />
            <Route path="/diario-ansiedade" element={<ProtectedRoute><DiarioAnsiedadeList /></ProtectedRoute>} />
            <Route path="/diario-ansiedade/novo" element={<ProtectedRoute><DiarioAnsiedadeForm /></ProtectedRoute>} />
            <Route path="/minha-conta" element={<ProtectedRoute><MinhaConta /></ProtectedRoute>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

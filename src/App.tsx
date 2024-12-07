import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PaymentConsulting from "./pages/PaymentConsulting";
import BusinessConsulting from "./pages/BusinessConsulting";
import LegalConsulting from "./pages/LegalConsulting";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/payment-consulting" element={<PaymentConsulting />} />
          <Route path="/business-consulting" element={<BusinessConsulting />} />
          <Route path="/legal-consulting" element={<LegalConsulting />} />
          {/* Redirect all business-related routes to BusinessConsulting */}
          <Route path="/business-structuring" element={<BusinessConsulting />} />
          <Route path="/process-mapping" element={<BusinessConsulting />} />
          <Route path="/corporate-governance" element={<BusinessConsulting />} />
          <Route path="/strategic-management" element={<BusinessConsulting />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

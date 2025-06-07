import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion"; // استيراد Framer Motion
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// إعدادات الحركات
const pageVariants = {
  initial: { opacity: 0, y: 50 }, // الحالة الابتدائية (مخفي مع حركة لأعلى)
  animate: { opacity: 1, y: 0 }, // الحالة النهائية (ظاهر وفي الموضع)
  exit: { opacity: 0, y: -50 }, // الحالة عند الخروج
};

const pageTransition = {
  duration: 0.5, // مدة الحركة
  ease: "easeInOut", // نوع الترانزيشن
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Index />
              </motion.div>
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route
            path="*"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={pageTransition}
              >
                <NotFound />
              </motion.div>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
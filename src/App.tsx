
import React, { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./hooks/useLanguage";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ChatBot from "./components/chat/ChatBot";
import { BrainCircuit, X } from "lucide-react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { motion, AnimatePresence } from "framer-motion";

const App = () => {
  const [queryClient] = useState(() => new QueryClient());
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <div className="flex h-screen">
              {/* Main Content */}
              <div className="flex-1 overflow-y-auto">
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </BrowserRouter>
              </div>
            </div>
            
            {/* Chat Sheet - Using Sheet component for better animations */}
            <Sheet open={chatOpen} onOpenChange={setChatOpen}>
              <SheetContent 
                side="right" 
                className="w-full sm:max-w-md md:w-[400px] p-0 border-l border-border/50 shadow-xl"
              >
                <ChatBot onClose={() => setChatOpen(false)} />
              </SheetContent>
            </Sheet>
            
            {/* Message Button - Creative AI button at bottom right */}
            <AnimatePresence>
              <motion.button 
                className="fixed bottom-6 right-6 z-20 rounded-full shadow-lg hover:shadow-neon-blue/20 transition-all duration-300"
                onClick={() => setChatOpen(!chatOpen)}
                aria-label={chatOpen ? "Close chat" : "Open chat"}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="relative h-14 w-14 flex items-center justify-center rounded-full bg-gradient-to-br from-neon-blue to-neon-purple overflow-hidden"
                >
                  {/* Pulsating rings effect */}
                  <motion.div 
                    className="absolute inset-0 rounded-full border-2 border-neon-blue/30"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.7, 0, 0.7]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut" 
                    }}
                  />
                  
                  {/* Icon */}
                  {chatOpen ? (
                    <X className="h-6 w-6 text-white" />
                  ) : (
                    <div className="relative">
                      <BrainCircuit className="h-6 w-6 text-white" />
                      <motion.div 
                        className="absolute -top-1 -right-1"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      >
                        <span className="flex h-2 w-2">
                          <span className="animate-ping absolute h-full w-full rounded-full bg-neon-yellow opacity-75"></span>
                          <span className="rounded-full h-2 w-2 bg-neon-yellow"></span>
                        </span>
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              </motion.button>
            </AnimatePresence>
          </TooltipProvider>
        </LanguageProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;

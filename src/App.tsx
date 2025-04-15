
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
              {/* AI Chat Bot - toggle with button on small screens */}
              <div className={`md:w-80 w-full ${chatOpen ? "flex" : "hidden"} md:flex flex-col h-full z-10 fixed md:relative`}>
                <ChatBot />
              </div>
              
              {/* Main Content */}
              <div className="flex-1 overflow-y-auto">
                {/* Chat Toggle Button - Only visible on small screens */}
                <button 
                  className="fixed bottom-4 left-4 md:hidden z-20 bg-primary text-primary-foreground p-3 rounded-full shadow-lg"
                  onClick={() => setChatOpen(!chatOpen)}
                >
                  {chatOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v8"></path><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>
                      <path d="M8 9v2"></path><path d="M16 9v2"></path><path d="M9.5 16a2.5 2.5 0 0 1 5 0"></path>
                    </svg>
                  )}
                </button>
                
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </BrowserRouter>
              </div>
            </div>
          </TooltipProvider>
        </LanguageProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;

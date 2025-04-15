
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
import { MessageCircle, X } from "lucide-react";

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
              {/* AI Chat Bot - toggle with button */}
              <div className={`md:w-80 w-full ${chatOpen ? "flex" : "hidden"} md:flex flex-col h-full z-10 fixed md:relative ${chatOpen ? "right-0" : "right-full"} top-0 transition-all duration-300`}>
                <ChatBot onClose={() => setChatOpen(false)} />
              </div>
              
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
            
            {/* Message Button - Always visible at bottom right */}
            <button 
              className="fixed bottom-4 right-4 z-20 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-200"
              onClick={() => setChatOpen(!chatOpen)}
              aria-label={chatOpen ? "Close chat" : "Open chat"}
            >
              {chatOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <MessageCircle className="h-6 w-6" />
              )}
            </button>
          </TooltipProvider>
        </LanguageProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;

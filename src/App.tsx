
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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

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
            
            {/* Message Button - Always visible at bottom right */}
            <button 
              className="fixed bottom-6 right-6 z-20 bg-primary hover:bg-primary/90 text-primary-foreground p-4 rounded-full shadow-lg hover:shadow-primary/20 hover:scale-110 transition-all duration-300 animate-pulse-glow"
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

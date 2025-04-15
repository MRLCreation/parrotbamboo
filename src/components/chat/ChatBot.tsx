
import React, { useState, useRef, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Bot, X, Sparkles, MessageCircle, BrainCircuit } from 'lucide-react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { useLanguage } from '@/hooks/useLanguage';
import { generateGeminiResponse } from '@/services/geminiService';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type Message = {
  content: string;
  isUser: boolean;
  timestamp: string;
};

interface ChatBotProps {
  onClose?: () => void;
}

const ChatBot: React.FC<ChatBotProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const { t } = useLanguage();

  // Initialize with welcome message
  useEffect(() => {
    setMessages([
      {
        content: t('aiWelcomeMessage') || "Hello! I'm ParrotBamboo's AI assistant powered by Google Gemini. How can I help you today?",
        isUser: false,
        timestamp: new Date().toLocaleTimeString()
      }
    ]);
  }, [t]);

  // Scroll to bottom on new messages
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (message: string) => {
    // Format current time
    const timestamp = new Date().toLocaleTimeString();
    
    // Add user message to chat
    const userMessage: Message = {
      content: message,
      isUser: true,
      timestamp
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    
    try {
      // Call Gemini API
      const response = await generateGeminiResponse(message);
      
      // Add AI response to chat
      setMessages(prev => [
        ...prev, 
        { 
          content: response, 
          isUser: false, 
          timestamp: new Date().toLocaleTimeString()
        }
      ]);
    } catch (error) {
      console.error('Error getting AI response:', error);
      toast({
        title: t('aiErrorTitle') || "Error",
        description: t('aiErrorDescription') || "Sorry, I couldn't process your request. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const backgroundPattern = {
    backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.1) 2px, transparent 0)`,
    backgroundSize: '30px 30px',
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-background/90 to-background/95 backdrop-blur-md">
      <motion.div 
        className="p-4 border-b border-border/30 bg-gradient-to-r from-secondary/10 to-primary/10 flex items-center justify-between"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple/40 flex items-center justify-center shadow-lg shadow-neon-blue/10">
            <BrainCircuit className="h-5 w-5 text-white" />
            <motion.div 
              className="absolute inset-0 rounded-full border border-neon-blue/30"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.7, 0.3, 0.7]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
          </div>
          <div>
            <h2 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-secondary to-neon-purple">
              {t('aiChatTitle') || "Gemini AI"}
            </h2>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <span className="inline-block w-2 h-2 rounded-full bg-green-400"></span>
              Online
            </p>
          </div>
        </div>
        {onClose && (
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-background/80 transition-colors"
            aria-label="Close chat"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </motion.div>

      <div 
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-background/60 to-background/80"
        style={backgroundPattern}
      >
        {messages.map((msg, index) => (
          <ChatMessage 
            key={index} 
            message={msg.content} 
            isUser={msg.isUser} 
            timestamp={msg.timestamp}
          />
        ))}
        
        {isLoading && (
          <motion.div 
            className="flex items-center gap-3 ml-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="flex space-x-1.5 items-end h-6 px-3 py-2 rounded-full bg-secondary/10 backdrop-blur-sm border border-secondary/20">
              <motion.div 
                className="w-1.5 h-1.5 rounded-full bg-neon-blue"
                animate={{ height: ["6px", "12px", "6px"] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="w-1.5 h-1.5 rounded-full bg-neon-blue"
                animate={{ height: ["12px", "6px", "12px"] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              />
              <motion.div 
                className="w-1.5 h-1.5 rounded-full bg-neon-blue"
                animate={{ height: ["6px", "12px", "6px"] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              />
            </div>
          </motion.div>
        )}
      </div>

      <motion.div 
        className="p-4 border-t border-border/30 bg-background/90 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
      </motion.div>
    </div>
  );
};

export default ChatBot;

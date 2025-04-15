
import React, { useState, useRef, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Bot } from 'lucide-react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { useLanguage } from '@/hooks/useLanguage';
import { generateAIResponse } from '@/services/aiService';

type Message = {
  content: string;
  isUser: boolean;
  timestamp: string;
};

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const { t } = useLanguage();

  // Initialize with welcome message
  useEffect(() => {
    setMessages([
      {
        content: t('aiWelcomeMessage') || "Hello! I'm ParrotBamboo's AI assistant. How can I help you today?",
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
      // Call AI service
      const response = await generateAIResponse(message);
      
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

  return (
    <div className="flex flex-col h-full bg-background border-r border-border">
      <div className="p-4 border-b flex items-center gap-2">
        <Bot className="h-5 w-5 text-primary" />
        <h2 className="text-lg font-semibold">
          {t('aiChatTitle') || "ParrotBamboo AI"}
        </h2>
      </div>

      <div 
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto p-4 space-y-4"
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
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-muted-foreground/70 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-muted-foreground/70 rounded-full animate-bounce [animation-delay:0.2s]"></div>
              <div className="w-2 h-2 bg-muted-foreground/70 rounded-full animate-bounce [animation-delay:0.4s]"></div>
            </div>
            <span className="text-sm">{t('aiThinking') || "Thinking..."}</span>
          </div>
        )}
      </div>

      <div className="p-4 border-t">
        <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default ChatBot;

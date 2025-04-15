
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { SendIcon, Sparkles } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type ChatInputProps = {
  onSendMessage: (message: string) => void;
  isLoading?: boolean;
};

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading = false }) => {
  const [message, setMessage] = useState('');
  const { t } = useLanguage();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto resize textarea
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
    }
  }, [message]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message);
      setMessage('');
      // Reset height
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    }
  };

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className="flex items-center gap-2"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative w-full">
        <textarea
          ref={textareaRef}
          className="w-full min-h-[44px] max-h-32 px-4 py-3 pr-12 text-sm rounded-xl border border-border/50 
                   bg-background/80 backdrop-blur-sm focus:border-primary/50 focus:ring-1 
                   focus:ring-primary/30 focus-visible:outline-none resize-none transition-all"
          placeholder={t('chatPlaceholder') || "Ask me anything..."}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
          disabled={isLoading}
          rows={1}
        />
        <Button 
          type="submit" 
          size="icon" 
          disabled={!message.trim() || isLoading}
          className={cn(
            "absolute right-1.5 bottom-1.5 h-8 w-8 rounded-lg transition-all duration-300",
            message.trim() && !isLoading 
              ? "bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/20" 
              : "bg-muted"
          )}
        >
          {isLoading ? (
            <div className="flex space-x-1">
              <div className="w-1.5 h-1.5 rounded-full bg-white animate-bounce"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-white animate-bounce delay-150"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-white animate-bounce delay-300"></div>
            </div>
          ) : (
            <SendIcon className="h-4 w-4" />
          )}
          <span className="sr-only">Send message</span>
        </Button>
      </div>
    </motion.form>
  );
};

export default ChatInput;

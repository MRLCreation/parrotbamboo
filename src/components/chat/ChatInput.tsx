
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { SendIcon } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

type ChatInputProps = {
  onSendMessage: (message: string) => void;
  isLoading?: boolean;
};

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading = false }) => {
  const [message, setMessage] = useState('');
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <div className="relative w-full">
        <textarea
          className="w-full min-h-[44px] max-h-32 px-4 py-3 pr-12 text-sm rounded-xl border border-border/50 bg-background/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 focus-visible:outline-none resize-none"
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
          className="absolute right-1.5 bottom-1.5 h-8 w-8 rounded-lg bg-primary hover:bg-primary/90 transition-all duration-200"
        >
          <SendIcon className="h-4 w-4" />
          <span className="sr-only">Send message</span>
        </Button>
      </div>
    </form>
  );
};

export default ChatInput;

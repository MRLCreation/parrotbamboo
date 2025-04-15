
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
    <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-2">
      <textarea
        className="flex-1 h-10 min-h-10 max-h-24 px-3 py-2 text-sm rounded-md border border-input bg-background resize-none"
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
      />
      <Button 
        type="submit" 
        size="icon" 
        disabled={!message.trim() || isLoading}
        className="h-10 w-10 rounded-full"
      >
        <SendIcon className="h-4 w-4" />
      </Button>
    </form>
  );
};

export default ChatInput;

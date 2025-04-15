
import React from 'react';
import { cn } from '@/lib/utils';

type ChatMessageProps = {
  message: string;
  isUser: boolean;
  timestamp?: string;
};

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isUser, timestamp }) => {
  return (
    <div className={cn(
      "flex w-full mb-4",
      isUser ? "justify-end" : "justify-start"
    )}>
      <div className={cn(
        "max-w-[80%] rounded-lg p-4",
        isUser 
          ? "bg-primary text-primary-foreground rounded-br-none" 
          : "bg-muted text-foreground rounded-bl-none"
      )}>
        <p className="text-sm whitespace-pre-wrap">{message}</p>
        {timestamp && (
          <p className="text-xs opacity-70 mt-1">{timestamp}</p>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;

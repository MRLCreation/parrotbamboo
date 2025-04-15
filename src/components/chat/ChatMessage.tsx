
import React from 'react';
import { cn } from '@/lib/utils';
import { Bot, User } from 'lucide-react';

type ChatMessageProps = {
  message: string;
  isUser: boolean;
  timestamp?: string;
};

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isUser, timestamp }) => {
  return (
    <div className={cn(
      "flex w-full mb-5 animate-fade-in",
      isUser ? "justify-end" : "justify-start"
    )}>
      <div className={cn(
        "flex gap-3 max-w-[85%]",
        isUser && "flex-row-reverse"
      )}>
        {/* Avatar */}
        <div className={cn(
          "h-8 w-8 rounded-full flex-shrink-0 flex items-center justify-center",
          isUser ? "bg-neon-yellow/20" : "bg-neon-blue/20"
        )}>
          {isUser ? (
            <User className="h-4 w-4 text-neon-yellow" />
          ) : (
            <Bot className="h-4 w-4 text-neon-blue" />
          )}
        </div>
        
        {/* Message bubble */}
        <div className={cn(
          "rounded-2xl py-3 px-4 shadow-sm",
          isUser 
            ? "bg-gradient-to-br from-primary/80 to-primary/60 text-primary-foreground rounded-tr-none" 
            : "bg-gradient-to-br from-secondary/30 to-secondary/10 border border-secondary/20 text-foreground rounded-tl-none"
        )}>
          <p className="text-sm whitespace-pre-wrap">{message}</p>
          {timestamp && (
            <p className="text-xs opacity-70 mt-1 text-right">{timestamp}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;

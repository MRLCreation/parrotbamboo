
import React from 'react';
import { cn } from '@/lib/utils';
import { Bot, User, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

type ChatMessageProps = {
  message: string;
  isUser: boolean;
  timestamp?: string;
};

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isUser, timestamp }) => {
  return (
    <motion.div 
      className={cn(
        "flex w-full mb-5",
        isUser ? "justify-end" : "justify-start"
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className={cn(
        "flex gap-3 max-w-[85%]",
        isUser && "flex-row-reverse"
      )}>
        {/* Avatar */}
        <div className={cn(
          "h-9 w-9 rounded-full flex-shrink-0 flex items-center justify-center",
          isUser 
            ? "bg-gradient-to-br from-neon-yellow to-neon-yellow/40 shadow-md shadow-neon-yellow/20" 
            : "bg-gradient-to-br from-neon-blue to-neon-purple/40 shadow-md shadow-neon-blue/20"
        )}>
          {isUser ? (
            <User className="h-5 w-5 text-primary-foreground" />
          ) : (
            <div className="relative">
              <Bot className="h-5 w-5 text-primary-foreground" />
              <Sparkles className="h-3 w-3 text-white absolute -top-1 -right-1 animate-pulse" />
            </div>
          )}
        </div>
        
        {/* Message bubble */}
        <div className={cn(
          "rounded-2xl py-3 px-4 shadow-lg",
          isUser 
            ? "bg-gradient-to-br from-primary to-primary/75 text-primary-foreground rounded-tr-none border border-primary/20" 
            : "bg-gradient-to-br from-secondary/40 to-neon-purple/10 backdrop-blur-sm text-foreground rounded-tl-none border border-secondary/30"
        )}>
          <div className="text-sm whitespace-pre-wrap">
            {message.split('\n').map((text, i) => (
              <React.Fragment key={i}>
                {text}
                {i !== message.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </div>
          {timestamp && (
            <div className="flex items-center justify-end gap-1 mt-1">
              <span className="text-xs opacity-70">{timestamp}</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ChatMessage;

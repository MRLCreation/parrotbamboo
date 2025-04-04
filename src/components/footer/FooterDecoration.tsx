
import React from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

export default function FooterDecoration() {
  const isMobile = useIsMobile();
  
  // Simplified animation durations for mobile
  const animDuration1 = isMobile ? 8 : 10;
  const animDuration2 = isMobile ? 9 : 12;
  
  return (
    <>
      {/* Background effects - simplified for mobile */}
      <div className="absolute inset-0 circuit-bg opacity-10"></div>
      
      {/* Fewer animations on mobile */}
      {!isMobile && (
        <motion.div 
          className="absolute top-1/4 left-1/3 w-72 h-72 rounded-full bg-neon-blue/5 filter blur-3xl"
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: animDuration1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
      )}
      
      <motion.div 
        className={`absolute bottom-1/3 right-1/4 ${isMobile ? 'w-48 h-48' : 'w-72 h-72'} rounded-full bg-neon-yellow/5 filter blur-3xl`}
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: animDuration2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      ></motion.div>
      
      {/* Blockchain animation elements - only show on desktop */}
      {!isMobile && (
        <motion.div 
          className="absolute top-20 right-20 opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 0L40 10L30 20L20 10L30 0Z" fill="#F2B705" fillOpacity="0.8" />
            <path d="M10 20L20 30L10 40L0 30L10 20Z" fill="#F2B705" fillOpacity="0.8" />
            <path d="M50 20L60 30L50 40L40 30L50 20Z" fill="#F2B705" fillOpacity="0.8" />
            <path d="M30 40L40 50L30 60L20 50L30 40Z" fill="#F2B705" fillOpacity="0.8" />
          </svg>
        </motion.div>
      )}
      
      {/* Simplified decorative center element for mobile */}
      <motion.div 
        className="py-8 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className={`${isMobile ? 'w-16 h-16' : 'w-24 h-24'} relative`}
          animate={{
            scale: isMobile ? [1, 1.05, 1] : [1, 1.1, 1],
          }}
          transition={{
            duration: isMobile ? 5 : 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-neon-yellow/5"
            animate={{
              scale: isMobile ? [0.8, 1, 0.8] : [0.6, 1, 0.6],
              opacity: isMobile ? [0.2, 0.3, 0.2] : [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: isMobile ? 4 : 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Only show additional animations on desktop */}
          {!isMobile && (
            <>
              <motion.div
                className="absolute inset-4 rounded-full bg-neon-blue/5"
                animate={{
                  scale: [1, 0.7, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
              <motion.div
                className="absolute inset-8 rounded-full bg-neon-yellow/10"
                animate={{
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.4, 0.2, 0.4]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </>
          )}
        </motion.div>
      </motion.div>
    </>
  );
}

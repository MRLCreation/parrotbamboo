
import React from 'react';
import { motion } from 'framer-motion';

interface HeroBackgroundProps {
  isMobile: boolean;
}

const HeroBackground: React.FC<HeroBackgroundProps> = ({ isMobile }) => {
  return (
    <motion.div
      className="absolute inset-0 z-0 opacity-30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.3 }}
      transition={{ duration: 2 }}
    >
      <div className="absolute w-full h-full">
        {/* Alien-themed gradients */}
        <motion.div 
          className={`absolute top-1/4 left-1/4 rounded-full bg-neon-yellow/5 filter blur-3xl ${isMobile ? 'w-48 h-48' : 'w-96 h-96'}`}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 10, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: isMobile ? 12 : 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Only show this on desktop */}
        {!isMobile && (
          <motion.div 
            className="absolute bottom-1/3 right-1/3 w-72 h-72 rounded-full bg-neon-blue/5 filter blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -20, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        )}
        
        <motion.div 
          className={`absolute top-1/3 right-1/4 rounded-full bg-neon-purple/5 filter blur-3xl ${isMobile ? 'w-32 h-32' : 'w-64 h-64'}`}
          animate={{
            scale: [0.8, 1.1, 0.8],
            x: [0, 15, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: isMobile ? 8 : 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      {/* Digital circuit patterns */}
      <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] bg-repeat opacity-5"></div>
      
      {/* Alien tech grid lines */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-yellow/20 to-transparent"></div>
    </motion.div>
  );
};

export default HeroBackground;


import React from 'react';
import { motion } from 'framer-motion';

const BackgroundEffects: React.FC = () => {
  return (
    <>
      {/* Subtle professional background pattern */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-full z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1.5 }}
      >
        <div className="w-full h-full opacity-10">
          <div className="absolute w-full h-full bg-[url('/lovable-uploads/4a95ba97-7895-4c81-9319-9909194f61f0.png')] bg-repeat bg-contain opacity-30"></div>
        </div>
      </motion.div>

      {/* Professional subtle gradient overlays */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <motion.div 
          className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-neon-blue/3 filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-neon-yellow/3 filter blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-neon-purple/3 filter blur-3xl"
          animate={{
            scale: [0.8, 1, 0.8],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </motion.div>

      {/* Professional border accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-neon-blue/0 via-neon-blue/10 to-neon-blue/0"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-neon-blue/0 via-neon-blue/10 to-neon-blue/0"></div>
      
      {/* Subtle vertical lines for corporate feel */}
      <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neon-blue/5 to-transparent"></div>
      <div className="absolute right-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neon-blue/5 to-transparent"></div>
    </>
  );
};

export default BackgroundEffects;

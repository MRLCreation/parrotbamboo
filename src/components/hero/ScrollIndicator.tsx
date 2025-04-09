
import React from 'react';
import { motion } from 'framer-motion';

const ScrollIndicator: React.FC = () => {
  // Function to handle smooth scrolling
  const handleScroll = () => {
    // Get the next section (typically after hero)
    const nextSection = document.querySelector('#services');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <motion.div 
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      onClick={handleScroll}
      role="button"
      tabIndex={0}
      aria-label="Scroll to explore content"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleScroll();
        }
      }}
    >
      <motion.div 
        className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center p-1"
        animate={{ 
          scale: [1, 1.1, 1],
          y: [0, 5, 0]
        }}
        transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
      >
        <motion.div 
          className="w-1 h-3 bg-neon-yellow rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            y: [0, 5, 0] 
          }}
          transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
        ></motion.div>
      </motion.div>
      <span className="mt-2 text-sm text-gray-400">Explore</span>
    </motion.div>
  );
};

export default ScrollIndicator;


import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HeroActionsProps {
  isMobile: boolean;
}

const HeroActions: React.FC<HeroActionsProps> = ({ isMobile }) => {
  return (
    <motion.div 
      className="flex flex-col sm:flex-row justify-center items-center gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.5 }}
    >
      <motion.a 
        href="#services" 
        onClick={(e) => {
          e.preventDefault();
          document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className={`px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-yellow rounded-full text-white font-medium flex items-center justify-center gap-2 transition-transform shadow-[0_0_15px_rgba(0,131,202,0.3)] mobile-button tap-target ${isMobile ? 'w-full' : ''}`}
        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(242, 183, 5, 0.5)" }}
        whileTap={{ scale: 0.95 }}
      >
        <span>Our Services</span> 
        <motion.div
          animate={{ 
            x: [0, 5, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 1.5,
            ease: "easeInOut" 
          }}
        >
          <ArrowRight size={16} />
        </motion.div>
      </motion.a>
      
      <motion.a 
        href="#contact" 
        onClick={(e) => {
          e.preventDefault();
          document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className={`px-8 py-3 border border-neon-yellow rounded-full text-white font-medium hover:bg-neon-yellow/10 transition-colors mobile-button tap-target ${isMobile ? 'w-full' : ''}`}
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 0 15px rgba(242, 183, 5, 0.4)"
        }}
        whileTap={{ scale: 0.95 }}
      >
        Contact Us
      </motion.a>
    </motion.div>
  );
};

export default HeroActions;

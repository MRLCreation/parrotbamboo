
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

interface AlienElementsProps {
  isMobile: boolean;
}

const AlienElements: React.FC<AlienElementsProps> = ({ isMobile }) => {
  // Use useMemo to prevent recreating elements on each render
  const alienElements = useMemo(() => {
    const count = isMobile ? 3 : 7;
    return Array.from({ length: count }).map((_, i) => {
      // Pre-calculate random values
      const left = `${Math.random() * 100}%`;
      const top = `${Math.random() * 100}%`;
      const xOffset = Math.random() * 50 - 25;
      const duration = Math.random() * 15 + 15;
      const delay = Math.random() * 10;
      const rotate = Math.random() * 360;
      
      return (
        <motion.div
          key={`ufo-${i}`}
          className="absolute"
          style={{
            left,
            top,
          }}
          animate={{
            y: [0, -100],
            x: [0, xOffset],
            opacity: [0, 0.7, 0],
            rotate,
          }}
          transition={{
            duration,
            repeat: Infinity,
            delay,
          }}
        >
          <div 
            className="w-4 h-1 bg-neon-yellow/30 rounded-full blur-sm" 
            aria-hidden="true"
          ></div>
        </motion.div>
      );
    });
  }, [isMobile]); // Only re-create when mobile status changes

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {alienElements}
    </div>
  );
};

export default AlienElements;

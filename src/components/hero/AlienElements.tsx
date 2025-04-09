
import React from 'react';
import { motion } from 'framer-motion';

interface AlienElementsProps {
  isMobile: boolean;
}

const AlienElements: React.FC<AlienElementsProps> = ({ isMobile }) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(isMobile ? 3 : 7)].map((_, i) => (
        <motion.div
          key={`ufo-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100],
            x: [0, Math.random() * 50 - 25],
            opacity: [0, 0.7, 0],
            rotate: Math.random() * 360,
          }}
          transition={{
            duration: Math.random() * 15 + 15,
            repeat: Infinity,
            delay: Math.random() * 10,
          }}
        >
          <div className="w-4 h-1 bg-neon-yellow/30 rounded-full blur-sm"></div>
        </motion.div>
      ))}
    </div>
  );
};

export default AlienElements;

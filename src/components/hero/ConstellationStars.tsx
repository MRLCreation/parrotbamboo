
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface ConstellationStarsProps {
  isMobile: boolean;
}

const ConstellationStars: React.FC<ConstellationStarsProps> = ({ isMobile }) => {
  // Use useMemo to prevent recreating stars on each render
  const stars = useMemo(() => {
    const count = isMobile ? 15 : 30;
    return Array.from({ length: count }).map((_, i) => {
      // Pre-calculate random values
      const left = `${Math.random() * 100}%`;
      const top = `${Math.random() * 100}%`;
      const opacity = Math.random() * 0.7 + 0.3;
      const scale = Math.random() * 0.5 + 1.2;
      const duration = Math.random() * 3 + 2;
      const delay = Math.random() * 2;
      const size = Math.random() * 3 + 1;
      
      return (
        <motion.div
          key={`star-${i}`}
          className="absolute"
          style={{
            left,
            top,
            opacity,
          }}
          animate={{
            scale: [1, scale, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          }}
        >
          <Star 
            size={size} 
            className="text-white"
            fill="white"
          />
        </motion.div>
      );
    });
  }, [isMobile]); // Only re-create when mobile status changes

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      {stars}
    </div>
  );
};

export default ConstellationStars;

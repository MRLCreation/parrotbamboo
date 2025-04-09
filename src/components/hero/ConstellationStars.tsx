
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface ConstellationStarsProps {
  isMobile: boolean;
}

const ConstellationStars: React.FC<ConstellationStarsProps> = ({ isMobile }) => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(isMobile ? 15 : 30)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.7 + 0.3,
          }}
          animate={{
            scale: [1, (Math.random() * 0.5) + 1.2, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        >
          <Star 
            size={Math.random() * 3 + 1} 
            className="text-white"
            fill="white"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ConstellationStars;


import React, { useRef } from 'react';
import { Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

const MissionVisual: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  // Simpler variants for mobile
  const mobileCoinVariants = {
    initial: { y: -20, opacity: 0 },
    animate: (i: number) => ({
      y: 200,
      opacity: [0, 1, 0],
      rotate: 0,
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "loop" as const
      }
    })
  };
  
  // Original variants for desktop
  const desktopCoinVariants = {
    initial: { y: -50, opacity: 0 },
    animate: (i: number) => ({
      y: 300,
      opacity: [0, 1, 1, 0],
      x: Math.sin(i * 10) * 30,
      rotate: Math.random() * 360,
      transition: {
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        repeatType: "loop" as const
      }
    })
  };
  
  // Simpler launch animation
  const launchVariants = {
    initial: { y: 0 },
    animate: {
      y: isMobile ? [-5, 5, 0] : [-10, 10, -5, 5, 0],
      transition: {
        duration: isMobile ? 2 : 3,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };
  
  const glowVariants = {
    initial: { opacity: 0.5, scale: 0.8 },
    animate: {
      opacity: isMobile ? [0.5, 0.7, 0.5] : [0.5, 0.8, 0.5],
      scale: isMobile ? [0.9, 1.1, 0.9] : [0.8, 1.2, 0.8],
      transition: {
        duration: isMobile ? 2 : 3,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  // Reduce coin count for mobile
  const coinCount = isMobile ? 6 : 12;

  return (
    <div className="order-1 md:order-2 flex justify-center relative" ref={containerRef}>
      <div className="relative w-full max-w-sm">
        {/* Animated glow effect - simplified for mobile */}
        <motion.div
          variants={glowVariants}
          initial="initial"
          animate="animate"
          className="absolute inset-0 rounded-xl bg-gradient-to-br from-neon-purple/20 via-neon-blue/10 to-yellow-400/20 blur-xl z-0"
        />

        <div className="w-full aspect-square rounded-xl p-1 border border-neon-yellow/20 relative z-10">
          <div className="w-full h-full rounded-lg bg-gradient-to-br from-dark-lighter via-dark to-dark flex items-center justify-center relative overflow-hidden backdrop-blur-lg">
            {/* 3D glass effect with backdrop filter - simplified for mobile */}
            <div className="absolute inset-0 bg-white/5"></div>
            
            {/* Crypto coins animation - fewer for mobile */}
            {Array.from({ length: coinCount }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{ left: `${(i % 3) * 30 + 15}%`, top: "-20px" }}
                variants={isMobile ? mobileCoinVariants : desktopCoinVariants}
                custom={i}
                initial="initial"
                animate="animate"
              >
                <div className={`w-${i % 2 === 0 ? 6 : 4} h-${i % 2 === 0 ? 6 : 4} rounded-full ${
                  i % 3 === 0 ? 'bg-yellow-400' : i % 3 === 1 ? 'bg-neon-blue' : 'bg-neon-purple'
                } flex items-center justify-center text-dark font-bold text-xs`}>
                  {i % 3 === 0 ? '₿' : i % 3 === 1 ? 'Ξ' : '$'}
                </div>
              </motion.div>
            ))}

            <div className="text-center relative z-10">
              <motion.div
                variants={launchVariants}
                initial="initial"
                animate="animate"
                className="inline-flex p-8 rounded-full bg-gradient-to-br from-dark-lighter/40 to-dark-lighter/10 backdrop-blur-md border border-white/10 mb-4 relative z-10 shadow-lg shadow-neon-purple/20"
              >
                {/* Rocket icon with simplified effect */}
                <Rocket className="w-24 h-24 text-neon-purple" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVisual;

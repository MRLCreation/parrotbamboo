
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

interface CryptoSnowflakeProps {
  imageUrl: string;
  startY: string;
  size: number;
  duration: number;
  delay: number;
  isMobile: boolean;
}

const CryptoSnowflake: React.FC<CryptoSnowflakeProps> = ({ 
  imageUrl, 
  startY, 
  size, 
  duration, 
  delay, 
  isMobile 
}) => {
  // Simplified animation for mobile
  const animationProps = isMobile 
    ? {
        x: "100vw",
        opacity: [0, 0.7, 0]
      }
    : {
        x: "100vw",
        y: [0, Math.random() * 20 - 10, Math.random() * 20 - 10, 0],
        opacity: [0, 0.8, 0.9, 0.8, 0]
      };
  
  return (
    <motion.div
      className="absolute z-0"
      style={{ 
        top: startY,
        width: size,
        height: size,
      }}
      initial={{ x: -50, opacity: 0 }}
      animate={animationProps}
      transition={{ 
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: "linear",
        times: isMobile ? [0, 0.5, 1] : [0, 0.2, 0.5, 0.8, 1]
      }}
    >
      <img 
        src={imageUrl} 
        alt="Crypto icon" 
        className="w-full h-full object-contain"
        style={{ 
          filter: isMobile ? "none" : "drop-shadow(0 0 4px rgba(255,255,255,0.5))"
        }}
      />
    </motion.div>
  );
};

// Define the crypto logos - using only the 5 provided logos
const cryptoLogos = [
  "/lovable-uploads/4f377acf-217a-475e-997f-3a656ea3f5fb.png", // Binance (BNB)
  "/lovable-uploads/11d5aaa7-58af-4394-a80e-d007e84269bb.png", // Ethereum
  "/lovable-uploads/1acf01a2-feb2-46d5-a0a4-7fdaadc8c624.png", // Bitcoin
  "/lovable-uploads/3e701490-f398-48f5-968d-4ea17ea33ec2.png", // Robot
  "/lovable-uploads/c6f0c9f5-30f1-488d-aef5-e8117c06e639.png"  // Solana
];

const CryptoSnow: React.FC = () => {
  const isMobile = useIsMobile();
  
  // Use useMemo to prevent recreating snowflakes on each render
  const snowflakes = useMemo(() => {
    // Further reduced for mobile, just show 1 for better performance
    const snowflakeCount = isMobile ? 1 : 4;
    
    return Array.from({ length: snowflakeCount }).map((_, index) => {
      const logoIndex = index % cryptoLogos.length;
      // Pre-calculate random values to avoid recalculation on re-render
      const startY = `${Math.random() * 80 + 10}%`;
      const size = isMobile ? (Math.random() * 12 + 10) : (Math.random() * 18 + 12);
      const duration = isMobile ? (Math.random() * 10 + 20) : (Math.random() * 25 + 20);
      const delay = Math.random() * 5;
      
      return (
        <CryptoSnowflake 
          key={`crypto-snowflake-${index}`}
          imageUrl={cryptoLogos[logoIndex]}
          startY={startY}
          size={size}
          duration={duration}
          delay={delay}
          isMobile={isMobile}
        />
      );
    });
  }, [isMobile]); // Only re-create when mobile status changes

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {snowflakes}
    </div>
  );
};

export default CryptoSnow;

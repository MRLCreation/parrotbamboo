
import React from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

interface CryptoSnowflakeProps {
  imageUrl: string;
  index: number;
  isMobile: boolean;
}

const CryptoSnowflake: React.FC<CryptoSnowflakeProps> = ({ imageUrl, index, isMobile }) => {
  // Calculate random positions and durations
  // Adjust size and speed for mobile
  const startY = `${Math.random() * 80 + 10}%`; // Random vertical position between 10-90%
  const size = isMobile ? (Math.random() * 12 + 10) : (Math.random() * 18 + 12); // Slightly larger on both devices
  const duration = isMobile ? (Math.random() * 18 + 20) : (Math.random() * 25 + 20); // Slower movement for better visibility
  const delay = Math.random() * 5; // Random delay up to 5s
  
  return (
    <motion.div
      className="absolute z-0"
      style={{ 
        top: startY,
        width: size,
        height: size,
      }}
      initial={{ x: -50, opacity: 0 }}
      animate={{ 
        x: "100vw",
        y: [0, Math.random() * 20 - 10, Math.random() * 20 - 10, 0], // Gentle floating motion
        opacity: [0, 0.8, 0.9, 0.8, 0] // Higher opacity for better visibility
      }}
      transition={{ 
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: "linear",
        times: [0, 0.2, 0.5, 0.8, 1]
      }}
    >
      <img 
        src={imageUrl} 
        alt="Crypto icon" 
        className="w-full h-full object-contain"
        style={{ 
          filter: "drop-shadow(0 0 4px rgba(255,255,255,0.5))" // Enhanced glow effect
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
  
  // Reduce number of snowflakes - fewer, more impactful elements
  const snowflakeCount = isMobile ? 2 : 4; // Even fewer for cleaner look
  
  // Create deterministic selection to ensure we show each logo
  const snowflakes = Array.from({ length: snowflakeCount }).map((_, index) => {
    // Ensure we cycle through all logos deterministically
    const logoIndex = index % cryptoLogos.length;
    return (
      <CryptoSnowflake 
        key={index} 
        imageUrl={cryptoLogos[logoIndex]}
        index={index} 
        isMobile={!!isMobile}
      />
    );
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {snowflakes}
    </div>
  );
};

export default CryptoSnow;


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
  const size = isMobile ? (Math.random() * 10 + 8) : (Math.random() * 15 + 10); // Smaller on mobile
  const duration = isMobile ? (Math.random() * 15 + 15) : (Math.random() * 20 + 15); // Slightly faster on mobile
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
        y: [0, Math.random() * 20 - 10, Math.random() * 20 - 10, 0], // Reduced movement for mobile
        opacity: [0, 0.6, 0.7, 0.6, 0]
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
          filter: "drop-shadow(0 0 3px rgba(255,255,255,0.3))" 
        }}
      />
    </motion.div>
  );
};

// Define the crypto and tech logos
const techLogos = [
  "/lovable-uploads/7e7d7050-cffa-4228-a49c-54d8d9fc206e.png", // Binance coin
  "/lovable-uploads/2b0f9a3c-1884-4850-a27d-980f8334625b.png", // Solana
  "/lovable-uploads/7120bbe4-a36d-43f7-b7ce-13972d047ef5.png", // Ethereum
  "/lovable-uploads/566698e8-c8ae-4125-8001-8f84d8771da0.png", // Bitcoin
  "/lovable-uploads/d46d80bf-7f84-4d8a-b312-5eb0ff837db8.png", // Binance (updated)
  "/robot-icon.svg",      // Robot icon
  "/blockchain-icon.svg", // Blockchain icon (keeping this one)
  "/lovable-uploads/e7ef6ba6-0836-46f7-9883-fd141695c8fe.png" // Uploaded robot icon
];

const CryptoSnow: React.FC = () => {
  const isMobile = useIsMobile();
  
  // Reduce number of snowflakes on mobile for better performance
  const snowflakeCount = isMobile ? 3 : 6;
  
  const snowflakes = Array.from({ length: snowflakeCount }).map((_, index) => {
    const randomLogo = techLogos[Math.floor(Math.random() * techLogos.length)];
    return (
      <CryptoSnowflake 
        key={index} 
        imageUrl={randomLogo}
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


import React from 'react';
import { motion } from 'framer-motion';

interface CryptoSnowflakeProps {
  imageUrl: string;
  index: number;
}

const CryptoSnowflake: React.FC<CryptoSnowflakeProps> = ({ imageUrl, index }) => {
  // Calculate random positions and durations
  const startY = `${Math.random() * 80 + 10}%`; // Random vertical position between 10-90%
  const size = Math.random() * 15 + 10; // Random size between 10px and 25px
  const duration = Math.random() * 20 + 15; // Random duration between 15-35s
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
        y: [0, Math.random() * 30 - 15, Math.random() * 30 - 15, 0],
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
  // Added robot icon and removed AI and Web3 icons
  "/robot-icon.svg",      // Robot icon
  "/blockchain-icon.svg", // Blockchain icon (keeping this one)
  "/lovable-uploads/e7ef6ba6-0836-46f7-9883-fd141695c8fe.png" // Uploaded robot icon
];

const CryptoSnow: React.FC = () => {
  // Reduced from 10 to 6 snowflakes with random tech logos
  const snowflakes = Array.from({ length: 6 }).map((_, index) => {
    const randomLogo = techLogos[Math.floor(Math.random() * techLogos.length)];
    return (
      <CryptoSnowflake 
        key={index} 
        imageUrl={randomLogo}
        index={index} 
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

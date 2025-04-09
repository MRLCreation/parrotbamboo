
import React from 'react';
import { motion } from 'framer-motion';

const OrbitalRings: React.FC = () => {
  return (
    <>
      <motion.div 
        className="absolute h-[800px] w-[800px] rounded-full border border-neon-yellow/10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute h-[600px] w-[600px] rounded-full border border-neon-blue/10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute h-[400px] w-[400px] rounded-full border border-neon-purple/10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
    </>
  );
};

export default OrbitalRings;


import React from 'react';
import { motion } from 'framer-motion';

interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  isActive: boolean;
  onClick: () => void;
}

const ServiceItem = ({ icon, title, isActive, onClick }: ServiceItemProps) => (
  <motion.div
    className={`flex items-center p-4 rounded-lg cursor-pointer mb-2 ${isActive ? 'bg-dark-lighter' : 'hover:bg-dark-lighter/50'} transition-all duration-300`}
    onClick={onClick}
    whileHover={{ x: 5 }}
  >
    <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${isActive ? 'bg-neon-blue/20' : 'bg-dark-lighter'} transition-colors`}>
      {icon}
    </div>
    <span className={`text-lg ${isActive ? 'text-white font-medium' : 'text-gray-400'}`}>{title}</span>
    {isActive && (
      <motion.div 
        className="ml-3 w-1.5 h-1.5 rounded-full bg-neon-blue" 
        layoutId="activeIndicator"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
      />
    )}
  </motion.div>
);

export default ServiceItem;

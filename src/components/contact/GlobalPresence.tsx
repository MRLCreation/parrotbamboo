
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';

export default function GlobalPresence() {
  const { t, language } = useLanguage();
  
  return (
    <div className="py-20 relative" key={`global-presence-${language}`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <svg width="100%" height="100%" viewBox="0 0 550 550" className="opacity-10">
          <circle cx="275" cy="275" r="150" stroke="#22d3ee" strokeWidth="1" fill="none" strokeDasharray="2,4" />
          <circle cx="275" cy="275" r="200" stroke="#22d3ee" strokeWidth="1" fill="none" strokeDasharray="3,3" />
          <circle cx="275" cy="275" r="250" stroke="#8b5cf6" strokeWidth="1" fill="none" strokeDasharray="4,2" />
        </svg>
        
        {/* Dots for representation of global presence */}
        <motion.div
          className="w-3 h-3 rounded-full bg-neon-blue absolute"
          style={{ top: '25%', left: '35%' }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="w-2 h-2 rounded-full bg-neon-purple absolute"
          style={{ top: '35%', right: '30%' }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3
          }}
        />
        
        <motion.div
          className="w-2 h-2 rounded-full bg-neon-yellow absolute"
          style={{ bottom: '30%', right: '45%' }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.7
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t('globalWeb3Presence')}
          </motion.h2>
          
          <motion.p
            className="text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('teamWorksRemotely')}
          </motion.p>
        </div>
      </div>
    </div>
  );
}

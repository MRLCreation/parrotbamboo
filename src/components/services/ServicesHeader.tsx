
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';

const ServicesHeader = () => {
  const { t } = useLanguage();
  
  return (
    <div className="text-center mb-16">
      <motion.span 
        className="inline-block px-4 py-1 rounded-full bg-dark-lighter text-neon-blue text-sm font-medium mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {t('servicesTitle')}
      </motion.span>
      
      <motion.h2 
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-neon-blue"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {t('whatWeOffer')}
      </motion.h2>
      
      <motion.div 
        className="h-1 w-24 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto"
        initial={{ width: 0 }}
        whileInView={{ width: 96 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
      />
    </div>
  );
};

export default ServicesHeader;

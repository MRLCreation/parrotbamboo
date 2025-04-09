
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';

const AMAContent = () => {
  const { t } = useLanguage();

  return (
    <div className="h-full">
      <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-purple to-neon-blue">
        {t('amaEventHosting')}
      </h3>
      <p className="text-gray-300 mb-8">{t('eventVisibilityDescription')}</p>
      
      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <span className="text-neon-purple">▸</span>
          <p className="text-gray-200">{t('binanceGlobalAudience')}</p>
        </div>
        
        <div className="flex items-start space-x-3">
          <span className="text-neon-purple">▸</span>
          <p className="text-gray-200">{t('professionalHosting')}</p>
        </div>
        
        <div className="flex items-start space-x-3">
          <span className="text-neon-purple">▸</span>
          <p className="text-gray-200">{t('liveQASessions')}</p>
        </div>
        
        <div className="flex items-start space-x-3">
          <span className="text-neon-purple">▸</span>
          <p className="text-gray-200">{t('engageCryptoEnthusiasts')}</p>
        </div>
      </div>
      
      <div className="mt-12">
        <motion.a 
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-block px-6 py-2.5 bg-neon-purple text-white font-medium rounded-full hover:shadow-lg transition-all duration-300 hover:shadow-neon-purple/20"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t('scheduleEvent')}
        </motion.a>
      </div>
    </div>
  );
};

export default AMAContent;

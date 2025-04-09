
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';

const SocialMediaContent = () => {
  const { t } = useLanguage();

  return (
    <div className="h-full">
      <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-yellow to-neon-green">
        {t('socialMediaManagement')}
      </h3>
      <p className="text-gray-300 mb-8">{t('socialMediaDescription')}</p>
      
      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <span className="text-neon-blue">▸</span>
          <p className="text-gray-200">{t('twitterCommunityBuilding')}</p>
        </div>
        
        <div className="flex items-start space-x-3">
          <span className="text-neon-blue">▸</span>
          <p className="text-gray-200">{t('telegramGroupManagement')}</p>
        </div>
        
        <div className="flex items-start space-x-3">
          <span className="text-neon-blue">▸</span>
          <p className="text-gray-200">{t('youtubeChannelOptimization')}</p>
        </div>
        
        <div className="flex items-start space-x-3">
          <span className="text-neon-blue">▸</span>
          <p className="text-gray-200">{t('binanceSquarePresence')}</p>
        </div>
        
        <div className="flex items-start space-x-3">
          <span className="text-neon-blue">▸</span>
          <p className="text-gray-200">{t('comprehensiveSocialMedia')}</p>
        </div>
      </div>
      
      <div className="mt-12">
        <motion.a 
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-block px-6 py-2.5 bg-neon-blue text-white font-medium rounded-full hover:shadow-lg transition-all duration-300 hover:shadow-neon-blue/20"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t('getStarted')}
        </motion.a>
      </div>
    </div>
  );
};

export default SocialMediaContent;

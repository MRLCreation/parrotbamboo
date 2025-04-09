
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';

const PromotionContent = () => {
  const { t } = useLanguage();

  return (
    <div className="h-full">
      <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan to-neon-blue">
        {t('brandPromotion')}
      </h3>
      <p className="text-gray-300 mb-8">Comprehensive brand promotion strategies to elevate your project's visibility in the Web3 space.</p>
      
      <div className="grid grid-cols-1 gap-4">
        <div className="bg-dark-lighter p-4 rounded-lg flex items-start">
          <div className="w-8 h-8 rounded-full bg-neon-cyan/20 flex items-center justify-center mr-3 flex-shrink-0">
            <span className="text-neon-cyan">1</span>
          </div>
          <div>
            <h4 className="text-white font-medium mb-1">Brand Strategy Development</h4>
            <p className="text-gray-300 text-sm">Creating a cohesive brand identity that stands out in the Web3 landscape.</p>
          </div>
        </div>
        
        <div className="bg-dark-lighter p-4 rounded-lg flex items-start">
          <div className="w-8 h-8 rounded-full bg-neon-cyan/20 flex items-center justify-center mr-3 flex-shrink-0">
            <span className="text-neon-cyan">2</span>
          </div>
          <div>
            <h4 className="text-white font-medium mb-1">Influencer Collaborations</h4>
            <p className="text-gray-300 text-sm">Strategic partnerships with key opinion leaders in the blockchain space.</p>
          </div>
        </div>
        
        <div className="bg-dark-lighter p-4 rounded-lg flex items-start">
          <div className="w-8 h-8 rounded-full bg-neon-cyan/20 flex items-center justify-center mr-3 flex-shrink-0">
            <span className="text-neon-cyan">3</span>
          </div>
          <div>
            <h4 className="text-white font-medium mb-1">Digital PR Campaigns</h4>
            <p className="text-gray-300 text-sm">Media coverage and press releases to build credibility and awareness.</p>
          </div>
        </div>
      </div>
      
      <div className="mt-12">
        <motion.a 
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-block px-6 py-2.5 bg-neon-cyan text-black font-medium rounded-full hover:shadow-lg transition-all duration-300 hover:shadow-neon-cyan/20"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t('getStarted')}
        </motion.a>
      </div>
    </div>
  );
};

export default PromotionContent;

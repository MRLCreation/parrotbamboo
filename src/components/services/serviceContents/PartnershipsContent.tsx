
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';

const PartnershipsContent = () => {
  const { t } = useLanguage();

  return (
    <div className="h-full">
      <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-yellow to-neon-orange">
        {t('corporatePartnerships')}
      </h3>
      <p className="text-gray-300 mb-8">Strategic partnerships that connect blockchain projects with industry leaders.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-dark-lighter p-4 rounded-lg">
          <h4 className="text-neon-yellow font-medium mb-2">Co-Marketing</h4>
          <p className="text-gray-300 text-sm">Joint marketing initiatives with established blockchain companies.</p>
        </div>
        
        <div className="bg-dark-lighter p-4 rounded-lg">
          <h4 className="text-neon-yellow font-medium mb-2">Integration Support</h4>
          <p className="text-gray-300 text-sm">Technical assistance for cross-platform integrations.</p>
        </div>
        
        <div className="bg-dark-lighter p-4 rounded-lg">
          <h4 className="text-neon-yellow font-medium mb-2">Alliance Building</h4>
          <p className="text-gray-300 text-sm">Creating strategic relationships with complementary projects.</p>
        </div>
        
        <div className="bg-dark-lighter p-4 rounded-lg">
          <h4 className="text-neon-yellow font-medium mb-2">Business Development</h4>
          <p className="text-gray-300 text-sm">Expanding market reach through structured partnerships.</p>
        </div>
      </div>
      
      <div className="mt-12">
        <motion.a 
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-block px-6 py-2.5 bg-neon-yellow text-black font-medium rounded-full hover:shadow-lg transition-all duration-300 hover:shadow-neon-yellow/20"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t('getStarted')}
        </motion.a>
      </div>
    </div>
  );
};

export default PartnershipsContent;

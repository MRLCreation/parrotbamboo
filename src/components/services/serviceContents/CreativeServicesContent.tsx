
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';

const CreativeServicesContent = () => {
  const { t } = useLanguage();

  return (
    <div className="h-full">
      <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-orange to-neon-yellow">
        {t('creativeServices')}
      </h3>
      <p className="text-gray-300 mb-8">Creative design solutions that make your blockchain project stand out visually.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-b from-dark-lighter to-dark p-5 rounded-lg">
          <h4 className="text-neon-orange text-lg mb-3">{t('graphicsDesign')}</h4>
          <p className="text-gray-300 text-sm">Logo design, branding assets, and marketing materials.</p>
        </div>
        
        <div className="bg-gradient-to-b from-dark-lighter to-dark p-5 rounded-lg">
          <h4 className="text-neon-orange text-lg mb-3">{t('videoEditing')}</h4>
          <p className="text-gray-300 text-sm">Professional video editing for project promotions and updates.</p>
        </div>
        
        <div className="bg-gradient-to-b from-dark-lighter to-dark p-5 rounded-lg">
          <h4 className="text-neon-orange text-lg mb-3">{t('animation3d')}</h4>
          <p className="text-gray-300 text-sm">3D animations and visualizations of blockchain concepts.</p>
        </div>
      </div>
      
      <div className="mt-12">
        <motion.a 
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-block px-6 py-2.5 bg-neon-orange text-black font-medium rounded-full hover:shadow-lg transition-all duration-300 hover:shadow-neon-orange/20"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t('getStarted')}
        </motion.a>
      </div>
    </div>
  );
};

export default CreativeServicesContent;

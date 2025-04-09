
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';

const ContentCreationContent = () => {
  const { t } = useLanguage();

  return (
    <div className="h-full">
      <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-green to-neon-blue">
        {t('contentCreation')}
      </h3>
      <p className="text-gray-300 mb-8">Expert content creation services tailored for the Web3, blockchain, and cryptocurrency sectors.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-dark-lighter p-4 rounded-lg border border-neon-green/10">
          <h4 className="text-neon-green text-lg mb-2">Technical Articles</h4>
          <p className="text-gray-300 text-sm">In-depth technical content explaining complex blockchain concepts.</p>
        </div>
        
        <div className="bg-dark-lighter p-4 rounded-lg border border-neon-green/10">
          <h4 className="text-neon-green text-lg mb-2">Whitepapers</h4>
          <p className="text-gray-300 text-sm">Comprehensive documentation of your project's technology and vision.</p>
        </div>
        
        <div className="bg-dark-lighter p-4 rounded-lg border border-neon-green/10">
          <h4 className="text-neon-green text-lg mb-2">Social Media Content</h4>
          <p className="text-gray-300 text-sm">Engaging posts optimized for each platform's unique audience.</p>
        </div>
        
        <div className="bg-dark-lighter p-4 rounded-lg border border-neon-green/10">
          <h4 className="text-neon-green text-lg mb-2">Video Scripts</h4>
          <p className="text-gray-300 text-sm">Compelling narratives for explainer videos and project updates.</p>
        </div>
      </div>
      
      <div className="mt-12">
        <motion.a 
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-block px-6 py-2.5 bg-neon-green text-black font-medium rounded-full hover:shadow-lg transition-all duration-300 hover:shadow-neon-green/20"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t('getStarted')}
        </motion.a>
      </div>
    </div>
  );
};

export default ContentCreationContent;

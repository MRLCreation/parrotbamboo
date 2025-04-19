
import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';

interface HeroTitleProps {
  isMobile: boolean;
  isItalic?: boolean;
}

const HeroTitle: React.FC<HeroTitleProps> = ({ isMobile, isItalic = false }) => {
  const { t, language } = useLanguage();
  
  return (
    <div key={`hero-title-${language}`}>
      <h1 className={cn(
        `${isMobile ? 'text-3xl' : 'text-4xl md:text-6xl lg:text-7xl'} font-bold mb-6`,
        isItalic && 'italic'
      )}>
        <motion.div
          className="flex items-center justify-center mb-2"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span 
            className="bg-clip-text text-transparent bg-gradient-to-r from-neon-yellow via-neon-blue to-neon-purple gradient-animate"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ backgroundSize: '200% 200%' }}
          >
            {t('heroTitle')}
          </motion.span>
          <motion.div
            className="ml-4 relative top-1"
            initial={{ scale: 0.8, rotate: 0 }}
            animate={{ 
              scale: [0.8, 1.2, 0.8],
              opacity: [0.8, 1, 0.8],
              rotate: [0, 15, 0, -15, 0]
            }}
            transition={{ 
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut"
            }}
          >
            <Rocket size={isMobile ? 30 : 40} className="text-neon-yellow filter drop-shadow-[0_0_8px_rgba(242,183,5,0.7)]" strokeWidth={1.5} />
          </motion.div>
        </motion.div>
        
        <motion.span 
          className={cn(
            "block mt-2 text-white",
            isItalic && 'italic'
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {t('heroSubtitle')}
        </motion.span>
      </h1>
      
      <motion.p 
        className={`${isMobile ? 'text-lg' : 'text-xl md:text-2xl'} text-gray-300 mb-10 max-w-2xl mx-auto`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        {t('footerDescription')}
      </motion.p>
    </div>
  );
};

export default HeroTitle;

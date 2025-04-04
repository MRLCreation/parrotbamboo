
import React from 'react';
import { motion } from 'framer-motion';
import PartnersSectionHeader from './partners/PartnersSectionHeader';
import PartnersList from './partners/PartnersList';
import { partnersData } from '../data/partners';
import { useLanguage } from '../hooks/useLanguage';
import { useIsMobile } from '@/hooks/use-mobile';

export default function PartnersSection() {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  
  return (
    <section 
      id="partners" 
      className={`py-20 ${isMobile ? 'pb-16' : 'py-32 md:py-40'} bg-dark-lighter relative overflow-hidden`}
    >
      {/* Simplified background elements for mobile */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.2 }}
      >
        <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon-blue/40 via-transparent to-neon-purple/30"></div>
      </motion.div>
      
      {/* Reduced decorative geometric shapes for mobile */}
      {!isMobile && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute top-20 left-10 w-96 h-96 rounded-full bg-neon-blue/8 blur-3xl"
          ></motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-neon-purple/8 blur-3xl"
          ></motion.div>
        </>
      )}
      
      {/* Grid pattern background - simplified for mobile */}
      <div className={`absolute inset-0 bg-circuit-pattern ${isMobile ? 'opacity-3' : 'opacity-5'}`}></div>

      <div className="container mx-auto relative z-10">
        <PartnersSectionHeader />
        <div className={`mt-12 ${isMobile ? 'mb-8' : 'mt-16 mb-20'}`}>
          <PartnersList partners={partnersData} />
        </div>
      </div>
    </section>
  );
};

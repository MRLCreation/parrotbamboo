
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
      className={`${isMobile ? 'py-16' : 'py-32 md:py-40'} bg-dark-lighter relative overflow-hidden`}
    >
      {/* Simplified background for all devices */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon-blue/40 via-transparent to-neon-purple/30"></div>
      </div>
      
      {/* Decorative geometric shapes - only for desktop */}
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
      
      {/* Grid pattern background - simplified for all devices */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-3"></div>

      <div className="container mx-auto relative z-10">
        <PartnersSectionHeader />
        <div className={`${isMobile ? 'mt-8 mb-6' : 'mt-16 mb-20'}`}>
          <PartnersList partners={partnersData} />
        </div>
      </div>
    </section>
  );
};

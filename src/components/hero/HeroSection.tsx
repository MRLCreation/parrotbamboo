
import React from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

// Import components from barrel file for better organization
import {
  HeroBackground,
  CryptoSnow,
  HeroTitle,
  HeroActions,
  ScrollIndicator,
  AlienElements,
  ConstellationStars,
  OrbitalRings
} from './index';

export default function HeroSection() {
  const isMobile = useIsMobile();
  
  return (
    <section 
      id="home" 
      className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-lighter to-dark ${isMobile ? 'pt-8' : 'pt-16'} relative overflow-hidden`}
      aria-label="Hero section"
    >
      {/* Space/Alien background */}
      <HeroBackground isMobile={isMobile} />

      {/* Crypto Logo Snow Effect */}
      <CryptoSnow />

      {/* Constellation stars in background */}
      <ConstellationStars isMobile={isMobile} />

      {/* Alien tech orbital rings */}
      {!isMobile && <OrbitalRings />}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Hero Title */}
            <HeroTitle isMobile={isMobile} />
            
            {/* Hero Actions */}
            <HeroActions isMobile={isMobile} />
          </motion.div>
        </div>
      </div>

      {/* Alien spacecraft elements */}
      <AlienElements isMobile={isMobile} />
      
      {/* Scroll indicator */}
      {!isMobile && <ScrollIndicator />}
    </section>
  );
}

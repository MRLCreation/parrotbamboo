
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  FooterLogo,
  FooterQuickLinks,
  FooterServices,
  FooterConnect, 
  FooterCopyright,
  FooterDecoration,
  FooterMobile
} from './footer';

export default function Footer() {
  const { t, language } = useLanguage();
  const isMobile = useIsMobile();

  const socialLinks = {
    linkTree: "https://linktr.ee/parrotbamboo",
    telegram: "https://t.me/ParrotBambooCrypto",
    youtube: "https://www.youtube.com/c/ParrotBambooCrypto",
    announcement: "https://t.me/parrotbambooann",
    instagram: "https://instagram.com/parrotbamboocrypto?igshid=ZDdkNTZiNTM=",
    binanceLive: "https://www.binance.com/en/live/u/24755389",
    binanceSquare: "https://www.binance.com/en/feed/profile/86893873",
    twitter: "https://twitter.com/ParrotBamboo"
  };

  // Use mobile-optimized footer on mobile devices
  if (isMobile) {
    return (
      <footer className="bg-dark-lighter border-t border-neon-yellow/20 relative overflow-hidden" key={`footer-${language}`}>
        <FooterMobile socialLinks={socialLinks} />
      </footer>
    );
  }

  // Desktop footer
  return (
    <footer className="bg-dark-lighter border-t border-neon-yellow/20 relative overflow-hidden" key={`footer-${language}`}>
      <FooterDecoration />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <FooterLogo 
            socialLinks={{
              twitter: socialLinks.twitter,
              telegram: socialLinks.telegram,
              youtube: socialLinks.youtube,
              instagram: socialLinks.instagram,
              linkTree: socialLinks.linkTree
            }} 
          />
          
          <FooterQuickLinks />
          
          <FooterServices />
          
          <FooterConnect 
            socialLinks={{
              binanceSquare: socialLinks.binanceSquare,
              binanceLive: socialLinks.binanceLive,
              announcement: socialLinks.announcement
            }}
          />
        </div>
        
        <FooterCopyright 
          socialLinks={{
            linkTree: socialLinks.linkTree,
            telegram: socialLinks.telegram,
            youtube: socialLinks.youtube,
            instagram: socialLinks.instagram
          }}
        />
      </div>
    </footer>
  );
}

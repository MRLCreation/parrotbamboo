
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Instagram, Facebook, Twitter, Linkedin, ExternalLink } from 'lucide-react';

interface FooterMobileProps {
  socialLinks: {
    linkTree: string;
    telegram: string;
    youtube: string;
    announcement: string;
    instagram: string;
    binanceLive: string;
    binanceSquare: string;
    twitter: string;
  };
}

export default function FooterMobile({ socialLinks }: FooterMobileProps) {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="py-8 px-4">
      {/* Logo and tagline */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center mb-3">
          <span className="text-2xl font-bold text-white">PB</span>
        </div>
        <h2 className="text-lg font-bold mb-2">ParrotBamboo</h2>
        <p className="text-xs text-gray-400 text-center max-w-[200px]">
          Web3 Innovation Agency
        </p>
      </div>
      
      {/* Social links */}
      <div className="flex justify-center gap-4 mb-8">
        <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-dark-lighter border border-white/10 flex items-center justify-center hover:border-neon-blue hover:bg-dark-lighter/80 transition-all">
          <Instagram size={18} />
        </a>
        <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-dark-lighter border border-white/10 flex items-center justify-center hover:border-neon-purple hover:bg-dark-lighter/80 transition-all">
          <Twitter size={18} />
        </a>
        <a href={socialLinks.linkTree} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-dark-lighter border border-white/10 flex items-center justify-center hover:border-neon-yellow hover:bg-dark-lighter/80 transition-all">
          <ExternalLink size={18} />
        </a>
        <a href={socialLinks.telegram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-dark-lighter border border-white/10 flex items-center justify-center hover:border-neon-blue hover:bg-dark-lighter/80 transition-all">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.9 8.1L15.08 16.11C15 16.57 14.7 16.7 14.32 16.5L11.52 14.5L10.16 15.79C10.07 15.88 9.99 15.96 9.83 15.96L9.95 13.11L14.7 8.82C14.85 8.69 14.67 8.61 14.47 8.74L8.5 12.48L5.73 11.64C5.28 11.5 5.27 11.16 5.82 10.95L16.09 7.07C16.47 6.95 16.8 7.19 16.9 8.1Z" fill="#0083CA"/>
          </svg>
        </a>
      </div>
      
      {/* Quick links */}
      <div className="grid grid-cols-2 gap-2 mb-8">
        <a href="#home" className="text-sm py-2 text-gray-400 hover:text-white transition-colors">
          {t('homeLink')}
        </a>
        <a href="#about" className="text-sm py-2 text-gray-400 hover:text-white transition-colors">
          {t('aboutUsLink')}
        </a>
        <a href="#services" className="text-sm py-2 text-gray-400 hover:text-white transition-colors">
          {t('servicesLink')}
        </a>
        <a href="#team" className="text-sm py-2 text-gray-400 hover:text-white transition-colors">
          {t('teamLink')}
        </a>
        <a href="#partners" className="text-sm py-2 text-gray-400 hover:text-white transition-colors">
          {t('partnersLink')}
        </a>
        <a href="#contact" className="text-sm py-2 text-gray-400 hover:text-white transition-colors">
          {t('contactUs')}
        </a>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-white/10 pt-4">
        <p className="text-xs text-center text-gray-500">
          © {currentYear} ParrotBamboo. {t('allRightsReserved')}.
        </p>
      </div>
    </div>
  );
}

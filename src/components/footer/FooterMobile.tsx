
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Instagram, Facebook, Twitter, Linkedin, ExternalLink } from 'lucide-react';

export default function FooterMobile() {
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
        <a href="#" className="w-10 h-10 rounded-full bg-dark-lighter border border-white/10 flex items-center justify-center hover:border-neon-blue hover:bg-dark-lighter/80 transition-all">
          <Instagram size={18} />
        </a>
        <a href="#" className="w-10 h-10 rounded-full bg-dark-lighter border border-white/10 flex items-center justify-center hover:border-neon-purple hover:bg-dark-lighter/80 transition-all">
          <Twitter size={18} />
        </a>
        <a href="#" className="w-10 h-10 rounded-full bg-dark-lighter border border-white/10 flex items-center justify-center hover:border-neon-yellow hover:bg-dark-lighter/80 transition-all">
          <Linkedin size={18} />
        </a>
        <a href="#" className="w-10 h-10 rounded-full bg-dark-lighter border border-white/10 flex items-center justify-center hover:border-neon-blue hover:bg-dark-lighter/80 transition-all">
          <ExternalLink size={18} />
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

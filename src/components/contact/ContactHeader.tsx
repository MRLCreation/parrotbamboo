
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';

export default function ContactHeader() {
  const { t } = useLanguage();
  
  return (
    <div className="mb-16 text-center">
      <span className="inline-block px-4 py-1 rounded-full bg-neon-purple/10 text-neon-purple text-sm font-medium mb-4 animate-fade-in">{t('contactUs')}</span>
      <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">{t('getInTouch')}</h2>
      <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto"></div>
      <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
        {t('sendUsMessage')}
      </p>
    </div>
  );
}

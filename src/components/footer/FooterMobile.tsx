
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import ParrotAvatar from '../common/ParrotAvatar';

interface FooterMobileProps {
  socialLinks: {
    linkTree: string;
    telegram: string;
    youtube: string;
    instagram: string;
    twitter: string;
    binanceSquare: string;
    binanceLive: string;
    announcement: string;
  };
}

export default function FooterMobile({ socialLinks }: FooterMobileProps) {
  const { t } = useLanguage();
  
  return (
    <div className="px-4 py-8">
      {/* Logo and name */}
      <div className="flex items-center justify-center mb-6">
        <ParrotAvatar size="lg" className="mr-3" />
        <h3 className="text-xl font-bold neon-text">ParrotBamboo</h3>
      </div>
      
      {/* Social media icons */}
      <div className="flex justify-center gap-3 mb-6">
        {/* Twitter */}
        <a 
          href={socialLinks.twitter} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-dark flex items-center justify-center border border-neon-yellow/20"
          aria-label="Twitter"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" fill="#F2B705"/>
          </svg>
        </a>
        
        {/* Telegram */}
        <a 
          href={socialLinks.telegram} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-dark flex items-center justify-center border border-neon-blue/20"
          aria-label="Telegram"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.9 8.1L15.08 16.11C15 16.57 14.7 16.7 14.32 16.5L11.52 14.5L10.16 15.79C10.07 15.88 9.99 15.96 9.83 15.96L9.95 13.11L14.7 8.82C14.85 8.69 14.67 8.61 14.47 8.74L8.5 12.48L5.73 11.64C5.28 11.5 5.27 11.16 5.82 10.95L16.09 7.07C16.47 6.95 16.8 7.19 16.9 8.1Z" fill="#0083CA"/>
          </svg>
        </a>
        
        {/* YouTube */}
        <a 
          href={socialLinks.youtube} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-dark flex items-center justify-center border border-neon-yellow/20"
          aria-label="YouTube"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.498 4.80824 21.0708 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12 4 3.4 4.46C2.92925 4.59318 2.50198 4.84824 2.16135 5.19941C1.82072 5.55057 1.57879 5.98541 1.46 6.46C1.14522 8.20556 0.991243 9.97631 1 11.75C0.988743 13.537 1.14272 15.3213 1.46 17.08C1.57879 17.5546 1.82072 17.9894 2.16135 18.3406C2.50198 18.6918 2.92925 18.9468 3.4 19.08C5.12 19.54 12 19.54 12 19.54C12 19.54 18.88 19.54 20.6 19.08C21.0708 18.9468 21.498 18.6918 21.8387 18.3406C22.1793 17.9894 22.4212 17.5546 22.54 17.08C22.8524 15.3398 23.0063 13.5747 23 11.8C23.0113 9.98631 22.8574 8.19768 22.54 6.42ZM9.75 15.27V8.29L15.5 11.75L9.75 15.27Z" fill="#F2B705"/>
          </svg>
        </a>
        
        {/* Instagram */}
        <a 
          href={socialLinks.instagram} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-dark flex items-center justify-center border border-neon-blue/20"
          aria-label="Instagram"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z" fill="#0083CA"/>
          </svg>
        </a>
        
        {/* Binance */}
        <a 
          href={socialLinks.binanceSquare} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-dark flex items-center justify-center border border-neon-yellow/20"
          aria-label="Binance"
        >
          <img 
            src="/lovable-uploads/d46d80bf-7f84-4d8a-b312-5eb0ff837db8.png" 
            alt="Binance" 
            className="w-5 h-5"
          />
        </a>
        
        {/* LinkTree */}
        <a 
          href={socialLinks.linkTree} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-dark flex items-center justify-center border border-neon-yellow/20"
          aria-label="LinkTree"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L8.66 5.34H15.34L12 2Z" fill="#F2B705" />
            <path d="M12 22L8.66 18.66H15.34L12 22Z" fill="#F2B705" />
            <path d="M5.34 8.66L2 12L5.34 15.34V8.66Z" fill="#F2B705" />
            <path d="M18.66 8.66L22 12L18.66 15.34V8.66Z" fill="#F2B705" />
            <path d="M8.66 8.66H15.34V15.34H8.66V8.66Z" fill="#F2B705" />
          </svg>
        </a>
      </div>
      
      {/* Quick Links - Horizontal */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <a href="#home" className="text-sm text-gray-300">Home</a>
        <a href="#about" className="text-sm text-gray-300">About</a>
        <a href="#services" className="text-sm text-gray-300">Services</a>
        <a href="#team" className="text-sm text-gray-300">Team</a>
        <a href="#partners" className="text-sm text-gray-300">Partners</a>
      </div>
      
      {/* Contact */}
      <div className="flex justify-center mb-6">
        <a 
          href="#contact" 
          className="px-6 py-2.5 bg-gradient-to-r from-neon-blue to-neon-yellow rounded-full text-dark font-medium text-sm inline-flex items-center gap-1.5"
        >
          Contact Us
        </a>
      </div>
      
      {/* Copyright */}
      <div className="text-center">
        <p className="text-gray-400 text-xs">
          &copy; {new Date().getFullYear()} ParrotBamboo. {t('allRightsReserved')}
        </p>
      </div>
    </div>
  );
}

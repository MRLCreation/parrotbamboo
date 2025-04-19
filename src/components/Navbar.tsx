
import React, { useState, useEffect } from 'react';
import { Languages } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import ParrotAvatar from './common/ParrotAvatar';

// Simplified menu items
const navItems = [
  { label: 'home', href: '#home' },
  { label: 'about', href: '#about' },
  { label: 'services', href: '#services' },
  { label: 'partners', href: '#partners' },
  { label: 'contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('#home');
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Find current active section
      const sections = navItems.map(item => item.href);
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.querySelector(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveItem(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    setActiveItem(href);
    
    // Smooth scroll implementation
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled 
          ? 'bg-dark/95 backdrop-blur-md py-2 shadow-md' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <ParrotAvatar size="md" className="mr-3" />
          <span className="text-xl font-bold text-white">ParrotBamboo</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`text-base font-medium transition-colors relative py-2 px-1 ${
                    activeItem === item.href 
                      ? 'text-white' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {t(item.label as any)}
                  {activeItem === item.href && (
                    <motion.span 
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-neon-yellow"
                      layoutId="activeNavIndicator"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Language selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center text-white p-2 rounded-full hover:bg-dark-lighter">
                <Languages className="h-5 w-5 mr-1" />
                <span className="text-sm font-medium">{language === 'en' ? 'EN' : 'TR'}</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem 
                className={language === 'en' ? 'bg-accent/20' : ''}
                onClick={() => setLanguage('en')}
              >
                English
              </DropdownMenuItem>
              <DropdownMenuItem 
                className={language === 'tr' ? 'bg-accent/20' : ''}
                onClick={() => setLanguage('tr')}
              >
                Türkçe
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white flex flex-col items-center justify-center p-2"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white my-1 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div 
        className={cn(
          "md:hidden absolute w-full bg-dark/95 backdrop-blur-md transition-all duration-300 shadow-lg",
          isOpen ? "max-h-64 py-4" : "max-h-0 overflow-hidden"
        )}
      >
        <div className="container mx-auto px-4">
          <ul className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`block text-base py-2 ${
                    activeItem === item.href 
                      ? 'text-white font-medium' 
                      : 'text-gray-300'
                  }`}
                >
                  {t(item.label as any)}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Mobile Language selector */}
          <div className="mt-4 border-t border-gray-700 pt-4 flex items-center">
            <span className="text-gray-400 mr-2">Language:</span>
            <button 
              onClick={() => setLanguage('en')}
              className={`mr-4 ${language === 'en' ? 'text-white font-medium' : 'text-gray-300'}`}
            >
              English
            </button>
            <button 
              onClick={() => setLanguage('tr')}
              className={`${language === 'tr' ? 'text-white font-medium' : 'text-gray-300'}`}
            >
              Türkçe
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

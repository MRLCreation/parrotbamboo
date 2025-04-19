
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import ParrotAvatar from './common/ParrotAvatar';
import { DesktopNav } from './navbar/DesktopNav';
import { MobileNav } from './navbar/MobileNav';
import { navItems } from './navbar/navItems';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('#home');
  const [isOpen, setIsOpen] = useState(false);

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
        <DesktopNav activeItem={activeItem} handleNavClick={handleNavClick} />

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
      <MobileNav isOpen={isOpen} activeItem={activeItem} handleNavClick={handleNavClick} />
    </nav>
  );
}

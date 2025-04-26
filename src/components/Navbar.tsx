
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import ParrotAvatar from './common/ParrotAvatar';
import { DesktopNav } from './navbar/DesktopNav';
import { MobileNav } from './navbar/MobileNav';
import { navItems } from './navbar/navItems';

export default function Navbar() {
  const [activeItem, setActiveItem] = useState('#home');
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    setActiveItem(href);
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="w-full bg-dark py-4">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <ParrotAvatar size="md" className="mr-3" />
            <span className="text-xl font-bold text-white">ParrotBamboo</span>
          </div>

          {/* Desktop Navigation */}
          <DesktopNav activeItem={activeItem} handleNavClick={handleNavClick} />
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <MobileNav isOpen={isOpen} activeItem={activeItem} handleNavClick={handleNavClick} />
    </>
  );
}

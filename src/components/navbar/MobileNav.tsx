
import { cn } from '@/lib/utils';
import { useLanguage } from '../../hooks/useLanguage';
import { navItems } from './navItems';
import { LanguageSelector } from './LanguageSelector';
import { Home, User, List, Settings } from 'lucide-react';

interface MobileNavProps {
  isOpen: boolean;
  activeItem: string;
  handleNavClick: (href: string) => void;
}

export function MobileNav({ activeItem, handleNavClick }: MobileNavProps) {
  const { language, setLanguage, t } = useLanguage();
  
  const navIcons = {
    '#home': Home,
    '#about': User,
    '#services': List,
    '#contact': Settings,
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-dark/95 backdrop-blur-md border-t border-gray-800 safe-bottom z-50">
      <div className="container mx-auto px-4">
        {/* Main Navigation */}
        <div className="py-2">
          <ul className="grid grid-cols-4 gap-2">
            {navItems.map((item) => {
              const IconComponent = navIcons[item.href as keyof typeof navIcons];
              return (
                <li key={item.label} className="flex justify-center">
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "flex flex-col items-center p-2 rounded-lg transition-colors",
                      activeItem === item.href 
                        ? 'text-primary' 
                        : 'text-gray-400 hover:text-gray-300'
                    )}
                    aria-label={t(item.label as any)}
                  >
                    {IconComponent && <IconComponent className="h-5 w-5 mb-1" />}
                    <span className="text-xs font-medium">
                      {t(item.label as any)}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        
        {/* Language selector for mobile */}
        <div className="flex justify-center py-2 border-t border-gray-800">
          <LanguageSelector />
        </div>
      </div>
    </div>
  );
}


import { cn } from '@/lib/utils';
import { useLanguage } from '../../hooks/useLanguage';
import { navItems } from './navItems';
import { LanguageSelector } from './LanguageSelector';
import { Home, User, List, Building, Settings } from 'lucide-react';

interface MobileNavProps {
  isOpen: boolean;
  activeItem: string;
  handleNavClick: (href: string) => void;
}

export function MobileNav({ activeItem, handleNavClick }: MobileNavProps) {
  const { t } = useLanguage();
  
  const navIcons: Record<string, React.ElementType> = {
    '#home': Home,
    '#about': User,
    '#services': List,
    '#partners': Building,
    '#contact': Settings,
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-dark/80 backdrop-blur-lg border-t border-white/10 safe-bottom z-50">
      <div className="container mx-auto px-4">
        {/* Main Navigation */}
        <div className="py-2">
          <ul className="grid grid-cols-5 gap-1">
            {navItems.map((item) => {
              const IconComponent = navIcons[item.href];
              return (
                <li key={item.label} className="flex justify-center">
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "flex flex-col items-center p-2 rounded-lg transition-all duration-200",
                      activeItem === item.href 
                        ? 'text-white scale-110' 
                        : 'text-gray-400 hover:text-white/90'
                    )}
                    aria-label={t(item.label as any)}
                  >
                    {IconComponent && (
                      <IconComponent 
                        className="h-5 w-5 mb-1" 
                        strokeWidth={1.5}
                      />
                    )}
                    <span className="text-[10px] font-medium">
                      {t(item.label as any)}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        
        {/* Language selector for mobile */}
        <div className="flex justify-center py-2 border-t border-white/10">
          <LanguageSelector />
        </div>
      </div>
    </div>
  );
}

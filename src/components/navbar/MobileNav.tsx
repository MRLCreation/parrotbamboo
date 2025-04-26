
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
  const TELEGRAM_URL = "https://t.me/SCdeNostradame";
  
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
          <div className="flex justify-between items-center">
            <ul className="grid grid-cols-5 gap-1 flex-1">
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
            
            {/* Telegram Button */}
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 p-2 rounded-full bg-[#229ED9] flex items-center justify-center"
            >
              <svg 
                viewBox="0 0 24 24" 
                fill="white" 
                height="20" 
                width="20" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

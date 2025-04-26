
import { cn } from '@/lib/utils';
import { useLanguage } from '../../hooks/useLanguage';
import { navItems } from './navItems';
import { LanguageSelector } from './LanguageSelector';

interface MobileNavProps {
  isOpen: boolean;
  activeItem: string;
  handleNavClick: (href: string) => void;
}

export function MobileNav({ isOpen, activeItem, handleNavClick }: MobileNavProps) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div 
      className={cn(
        "md:hidden absolute top-full left-0 right-0 w-full bg-dark/95 backdrop-blur-md transition-all duration-300 z-50 shadow-lg",
        isOpen ? "max-h-64 py-4" : "max-h-0 overflow-hidden"
      )}
    >
      <div className="container mx-auto px-4">
        <ul className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => handleNavClick(item.href)}
                className={`block w-full text-left text-base py-2 ${
                  activeItem === item.href 
                    ? 'text-white font-medium' 
                    : 'text-gray-300'
                }`}
              >
                {t(item.label as any)}
              </button>
            </li>
          ))}
        </ul>
        
        <div className="mt-4 border-t border-gray-700 pt-4 flex items-center justify-between">
          <div className="flex items-center">
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
          
          <div className="flex items-center">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </div>
  );
}

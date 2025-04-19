
import { cn } from '@/lib/utils';
import { useLanguage } from '../../hooks/useLanguage';
import { navItems } from './navItems';

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
  );
}

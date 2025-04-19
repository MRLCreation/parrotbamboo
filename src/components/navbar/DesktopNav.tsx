
import { motion } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';
import { navItems } from './navItems';
import { LanguageSelector } from './LanguageSelector';

interface DesktopNavProps {
  activeItem: string;
  handleNavClick: (href: string) => void;
}

export function DesktopNav({ activeItem, handleNavClick }: DesktopNavProps) {
  const { t } = useLanguage();

  return (
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
      <LanguageSelector />
    </div>
  );
}

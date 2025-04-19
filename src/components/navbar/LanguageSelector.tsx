
import { Languages } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
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
  );
}

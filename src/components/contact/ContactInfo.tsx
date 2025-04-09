
import React from 'react';
import { MapPin, Mail, Headphones } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRightIcon } from './icons/ChevronRight';

export default function ContactInfo() {
  const { t } = useLanguage();
  
  return (
    <Card className="bg-dark-lighter/50 backdrop-blur-lg border border-white/10 shadow-xl hover:shadow-neon-blue/5 transition-all duration-300 overflow-hidden">
      <CardContent className="p-6 flex flex-col gap-8">
        {/* Office Location */}
        <div className="flex gap-4 items-start group">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple p-0.5 flex-shrink-0">
            <div className="w-full h-full rounded-full bg-dark flex items-center justify-center">
              <MapPin className="w-5 h-5 text-neon-blue group-hover:text-white transition-colors" />
            </div>
          </div>
          <div>
            <h4 className="text-xl font-medium text-white mb-2">Office Location</h4>
            <p className="text-gray-400">
              Global Remote Team <br />
              Web3 Innovation Hub
            </p>
          </div>
        </div>
        
        {/* Email */}
        <div className="flex gap-4 items-start group">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-neon-purple to-neon-blue p-0.5 flex-shrink-0">
            <div className="w-full h-full rounded-full bg-dark flex items-center justify-center">
              <Mail className="w-5 h-5 text-neon-purple group-hover:text-white transition-colors" />
            </div>
          </div>
          <div>
            <h4 className="text-xl font-medium text-white mb-2">Email Us</h4>
            <a href="mailto:rendercreativezone@gmail.com" className="text-gray-400 hover:text-neon-purple transition-colors">
              rendercreativezone@gmail.com
            </a>
          </div>
        </div>
        
        {/* Schedule Call */}
        <div className="flex gap-4 items-start group">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-neon-yellow to-neon-purple p-0.5 flex-shrink-0">
            <div className="w-full h-full rounded-full bg-dark flex items-center justify-center">
              <Headphones className="w-5 h-5 text-neon-yellow group-hover:text-white transition-colors" />
            </div>
          </div>
          <div>
            <h4 className="text-xl font-medium text-white mb-2">{t('scheduleCall')}</h4>
            <p className="text-gray-400 mb-3">
              {t('bookMeeting')}
            </p>
            <a 
              href="#" 
              className="px-4 py-2 bg-dark border border-neon-yellow/30 text-neon-yellow rounded-md hover:bg-neon-yellow/10 transition-all inline-flex items-center gap-2"
            >
              {t('bookMeeting')} <ChevronRightIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}


import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';

const MissionHeader: React.FC = () => {
  const { t, language } = useLanguage();
  
  return (
    <div className="text-center mb-10" key={`mission-header-${language}`}>
      <span className="inline-block px-4 py-1.5 rounded-full bg-dark-lighter text-neon-yellow text-sm font-medium border border-neon-yellow/30 mb-4">
        {t('ourMission')}
      </span>
      
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${t('sectionColors.mission')}`}>
        {t('drivingWeb3')}
      </h2>
      
      <div className={`h-1 bg-gradient-to-r ${t('sectionColors.mission')} mx-auto w-24 rounded-full`}></div>
    </div>
  );
};

export default MissionHeader;

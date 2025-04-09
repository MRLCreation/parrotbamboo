import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, MessageSquare, Building, Users, FileText, Paintbrush } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  isActive: boolean;
  onClick: () => void;
}

const ServiceItem = ({ icon, title, isActive, onClick }: ServiceItemProps) => (
  <motion.div
    className={`flex items-center p-4 rounded-lg cursor-pointer mb-2 ${isActive ? 'bg-dark-lighter' : 'hover:bg-dark-lighter/50'} transition-all duration-300`}
    onClick={onClick}
    whileHover={{ x: 5 }}
  >
    <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${isActive ? 'bg-neon-blue/20' : 'bg-dark-lighter'} transition-colors`}>
      {icon}
    </div>
    <span className={`text-lg ${isActive ? 'text-white font-medium' : 'text-gray-400'}`}>{title}</span>
    {isActive && (
      <motion.div 
        className="ml-3 w-1.5 h-1.5 rounded-full bg-neon-blue" 
        layoutId="activeIndicator"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
      />
    )}
  </motion.div>
);

interface ServiceContentProps {
  activeService: string;
}

const ServiceContent = ({ activeService }: ServiceContentProps) => {
  const { t } = useLanguage();
  
  const contentMap: { [key: string]: JSX.Element } = {
    socialMedia: (
      <div className="h-full">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-yellow to-neon-green">
          {t('socialMediaManagement')}
        </h3>
        <p className="text-gray-300 mb-8">{t('socialMediaDescription')}</p>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <span className="text-neon-blue">▸</span>
            <p className="text-gray-200">{t('twitterCommunityBuilding')}</p>
          </div>
          
          <div className="flex items-start space-x-3">
            <span className="text-neon-blue">▸</span>
            <p className="text-gray-200">{t('telegramGroupManagement')}</p>
          </div>
          
          <div className="flex items-start space-x-3">
            <span className="text-neon-blue">▸</span>
            <p className="text-gray-200">{t('youtubeChannelOptimization')}</p>
          </div>
          
          <div className="flex items-start space-x-3">
            <span className="text-neon-blue">▸</span>
            <p className="text-gray-200">{t('binanceSquarePresence')}</p>
          </div>
          
          <div className="flex items-start space-x-3">
            <span className="text-neon-blue">▸</span>
            <p className="text-gray-200">{t('comprehensiveSocialMedia')}</p>
          </div>
        </div>
        
        <div className="mt-12">
          <motion.a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block px-6 py-2.5 bg-neon-blue text-white font-medium rounded-full hover:shadow-lg transition-all duration-300 hover:shadow-neon-blue/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('getStarted')}
          </motion.a>
        </div>
      </div>
    ),
    
    // Other service content components would go here, similar to socialMedia
    // ...
  };
  
  return contentMap[activeService] || contentMap.socialMedia;
};

export default function ServicesSection() {
  const [activeService, setActiveService] = useState('socialMedia');
  const { t, language } = useLanguage();
  
  const services = [
    { 
      id: 'socialMedia', 
      icon: <BarChart3 className="w-6 h-6 text-neon-blue" />, 
      title: t('socialMediaGrowth') 
    },
    { 
      id: 'ama', 
      icon: <MessageSquare className="w-6 h-6 text-neon-purple" />, 
      title: t('amaEventHosting') 
    },
    { 
      id: 'partnerships', 
      icon: <Building className="w-6 h-6 text-neon-yellow" />, 
      title: t('corporatePartnerships') 
    },
    { 
      id: 'promotion', 
      icon: <Users className="w-6 h-6 text-neon-cyan" />, 
      title: t('brandPromotion') 
    },
    { 
      id: 'content', 
      icon: <FileText className="w-6 h-6 text-neon-green" />, 
      title: t('contentCreation') 
    },
    { 
      id: 'creative', 
      icon: <Paintbrush className="w-6 h-6 text-neon-orange" />, 
      title: t('creativeServices') 
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-dark relative overflow-hidden" key={`services-section-${language}`}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-neon-blue/10 via-transparent to-transparent"></div>
      <div className="absolute w-96 h-96 rounded-full bg-neon-purple/5 blur-3xl -bottom-48 left-1/4"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            className="inline-block px-4 py-1 rounded-full bg-dark-lighter text-neon-blue text-sm font-medium mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('servicesTitle')}
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('whatWeOffer')}
          </motion.h2>
          
          <motion.div 
            className="h-1 w-24 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Service navigation */}
          <div className="md:col-span-4 bg-dark/60 backdrop-blur-sm rounded-xl p-6 border border-white/5 shadow-xl">
            {services.map((service) => (
              <ServiceItem 
                key={`service-${service.id}-${language}`}
                icon={service.icon}
                title={service.title}
                isActive={activeService === service.id}
                onClick={() => setActiveService(service.id)}
              />
            ))}
          </div>
          
          {/* Service content */}
          <div className="md:col-span-8 bg-dark/60 backdrop-blur-sm rounded-xl p-8 border border-white/5 shadow-xl">
            <ServiceContent activeService={activeService} />
          </div>
        </div>
      </div>
    </section>
  );
}

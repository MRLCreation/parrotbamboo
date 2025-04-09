
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
    
    ama: (
      <div className="h-full">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-purple to-neon-blue">
          {t('amaEventHosting')}
        </h3>
        <p className="text-gray-300 mb-8">{t('eventVisibilityDescription')}</p>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <span className="text-neon-purple">▸</span>
            <p className="text-gray-200">{t('binanceGlobalAudience')}</p>
          </div>
          
          <div className="flex items-start space-x-3">
            <span className="text-neon-purple">▸</span>
            <p className="text-gray-200">{t('professionalHosting')}</p>
          </div>
          
          <div className="flex items-start space-x-3">
            <span className="text-neon-purple">▸</span>
            <p className="text-gray-200">{t('liveQASessions')}</p>
          </div>
          
          <div className="flex items-start space-x-3">
            <span className="text-neon-purple">▸</span>
            <p className="text-gray-200">{t('engageCryptoEnthusiasts')}</p>
          </div>
        </div>
        
        <div className="mt-12">
          <motion.a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block px-6 py-2.5 bg-neon-purple text-white font-medium rounded-full hover:shadow-lg transition-all duration-300 hover:shadow-neon-purple/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('scheduleEvent')}
          </motion.a>
        </div>
      </div>
    ),
    
    partnerships: (
      <div className="h-full">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-yellow to-neon-orange">
          {t('corporatePartnerships')}
        </h3>
        <p className="text-gray-300 mb-8">Strategic partnerships that connect blockchain projects with industry leaders.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-dark-lighter p-4 rounded-lg">
            <h4 className="text-neon-yellow font-medium mb-2">Co-Marketing</h4>
            <p className="text-gray-300 text-sm">Joint marketing initiatives with established blockchain companies.</p>
          </div>
          
          <div className="bg-dark-lighter p-4 rounded-lg">
            <h4 className="text-neon-yellow font-medium mb-2">Integration Support</h4>
            <p className="text-gray-300 text-sm">Technical assistance for cross-platform integrations.</p>
          </div>
          
          <div className="bg-dark-lighter p-4 rounded-lg">
            <h4 className="text-neon-yellow font-medium mb-2">Alliance Building</h4>
            <p className="text-gray-300 text-sm">Creating strategic relationships with complementary projects.</p>
          </div>
          
          <div className="bg-dark-lighter p-4 rounded-lg">
            <h4 className="text-neon-yellow font-medium mb-2">Business Development</h4>
            <p className="text-gray-300 text-sm">Expanding market reach through structured partnerships.</p>
          </div>
        </div>
        
        <div className="mt-12">
          <motion.a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block px-6 py-2.5 bg-neon-yellow text-black font-medium rounded-full hover:shadow-lg transition-all duration-300 hover:shadow-neon-yellow/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('getStarted')}
          </motion.a>
        </div>
      </div>
    ),
    
    promotion: (
      <div className="h-full">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan to-neon-blue">
          {t('brandPromotion')}
        </h3>
        <p className="text-gray-300 mb-8">Comprehensive brand promotion strategies to elevate your project's visibility in the Web3 space.</p>
        
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-dark-lighter p-4 rounded-lg flex items-start">
            <div className="w-8 h-8 rounded-full bg-neon-cyan/20 flex items-center justify-center mr-3 flex-shrink-0">
              <span className="text-neon-cyan">1</span>
            </div>
            <div>
              <h4 className="text-white font-medium mb-1">Brand Strategy Development</h4>
              <p className="text-gray-300 text-sm">Creating a cohesive brand identity that stands out in the Web3 landscape.</p>
            </div>
          </div>
          
          <div className="bg-dark-lighter p-4 rounded-lg flex items-start">
            <div className="w-8 h-8 rounded-full bg-neon-cyan/20 flex items-center justify-center mr-3 flex-shrink-0">
              <span className="text-neon-cyan">2</span>
            </div>
            <div>
              <h4 className="text-white font-medium mb-1">Influencer Collaborations</h4>
              <p className="text-gray-300 text-sm">Strategic partnerships with key opinion leaders in the blockchain space.</p>
            </div>
          </div>
          
          <div className="bg-dark-lighter p-4 rounded-lg flex items-start">
            <div className="w-8 h-8 rounded-full bg-neon-cyan/20 flex items-center justify-center mr-3 flex-shrink-0">
              <span className="text-neon-cyan">3</span>
            </div>
            <div>
              <h4 className="text-white font-medium mb-1">Digital PR Campaigns</h4>
              <p className="text-gray-300 text-sm">Media coverage and press releases to build credibility and awareness.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <motion.a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block px-6 py-2.5 bg-neon-cyan text-black font-medium rounded-full hover:shadow-lg transition-all duration-300 hover:shadow-neon-cyan/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('getStarted')}
          </motion.a>
        </div>
      </div>
    ),
    
    content: (
      <div className="h-full">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-green to-neon-blue">
          {t('contentCreation')}
        </h3>
        <p className="text-gray-300 mb-8">Expert content creation services tailored for the Web3, blockchain, and cryptocurrency sectors.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-dark-lighter p-4 rounded-lg border border-neon-green/10">
            <h4 className="text-neon-green text-lg mb-2">Technical Articles</h4>
            <p className="text-gray-300 text-sm">In-depth technical content explaining complex blockchain concepts.</p>
          </div>
          
          <div className="bg-dark-lighter p-4 rounded-lg border border-neon-green/10">
            <h4 className="text-neon-green text-lg mb-2">Whitepapers</h4>
            <p className="text-gray-300 text-sm">Comprehensive documentation of your project's technology and vision.</p>
          </div>
          
          <div className="bg-dark-lighter p-4 rounded-lg border border-neon-green/10">
            <h4 className="text-neon-green text-lg mb-2">Social Media Content</h4>
            <p className="text-gray-300 text-sm">Engaging posts optimized for each platform's unique audience.</p>
          </div>
          
          <div className="bg-dark-lighter p-4 rounded-lg border border-neon-green/10">
            <h4 className="text-neon-green text-lg mb-2">Video Scripts</h4>
            <p className="text-gray-300 text-sm">Compelling narratives for explainer videos and project updates.</p>
          </div>
        </div>
        
        <div className="mt-12">
          <motion.a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block px-6 py-2.5 bg-neon-green text-black font-medium rounded-full hover:shadow-lg transition-all duration-300 hover:shadow-neon-green/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('getStarted')}
          </motion.a>
        </div>
      </div>
    ),
    
    creative: (
      <div className="h-full">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-orange to-neon-yellow">
          {t('creativeServices')}
        </h3>
        <p className="text-gray-300 mb-8">Creative design solutions that make your blockchain project stand out visually.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-b from-dark-lighter to-dark p-5 rounded-lg">
            <h4 className="text-neon-orange text-lg mb-3">{t('graphicsDesign')}</h4>
            <p className="text-gray-300 text-sm">Logo design, branding assets, and marketing materials.</p>
          </div>
          
          <div className="bg-gradient-to-b from-dark-lighter to-dark p-5 rounded-lg">
            <h4 className="text-neon-orange text-lg mb-3">{t('videoEditing')}</h4>
            <p className="text-gray-300 text-sm">Professional video editing for project promotions and updates.</p>
          </div>
          
          <div className="bg-gradient-to-b from-dark-lighter to-dark p-5 rounded-lg">
            <h4 className="text-neon-orange text-lg mb-3">{t('animation3d')}</h4>
            <p className="text-gray-300 text-sm">3D animations and visualizations of blockchain concepts.</p>
          </div>
        </div>
        
        <div className="mt-12">
          <motion.a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block px-6 py-2.5 bg-neon-orange text-black font-medium rounded-full hover:shadow-lg transition-all duration-300 hover:shadow-neon-orange/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('getStarted')}
          </motion.a>
        </div>
      </div>
    )
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

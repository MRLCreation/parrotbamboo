
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BarChart3, MessageSquare, Building, Users, FileText, Paintbrush } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { ServiceItem, ServiceContent, ServicesHeader } from './services';

export default function ServicesSection() {
  const [activeService, setActiveService] = useState('socialMedia');
  const { t, language } = useLanguage();
  const location = useLocation();
  
  useEffect(() => {
    const handleActiveServiceChange = (event: CustomEvent) => {
      if (event.detail && event.detail.serviceId) {
        setActiveService(event.detail.serviceId);
      }
    };

    // Get service from URL if available
    const params = new URLSearchParams(location.search);
    const serviceParam = params.get('service');
    if (serviceParam) {
      setActiveService(serviceParam);
    }

    window.addEventListener('setActiveService', handleActiveServiceChange as EventListener);
    
    return () => {
      window.removeEventListener('setActiveService', handleActiveServiceChange as EventListener);
    };
  }, [location]);
  
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
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-neon-blue/10 via-transparent to-transparent"></div>
      <div className="absolute w-96 h-96 rounded-full bg-neon-purple/5 blur-3xl -bottom-48 left-1/4"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <ServicesHeader />
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
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
          
          <div className="md:col-span-8 bg-dark/60 backdrop-blur-sm rounded-xl p-8 border border-white/5 shadow-xl">
            <ServiceContent activeService={activeService} />
          </div>
        </div>
      </div>
    </section>
  );
}

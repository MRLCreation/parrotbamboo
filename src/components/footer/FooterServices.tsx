
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';

const footerLinkVariants = {
  initial: { opacity: 0.8, y: 0 },
  hover: { 
    opacity: 1, 
    y: -2,
    transition: { 
      duration: 0.2 
    }
  }
};

export default function FooterServices() {
  const { t } = useLanguage();
  
  const services = [
    { name: t('socialMediaGrowth'), href: '#services', id: 'socialMedia' },
    { name: t('amaEventHosting'), href: '#services', id: 'ama' },
    { name: t('corporatePartnerships'), href: '#services', id: 'partnerships' },
    { name: t('brandPromotion'), href: '#services', id: 'promotion' },
    { name: t('contentCreation'), href: '#services', id: 'content' },
    { name: t('creativeServices'), href: '#services', id: 'creative' }
  ];
  
  const handleServiceClick = (serviceId: string, e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
    
    // Set the active service after scrolling
    setTimeout(() => {
      const serviceEvent = new CustomEvent('setActiveService', { 
        detail: { serviceId } 
      });
      window.dispatchEvent(serviceEvent);
    }, 100);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h3 className="text-lg font-semibold mb-6 text-neon-blue">{t('servicesHeader')}</h3>
      <ul className="space-y-4">
        {services.map((service) => (
          <motion.li key={service.name}
            variants={footerLinkVariants}
            initial="initial"
            whileHover="hover"
          >
            <a 
              href={service.href} 
              className="text-gray-300 hover:text-white transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-neon-blue after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
              onClick={(e) => handleServiceClick(service.id, e)}
            >
              {service.name}
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

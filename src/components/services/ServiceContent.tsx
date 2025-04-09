
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import SocialMediaContent from './serviceContents/SocialMediaContent';
import AMAContent from './serviceContents/AMAContent';
import PartnershipsContent from './serviceContents/PartnershipsContent';
import PromotionContent from './serviceContents/PromotionContent';
import ContentCreationContent from './serviceContents/ContentCreationContent';
import CreativeServicesContent from './serviceContents/CreativeServicesContent';

interface ServiceContentProps {
  activeService: string;
}

const ServiceContent = ({ activeService }: ServiceContentProps) => {
  const contentMap: { [key: string]: JSX.Element } = {
    socialMedia: <SocialMediaContent />,
    ama: <AMAContent />,
    partnerships: <PartnershipsContent />,
    promotion: <PromotionContent />,
    content: <ContentCreationContent />,
    creative: <CreativeServicesContent />
  };
  
  return contentMap[activeService] || contentMap.socialMedia;
};

export default ServiceContent;

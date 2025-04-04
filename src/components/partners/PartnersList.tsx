
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Partner } from '../../types/Partner';
import PartnerCard from './PartnerCard';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ShowMoreButton from './ShowMoreButton';

interface PartnersListProps {
  partners: Partner[];
}

const PartnersList: React.FC<PartnersListProps> = ({ partners }) => {
  const isMobile = useIsMobile();
  const [showAll, setShowAll] = useState<boolean>(false);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  // For mobile: Display partners in a carousel
  if (isMobile) {
    // Display all partners if showAll is true, otherwise show only the first 6
    const displayedPartners = showAll ? partners : partners.slice(0, 6);
    
    return (
      <div className="px-1">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2">
            {displayedPartners.map((partner, index) => (
              <CarouselItem key={index} className="pl-2 basis-full sm:basis-1/2">
                <PartnerCard partner={partner} index={index} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-6">
            <CarouselPrevious className="relative static h-9 w-9 border border-neon-blue/30 bg-dark-lighter hover:bg-dark-lighter hover:border-neon-blue/60">
              <ChevronLeft className="h-5 w-5 text-neon-blue" />
            </CarouselPrevious>
            <CarouselNext className="relative static h-9 w-9 border border-neon-blue/30 bg-dark-lighter hover:bg-dark-lighter hover:border-neon-blue/60">
              <ChevronRight className="h-5 w-5 text-neon-blue" />
            </CarouselNext>
          </div>
        </Carousel>
        
        <ShowMoreButton 
          showAll={showAll} 
          toggleShowAll={() => setShowAll(!showAll)} 
          isMobile={true}
        />
      </div>
    );
  }

  // For desktop: Keep the original grid layout
  return (
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-20px" }}
    >
      {partners.map((partner, index) => (
        <PartnerCard
          key={index}
          partner={partner}
          index={index}
        />
      ))}
    </motion.div>
  );
};

export default PartnersList;

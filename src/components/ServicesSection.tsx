import React, { useState } from 'react';
import { MessageSquare, BarChart3, Link, Users, FileText, ChevronRight, Globe, Youtube, Twitter, Image, Video, Zap, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<number>(0);
  const isMobile = useIsMobile();
  
  const services: Service[] = [
    {
      icon: <BarChart3 size={24} />,
      title: "Social Media Growth & Management",
      description: "Strategic growth and engagement across leading platforms in the Web3 space.",
      features: [
        "Twitter (X) community building and engagement",
        "Telegram group management and moderation",
        "YouTube channel optimization and content strategy",
        "Binance Square presence establishment",
        "Comprehensive social media analytics and reporting"
      ]
    },
    {
      icon: <MessageSquare size={24} />,
      title: "AMA & Event Hosting",
      description: "Professional hosting and management of virtual events to increase project visibility.",
      features: [
        "X Space events with industry leaders",
        "Twitter Audio Live broadcasts and discussions",
        "Telegram Audio Live sessions with engaged communities",
        "Binance Live broadcasts and promotional events",
        "Moderated panel discussions on blockchain topics",
        "Community Q&A sessions with project teams",
        "Post-event content distribution and amplification"
      ]
    },
    {
      icon: <Link size={24} />,
      title: "Corporate Partnerships & Listings",
      description: "Strategic partnerships and exchange listings to boost project credibility and reach.",
      features: [
        "Exchange listing acquisition and management",
        "Strategic partnership development with key industry players",
        "Partnership negotiation and relationship management",
        "Co-marketing opportunities with established projects",
        "Industry alliance building and management"
      ]
    },
    {
      icon: <Users size={24} />,
      title: "Brand Promotion",
      description: "Comprehensive brand building strategies tailored for Web3 projects.",
      features: [
        "Integrated marketing campaigns across platforms",
        "Creative social media content creation",
        "Brand identity development and refinement",
        "Community-focused promotional activities",
        "Brand awareness metrics and performance tracking"
      ]
    },
    {
      icon: <FileText size={24} />,
      title: "Content Creation",
      description: "Expert development of technical and marketing content for blockchain projects.",
      features: [
        "Whitepaper writing and editing",
        "Gitbook documentation creation",
        "Marketing materials development",
        "Technical article writing for Web3 concepts",
        "Social media content calendars and creation"
      ]
    },
    {
      icon: <Image size={24} />,
      title: "Creative Services",
      description: "Bring your ideas to life with visuals that captivate and engage.",
      features: [
        "Graphics Design: Logos, brand identity, web & app designs",
        "Video Editing: Promotional videos, tutorials, event recaps",
        "3D Design & Animation: 3D modeling, animations, product visuals",
        "Web3 & Blockchain Animations: Explainers, tokenomics, NFT assets",
        "UI/UX design for Web3 applications and platforms"
      ]
    }
  ];

  if (isMobile) {
    return (
      <section id="services" className="section-padding bg-dark relative overflow-hidden py-16">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] bg-repeat opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-12 text-center">
            <span className="inline-block px-4 py-1 rounded-full bg-neon-purple/10 text-neon-purple text-sm font-medium mb-4">Our Services</span>
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-yellow via-neon-blue to-neon-purple">What We Offer</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto"></div>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {services.map((service, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="mb-3 border-0"
              >
                <AccordionTrigger className="bg-dark-lighter/50 rounded-lg p-3 text-left hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-dark-lighter flex items-center justify-center text-gray-300">
                      {service.icon}
                    </div>
                    <span className="font-medium text-white">{service.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-4 bg-dark-lighter/30 rounded-b-lg mt-1">
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-2">
                        <div className="text-neon-purple mt-1">
                          <ChevronRight size={16} />
                        </div>
                        <p className="text-gray-300">{feature}</p>
                      </div>
                    ))}
                  </div>
                  
                  {index === 1 && (
                    <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-3 gap-2">
                      <div className="flex flex-col items-center space-y-2 p-3 rounded-lg bg-dark-lighter/70 border border-neon-purple/20">
                        <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                          <img 
                            src="/lovable-uploads/a00fcad1-0ec2-4e5f-990a-21d712dee436.png" 
                            alt="Binance" 
                            className="w-6 h-6" 
                          />
                        </div>
                        <span className="text-white font-medium text-xs">Binance Live</span>
                      </div>
                      <div className="flex flex-col items-center space-y-2 p-3 rounded-lg bg-dark-lighter/70 border border-neon-blue/20">
                        <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                          <img 
                            src="/lovable-uploads/9dfc0dbd-c375-443d-9fe6-a78d72d3b770.png" 
                            alt="X" 
                            className="w-6 h-6" 
                          />
                        </div>
                        <span className="text-white font-medium text-xs">X Audio</span>
                      </div>
                      <div className="flex flex-col items-center space-y-2 p-3 rounded-lg bg-dark-lighter/70 border border-[#0088cc]/20">
                        <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                          <img 
                            src="/lovable-uploads/f766f5d3-c5e9-421c-8717-cbd7f83eeaea.png" 
                            alt="Telegram" 
                            className="w-6 h-6" 
                          />
                        </div>
                        <span className="text-white font-medium text-xs">Telegram</span>
                      </div>
                    </div>
                  )}
                  
                  {index === 5 && (
                    <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-2 gap-3">
                      <div className="flex items-center space-x-3 p-3 rounded-lg bg-dark-lighter/70">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-600 flex items-center justify-center">
                          <Image size={16} className="text-white" />
                        </div>
                        <span className="text-white text-xs">Graphics Design</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 rounded-lg bg-dark-lighter/70">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center">
                          <Video size={16} className="text-white" />
                        </div>
                        <span className="text-white text-xs">Video Production</span>
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-6">
                    <a 
                      href="#contact" 
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="inline-block px-5 py-2 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full text-white text-sm font-medium"
                    >
                      Get Started
                    </a>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="section-padding bg-dark relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] bg-repeat opacity-20"></div>
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-neon-blue/5 filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-neon-yellow/5 filter blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-neon-purple/10 text-neon-purple text-sm font-medium mb-4">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-yellow via-neon-blue to-neon-purple">What We Offer</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-2">
              {services.map((service, index) => (
                <motion.button
                  key={index}
                  className={`w-full text-left p-4 rounded-lg transition-all flex items-center gap-3 ${
                    activeService === index 
                      ? 'border-l-4 border-neon-purple bg-dark-lighter/50 shadow-lg shadow-neon-purple/10' 
                      : 'hover:bg-dark-lighter/30'
                  }`}
                  onClick={() => setActiveService(index)}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    activeService === index 
                      ? 'bg-gradient-to-br from-neon-yellow to-neon-purple text-white' 
                      : 'bg-dark-lighter text-gray-300'
                  }`}>
                    {service.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className={`font-medium ${activeService === index ? 'text-white' : 'text-gray-300'}`}>
                      {service.title}
                    </span>
                    
                    {index === 1 && (
                      <div className="voice-wave inline-flex mt-1">
                        <div className="bar h-2"></div>
                        <div className="bar h-1"></div>
                        <div className="bar h-3"></div>
                        <div className="bar h-2"></div>
                      </div>
                    )}
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-3 rounded-xl p-8 bg-dark-lighter/50 backdrop-blur-sm border border-white/10 shadow-xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            key={activeService}
            animate={{ opacity: [0, 1], y: [20, 0] }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-yellow to-neon-blue">{services[activeService].title}</h3>
              <p className="text-gray-300">{services[activeService].description}</p>
            </div>
            
            <div className="space-y-3">
              {services[activeService].features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <div className="text-neon-purple mt-1">
                    <ChevronRight size={16} />
                  </div>
                  <p className="text-gray-300">{feature}</p>
                </motion.div>
              ))}
            </div>
            
            {activeService === 1 && (
              <motion.div 
                className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex flex-col items-center space-y-3 p-4 rounded-lg bg-dark-lighter/70 border border-neon-purple/20">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity
                      }}
                    >
                      <img 
                        src="/lovable-uploads/a00fcad1-0ec2-4e5f-990a-21d712dee436.png" 
                        alt="Binance" 
                        className="w-8 h-8" 
                      />
                    </motion.div>
                  </div>
                  <span className="text-white font-medium text-sm">Binance Live</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={`binance-dot-${i}`}
                        className="w-1.5 h-1.5 rounded-full bg-[#F0B90B]"
                        animate={{ 
                          opacity: [0.6, 1, 0.6],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{ 
                          duration: 1.5,
                          delay: i * 0.2,
                          repeat: Infinity
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-3 p-4 rounded-lg bg-dark-lighter/70 border border-neon-blue/20">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, -5, 5, 0]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        delay: 0.5
                      }}
                    >
                      <img 
                        src="/lovable-uploads/9dfc0dbd-c375-443d-9fe6-a78d72d3b770.png" 
                        alt="X" 
                        className="w-7 h-7" 
                      />
                    </motion.div>
                  </div>
                  <span className="text-white font-medium text-sm">Twitter Audio Live</span>
                  <div className="flex space-x-1">
                    {[...Array(4)].map((_, i) => (
                      <motion.div 
                        key={`twitter-wave-${i}`} 
                        className="w-1.5 bg-yellow-400 rounded-t-sm"
                        animate={{ 
                          height: [
                            `${4 + Math.floor(Math.random() * 6)}px`,
                            `${8 + Math.floor(Math.random() * 6)}px`, 
                            `${4 + Math.floor(Math.random() * 6)}px`
                          ]
                        }}
                        transition={{ 
                          duration: 1.2,
                          repeat: Infinity,
                          delay: i * 0.2
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-3 p-4 rounded-lg bg-dark-lighter/70 border border-[#0088cc]/20">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        delay: 1
                      }}
                    >
                      <img 
                        src="/lovable-uploads/f766f5d3-c5e9-421c-8717-cbd7f83eeaea.png" 
                        alt="Telegram" 
                        className="w-8 h-8" 
                      />
                    </motion.div>
                  </div>
                  <span className="text-white font-medium text-sm">Telegram Audio Live</span>
                  <div className="flex space-x-1">
                    {[...Array(4)].map((_, i) => (
                      <motion.div 
                        key={`telegram-wave-${i}`}
                        className="w-1.5 bg-yellow-400 rounded-t-sm"
                        animate={{ 
                          height: [
                            `${4 + Math.floor(Math.random() * 6)}px`,
                            `${8 + Math.floor(Math.random() * 6)}px`, 
                            `${4 + Math.floor(Math.random() * 6)}px`
                          ]
                        }}
                        transition={{ 
                          duration: 1.2,
                          repeat: Infinity,
                          delay: i * 0.2
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
            
            {activeService === 5 && (
              <motion.div 
                className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex flex-col items-center space-y-3 p-4 rounded-lg bg-dark-lighter/70 border border-neon-purple/20">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-600 flex items-center justify-center">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity
                      }}
                    >
                      <Image size={24} className="text-white" />
                    </motion.div>
                  </div>
                  <span className="text-white font-medium text-sm">Graphics Design</span>
                  <motion.div
                    className="h-3 w-24 bg-gray-700 rounded-full overflow-hidden"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                  >
                    <div className="h-full bg-gradient-to-r from-purple-400 to-pink-600 rounded-full"></div>
                  </motion.div>
                </div>

                <div className="flex flex-col items-center space-y-3 p-4 rounded-lg bg-dark-lighter/70 border border-neon-blue/20">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, -5, 5, 0]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        delay: 0.5
                      }}
                    >
                      <Video size={24} className="text-white" />
                    </motion.div>
                  </div>
                  <span className="text-white font-medium text-sm">Video Production</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.div 
                        key={i} 
                        className="w-1.5 h-4 bg-blue-400 rounded"
                        animate={{ 
                          height: [4, 16, 8, 12, 4],
                        }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity, 
                          delay: i * 0.1,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-3 p-4 rounded-lg bg-dark-lighter/70 border border-green-400/20">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center">
                    <motion.div
                      animate={{ 
                        rotateY: [0, 360],
                      }}
                      transition={{ 
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M18 8s2 1 2 5v1c0 4-2 5-2 5M18 8s-2 1-2 5v1c0 4 2 5 2 5M18 8V5a2 2 0 0 0-4 0v3M18 8H6M6 8s-2 1-2 5v1c0 4 2 5 2 5M6 8s2 1 2 5v1c0 4-2 5-2 5M6 8V5a2 2 0 0 1 4 0v3" />
                      </svg>
                    </motion.div>
                  </div>
                  <span className="text-white font-medium text-sm">3D Animation</span>
                  <motion.div 
                    className="w-6 h-6 bg-green-500/30 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>

                <div className="flex flex-col items-center space-y-3 p-4 rounded-lg bg-dark-lighter/70 border border-yellow-400/20">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-600 flex items-center justify-center">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 15, -15, 0]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity
                      }}
                    >
                      <Zap size={24} className="text-white" />
                    </motion.div>
                  </div>
                  <span className="text-white font-medium text-sm">Web3 Animations</span>
                  <div className="flex space-x-1">
                    {[...Array(3)].map((_, i) => (
                      <motion.div 
                        key={i}
                        className="w-2 h-2 bg-yellow-400 rounded-full"
                        animate={{
                          y: [0, -6, 0],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: i * 0.3
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
            
            <div className="mt-8">
              <motion.a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-block px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full text-white font-medium shadow-lg shadow-neon-purple/20"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

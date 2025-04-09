
import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { motion } from 'framer-motion';
import { Calendar, Users, Mic, Headphones, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function AMAEventHostingSection() {
  const { t } = useLanguage();

  return (
    <section id="ama-events" className="section-padding relative overflow-hidden bg-dark-lighter">
      {/* Background decorations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] bg-repeat opacity-20"></div>
        <motion.div 
          className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-neon-blue/5 filter blur-3xl"
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
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-neon-purple/5 filter blur-3xl"
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
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-neon-purple/10 text-neon-purple text-sm font-medium mb-4">
            {t('amaEventHosting')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-yellow to-neon-purple">
            Professional Event Hosting
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We specialize in hosting and managing virtual events that increase your project's visibility
            and engage with your community in meaningful ways.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mt-6"></div>
        </motion.div>

        {/* Featured Platforms */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Binance Live */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="overflow-hidden border border-white/10 bg-dark/70 backdrop-blur-lg h-full">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                    {/* Binance Logo */}
                    <img 
                      src="/lovable-uploads/a00fcad1-0ec2-4e5f-990a-21d712dee436.png" 
                      alt="Binance" 
                      className="w-8 h-8" 
                    />
                  </div>
                  <CardTitle className="text-2xl text-white">{t('binanceLiveEvents')}</CardTitle>
                </div>
                <CardDescription className="text-gray-300">
                  Reach millions of users on the world's largest crypto exchange platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative mt-2 mb-8">
                  <div className="bg-gradient-to-r from-[#F0B90B]/20 to-transparent p-6 rounded-lg border border-[#F0B90B]/30">
                    <ul className="space-y-3">
                      <EventFeature icon={<Users size={18} />} text="Access to Binance's global audience" />
                      <EventFeature icon={<Calendar size={18} />} text="Scheduled promotional events" />
                      <EventFeature icon={<Mic size={18} />} text="Professional hosting and moderation" />
                      <EventFeature icon={<Headphones size={18} />} text="Live Q&A sessions with your team" />
                    </ul>
                    
                    <div className="mt-6 flex justify-center">
                      <div className="inline-flex items-center h-8 px-4 py-2 space-x-1 bg-[#F0B90B]/10 rounded-full">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={`binance-wave-${i}`}
                            className="w-1.5 bg-[#F0B90B] rounded-full"
                            animate={{ 
                              height: [
                                `${4 + Math.floor(Math.random() * 10)}px`,
                                `${12 + Math.floor(Math.random() * 8)}px`, 
                                `${4 + Math.floor(Math.random() * 10)}px`
                              ]
                            }}
                            transition={{
                              duration: 1 + Math.random() * 0.5,
                              repeat: Infinity,
                              repeatType: "reverse",
                              ease: "easeInOut"
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Twitter Audio Live with X Logo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="overflow-hidden border border-white/10 bg-dark/70 backdrop-blur-lg h-full">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                    {/* X (Twitter) Logo */}
                    <img 
                      src="/lovable-uploads/9dfc0dbd-c375-443d-9fe6-a78d72d3b770.png" 
                      alt="X" 
                      className="w-7 h-7" 
                    />
                  </div>
                  <CardTitle className="text-2xl text-white">{t('twitterAudioLive')}</CardTitle>
                </div>
                <CardDescription className="text-gray-300">
                  Connect with your community through Twitter's audio spaces
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative mt-2 mb-8">
                  <div className="bg-gradient-to-r from-gray-800/50 to-transparent p-6 rounded-lg border border-gray-700/30">
                    <ul className="space-y-3">
                      <EventFeature icon={<Users size={18} />} text="Engage with crypto enthusiasts" />
                      <EventFeature icon={<Calendar size={18} />} text="Regular Twitter Space events" />
                      <EventFeature icon={<Mic size={18} />} text="Industry expert discussions" />
                      <EventFeature icon={<Headphones size={18} />} text="Community-driven Q&A sessions" />
                    </ul>
                    
                    <div className="mt-6 flex justify-center">
                      <div className="inline-flex items-center h-8 px-4 py-2 space-x-1 bg-gray-700/20 rounded-full">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={`twitter-wave-${i}`}
                            className="w-1.5 bg-white rounded-full"
                            animate={{ 
                              height: [
                                `${4 + Math.floor(Math.random() * 10)}px`,
                                `${12 + Math.floor(Math.random() * 8)}px`, 
                                `${4 + Math.floor(Math.random() * 10)}px`
                              ]
                            }}
                            transition={{
                              duration: 1 + Math.random() * 0.5,
                              repeat: Infinity,
                              repeatType: "reverse",
                              ease: "easeInOut"
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Telegram Audio Live with Telegram Logo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="overflow-hidden border border-white/10 bg-dark/70 backdrop-blur-lg h-full">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                    {/* Telegram Logo */}
                    <img 
                      src="/lovable-uploads/f766f5d3-c5e9-421c-8717-cbd7f83eeaea.png" 
                      alt="Telegram" 
                      className="w-8 h-8" 
                    />
                  </div>
                  <CardTitle className="text-2xl text-white">{t('telegramAudioLive')}</CardTitle>
                </div>
                <CardDescription className="text-gray-300">
                  Host engaging audio sessions in Telegram communities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative mt-2 mb-8">
                  <div className="bg-gradient-to-r from-[#0088cc]/20 to-transparent p-6 rounded-lg border border-[#0088cc]/30">
                    <ul className="space-y-3">
                      <EventFeature icon={<Users size={18} />} text="Direct access to Telegram communities" />
                      <EventFeature icon={<Calendar size={18} />} text="Scheduled AMA sessions with enthusiasts" />
                      <EventFeature icon={<Mic size={18} />} text="Interactive voice discussions" />
                      <EventFeature icon={<Headphones size={18} />} text="Real-time community engagement" />
                    </ul>
                    
                    <div className="mt-6 flex justify-center">
                      <div className="inline-flex items-center h-8 px-4 py-2 space-x-1 bg-[#0088cc]/10 rounded-full">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={`telegram-wave-${i}`}
                            className="w-1.5 bg-[#0088cc] rounded-full"
                            animate={{ 
                              height: [
                                `${4 + Math.floor(Math.random() * 10)}px`,
                                `${12 + Math.floor(Math.random() * 8)}px`, 
                                `${4 + Math.floor(Math.random() * 10)}px`
                              ]
                            }}
                            transition={{
                              duration: 1 + Math.random() * 0.5,
                              repeat: Infinity,
                              repeatType: "reverse",
                              ease: "easeInOut"
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Additional Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          <AdditionalService 
            icon={<Mic className="text-neon-yellow" />}
            title="Panel Discussions"
            description="Moderated panel discussions with industry experts on blockchain topics."
          />
          <AdditionalService 
            icon={<Users className="text-neon-blue" />}
            title="Community AMA"
            description="Direct engagement with your community through Ask Me Anything sessions."
          />
          <AdditionalService 
            icon={<Calendar className="text-neon-purple" />}
            title="Event Planning"
            description="Complete event planning from conception to post-event content distribution."
          />
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-white">
            Ready to boost your project's visibility?
          </h3>
          <Button
            className="bg-gradient-to-r from-neon-blue to-neon-purple text-white px-8 py-6 rounded-full hover:shadow-lg hover:shadow-neon-purple/20 transition-all"
            onClick={() => {
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Schedule Your Event
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// Additional Components
const EventFeature = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
  <li className="flex items-center gap-3 text-white">
    <div className="text-white/80">
      {icon}
    </div>
    <span>{text}</span>
  </li>
);

const AdditionalService = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode, 
  title: string, 
  description: string 
}) => (
  <div className="p-6 rounded-xl border border-white/10 bg-dark backdrop-blur-sm hover:bg-dark-lighter/50 transition-all group">
    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

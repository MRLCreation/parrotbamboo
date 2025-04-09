
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Shield, Zap, Code, Sparkles } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { useLanguage } from '../hooks/useLanguage';

export default function AboutSection() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Globe className="w-7 h-7 text-neon-blue" />,
      title: t('webThreeExperts'),
      description: t('webThreeExpertsDesc')
    },
    {
      icon: <Zap className="w-7 h-7 text-neon-purple" />,
      title: t('innovativeStrategies'),
      description: t('innovativeStrategiesDesc')
    },
    {
      icon: <Code className="w-7 h-7 text-neon-cyan" />,
      title: t('technicalExcellence'),
      description: t('technicalExcellenceDesc')
    },
    {
      icon: <Shield className="w-7 h-7 text-blue-400" />,
      title: t('trustedPartners'),
      description: t('trustedPartnersDesc')
    }
  ];

  return (
    <section id="about" className="section-padding bg-dark-lighter relative overflow-hidden">
      {/* Enhanced professional background elements */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
        {/* Subtle grid pattern for a corporate look */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Professional radial gradient */}
        <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon-blue/10 to-transparent"></div>
      </motion.div>
      
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      {/* Professional geometric shapes with reduced intensity */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-neon-blue/5 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-neon-purple/5 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-neon-yellow/5 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <motion.span 
            className="inline-block px-6 py-2 rounded-full bg-neon-purple/10 text-neon-purple text-sm font-semibold mb-4 border border-neon-purple/30"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('aboutUs')}
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-yellow via-neon-blue to-neon-purple"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('whoWeAre')}
          </motion.h2>
          
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          ></motion.div>
        </div>

        <motion.div 
          className="max-w-3xl mx-auto mb-16 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <Card className="backdrop-blur-md bg-dark/80 border border-white/10 shadow-xl overflow-hidden">
            <CardContent className="p-8">
              <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 blur-xl"></div>
              
              <div className="flex justify-center mb-6">
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                  className="relative z-20"
                >
                  <Sparkles className="w-12 h-12 text-neon-yellow" />
                </motion.div>
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{t('companyName')}</h3>
                <p className="text-xl text-neon-blue font-medium">{t('companyFocus')}</p>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed relative z-10">
                <span className="text-white font-semibold">ParrotBamboo</span> {t('aboutDescription')}
              </p>
              
              <motion.div 
                className="mt-6 h-1 w-24 bg-gradient-to-r from-neon-yellow to-neon-blue mx-auto"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              />
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="rounded-xl overflow-hidden backdrop-blur-sm bg-dark/60 border border-white/10 shadow-lg hover:shadow-neon-blue/10 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 30px -15px rgba(0, 131, 202, 0.3)"
              }}
            >
              <div className="p-6">
                <div className="flex justify-center mb-6">
                  <motion.div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-dark-lighter to-dark border border-white/10"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.7 }}
                  >
                    {feature.icon}
                  </motion.div>
                </div>
                <motion.h3 
                  className="text-xl font-semibold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {feature.title}
                </motion.h3>
                <p className="text-gray-400 text-center">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

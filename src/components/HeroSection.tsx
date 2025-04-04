import React from 'react';
import { ArrowRight, Rocket, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
import CryptoSnow from './hero/CryptoSnow';

export default function HeroSection() {
  const isMobile = useIsMobile();
  
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark via-dark-lighter to-dark pt-20 relative overflow-hidden"
    >
      {/* Professional background with subtle patterns and gradients */}
      <motion.div
        className="absolute inset-0 z-0 opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute w-full h-full">
          {/* More sophisticated gradients for a professional look */}
          <motion.div 
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-neon-yellow/5 filter blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 10, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-1/3 right-1/3 w-72 h-72 rounded-full bg-neon-blue/5 filter blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -20, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.div 
            className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-neon-purple/5 filter blur-3xl"
            animate={{
              scale: [0.8, 1.1, 0.8],
              x: [0, 15, 0],
              y: [0, -15, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>

        {/* Enhanced digital circuit patterns with lower opacity for subtlety */}
        <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] bg-repeat opacity-5"></div>
        
        {/* Additional professional background elements */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-yellow/20 to-transparent"></div>
      </motion.div>

      {/* Crypto Logo Snow Effect with reduced count */}
      <CryptoSnow />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <motion.div
                className="flex items-center justify-center mb-2"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.span 
                  className="bg-clip-text text-transparent bg-gradient-to-r from-neon-yellow via-neon-blue to-neon-purple gradient-animate"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{ backgroundSize: '200% 200%' }}
                >
                  Revolutionizing
                </motion.span>
                <motion.div
                  className="ml-4 relative top-1"
                  initial={{ scale: 0.8 }}
                  animate={{ 
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut"
                  }}
                >
                  <Rocket size={40} className="text-neon-yellow filter drop-shadow-[0_0_8px_rgba(242,183,5,0.7)]" strokeWidth={1.5} />
                </motion.div>
              </motion.div>
              <motion.span 
                className="block mt-2 text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                the Digital Landscape
              </motion.span>
            </h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              A premier Web3 agency driving innovation in blockchain, crypto, and decentralized technologies.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <motion.a 
                href="#services" 
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-yellow rounded-full text-white font-medium flex items-center justify-center gap-2 transition-transform shadow-[0_0_15px_rgba(0,131,202,0.3)]"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(242, 183, 5, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Our Services</span> 
                <motion.div
                  animate={{ 
                    x: [0, 5, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 1.5,
                    ease: "easeInOut" 
                  }}
                >
                  <ArrowRight size={16} />
                </motion.div>
              </motion.a>
              
              <motion.a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3 border border-neon-yellow rounded-full text-white font-medium hover:bg-neon-yellow/10 transition-colors"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(242, 183, 5, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Floating particles - kept but with reduced opacity */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/70"
            style={{
              width: Math.random() * 4 + 1,
              height: Math.random() * 4 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
      
      {/* Hide scroll indicator on mobile */}
      {!isMobile && (
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <motion.div 
            className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center p-1"
            animate={{ 
              scale: [1, 1.1, 1],
              y: [0, 5, 0]
            }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <motion.div 
              className="w-1 h-3 bg-neon-yellow rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                y: [0, 5, 0] 
              }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            ></motion.div>
          </motion.div>
          <span className="mt-2 text-sm text-gray-400">Scroll</span>
        </motion.div>
      )}
    </section>
  );
}

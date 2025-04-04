
import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

const MissionVisual: React.FC = () => {
  return (
    <motion.div 
      className="order-1 lg:order-2 flex justify-center"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="relative w-full max-w-md">
        <motion.div 
          className="w-full aspect-square rounded-2xl overflow-hidden p-1 border border-neon-yellow/20 shadow-xl"
          animate={{ 
            boxShadow: ["0 0 0px rgba(242, 183, 5, 0)", "0 0 30px rgba(242, 183, 5, 0.3)", "0 0 0px rgba(242, 183, 5, 0)"]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="w-full h-full rounded-xl bg-gradient-to-br from-dark-lighter via-dark to-dark flex items-center justify-center">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="inline-flex p-8 rounded-full bg-dark border-2 border-neon-purple/30 mb-6 relative"
                animate={{ 
                  y: [0, -20, 0], 
                  rotate: [0, 5, 0, -5, 0],
                  boxShadow: ["0 0 0px rgba(139, 92, 246, 0)", "0 0 30px rgba(139, 92, 246, 0.4)", "0 0 0px rgba(139, 92, 246, 0)"]
                }}
                transition={{ 
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                  boxShadow: { duration: 3, repeat: Infinity }
                }}
              >
                <motion.div
                  className="relative"
                  animate={{ 
                    rotate: [0, 360]
                  }}
                  transition={{ 
                    duration: 20, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                >
                  <motion.div
                    className="absolute -top-10 -left-10 w-8 h-8 rounded-full bg-neon-purple/30"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.7, 0.3]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-5 -right-5 w-6 h-6 rounded-full bg-neon-yellow/30"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.2, 0.6, 0.2]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  />
                  <Rocket className="w-20 h-20 text-neon-purple" />
                </motion.div>
              </motion.div>
              
              <motion.h3 
                className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-yellow via-neon-purple to-neon-blue"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ backgroundSize: '200% 200%' }}
              >
                Revolutionizing
              </motion.h3>
              
              <motion.p 
                className="text-white mt-2 text-xl"
                animate={{ 
                  opacity: [0.7, 1, 0.7],
                  y: [0, -5, 0] 
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                the Digital Landscape
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Orbital particles */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          <motion.div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-neon-yellow/70"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          ></motion.div>
          
          <motion.div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-neon-blue/70"
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          ></motion.div>
          
          <motion.div
            className="absolute left-0 top-1/2 transform -translate-y-1/2 w-5 h-5 rounded-full bg-neon-purple/70"
            animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 3.5, repeat: Infinity }}
          ></motion.div>
          
          <motion.div
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-neon-cyan/70"
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 4, repeat: Infinity }}
          ></motion.div>
        </motion.div>
        
        {/* Trailing rocket particles */}
        <motion.div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {[...Array(8)].map((_, i) => (
            <motion.div 
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                backgroundColor: i % 3 === 0 ? 'rgba(242, 183, 5, 0.7)' : 
                                i % 3 === 1 ? 'rgba(139, 92, 246, 0.7)' : 'rgba(0, 131, 202, 0.7)',
                top: `${Math.sin(i * (Math.PI / 4)) * 70}px`,
                left: `${Math.cos(i * (Math.PI / 4)) * 70}px`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 2 + (i * 0.2),
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MissionVisual;

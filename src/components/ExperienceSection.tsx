
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, CheckCircle, Calendar, Medal } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

interface Achievement {
  title: string;
  description: string;
  icon: React.ReactNode;
  value: string;
  label: string;
  color: string;
}

export default function ExperienceSection() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const achievements: Achievement[] = [
    {
      icon: <Award className="text-neon-blue filter drop-shadow-[0_0_8px_rgba(0,131,202,0.7)]" size={28} />,
      title: t('majorProjects'),
      description: "Successfully represented and promoted top-tier blockchain ventures",
      value: "25+",
      label: t('projects'),
      color: "from-neon-blue to-blue-400"
    },
    {
      icon: <CheckCircle className="text-neon-purple filter drop-shadow-[0_0_8px_rgba(139,92,246,0.7)]" size={28} />,
      title: t('xSpaceEvents'),
      description: "Hosted high-impact discussions with industry leaders",
      value: "100+",
      label: t('events'),
      color: "from-neon-purple to-purple-400"
    },
    {
      icon: <Calendar className="text-neon-cyan filter drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]" size={28} />,
      title: t('yearsExperience'),
      description: "Deep expertise in the Web3 and blockchain industry",
      value: "5+",
      label: t('years'),
      color: "from-neon-cyan to-cyan-400"
    }
  ];
  
  // For the animated achievement numbers
  const AnimatedValue = ({ value }: { value: string }) => {
    // Extract the numeric part if possible
    const numericValue = parseInt(value.replace(/\D/g, ''));
    
    if (isNaN(numericValue)) {
      return <span className="text-4xl font-bold">{value}</span>;
    }
    
    return (
      <motion.span
        className="text-5xl font-extrabold"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {value}
      </motion.span>
    );
  };

  return (
    <section id="experience" className="py-24 md:py-32 bg-dark relative overflow-hidden" ref={containerRef}>
      {/* Enhanced background elements */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
        <div className="h-full w-full bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-neon-purple/20 via-transparent to-neon-blue/20"></div>
      </motion.div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-40 right-10 w-72 h-72 rounded-full bg-neon-blue/5 filter blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      ></motion.div>
      
      <motion.div 
        className="absolute bottom-40 left-10 w-80 h-80 rounded-full bg-neon-purple/5 filter blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      ></motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center mb-4"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="mr-2"
            >
              <Medal size={24} className="text-neon-yellow filter drop-shadow-[0_0_8px_rgba(242,183,5,0.7)]" />
            </motion.div>
            <span className="inline-block px-6 py-2 rounded-full bg-neon-purple/10 text-neon-purple text-sm font-semibold border border-neon-purple/30">{t('ourExperience')}</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className={`bg-clip-text text-transparent bg-gradient-to-r ${t('sectionColors.experience')}`}>{t('provenTrackRecord')}</span>
          </motion.h2>
          
          <motion.div 
            className={`w-32 h-1 bg-gradient-to-r ${t('sectionColors.experience')} mx-auto`}
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          ></motion.div>
        </div>

        {/* Achievements */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {achievements.map((achievement, index) => (
            <motion.div 
              key={index}
              className="rounded-xl p-8 text-center backdrop-blur-sm bg-dark-lighter/60 border border-white/10 shadow-lg"
              whileHover={{ 
                y: -10,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-6">
                <motion.div 
                  className="w-20 h-20 rounded-2xl flex items-center justify-center bg-dark border border-white/10"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  animate={{
                    boxShadow: ["0 0 0px rgba(255, 255, 255, 0.1)", "0 0 20px rgba(255, 255, 255, 0.2)", "0 0 0px rgba(255, 255, 255, 0.1)"]
                  }}
                >
                  {achievement.icon}
                </motion.div>
              </div>
              
              <motion.div 
                className="mb-4"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 * index, duration: 0.5 }}
              >
                <AnimatedValue value={achievement.value} />
                <p className="text-sm text-gray-400">{achievement.label}</p>
              </motion.div>
              
              <h3 className="text-xl font-semibold mb-3">{achievement.title}</h3>
              <p className="text-gray-300">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

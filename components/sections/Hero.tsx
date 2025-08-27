
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { personalInfo } from '../../data/content.ts';
import { Tooltip } from '../ui/Section.tsx';

const Hero: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.04, 0.62, 0.23, 0.98]
      },
    },
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center lg:text-left">
      <motion.div 
        className="w-full max-w-4xl flex flex-col items-center gap-12 pt-32 lg:pt-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
                className="w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-accent-purple/50 shadow-2xl shadow-accent-purple/20 flex items-center justify-center bg-surface" 
                variants={itemVariants}
            >
                <motion.img
                    src={personalInfo.avatar}
                    alt={`Photo of ${personalInfo.name}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                />
            </motion.div>

            <div className="flex-1">
                <motion.h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold" variants={itemVariants}>
                    <span className="block text-secondary">Hi, I'm</span>
                    <span className="block text-primary bg-clip-text text-transparent bg-gradient-to-r from-accent-cyan to-accent-magenta animate-text-gradient bg-size-200%">
                    {personalInfo.name}
                    </span>
                </motion.h1>

                <motion.h2 className="text-xl sm:text-2xl mt-4 text-secondary font-medium" variants={itemVariants}>
                    {personalInfo.title}
                </motion.h2>

                <motion.p className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg text-secondary" variants={itemVariants}>
                    {personalInfo.pitch}
                </motion.p>

                <motion.div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" variants={itemVariants}>
                    <Tooltip text="Let's get in touch!">
                      <motion.button
                      onClick={scrollToContact}
                      className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-accent-purple px-8 py-3 font-bold text-white transition-all duration-300 focus:outline-none"
                      whileHover={{ 
                          scale: 1.05, 
                          boxShadow: '0 0 30px rgba(139, 92, 246, 0.6), 0 0 10px rgba(217, 70, 239, 0.4) inset'
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                      >
                      <span>Hire Me</span>
                      <motion.div 
                          className="ml-2"
                          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                      >
                          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </motion.div>
                      </motion.button>
                    </Tooltip>
                    <Tooltip text="See my work">
                      <motion.button
                      onClick={scrollToProjects}
                      className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-accent-cyan/50 px-8 py-3 font-bold text-accent-cyan transition-all duration-300 hover:bg-accent-cyan/10"
                      whileHover={{ 
                          scale: 1.05, 
                          boxShadow: '0 0 30px rgba(6, 182, 212, 0.5)'
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                      >
                      <span>View Projects</span>
                      </motion.button>
                    </Tooltip>
                </motion.div>
            </div>
        </div>
        
        <motion.div 
          className="w-full"
          variants={itemVariants}
        >
          <div className="relative w-full max-w-lg mx-auto animate-tilt">
            <div className="light-trail-card p-[2px] rounded-3xl">
              <div className="bg-surface rounded-[22px] p-6 text-center shadow-lg shadow-accent-purple/10">
                <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-cyan to-accent-magenta">
                  I Build Futuristic Web & Mobile Apps
                </h3>
                <p className="mt-2 text-secondary text-base">
                  Let's turn your vision into a stunning, high-performance reality.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;
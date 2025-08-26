import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section.tsx';
import { skills } from '../../data/content.ts';
import type { Skill } from '../../types.ts';

const categories: Skill['category'][] = ['Frontend', 'Backend', 'AI/ML', 'Cloud', 'Tools'];
const allCategories: ("All" | Skill['category'])[] = ['All', ...categories];


const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Skill['category'] | 'All'>('All');

  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <Section id="skills" title="Technical Skills" contentClassName="max-w-6xl">
      <div className="flex justify-center flex-wrap gap-3 md:gap-4 mb-12">
        {allCategories.map(category => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-3 rounded-full text-base font-semibold transition-all duration-300 border ${
              selectedCategory === category
                ? 'bg-accent-purple text-white border-transparent shadow-lg shadow-accent-purple/30'
                : 'bg-surface border-secondary text-secondary hover:border-primary hover:text-primary'
            }`}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          >
            {category}
          </motion.button>
        ))}
      </div>
      <motion.div
        key={selectedCategory}
        className="flex flex-wrap justify-center gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredSkills.map(skill => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            layout
            className="bg-panel/80 backdrop-blur-sm border border-white/10 rounded-full px-5 py-3 text-secondary font-medium"
            whileHover={{ 
              scale: 1.1, 
              color: '#FFF', 
              boxShadow: '0 0 15px rgba(163, 230, 53, 0.4)',
              borderColor: '#a3e635'
            }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {skill.name}
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Skills;
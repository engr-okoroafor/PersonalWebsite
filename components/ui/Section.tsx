import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className, contentClassName }) => {
  return (
    <motion.section
      id={id}
      className={`py-24 scroll-m-28 ${className || ''}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        {title.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </h2>
      <div className={`mx-auto ${contentClassName || 'max-w-4xl'}`}>
        {children}
      </div>
    </motion.section>
  );
};

export default Section;


interface TooltipProps {
  children: React.ReactNode;
  text: string;
  position?: 'top' | 'bottom';
}

export const Tooltip: React.FC<TooltipProps> = ({ children, text, position = 'bottom' }) => {
    const [isHovered, setIsHovered] = useState(false);

    const tooltipVariants = {
        hidden: { opacity: 0, y: position === 'top' ? 10 : -10, scale: 0.9 },
        visible: { opacity: 1, y: 0, scale: 1 },
    };
    
    const positionClasses = position === 'top' 
        ? '-top-12' 
        : 'top-full mt-2';
    
    const arrowPositionClasses = position === 'top'
        ? 'absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-surface transform rotate-45 border-b border-r border-white/10'
        : 'absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-surface transform rotate-45 border-t border-l border-white/10';

    return (
        <div 
          className="relative inline-flex items-center justify-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {children}
          <AnimatePresence>
              {isHovered && (
              <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={tooltipVariants}
                  transition={{ duration: 0.2 }}
                  className={`absolute z-50 left-1/2 -translate-x-1/2 whitespace-nowrap bg-surface text-primary text-sm font-semibold px-3 py-1.5 rounded-lg border border-white/10 shadow-lg ${positionClasses}`}
                  role="tooltip"
              >
                  {text}
                  <div className={arrowPositionClasses} />
              </motion.div>
              )}
          </AnimatePresence>
        </div>
    );
};
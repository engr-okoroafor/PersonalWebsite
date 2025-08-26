import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle } from 'lucide-react';
import Section from '../ui/Section.tsx';
import { experiences } from '../../data/content.ts';

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Work Experience">
      <div className="relative">
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-white/10" aria-hidden="true"></div>
        <div className="space-y-16">
        {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={index} className="relative flex items-center">
                <motion.div
                  className={`w-1/2 ${isLeft ? 'pr-8' : 'pl-8'}`}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  <div className={`p-6 rounded-4xl bg-panel/80 backdrop-blur-md border border-white/10 shadow-lg ${isLeft ? 'text-right' : 'text-left'}`}>
                    <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                    <p className="text-accent-cyan font-semibold">{exp.company}</p>
                    <p className="text-sm text-secondary mb-4">{exp.duration}</p>
                    <ul className={`space-y-2 text-secondary ${isLeft ? 'items-end' : 'items-start'} flex flex-col`}>
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 max-w-md">
                          {!isLeft && <CheckCircle className="h-5 w-5 text-accent-lime mt-1 flex-shrink-0" />}
                          <span>{item}</span>
                          {isLeft && <CheckCircle className="h-5 w-5 text-accent-lime mt-1 flex-shrink-0" />}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
                
                <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-accent-purple rounded-full flex items-center justify-center border-4 border-base">
                  <Briefcase size={16} />
                </div>

                <div className={`w-1/2 ${isLeft ? 'order-first' : ''}`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Experience;

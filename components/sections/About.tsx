
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';
import Section from '../ui/Section.tsx';
import { personalInfo, aboutContent } from '../../data/content.ts';

const About: React.FC = () => {
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <Section id="about" title="About Me">
      <div className="bg-panel/70 backdrop-blur-md p-8 md:p-12 rounded-4xl border border-white/10">
        <p className="text-lg md:text-xl text-secondary leading-relaxed text-center">
          {aboutContent.summary}
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <motion.div variants={itemVariants}>
            <MapPin className="mx-auto h-10 w-10 text-accent-cyan mb-2" />
            <h3 className="font-semibold text-primary">Location</h3>
            <p className="text-secondary">{personalInfo.contact.location}</p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Mail className="mx-auto h-10 w-10 text-accent-magenta mb-2" />
            <h3 className="font-semibold text-primary">Email</h3>
            <a href={`mailto:${personalInfo.contact.email}`} className="text-secondary hover:text-accent-magenta transition-colors">{personalInfo.contact.email}</a>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Phone className="mx-auto h-10 w-10 text-accent-purple mb-2" />
            <h3 className="font-semibold text-primary">Phone</h3>
            <p className="text-secondary">{personalInfo.contact.phone}</p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default About;
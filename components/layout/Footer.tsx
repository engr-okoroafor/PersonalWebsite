import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github } from 'lucide-react';
import { personalInfo } from '../../data/content.ts';
import { Tooltip } from '../ui/Section.tsx';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 mt-24 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-secondary">
        <div className="flex justify-center space-x-8 mb-4">
          <Tooltip text="LinkedIn">
            <motion.a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                className="transition-colors text-secondary"
                whileHover={{ color: '#06b6d4' }}
              >
                <Linkedin size={24} />
              </motion.div>
            </motion.a>
          </Tooltip>
          <Tooltip text="GitHub">
            <motion.a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                className="transition-colors text-secondary"
                whileHover={{ color: '#E4E4E7' }}
              >
                <Github size={24} />
              </motion.div>
            </motion.a>
          </Tooltip>
        </div>
        <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
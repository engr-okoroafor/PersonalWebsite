import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download } from 'lucide-react';
import { personalInfo } from '../../data/content.ts';
import { downloadResumeAsPdf } from '../../utils/generatePdf.ts';
import { Tooltip } from '../ui/Section.tsx';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl flex items-center justify-between rounded-3xl bg-panel/80 p-3 backdrop-blur-lg border border-white/10 shadow-lg md:p-4">
        <motion.a 
          href="#"
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-cyan to-accent-magenta"
          whileHover={{ scale: 1.05 }}
          onClick={(e) => { e.preventDefault(); scrollToSection('#hero'); }}
        >
          CO
        </motion.a>
        
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <motion.a 
              key={link.name} 
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
              className="text-secondary hover:text-primary transition-colors"
              whileHover={{ y: -2, textShadow: '0 0 12px #06b6d4, 0 0 2px #ffffff' }}
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Tooltip text="Download my Resume">
            <motion.button 
              onClick={downloadResumeAsPdf}
              className="hidden md:flex items-center space-x-2 bg-accent-purple/80 hover:bg-accent-purple text-white font-semibold py-2 px-4 rounded-full transition-all"
              whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(139, 92, 246, 0.6)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} />
              <span>Resume</span>
            </motion.button>
          </Tooltip>
          
          <div className="md:hidden">
            <motion.button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full bg-white/10"
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <motion.div initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>X</motion.div> : 'Menu'}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 mt-2 p-4 bg-panel/90 backdrop-blur-lg border border-white/10 rounded-3xl shadow-xl"
          >
            <nav className="flex flex-col items-center space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  className="text-secondary hover:text-primary transition-colors text-lg"
                >
                  {link.name}
                </a>
              ))}
              <motion.button 
                onClick={downloadResumeAsPdf}
                className="w-full flex items-center justify-center space-x-2 bg-accent-purple/80 hover:bg-accent-purple text-white font-semibold py-3 px-4 rounded-full transition-all"
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(139, 92, 246, 0.6)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={18} />
                <span>Resume</span>
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Download } from 'lucide-react';
import Section, { Tooltip } from '../ui/Section.tsx';
import { personalInfo } from '../../data/content.ts';
import { downloadResumeAsPdf } from '../../utils/generatePdf.ts';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:${personalInfo.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <Section id="contact" title="Get In Touch">
      <div className="bg-panel/70 backdrop-blur-md p-8 md:p-12 rounded-4xl border border-white/10 max-w-2xl mx-auto">
        <p className="text-center text-secondary mb-8">
          Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new opportunities.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="bg-surface border border-white/10 rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-accent-purple transition-shadow" />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className="bg-surface border border-white/10 rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-accent-purple transition-shadow" />
          </div>
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows={5} required className="w-full bg-surface border border-white/10 rounded-3xl p-3 focus:outline-none focus:ring-2 focus:ring-accent-purple transition-shadow"></textarea>
          
          <div className="text-center">
            <Tooltip text="Send me an email">
              <motion.button
                type="submit"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-accent-purple px-8 py-3 font-bold text-white transition-all duration-300 focus:outline-none"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 0 30px rgba(139, 92, 246, 0.6), 0 0 10px rgba(217, 70, 239, 0.4) inset'
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <span>Send Message</span>
                <Send className="ml-2 h-5 w-5" />
              </motion.button>
            </Tooltip>
          </div>
        </form>
        <div className="text-center mt-12">
            <p className="text-secondary mb-4">Or download my resume directly:</p>
            <Tooltip text="Download my Resume">
              <motion.button
                onClick={downloadResumeAsPdf}
                className="inline-flex items-center space-x-2 bg-accent-cyan/80 hover:bg-accent-cyan text-white font-semibold py-3 px-6 rounded-full transition-all"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 0 30px rgba(6, 182, 212, 0.5)'
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <Download size={18} />
                <span>Download Resume</span>
              </motion.button>
            </Tooltip>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
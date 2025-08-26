import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Section, { Tooltip } from '../ui/Section.tsx';
import { projects } from '../../data/content.ts';
import type { Project } from '../../types.ts';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      className="flex flex-col h-full bg-panel/70 backdrop-blur-md rounded-4xl border border-white/10 group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139, 92, 246, 0.4)' }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.04, 0.62, 0.23, 0.98] }}
    >
      <div className="overflow-hidden rounded-t-[2rem]">
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-primary">{project.title}</h3>
        <p className="text-secondary mb-4 text-sm flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="bg-accent-lime/10 text-accent-lime text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
          ))}
        </div>
        <div className="flex items-center space-x-6 mt-auto">
          {project.liveUrl && (
            <Tooltip text="View Live Demo" position="bottom">
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-secondary hover:text-accent-cyan transition-colors"
                whileHover={{ y: -2 }}
              >
                <ExternalLink size={18} className="mr-1" /> Live Demo
              </motion.a>
            </Tooltip>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Featured Projects" contentClassName="max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard project={project} index={index} key={index} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
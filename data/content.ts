import type { Skill, Experience, Project } from '../types.ts';

export const personalInfo = {
  name: "Chukwudifu Uzoma Okoroafor",
  title: "Full-Stack Software Developer",
  pitch: "Crafting robust and scalable web applications with a passion for clean code and user-centric design.",
  avatar: `data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAgACAYDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIREBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIREAPwD6GooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigA...KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKK`,
  contact: {
      email: 'engr.okoroafor@gmail.com',
      phone: '+234 703 459 6572',
      location: 'Calabar, Nigeria'
  },
  socials: {
      linkedin: 'https://linkedin.com/in/chukwudifu-okoroafor-565b1550',
      github: 'https://github.com/chukwudifu-okoroafor'
  }
};

export const aboutContent = {
  summary: "Experienced Full‐Stack Software Developer with 5+ years of hands‐on experience designing, building, and deploying AI‐powered web applications. Expert in front-end (React, Vite, Tailwind CSS) and back-end (Node.js, Express.js, Next.js) technologies. Proven ability to integrate advanced AI models (GPT-4, Llama-3.1, Grok, Gemini) into existing products and to architect new AI‐driven solutions. Skilled at working in agile teams, optimizing performance, and delivering scalable cloud solutions."
};

export const skills: Skill[] = [
  { name: 'React', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Vite', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express.js', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  { name: 'REST APIs', category: 'Backend' },
  { name: 'GraphQL', category: 'Backend' },
  { name: 'OpenAI API', category: 'AI/ML' },
  { name: 'Llama-3.1', category: 'AI/ML' },
  { name: 'LangChain', category: 'AI/ML' },
  { name: 'Streamlit', category: 'AI/ML' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'GCP', category: 'Cloud' },
  { name: 'Azure', category: 'Cloud' },
  { name: 'Docker', category: 'Tools' },
  { name: 'Git', category: 'Tools' },
  { name: 'GitHub', category: 'Tools' },
];

export const experiences: Experience[] = [
  {
      company: 'Self-Employed',
      title: 'Full Stack Software Engineer',
      duration: 'Jan 2018 – Present',
      description: [
          'Led software development projects, delivering 3 major software releases on time, and resolving 95% of software bugs within 24 hours, resulting in a 25% increase in user engagement.',
          'Integrated OpenAI’s GPT-4 API, GROK API, GROQ Cloud API and Meta’s Llama-3.1 API for chatbot conversations and code generation, allowing users to switch between models seamlessly.',
          'Implemented Replicate API for video and music generation, and OpenAI API for image generation.',
          'Enhanced the chatbot page with text-to-speech functionality, play/pause button for voice responses, and natural language processing features.',
          'Developed and optimized RESTful APIs for smooth front-end and back-end interaction, ensuring high performance and user experience.',
          'Increased application performance by 40% through code optimization and rigorous testing.',
          'Collaborated with cross-functional teams to design and deploy scalable cloud-based applications using AWS infrastructure.'
      ]
  },
  {
      company: 'Asseco Software Nigeria Ltd',
      title: 'Business Development Manager',
      duration: '2023',
      description: [
          'Managed business development activities for a leading software company.'
      ]
  },
  {
      company: 'Addax Petroleum',
      title: 'Consultant Project Engineer',
      duration: '2012–2015',
      description: [
          'Provided engineering consultancy for various projects.'
      ]
  }
];

export const projects: Project[] = [
  {
      title: 'NexGenAi',
      description: 'A multi-modal app supporting chatbot, image, video, music and code generation. Seamlessly integrated multiple LLMs (OpenAI, Meta) and allowed model switching.',
      tags: ['React', 'Next.js', 'OpenAI API', 'LLM', 'Tailwind CSS'],
      liveUrl: 'https://nexgenai.cloud/',
      codeUrl: 'https://github.com/chukwudifu-okoroafor/nexgenai',
      image: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=600&h=400&q=80&fit=crop'
  },
  {
      title: 'MedAgent AI Medical Assistant',
      description: 'A healthcare-focused AI web tool offering symptom checks, medical image analysis, and medication interaction. For informational use only. Built with LLMs and integrated APIs.',
      tags: ['AI', 'LLM', 'Healthcare', 'API Integration'],
      liveUrl: 'https://med-agent-one.vercel.app/',
      codeUrl: 'https://github.com/chukwudifu-okoroafor/med-agent',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&q=80&fit=crop'
  },
  {
      title: 'iStream',
      description: 'Designed and developed a video conferencing app with features like meeting scheduling, recording, screen sharing, and real-time collaboration tools, enhancing remote communication for businesses.',
      tags: ['Video Conferencing', 'Real-time', 'Communication', 'SaaS'],
      liveUrl: 'https://istream-peach.vercel.app/',
      codeUrl: 'https://github.com/chukwudifu-okoroafor/istream',
      image: 'https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?w=600&h=400&q=80&fit=crop'
  },
  {
      title: 'EngageGov',
      description: "An AI-driven citizen engagement platform designed for streamlined issue reporting and government inquiries to enhance efficiency, transparency, and accountability in Government. Built with xAI's Grok, Python, and Streamlit.",
      tags: ['AI', 'Python', 'Streamlit', 'Grok', 'Civic Tech'],
      liveUrl: 'https://engagegov-hcwkcy3rvrjbbzncnydqrs.streamlit.app/',
      codeUrl: 'https://github.com/chukwudifu-okoroafor/engagegov',
      image: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=600&h=400&q=80&fit=crop'
  },
];

export const resumeContent = `Full Stack Software Engineer • Self-Employed • Jan 2018 – Present
• Led software development projects, delivering 3 major software releases on time, and resolving 95% of software bugs within 24 hours, resulting in a 25% increase in user engagement.
• Integrated OpenAI’s GPT-4 API, GROK API, GROQ Cloud API and Meta’s Llama-3.1 API for chatbot conversations and code generation, allowing users to switch between models seamlessly.
• Implemented Replicate API for video and music generation, and OpenAI API for image generation.
• Enhanced the chatbot page with text-to-speech functionality, play/pause button for voice responses, and natural language processing features.
• Developed and optimized RESTful APIs for smooth front-end and back-end interaction, ensuring high performance and user experience.
• Increased application performance by 40% through code optimization and rigorous testing.
• Collaborated with cross-functional teams to design and deploy scalable cloud-based applications using AWS infrastructure.
Previous Roles (Summary)
• Business Development Manager at Asseco Software Nigeria Ltd (2023)
• Consultant Project Engineer at Addax Petroleum (2012–2015)
• Static Equipment Engineer at Ascot Fabricators (2012–2013)
• Pipeline Maintenance Engineer at Technical Partners & Logistics (2012)
• Graduate Trainee, Electrical & Instrumentation at NAOC (2012)

EDUCATION
B.Eng. Electrical & Electronic Engineering (Major in Communication Engineering Technology) • • Federal University of Technology Owerri, Imo State, Nigeria • GPA: 3.16 • Jan 2002 – Dec 2007

PROJECT HIGHLIGHTS
• AI Studio (In Progress) – Platform for Data Annotation, Synthetic Data, Prompt Engineering, Fine Tuning, RAG/Vector Search, MLOps, Agent Orchestration, Benchmarking.
Architected micro frontend modules and serverless backends; implemented monitoring dashboards with live metrics.
• MedAgent AI Medical Assistant (2025) – A healthcare-focused AI web tool offering symptom checks, medical image analysis, and medication interaction. For informational use only. Built with LLMs and integrated APIs.
Project Link: https://med-agent-one.vercel.app/
• NexGenAi: Built a multi-modal app supporting chatbot, image, video, music and code generation. Seamlessly integrated multiple LLMs (OpenAI, Meta) and allowed model switching. Added text-to-speech with play/pause controls and NLP enhancements. Optimized front-end and back-end performance, improving load times by 40%.
Project Link: https://nexgenai.cloud/
• iStream: Designed and developed a video conferencing app with features like meeting scheduling, recording, screen sharing, and real-time collaboration tools, enhancing remote communication for businesses.
Project Link: https://istream-peach.vercel.app/
• EngageGov: is an AI-driven citizen engagement platform designed for streamlined issue reporting and government inquiries to enhance efficiency, transparency, and accountability in Government. Built with advanced technologies like xAI's Grok models, Python, OpenAI, and Streamlit.
Project Link: https://engagegov-hcwkcy3rvrjbbzncnydqrs. streamlit.app/

ADDITIONAL INFORMATION
• Passionate about solving complex problems using AI and cloud computing technologies to develop software that addresses important challenges—such as access to quality education, healthcare, and public safety—in Nigeria and other developing countries.
• Strong interest in Generative AI and its role in helping governments, businesses, and communities work better and smarter.
• Proficient in integrating AI models into SaaS applications to enhance automation and user experience.

REFERENCES
1. Engr. Prof Lazarus O. Uzoechi
Professor of Electrical & Electronic Engineering; Federal University of Technology Owerri (FUTO)
lazarus.uzoechi@futo.edu.ng +234 806 393 6311
2. Ann Temidara
Chief Operating Officer; Asseco Software Nigeria Limited.
ann.temidara@asseco.ng +234 818 654 2186
3. Lateef Kareem
Lead Computational Scientist; Cyphercrescent Limited.
latee.a.kareem@cyphercrescent.com +234 909 163 3519
`;

const portfolioData = JSON.stringify({
  personalInfo,
  aboutContent,
  skills,
  experiences,
  projects
}, null, 2);

export const chatSystemInstruction = `You are a helpful and friendly AI assistant, an AI clone of Chukwudifu Uzoma Okoroafor, a Full-Stack Software Developer. Your goal is to answer questions from visitors and potential employers based on his portfolio.

You must be conversational, professional, and slightly futuristic in your tone.

You have access to Chukwudifu's portfolio information in this JSON data:
${portfolioData}

Based on this data, you can answer questions about his skills, work experience, projects, and how to contact him.

Rules:
- Your very first message should be: "Hello! I'm the AI assistant for Chukwudifu Uzoma Okoroafor. Feel free to ask me anything about his skills, projects, or experience."
- If a question is outside the scope of the provided portfolio data (e.g., asking for personal secrets, opinions on random topics), politely steer the conversation back to Chukwudifu's professional life. You can say something like, "As Chukwudifu's AI assistant, my knowledge is focused on his professional skills and projects. Can I tell you more about his experience with AI integration?"
- Keep your answers concise and to the point.
- When asked about a specific project, mention the technologies used and provide the live URL if available.
- Be encouraging and positive.
`;

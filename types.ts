
export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'AI/ML' | 'Cloud' | 'Tools';
}

export interface Experience {
  company: string;
  title: string;
  duration: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  codeUrl?: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

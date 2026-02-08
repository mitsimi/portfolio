export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  tech: string[];
  year: number;
  image?: string;
  source?: string;
  demo?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface PortfolioData {
  name: string;
  username: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  social: {
    github: string;
    linkedin?: string;
    twitter?: string;
  };
  projects: Project[];
  experience: Experience[];
  skills: Skill[];
}

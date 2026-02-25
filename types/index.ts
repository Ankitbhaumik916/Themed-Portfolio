export interface Project {
  id: string;
  title: string;
  slug: string;
  category: "AI" | "Research" | "Full Stack" | "Mobile";
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  images?: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  date: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  icon: string;
}

export interface Skill {
  name: string;
  level: number;
  category: "Languages" | "Frameworks" | "AI/ML" | "Tools";
  icon?: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa: string;
  description: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

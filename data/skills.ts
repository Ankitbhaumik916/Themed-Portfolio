import { Skill } from "@/types";

export const skills: Skill[] = [
  // Languages
  {
    name: "Python",
    level: 95,
    category: "Languages",
  },
  {
    name: "C++",
    level: 85,
    category: "Languages",
  },
  {
    name: "Java",
    level: 65,
    category: "Languages",
  },
  {
    name: "JavaScript",
    level: 90,
    category: "Languages",
  },
  {
    name: "TypeScript",
    level: 88,
    category: "Languages",
  },
  {
    name: "SQL",
    level: 85,
    category: "Languages",
  },
  
  // Frameworks
  {
    name: "Next.js",
    level: 92,
    category: "Frameworks",
  },
  {
    name: "React",
    level: 93,
    category: "Frameworks",
  },
  {
    name: "Node.js",
    level: 88,
    category: "Frameworks",
  },
  {
    name: "Django",
    level: 82,
    category: "Frameworks",
  },
  {
    name: "Flask",
    level: 85,
    category: "Frameworks",
  },
  {
    name: "React Native",
    level: 80,
    category: "Frameworks",
  },
  
  // AI/ML
  {
    name: "TensorFlow",
    level: 90,
    category: "AI/ML",
  },
  {
    name: "PyTorch",
    level: 92,
    category: "AI/ML",
  },
  {
    name: "OpenCV",
    level: 88,
    category: "AI/ML",
  },
  {
    name: "Reinforcement Learning",
    level: 85,
    category: "AI/ML",
  },
  {
    name: "Recommender Systems",
    level: 87,
    category: "AI/ML",
  },
  {
    name: "Computer Vision",
    level: 89,
    category: "AI/ML",
  },
  {
    name: "NLP",
    level: 82,
    category: "AI/ML",
  },
  {
    name: "Model Explainability (XAI)",
    level: 85,
    category: "AI/ML",
  },
  
  // Tools
  {
    name: "Git",
    level: 90,
    category: "Tools",
  },
  {
    name: "Docker",
    level: 83,
    category: "Tools",
  },
  {
    name: "MongoDB",
    level: 85,
    category: "Tools",
  },
  {
    name: "PostgreSQL",
    level: 82,
    category: "Tools",
  },
  {
    name: "AWS",
    level: 78,
    category: "Tools",
  },
  {
    name: "Vercel",
    level: 88,
    category: "Tools",
  },
  {
    name: "Figma",
    level: 80,
    category: "Tools",
  },
];

export const skillCategories = ["Languages", "Frameworks", "AI/ML", "Tools"] as const;

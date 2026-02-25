import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "BioLens",
    slug: "biolens",
    category: "AI",
    description: "AI-powered health and fitness tracking system with real-time analysis and personalized recommendations.",
    longDescription: `BioLens is an advanced AI-powered health and fitness tracking system that leverages computer vision and machine learning to provide real-time health analytics. The system uses CNN models for pose estimation and activity recognition, combined with deep learning for personalized health recommendations.

## Key Features:
- Real-time pose estimation using MediaPipe
- Activity recognition with 95% accuracy
- Personalized workout recommendations
- Calorie tracking and nutrition analysis
- Integration with wearable devices
- Progressive web app for cross-platform support

## Technical Implementation:
The project uses TensorFlow for model training, OpenCV for image processing, and React Native for the mobile interface. The backend is built with Node.js and MongoDB for storing user data and analytics.

## Impact:
Successfully deployed to 1000+ users in beta testing phase with positive feedback on accuracy and user experience.`,
    technologies: ["TensorFlow", "OpenCV", "Python", "React Native", "Node.js", "MongoDB", "MediaPipe"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&q=80",
    ],
    github: "https://github.com/Ankitbhaumik916/BIOLENS_BACKEND_ML",
    demo: "https://biolens-demo.vercel.app",
    featured: true,
    date: "2024-01",
  },
  {
    id: "2",
    title: "NCF22 - RL Food Recommender",
    slug: "ncf22-food-recommender",
    category: "Research",
    description: "Neural Collaborative Filtering with Reinforcement Learning for personalized diet recommendations with explainable AI.",
    longDescription: `NCF22 is a cutting-edge food recommendation system that combines Neural Collaborative Filtering with Reinforcement Learning to provide personalized diet recommendations. The system incorporates explainable AI (XAI) to help users understand why certain foods are recommended.

## Research Contribution:
This project was developed under the guidance of Dr. D. Bhattacharya as part of advanced research in recommender systems. The novel approach combines deep learning with reinforcement learning to adapt recommendations based on user feedback.

## Key Innovations:
- Hybrid NCF-RL architecture
- LIME and SHAP integration for explainability
- Real-time preference adaptation
- Nutritional constraint optimization
- Multi-objective recommendation (taste, health, budget)

## Results:
- 87% user satisfaction rate
- 23% improvement over baseline NCF
- Published findings in research paper (under review)`,
    technologies: ["PyTorch", "Reinforcement Learning", "NCF", "LIME", "SHAP", "Flask", "React"],
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&q=80",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    ],
    github: "https://github.com/Ankitbhaumik916/ncf22",
    featured: true,
    date: "2023-11",
  },
  {
    id: "3",
    title: "Signature Authentication System",
    slug: "signature-authentication",
    category: "AI",
    description: "Deep learning-based signature verification system using CNN for fraud detection with 96% accuracy.",
    longDescription: `Advanced signature authentication system using Convolutional Neural Networks (CNN) for detecting fraudulent signatures. The system employs Siamese networks to learn signature similarities and differences.

## Technical Approach:
- Siamese CNN architecture
- Triplet loss optimization
- Data augmentation for robustness
- Real-time verification API
- Mobile-first design

## Performance Metrics:
- 96% accuracy on test set
- 0.98 F1-score
- Sub-second inference time
- Robust to variations in signing conditions`,
    technologies: ["TensorFlow", "Keras", "CNN", "Python", "FastAPI", "Docker"],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    github: "https://github.com/Ankitbhaumik916/Signet",
    featured: false,
    date: "2023-08",
  },
  {
    id: "4",
    title: "Cloud Kitchen Manager",
    slug: "cloud-kitchen-manager",
    category: "Full Stack",
    description: "Comprehensive cloud kitchen management system with AI-powered analytics dashboard and inventory optimization.",
    longDescription: `Full-stack cloud kitchen management platform featuring AI-powered analytics, inventory management, order tracking, and business intelligence. Built for scalability and real-time operations.

## Features:
- Real-time order management
- AI-powered demand forecasting
- Inventory optimization
- Multi-location support
- Analytics dashboard
- Customer relationship management
- Integration with delivery platforms

## Tech Stack:
Modern tech stack with Next.js frontend, Node.js backend, and MongoDB database. Deployed on AWS with auto-scaling capabilities.

## Business Impact:
Reduced inventory waste by 35% and improved order processing time by 50%.`,
    technologies: ["Next.js", "Node.js", "MongoDB", "TensorFlow.js", "AWS", "Redux", "Socket.io"],
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80",
    github: "https://github.com/ankitbhaumik",
    demo: "https://cloud-kitchen-demo.vercel.app",
    featured: true,
    date: "2023-06",
  },
  {
    id: "5",
    title: "Pixel_Shrinker",
    slug: "pixel-shrinker",
    category: "Full Stack",
    description: "Retro-style image compression tool with modern algorithms and nostalgic UI design.",
    longDescription: `Pixel_Shrinker is a unique image compression tool that combines modern compression algorithms with a retro aesthetic. The tool provides various compression techniques while maintaining visual quality.

## Features:
- Multiple compression algorithms
- Batch processing
- Quality comparison preview
- Drag-and-drop interface
- Retro pixel art UI
- Export in multiple formats
- Compression statistics

## Performance:
Achieves up to 70% file size reduction while maintaining visual quality using advanced techniques like adaptive quantization and smart color palette generation.`,
    technologies: ["React", "TypeScript", "Canvas API", "WebAssembly", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    github: "https://github.com/Ankitbhaumik916/COMPRESSOR",
    demo: "https://pixel-shrinker.vercel.app",
    featured: false,
    date: "2023-04",
  },
  {
    id: "6",
    title: "Al-Mirah Research Platform",
    slug: "al-mirah",
    category: "Research",
    description: "Collaborative research platform for medical image analysis using deep learning.",
    longDescription: `Al-Mirah is a collaborative research platform designed for medical professionals and researchers to analyze medical images using state-of-the-art deep learning models.

## Research Focus:
- Medical image segmentation
- Disease detection and classification
- Multi-modal image analysis
- Collaborative annotation tools
- Model interpretability

## Contributions:
Worked under Dr. C. Amuthadevi on advancing medical AI research. Developed novel segmentation techniques for CT and MRI scans.`,
    technologies: ["PyTorch", "Python", "Django", "PostgreSQL", "React", "TensorFlow"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    github: "https://github.com/ankitbhaumik",
    featured: false,
    date: "2023-09",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "all") return projects;
  return projects.filter((project) => project.category === category);
}

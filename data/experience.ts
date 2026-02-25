import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Research Project Member",
    company: "BioLens & Al-Mirah Research",
    location: "SRM Institute of Science and Technology, Chennai",
    period: "Jan 2024 - Oct 2025",
    description: "Leading research initiatives in AI-powered health analytics and medical image analysis under the guidance of Dr. C. Amuthadevi.",
    responsibilities: [
      "Developed BioLens, an AI-powered health and fitness tracking system with real-time pose estimation",
      "Implemented deep learning models for activity recognition achieving 95% accuracy",
      "Collaborated on Al-Mirah medical image analysis platform using CNN and transfer learning",
      "Published research findings and presented at institutional conferences",
      "Mentored junior researchers on ML model development and optimization",
    ],
    technologies: ["TensorFlow", "PyTorch", "OpenCV", "Python", "MediaPipe", "React Native"],
  },
  {
    id: "2",
    title: "Research Intern",
    company: "Diet Recommendation System Research",
    location: "Under Dr. D. Bhattacharya, SRM IST",
    period: "Oct 2025 - Feb 2026",
    description: "Research internship focused on developing novel recommendation systems using Neural Collaborative Filtering and Reinforcement Learning with explainable AI components.",
    responsibilities: [
      "Designed and implemented NCF22, a hybrid recommender system combining NCF and RL",
      "Integrated LIME and SHAP for model explainability and interpretability",
      "Conducted extensive experiments comparing baseline NCF with RL-enhanced approach",
      "Achieved 87% user satisfaction rate with 23% improvement over baseline",
      "Prepared research paper for publication in peer-reviewed journal",
    ],
    technologies: ["PyTorch", "Reinforcement Learning", "NCF", "LIME", "SHAP", "Flask", "Pandas"],
  },
  {
    id: "3",
    title: "Data Analyst Intern",
    company: "Amdox Technologies",
    location: "Remote",
    period: "Nov 2025 - Feb 2026",
    description: "Worked on data analysis and visualization projects, developing insights from large datasets and creating interactive dashboards for business intelligence.",
    responsibilities: [
      "Analyzed large datasets to identify trends and patterns for business decision-making",
      "Created interactive dashboards using Power BI and Tableau for data visualization",
      "Developed ETL pipelines for data processing and transformation",
      "Collaborated with cross-functional teams to deliver data-driven insights",
      "Automated reporting processes reducing manual effort by 60%",
    ],
    technologies: ["Python", "SQL", "Power BI", "Tableau", "Pandas", "NumPy", "Excel"],
  },
];

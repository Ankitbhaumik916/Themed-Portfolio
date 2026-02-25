import { Achievement, Education, SocialLink } from "@/types";

export const achievements: Achievement[] = [
  {
    id: "1",
    title: "Smart India Hackathon Finalist",
    description: "Selected as finalist among 10,000+ teams nationwide for innovative AI solution in healthcare domain.",
    date: "2023-12",
    icon: "trophy",
  },
  {
    id: "2",
    title: "Top 4 - Ossom Hacks",
    description: "Secured top 4 position in national-level hackathon with AI-powered food recommendation system.",
    date: "2023-11",
    icon: "award",
  },
  {
    id: "3",
    title: "HackRush 2.0 Finalist",
    description: "Finalist in inter-college hackathon for developing real-time signature authentication system.",
    date: "2023-09",
    icon: "medal",
  },
  {
    id: "4",
    title: "Merit Scholarship",
    description: "Awarded merit-based scholarship for academic excellence with 9.34 CGPA at SRM IST.",
    date: "2023-08",
    icon: "star",
  },
  {
    id: "5",
    title: "HackerRank Gold Badge - Python",
    description: "Achieved gold badge in Python programming and problem solving on HackerRank platform.",
    date: "2023-06",
    icon: "code",
  },
  {
    id: "6",
    title: "Research Paper Published",
    description: "Co-authored research paper on explainable AI in recommender systems (under review).",
    date: "2024-01",
    icon: "book",
  },
];

export const education: Education[] = [
  {
    degree: "Bachelor of Technology in Computer Science Engineering",
    institution: "SRM Institute of Science and Technology",
    location: "Chennai, Tamil Nadu, India",
    period: "2021 - 2025",
    gpa: "9.34",
    description: "Specialization in Artificial Intelligence and Machine Learning. Active researcher under Dr. C. Amuthadevi and Dr. D. Bhattacharya.",
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/ankitbhaumik",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/ankitbhaumik",
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:ankit.bhaumik@example.com",
    icon: "mail",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/ankitbhaumik",
    icon: "twitter",
  },
];

export const personalInfo = {
  name: "Ankit Bhaumik",
  title: "AI Engineer | Researcher | Full Stack Innovator",
  location: "Chennai, India",
  bio: "Passionate AI engineer and researcher specializing in machine learning, deep learning, and full-stack development. Currently pursuing B.Tech at SRM Institute of Science and Technology with a CGPA of 9.34. Experienced in developing AI-powered applications, conducting research in explainable AI, and building scalable web applications.",
  resumeUrl: "/resume.pdf",
  email: "ankit.bhaumik@example.com",
};

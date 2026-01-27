import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code2, Cpu, Eye, Zap } from 'lucide-react';

/* --- ASSET MAPPING (Your image files) --- */
const assets = {
  // Close-up eye image for Hero background
  gojoEyes: "/111.png", 
  // B&W smirk for the About section
  gojoSmirk: "/download (3).jpg", 
  // Colored crazy face for Skills section
  gojoCrazy: "/download.jpg",
  // Project images
  project1: "/download (1).jpg",
  project2: "/download (2).jpg",
  project3: "/1.jpg"
};

const Portfolio = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      {/* PROGRESS BAR */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-purple-600 to-cyan-500 origin-left z-50"
        style={{ scaleX }}
      />

      <CustomCursor />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <DomainExpansionProjects />
      <LimitlessSkills />
      <CertificationsSection />
      <AchievementsSection />
      <Footer />
    </div>
  );
};

/* --- 1. CUSTOM CURSOR: "HOLLOW PURPLE" --- */
const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMouse = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMouse);
    return () => window.removeEventListener("mousemove", updateMouse);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-cyan-400 pointer-events-none z-[100] mix-blend-difference hidden md:block"
      animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
      transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
    >
      <div className="absolute inset-0 bg-purple-500 blur-md opacity-50 rounded-full scale-50" />
    </motion.div>
  );
};

/* --- 2. HERO: "THE HONORED ONE" --- */
const HeroSection = () => {
  const { scrollY } = useScroll();
  const yTransform = useTransform(scrollY, [0, 300], [0, 100]);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Animated Gradient (Void) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-[#0a0a0a] to-black z-0" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 z-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-cyan-500 rounded-full w-1 h-1"
            initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }}
            animate={{ 
              y: [null, Math.random() * -100],
              opacity: [1, 0.5, 1]
            }}
            transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>

      <motion.div 
        style={{ y: yTransform }}
        className="z-10 text-center px-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-cyan-400 tracking-[0.5em] text-sm md:text-xl font-mono mb-4 uppercase">
            Domain Expansion: Infinite Knowledge
          </h2>
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-6xl md:text-9xl font-black italic tracking-tighter text-white drop-shadow-xl"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-white to-purple-400 bg-clip-text text-transparent">
            ANKIT
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-white bg-clip-text text-transparent">
            BHAUMIK
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 flex flex-col items-center gap-2"
        >
          <p className="text-xl md:text-2xl text-gray-400 font-light">
            AI Enthusiast <span className="text-purple-500 mx-2">//</span> Tech Innovator
          </p>
          <p className="text-sm text-gray-500 font-mono mt-2">
            📍 Chennai, India | 🚀 Building AI Solutions
          </p>
        </motion.div>

        {/* Action Button */}
        <motion.a
          href="#about"
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(0, 255, 255, 0.6)" }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-12 px-8 py-4 bg-transparent border-2 border-cyan-500 text-cyan-400 font-bold uppercase tracking-widest hover:bg-cyan-500 hover:text-black hover:shadow-lg transition-all duration-300 rounded-lg group relative overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            Explore My Work
            <motion.svg 
              className="w-5 h-5"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </motion.svg>
          </span>
        </motion.a>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 z-10 text-center"
      >
        <p className="text-cyan-400 text-xs font-mono mb-3 tracking-widest">SCROLL TO DISCOVER</p>
        <svg className="w-6 h-6 text-cyan-400 mx-auto animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

/* --- 3. ABOUT: "THE SORCERER'S PATH" --- */
const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-20 max-w-7xl mx-auto relative scroll-mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Image Container with Glitch Effect */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group order-2 md:order-1"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-300"></div>
          <div className="relative bg-black rounded-lg border border-gray-800 p-2 overflow-hidden">
            <img 
              src={assets.gojoSmirk} 
              alt="Ankit Bhaumik - AI Enthusiast and Tech Innovator" 
              loading="lazy"
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 contrast-125"
            />
          </div>
        </motion.div>

        <div className="space-y-8 order-1 md:order-2">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold flex items-center gap-4"
          >
            <span className="text-purple-500">01.</span> THE SORCERER
          </motion.h2>
          
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              Currently pursuing a <strong className="text-white">B.Tech in Artificial Intelligence</strong> at 
              SRM Institute of Science and Technology with a <span className="text-cyan-400 font-mono bg-cyan-500/10 px-2 py-1 rounded">CGPA of 9.31</span> (4th Semester).
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              My technique involves integrating ML, sensor-based tracking, and cross-platform UI. 
              From engineering <strong className="text-white">BioLens</strong> to researching at 
              <strong className="text-white"> Jadavpur University</strong>, I strive to bring 
              AI-powered solutions to reality with explainability and real-world impact.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Currently interning as a <strong className="text-white">Data Analyst</strong> at Amdox Technologies, 
              focusing on data-driven insights and analytics automation using Python & SQL.
            </motion.p>
          </div>

          {/* Education Mini-Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "SRMIST", subtitle: "B.Tech AI | 2023 - Present", detail: "CGPA: 9.31 | Merit Scholarship", color: "cyan", icon: "🎓" },
              { title: "Jadavpur Univ.", subtitle: "Research Intern | Nov 2025", detail: "Diet Rec. & XAI Systems", color: "purple", icon: "🔬" },
              { title: "Class X", subtitle: "Durgapur Public School", detail: "97.6% | CBSE 2021", color: "orange", icon: "⭐" },
              { title: "Class XII", subtitle: "Durgapur Public School", detail: "85.6% | CBSE 2023", color: "green", icon: "✓" }
            ].map((edu, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className={`p-4 border border-gray-800 bg-gray-900/50 rounded-lg hover:border-${edu.color}-500 transition-all cursor-pointer group`}
              >
                <div className="text-lg mb-2">{edu.icon}</div>
                <h4 className={`text-${edu.color}-400 font-bold`}>{edu.title}</h4>
                <p className="text-sm text-gray-500">{edu.subtitle}</p>
                <p className="text-xs text-gray-400 mt-2">{edu.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* --- 4. SKILLS: "LIMITLESS TECHNIQUE" --- */
const LimitlessSkills = () => {
  const skills = [
    { name: "Python", level: "Special Grade" },
    { name: "TensorFlow", level: "Grade 1" },
    { name: "OpenCV", level: "Grade 1" },
    { name: "SQL", level: "Grade 2" },
    { name: "Jetpack Compose", level: "Grade 2" },
    { name: "YOLOv5", level: "Special Grade" },
  ];

  return (
    <section className="py-20 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none flex items-center justify-center opacity-5">
        <h1 className="text-[20vw] font-black text-white">INFINITY</h1>
      </div>

      <div id="skills" className="max-w-7xl mx-auto px-6 relative z-10 scroll-mt-20">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-right"
        >
          <span className="text-cyan-400">04.</span> CURSED TECHNIQUES
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.5, rotateZ: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.1, boxShadow: "0px 20px 40px rgba(168, 85, 247, 0.3)" }}
              className="bg-gray-900 border border-gray-800 p-6 rounded-xl flex flex-col items-center justify-center gap-4 text-center group"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="p-3 bg-black rounded-full border border-gray-700 group-hover:border-cyan-400 transition-colors"
              >
                <Code2 className="text-gray-400 group-hover:text-cyan-400" size={24} />
              </motion.div>
              <div>
                <h3 className="font-bold text-white">{skill.name}</h3>
                <p className="text-xs text-purple-400 mt-1 font-mono">{skill.level}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* --- 4. EXPERIENCE: "THE PATH OF GROWTH" --- */
const ExperienceSection = () => {
  const experiences = [
    {
      role: "Research Project Member",
      company: "SRMIST",
      supervisor: "Under Dr. C. Amuthadevi",
      duration: "2023 - Present",
      description: "Contributing to AI-powered solutions with focus on computer vision and intelligent recommendation systems.",
      responsibilities: ["ML Integration", "Sensor-based Tracking", "Cross-platform UI Development", "Behavior Analysis"],
      color: "from-cyan-500 to-blue-500",
      icon: "🔬"
    },
    {
      role: "Research Intern",
      company: "Jadavpur University",
      supervisor: "Under Dr. D. Bhattacharya",
      duration: "Nov 2025 - Present",
      description: "Building AI-driven diet recommendation systems with explainability modules (SHAP) for enhanced transparency.",
      responsibilities: ["NCF Model Development", "User-Food Interaction Modeling", "SHAP Integration", "XAI Implementation"],
      color: "from-purple-500 to-pink-500",
      icon: "🎓"
    },
    {
      role: "Data Analyst Intern",
      company: "Amdox Technologies",
      supervisor: "Tech Analytics Team",
      duration: "Nov 2025 - Present",
      description: "Performing data cleaning, trend analysis, and KPI extraction using Python and SQL.",
      responsibilities: ["Data Cleaning", "Trend Analysis", "KPI Extraction", "Dashboard Creation"],
      color: "from-orange-500 to-red-500",
      icon: "📊"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto relative">
      <motion.h2 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-16"
      >
        <span className="text-orange-500">02.</span> CAREER JOURNEY
      </motion.h2>

      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-gray-900/50 backdrop-blur border border-gray-800 p-8 rounded-lg hover:border-cyan-500/50 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl">{exp.icon}</span>
                <div className="flex-1">
                  <motion.h3 
                    className="text-2xl font-bold text-white"
                    whileHover={{ x: 5 }}
                  >
                    {exp.role}
                  </motion.h3>
                  <p className="text-purple-400 font-bold">{exp.company}</p>
                  <p className="text-gray-500 text-sm">{exp.supervisor}</p>
                  <p className="text-cyan-400 text-xs font-mono mt-1">{exp.duration}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.responsibilities.map((resp, i) => (
                  <motion.span 
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${exp.color} text-white font-semibold`}
                  >
                    {resp}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

/* --- 5. PROJECTS: "DOMAIN EXPANSION" --- */
const DomainExpansionProjects = () => {
  const projects = [
    {
      title: "BioLens",
      tagline: "AI Health & Fitness Tracker",
      desc: "Dynamic calorie monitoring with AI-driven meal recommendations. Features computer vision for food recognition, dietary analysis, SMS tracking, and electronic bill analysis. Tracked 5,000+ grocery items and reduced manual logging by 60%.",
      tech: ["Python", "OpenCV", "YOLOv5", "TensorFlow"],
      color: "border-cyan-500",
      stats: "5000+ Items",
      image: assets.project1,
      achievements: ["60% Manual Logging Reduction", "Real-time Food Recognition", "Habit Analysis"]
    },
    {
      title: "AI-Mirah",
      tagline: "AI Wardrobe Management System",
      desc: "Intelligent outfit recommendations with 85% accuracy. Considers real-time weather data, user preferences, mood, and occasion. Smart wardrobe organization with ML-driven styling suggestions.",
      tech: ["Machine Learning", "Python", "Recommender Systems", "UI/UX"],
      color: "border-purple-500",
      stats: "85% Accuracy",
      image: assets.project2,
      achievements: ["Weather-Aware Suggestions", "User Preference Learning", "Style Analytics"]
    },
    {
      title: "Pixel_Shrinker",
      tagline: "Retro Pixel-Style Image Compressor",
      desc: "Advanced image compression with three distinct modes: Lossless (quality preserved), Lossy (space optimized), and Extreme (maximum compression). Real-time file size preview with sleek, responsive retro UI.",
      tech: ["Python", "Image Processing", "PIL", "NumPy"],
      color: "border-red-500",
      stats: "3 Compression Modes",
      image: assets.project3,
      achievements: ["Real-time Preview", "Multiple Modes", "Retro Aesthetic"]
    },
    {
      title: "Cloud Kitchen Manager",
      tagline: "DSS & Analytics System",
      desc: "Real-time analysis of orders, revenue, customer ratings, and restaurant performance. AI-powered insights with voice-enabled queries, automated summaries, and interactive dashboards.",
      tech: ["Python", "SQL", "Data Analytics", "Flask"],
      color: "border-orange-500",
      stats: "Real-time Analytics",
      achievements: ["Voice-Enabled Queries", "Automated Insights", "Dashboard Analytics"]
    },
    {
      title: "Signature Authentication App",
      tagline: "CNN-Based Writer Authentication",
      desc: "Writer-dependent signature authentication using Convolutional Neural Networks. Real-time signature input validation with CEDAR dataset training. Cross-platform development with Python and Android Studio (Kotlin).",
      tech: ["Python", "CNN", "Kotlin", "Android", "TensorFlow"],
      color: "border-pink-500",
      stats: "Real-time Validation",
      achievements: ["CNN Model", "CEDAR Dataset", "Cross-Platform"]
    }
  ];

  return (
    <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-16">
        <span className="text-red-500">03.</span> DOMAIN EXPANSION
      </h2>

      <div className="space-y-20">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className={`relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center group`}
          >
            {/* Project Image/Screen */}
            <motion.div 
              className={`md:col-span-7 relative h-80 bg-gray-900 rounded-lg border-2 ${project.color} overflow-hidden group`}
              whileHover={{ scale: 1.02 }}
            >
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              ) : (
                <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-colors duration-500 flex items-center justify-center">
                  <p className="text-6xl font-black text-white/10 uppercase group-hover:text-white/5 transition-colors">
                    {project.title}
                  </p>
                </div>
              )}
              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent w-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="font-mono text-xs text-white bg-black/80 px-2 py-1 border border-gray-700">
                    {project.stats}
                  </span>
                </motion.div>
              </div>
            </motion.div>

            {/* Project Details */}
            <div className="md:col-span-5 flex flex-col justify-center space-y-4">
              <motion.h3 
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors"
              >
                {project.title}
              </motion.h3>
              <motion.p 
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-purple-400 font-mono text-sm uppercase tracking-wider"
              >
                {project.tagline}
              </motion.p>
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gray-900 p-6 rounded shadow-xl border-l-2 border-gray-700"
              >
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.desc}
                </p>
              </motion.div>

              {/* Achievements */}
              {project.achievements && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-2"
                >
                  <p className="text-cyan-400 text-xs font-bold uppercase tracking-wider">Key Achievements</p>
                  <div className="flex flex-wrap gap-2">
                    {project.achievements.map((achievement, i) => (
                      <span key={i} className="text-xs bg-gray-800 border border-purple-500/50 text-gray-300 px-3 py-1 rounded-full hover:border-purple-500 transition-colors">
                        ✓ {achievement}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Tech Stack */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap gap-3 mt-4"
              >
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs font-mono text-gray-500 hover:text-cyan-400 transition-colors bg-gray-900/50 px-3 py-1 rounded border border-gray-700">
                    {t}
                  </span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

/* --- 6. CERTIFICATIONS: "CREDENTIALS OF MASTERY" --- */
const CertificationsSection = () => {
  const certifications = [
    { name: "Python", platform: "Udemy", icon: "🐍" },
    { name: "C++", platform: "Udemy", icon: "⚙️" },
    { name: "Java", platform: "NPTEL", icon: "☕" },
    { name: "Data Structures & Algorithms", platform: "NPTEL", icon: "🔀" },
    { name: "Database Management Systems", platform: "NPTEL", icon: "🗄️" },
  ];

  return (
    <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto bg-gradient-to-b from-transparent via-slate-900/50 to-transparent">
      <motion.h2 
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-16"
      >
        <span className="text-green-500">05.</span> CREDENTIALS OF MASTERY
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, boxShadow: "0px 20px 30px rgba(34, 197, 94, 0.2)" }}
            className="p-6 bg-gray-900 border border-gray-700 rounded-xl hover:border-green-500/50 transition-all cursor-pointer group"
          >
            <div className="text-4xl mb-4 group-hover:scale-125 transition-transform">{cert.icon}</div>
            <h3 className="font-bold text-white mb-1">{cert.name}</h3>
            <p className="text-xs text-green-400 font-mono">{cert.platform}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

/* --- 7. ACHIEVEMENTS: "HONORS OF STRENGTH" --- */
const AchievementsSection = () => {
  const achievements = [
    { title: "Merit-Based Scholarship", org: "SRMIST", year: "2024", icon: "🏆" },
    { title: "Top 4 Team", org: "Ossom Hacks (GITHUB SRMIST)", year: "2024", icon: "🥇" },
    { title: "Top 10 Finalist", org: "HackRush 2.0 (SRMIST)", year: "2024", icon: "🥈" },
    { title: "University Round Finalist", org: "Smart India Hackathon 2023, 2025", year: "2023-25", icon: "🚀" },
    { title: "HackerRank Challenge Winner", org: "HackerRank", year: "2024", icon: "⭐" },
  ];

  return (
    <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-16 text-right"
      >
        <span className="text-pink-500">06.</span> HONORS OF STRENGTH
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((achievement, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gray-900/70 border-l-4 border-pink-500 rounded hover:bg-gray-800 transition-all"
          >
            <div className="flex items-start gap-4">
              <span className="text-3xl">{achievement.icon}</span>
              <div className="flex-1">
                <h3 className="font-bold text-white text-lg">{achievement.title}</h3>
                <p className="text-pink-400 text-sm">{achievement.org}</p>
                <p className="text-gray-500 text-xs font-mono mt-1">{achievement.year}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

/* --- 8. FOOTER: "THE CURTAIN" --- */
const Footer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMouse = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMouse);
    return () => window.removeEventListener("mousemove", updateMouse);
  }, []);

  return (
    <footer id="contact" className="py-16 bg-black border-t border-gray-900 text-center relative overflow-hidden scroll-mt-20">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 space-y-8">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          Are you the strongest because you're <span className="text-cyan-400">Ankit</span>?
        </motion.h2>

        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-2 text-gray-400"
        >
          <p className="text-sm font-mono">
            📧 <a href="mailto:ankitbhaumik23@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition">ankitbhaumik23@gmail.com</a>
          </p>
          <p className="text-sm font-mono">
            📱 <span className="text-purple-400">+91 7602 638 655</span>
          </p>
          <p className="text-sm font-mono">
            📍 Chennai, India
          </p>
        </motion.div>

        {/* Social Links */}
        <div className="flex justify-center gap-8 py-8">
          <SocialLink icon={<Github />} href="https://github.com/Ankitbhaumik916" label="GitHub" />
          <SocialLink icon={<Linkedin />} href="https://linkedin.com/in/ankit-bhaumik-92740a294" label="LinkedIn" />
          <SocialLink icon={<Mail />} href="mailto:ankitbhaumik23@gmail.com" label="Email" />
        </div>

        {/* Footer Text */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-2"
        >
          <p className="text-gray-600 font-mono text-sm">
            Designed & Built by <span className="text-cyan-400">Ankit Bhaumik</span>
          </p>
          <p className="text-gray-700 text-xs">
            © 2026 | The Unlimited Void Portfolio
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

const SocialLink = ({ icon, href, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -5, color: "#00D4FF" }}
    whileTap={{ scale: 0.9 }}
    className="text-gray-400 hover:text-white transition-colors group flex flex-col items-center gap-2"
  >
    {React.cloneElement(icon, { size: 28 })}
    {label && <span className="text-xs font-mono text-gray-500 group-hover:text-cyan-400">{label}</span>}
  </motion.a>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-40 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-black/50 border-b border-cyan-500/10 hover:border-cyan-500/20 transition-colors"
    >
      <motion.span 
        whileHover={{ scale: 1.1, color: "#00D4FF" }}
        className="font-black text-xl tracking-tighter text-white cursor-pointer"
      >
        AB.
      </motion.span>
      
      <div className="hidden md:flex gap-1">
        {[
          { label: "ABOUT", id: "#about" },
          { label: "EXPERIENCE", id: "#experience" },
          { label: "PROJECTS", id: "#projects" },
          { label: "SKILLS", id: "#skills" },
          { label: "CONTACT", id: "#contact" }
        ].map((item, idx) => (
          <motion.a
            key={idx}
            href={item.id}
            whileHover={{ x: 5 }}
            className="px-4 py-2 text-sm font-mono text-gray-300 hover:text-cyan-400 transition-colors relative group"
          >
            {item.label}
            <motion.div 
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 origin-left"
            />
          </motion.a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-cyan-400 hover:text-cyan-300 transition-colors"
        whileTap={{ scale: 0.95 }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </motion.button>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.2 }}
        className={`absolute top-full left-0 right-0 bg-black/95 border-b border-cyan-500/20 md:hidden ${isOpen ? 'block' : 'hidden'}`}
      >
        {[
          { label: "ABOUT", id: "#about" },
          { label: "EXPERIENCE", id: "#experience" },
          { label: "PROJECTS", id: "#projects" },
          { label: "SKILLS", id: "#skills" },
          { label: "CONTACT", id: "#contact" }
        ].map((item, idx) => (
          <a
            key={idx}
            href={item.id}
            className="block px-6 py-3 text-sm font-mono text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors border-b border-gray-800"
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </motion.div>
    </motion.nav>
  );
};

export default Portfolio;

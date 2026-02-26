"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Mail, Download, ArrowDown, Instagram } from "lucide-react";
import { personalInfo, socialLinks } from "@/data/profile";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import ErrorBoundary from "@/components/ui/ErrorBoundary";

const NeuralNetwork3D = dynamic(() => import("./NeuralNetwork3D"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 animate-pulse rounded-lg" />,
});

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const handleScrollDown = () => {
    if (typeof window !== 'undefined') {
      const aboutSection = document.querySelector("#about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-pink-900/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)]">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left space-y-8"
          >
            {/* Greeting */}
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-2 rounded-full glass-effect text-sm font-medium mb-4">
                👋 Welcome to my portfolio
              </span>
            </motion.div>

            {/* Name with gradient */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-orbitron)]"
            >
              <span className="text-gradient">{personalInfo.name}</span>
            </motion.h1>

            {/* Typing animation */}
            <motion.div variants={itemVariants} className="text-2xl md:text-3xl font-medium h-20">
              <TypeAnimation
                sequence={[
                  "AI Engineer",
                  2000,
                  "Researcher",
                  2000,
                  "Full Stack Innovator",
                  2000,
                  "Machine Learning Expert",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-primary"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground max-w-2xl"
            >
              {personalInfo.bio.slice(0, 200)}...
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  if (typeof window !== 'undefined') {
                    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:scale-105 transition-transform shadow-lg hover:shadow-primary/50"
              >
                View Projects
              </a>
              <a
                href={personalInfo.resumeUrl}
                download
                className="px-8 py-3 glass-effect rounded-lg font-medium hover:scale-105 transition-transform flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass-effect rounded-lg hover:scale-110 hover:bg-primary/10 transition-all"
                  aria-label={social.name}
                >
                  {social.icon === "github" && <Github className="w-6 h-6" />}
                  {social.icon === "linkedin" && <Linkedin className="w-6 h-6" />}
                  {social.icon === "mail" && <Mail className="w-6 h-6" />}
                  {social.icon === "instagram" && <Instagram className="w-6 h-6" />}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Neural Network */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative h-[400px] lg:h-[600px] w-full"
          >
            <ErrorBoundary
              fallback={
                <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">3D visualization unavailable</p>
                </div>
              }
            >
              <Suspense fallback={<div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 animate-pulse rounded-lg" />}>
                <NeuralNetwork3D />
              </Suspense>
            </ErrorBoundary>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={handleScrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-8 h-8" />
      </motion.button>
    </section>
  );
}

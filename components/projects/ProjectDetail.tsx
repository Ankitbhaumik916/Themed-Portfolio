"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, Calendar } from "lucide-react";
import { Project } from "@/types";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { useState } from "react";

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = project.images || [project.image];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              {project.category}
            </span>
            <span className="flex items-center gap-2 text-muted-foreground text-sm">
              <Calendar className="w-4 h-4" />
              {new Date(project.date).toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-orbitron)]">
            {project.title}
          </h1>

          <p className="text-xl text-muted-foreground mb-6">{project.description}</p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:scale-105 transition-transform"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 glass-effect rounded-lg font-medium hover:scale-105 transition-transform"
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </a>
            )}
          </div>
        </motion.div>

        {/* Image Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative h-[400px] rounded-xl overflow-hidden glass-effect">
            <Image
              src={images[currentImageIndex]}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Image Thumbnails */}
          {images.length > 1 && (
            <div className="flex gap-4 mt-4 overflow-x-auto pb-2">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${
                    currentImageIndex === index
                      ? "border-primary scale-105"
                      : "border-transparent opacity-50 hover:opacity-100"
                  }`}
                >
                  <Image src={img} alt={`${project.title} ${index + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </motion.div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 glass-effect rounded-lg font-medium hover:scale-105 transition-transform"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Long Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="prose prose-invert max-w-none"
        >
          <div className="glass-effect rounded-xl p-8">
            <ReactMarkdown
              components={{
                h2: ({ children }) => (
                  <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-bold mt-6 mb-3 text-foreground">{children}</h3>
                ),
                p: ({ children }) => (
                  <p className="mb-4 text-muted-foreground leading-relaxed">{children}</p>
                ),
                ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>,
                li: ({ children }) => <li className="text-muted-foreground">{children}</li>,
              }}
            >
              {project.longDescription}
            </ReactMarkdown>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

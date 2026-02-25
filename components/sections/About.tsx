"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, MapPin, Award } from "lucide-react";
import { education, personalInfo } from "@/data/profile";
import CountUp from "./CountUp";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { label: "CGPA", value: 9.34, suffix: "/10" },
    { label: "Projects", value: 15, suffix: "+" },
    { label: "Research Papers", value: 2, suffix: "" },
    { label: "Achievements", value: 6, suffix: "+" },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-orbitron)]"
            >
              About <span className="text-gradient">Me</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={inView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-20 h-1 bg-primary mx-auto"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image and Stats */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8"
            >
              {/* Profile Image Placeholder */}
              <div className="relative group">
                <div className="aspect-square rounded-2xl glass-effect overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
                    <div className="text-9xl font-bold text-white opacity-30 font-[family-name:var(--font-orbitron)]">
                      AB
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity blur-xl" />
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="glass-effect p-6 rounded-xl text-center hover:scale-105 transition-transform"
                  >
                    <div className="text-3xl font-bold text-primary mb-2">
                      {inView && <CountUp end={stat.value} duration={2} />}
                      {stat.suffix}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Bio and Education */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                {personalInfo.bio}
              </p>

              {/* Education Timeline */}
              <div className="space-y-4 mt-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="glass-effect p-6 rounded-xl hover:scale-102 transition-transform"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                        <div className="space-y-1 text-muted-foreground">
                          <p className="font-medium text-foreground">{edu.institution}</p>
                          <div className="flex flex-wrap gap-4 text-sm">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {edu.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Award className="w-4 h-4" />
                              CGPA: {edu.gpa}
                            </span>
                          </div>
                          <p className="text-sm pt-2">{edu.period}</p>
                          <p className="pt-2">{edu.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

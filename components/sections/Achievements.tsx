"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { achievements } from "@/data/profile";
import { Trophy, Award, Medal, Star, Code, BookOpen } from "lucide-react";

const iconMap = {
  trophy: Trophy,
  award: Award,
  medal: Medal,
  star: Star,
  code: Code,
  book: BookOpen,
};

export default function Achievements() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
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
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-orbitron)]"
            >
              Achievements & <span className="text-gradient">Awards</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={inView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-20 h-1 bg-primary mx-auto"
            />
          </div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30" />

            {/* Achievement Items */}
            <div className="space-y-12">
              {achievements.map((achievement, index) => {
                const Icon = iconMap[achievement.icon as keyof typeof iconMap] || Trophy;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={achievement.id}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className={`relative flex items-center ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Content Card */}
                    <div className={`flex-1 ${isEven ? "md:pr-12" : "md:pl-12"} pl-16 md:pl-0`}>
                      <div className="glass-effect p-6 rounded-xl hover:scale-105 transition-transform group">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors flex-shrink-0">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm text-muted-foreground mb-2">
                              {new Date(achievement.date).toLocaleDateString("en-US", {
                                month: "long",
                                year: "numeric",
                              })}
                            </div>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                              {achievement.title}
                            </h3>
                            <p className="text-muted-foreground">{achievement.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Center Dot */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

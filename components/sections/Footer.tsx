"use client";

import { personalInfo, socialLinks } from "@/data/profile";
import { Github, Linkedin, Mail, Heart, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 font-[family-name:var(--font-orbitron)]">
              <span className="text-gradient">{personalInfo.name}</span>
            </h3>
            <p className="text-muted-foreground">
              {personalInfo.title}
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              {personalInfo.location}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass-effect rounded-lg hover:scale-110 hover:bg-primary/10 transition-all"
                  aria-label={social.name}
                >
                  {social.icon === "github" && <Github className="w-5 h-5" />}
                  {social.icon === "linkedin" && <Linkedin className="w-5 h-5" />}
                  {social.icon === "mail" && <Mail className="w-5 h-5" />}
                  {social.icon === "instagram" && <Instagram className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            © {new Date().getFullYear()} {personalInfo.name}. Made with{" "}
            <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, Award } from 'lucide-react';
import { personalData } from '../../data/personalData';
import Button from '../ui/Button';

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = personalData.roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % personalData.roles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden z-10">
      
      {/* Radial Gradient Glow Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/80 border border-secondary/30 text-xs font-mono text-secondary mb-6 backdrop-blur-md shadow-lg"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Available for SDE & AI Internships 2026-2027
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl"
          >
            Hi, I'm <span className="text-gradient">{personalData.name}</span>
          </motion.h1>

          {/* Typing Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-12 mt-4 flex items-center justify-center"
          >
            <p className="text-xl sm:text-2xl font-mono text-textMuted">
              I am a <span className="text-secondary font-semibold">{displayText}</span>
              <span className="animate-pulse text-primary">|</span>
            </p>
          </motion.div>

          {/* Short Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-base sm:text-lg text-textMuted max-w-2xl leading-relaxed"
          >
            Computer Science student at ACE Engineering College (<span className="text-textMain font-semibold">CGPA 8.7</span>). Building scalable full-stack web applications, FastAPI backends, and Retrieval-Augmented Generation (RAG) AI systems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Button href="#projects" variant="primary" size="lg" icon={ArrowRight}>
              View Projects
            </Button>
            <Button href="#resume" variant="secondary" size="lg" icon={Download}>
              Download Resume
            </Button>
            <Button href="#contact" variant="outline" size="lg" icon={Sparkles}>
              Hire Me
            </Button>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 flex items-center gap-4"
          >
            <a
              href={personalData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-surface border border-white/10 text-textMuted hover:text-secondary hover:border-secondary/40 transition-all shadow-md"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-surface border border-white/10 text-textMuted hover:text-secondary hover:border-secondary/40 transition-all shadow-md"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalData.contact.email}`}
              className="p-3 rounded-full bg-surface border border-white/10 text-textMuted hover:text-secondary hover:border-secondary/40 transition-all shadow-md"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Quick Metrics Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl w-full"
          >
            {personalData.stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-5 border border-white/10 text-center relative overflow-hidden"
              >
                <div className="text-3xl font-extrabold font-display text-gradient">
                  {stat.value}
                </div>
                <div className="text-xs font-mono text-textMuted mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;

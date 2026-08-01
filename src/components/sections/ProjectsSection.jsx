import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Sparkles, CheckCircle, Code } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import GlassCard from '../ui/GlassCard';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { projectsData } from '../../data/projectsData';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'AI / ML', 'Full Stack', 'AI / NLP'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category.includes(activeFilter));

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="FEATURED PROJECTS"
          title="Engineered Solutions & Measurable Impact"
          subtitle="Explore production-ready full-stack web platforms, machine learning classifiers, and generative AI RAG systems."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${
                activeFilter === filter
                  ? 'bg-primary text-white shadow-lg shadow-primary/25 border border-secondary/40'
                  : 'bg-surface/80 text-textMuted hover:text-textMain border border-white/5 hover:border-white/20'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <GlassCard className="h-full flex flex-col justify-between p-8 group">
                  
                  <div>
                    {/* Top Header Row */}
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <Badge variant="primary">{project.badge}</Badge>
                      
                      <div className="flex items-center gap-2">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-textMuted hover:text-textMain transition-colors"
                          aria-label="GitHub Repository"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-textMuted hover:text-secondary transition-colors"
                          aria-label="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl font-bold font-display text-textMain group-hover:text-secondary transition-colors mb-3">
                      {project.title}
                    </h3>

                    <p className="text-textMuted text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Highlights / Features List */}
                    <div className="space-y-2 mb-6">
                      {project.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs font-mono text-textMuted">
                          <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    {/* Key Metric Callout */}
                    <div className="mb-6 p-3 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-between">
                      <span className="text-xs font-mono text-textMuted">Key Benchmark:</span>
                      <span className="font-mono font-bold text-secondary text-sm">
                        {project.metrics.label}: <span className="text-accent">{project.metrics.value}</span>
                      </span>
                    </div>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                      {project.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 text-textMuted border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;

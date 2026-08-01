import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Layout, Server, Cpu, Database, Wrench, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import GlassCard from '../ui/GlassCard';
import { skillsCategories } from '../../data/skillsData';

const iconMap = {
  Terminal,
  Layout,
  Server,
  Cpu,
  Database,
  Wrench,
};

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState('All');
  const categories = ['All', ...skillsCategories.map((c) => c.title)];

  const filteredCategories = activeTab === 'All'
    ? skillsCategories
    : skillsCategories.filter((c) => c.title === activeTab);

  return (
    <section id="skills" className="py-24 relative z-10 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="TECHNICAL SKILLSET"
          title="Engineered for Scalability & Performance"
          subtitle="Proficient across core programming languages, modern web frameworks, AI vector store indices, and developer tooling."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${
                activeTab === tab
                  ? 'bg-primary text-white shadow-lg shadow-primary/25 border border-secondary/40'
                  : 'bg-surface/80 text-textMuted hover:text-textMain border border-white/5 hover:border-white/20'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, idx) => {
            const IconComponent = iconMap[category.icon] || Terminal;

            return (
              <GlassCard key={idx} delay={idx * 0.1} className="p-6">
                
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                  <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-secondary">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-textMain">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List with Animated Progress */}
                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs font-mono">
                        <span className="text-textMain font-medium flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                          {skill.name}
                        </span>
                        <span className="text-textMuted">{skill.level}%</span>
                      </div>

                      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: sIdx * 0.1 }}
                          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>

              </GlassCard>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;

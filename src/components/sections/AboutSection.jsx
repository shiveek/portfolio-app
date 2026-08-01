import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, Brain, Target, Building2, MapPin } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import GlassCard from '../ui/GlassCard';
import { personalData } from '../../data/personalData';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="ABOUT ME"
          title="Bridging Full Stack Web Engineering & Applied AI"
          subtitle="Passionate Computer Science undergraduate focused on building robust, scalable applications and high-throughput microservices."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Info Card */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <GlassCard className="h-full flex flex-col justify-between p-8">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-secondary">
                    <Code className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-display">Boda Shiva Shankar</h3>
                    <p className="text-xs text-textMuted font-mono">B.Tech Computer Science & Engineering</p>
                  </div>
                </div>

                <p className="text-textMuted text-base leading-relaxed mb-6">
                  I am a final-year Computer Science Engineering student at <span className="text-textMain font-semibold">ACE Engineering College</span> with a strong academic standing (<span className="text-secondary font-mono font-bold">CGPA 8.7 / 10.0</span>). My engineering mindset focuses on code quality, performance optimization, and modular software design.
                </p>

                <p className="text-textMuted text-base leading-relaxed mb-6">
                  Over the past two years, I have architected and deployed 4 production-grade systems—ranging from full-stack enterprise task management applications to Retrieval-Augmented Generation (RAG) AI systems delivering sub-300ms vector search across 500+ page documents.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-mono text-textMuted">
                  <MapPin className="w-4 h-4 text-secondary" />
                  <span>{personalData.contact.location}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-textMuted">
                  <GraduationCap className="w-4 h-4 text-accent" />
                  <span>Graduating May 2027</span>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Education Card & Target Companies */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Education Card */}
            <GlassCard hover={false} className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/20 text-accent">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold font-display">Academic Background</h4>
              </div>

              <div className="space-y-3">
                <div>
                  <h5 className="text-base font-semibold text-textMain">
                    {personalData.education.college}
                  </h5>
                  <p className="text-xs font-mono text-secondary">
                    {personalData.education.degree}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs font-mono py-2 px-3 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-textMuted">Cumulative CGPA:</span>
                  <span className="font-bold text-accent">{personalData.education.cgpa}</span>
                </div>

                <p className="text-xs text-textMuted leading-relaxed">
                  Coursework: Data Structures, Algorithms, DBMS, OOP (Java/C++), Operating Systems, Software Engineering, Artificial Intelligence & Machine Learning.
                </p>
              </div>
            </GlassCard>

            {/* Target Companies Card */}
            <GlassCard hover={false} className="p-6 flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-secondary/10 border border-secondary/20 text-secondary">
                  <Building2 className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold font-display">Targeting Top Tech Firms</h4>
              </div>

              <div className="flex flex-wrap gap-2">
                {personalData.targetCompanies.map((company, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-textMuted hover:text-textMain hover:border-secondary/40 transition-colors"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </GlassCard>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import GlassCard from '../ui/GlassCard';
import { experienceData } from '../../data/experienceData';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative z-10 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="WORK & LEADERSHIP"
          title="Practical Engineering & Mentorship Experience"
          subtitle="Combining virtual internships, independent application engineering, and technical mentorship roles."
        />

        <div className="max-w-4xl mx-auto relative pl-6 md:pl-8 border-l border-white/10 space-y-12">
          {experienceData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#020617] border-2 border-primary group-hover:border-secondary group-hover:scale-125 transition-all shadow-md shadow-primary/20" />

              <GlassCard className="p-6 md:p-8">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <h3 className="text-xl font-bold font-display text-textMain group-hover:text-secondary transition-colors">
                    {item.role}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-secondary bg-primary/10 px-3 py-1 rounded-full border border-primary/20 shrink-0">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.duration}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-textMuted mb-4">
                  <span className="font-semibold text-textMain">{item.company}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-accent" />
                    {item.location}
                  </span>
                </div>

                <p className="text-sm text-textMuted leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="space-y-2 pt-3 border-t border-white/5">
                  {item.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs font-mono text-textMuted">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;

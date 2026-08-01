import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, CheckCircle } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import GlassCard from '../ui/GlassCard';
import { personalData } from '../../data/personalData';

const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative z-10 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="EDUCATION & ACADEMICS"
          title="Computer Science & Engineering Discipline"
          subtitle="Strong academic foundation with high coursework rigor and continuous technical skill building."
        />

        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 text-secondary">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-display text-textMain">
                    {personalData.education.college}
                  </h3>
                  <p className="text-sm font-mono text-secondary">
                    {personalData.education.degree}
                  </p>
                </div>
              </div>

              <div className="px-4 py-2 rounded-xl bg-accent/10 border border-accent/20 text-accent font-mono text-center">
                <div className="text-xs font-semibold">Cumulative CGPA</div>
                <div className="text-xl font-extrabold">{personalData.education.cgpa}</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              <div>
                <h4 className="text-base font-bold font-display text-textMain flex items-center gap-2 mb-4">
                  <BookOpen className="w-4 h-4 text-secondary" /> Core Coursework Focus
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-textMuted">
                  <div className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-accent" /> Data Structures</div>
                  <div className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-accent" /> Algorithms</div>
                  <div className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-accent" /> DBMS & SQL</div>
                  <div className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-accent" /> OOP (Java/C++)</div>
                  <div className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-accent" /> Machine Learning</div>
                  <div className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-accent" /> Web Development</div>
                </div>
              </div>

              <div>
                <h4 className="text-base font-bold font-display text-textMain flex items-center gap-2 mb-4">
                  <Award className="w-4 h-4 text-accent" /> Academic Achievements
                </h4>
                <ul className="space-y-2 text-xs text-textMuted leading-relaxed">
                  <li>• Consistently maintained an 8.7/10.0 CGPA standing throughout degree program.</li>
                  <li>• Led technical student coding circles mentoring 150+ Computer Science peers.</li>
                  <li>• Completed Google AI-ML Virtual Internship with verified certification.</li>
                </ul>
              </div>
            </div>

          </GlassCard>
        </div>

      </div>
    </section>
  );
};

export default EducationSection;

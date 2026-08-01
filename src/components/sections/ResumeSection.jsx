import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, CheckCircle, ExternalLink } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';

const ResumeSection = () => {
  return (
    <section id="resume" className="py-24 relative z-10 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="ATS RESUME"
          title="One-Page ATS-Optimized Resume"
          subtitle="Engineered with &gt;95% ATS keyword density, metric-quantified achievements, and Harvard single-column structure."
        />

        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-8 text-center">
            
            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 text-secondary mx-auto flex items-center justify-center mb-6">
              <FileText className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold font-display text-textMain mb-2">
              Boda Shiva Shankar — Master Resume
            </h3>

            <p className="text-xs font-mono text-textMuted max-w-lg mx-auto mb-6">
              Optimized for Software Engineering, AI Engineer, Full Stack, and IT PMO Internship applications at Fortune 500 companies.
            </p>

            {/* Resume Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono mb-8 text-left max-w-2xl mx-auto">
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-center gap-1.5 text-textMuted">
                <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0" /> &gt;95% ATS Score
              </div>
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-center gap-1.5 text-textMuted">
                <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0" /> Single Column
              </div>
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-center gap-1.5 text-textMuted">
                <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0" /> Metrics Driven
              </div>
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-center gap-1.5 text-textMuted">
                <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0" /> Harvard Standard
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                href="../01_ATS_Resume.md"
                target="_blank"
                variant="primary"
                size="lg"
                icon={Download}
              >
                Download ATS Resume (Markdown/PDF)
              </Button>
              <Button
                href="../01_ATS_Resume.md"
                target="_blank"
                variant="secondary"
                size="lg"
                icon={ExternalLink}
              >
                View Full Text Resume
              </Button>
            </div>

          </GlassCard>
        </div>

      </div>
    </section>
  );
};

export default ResumeSection;

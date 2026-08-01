import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, ExternalLink } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import GlassCard from '../ui/GlassCard';
import Badge from '../ui/Badge';
import { certificationsData } from '../../data/certificationsData';

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="VERIFIED CREDENTIALS"
          title="Certifications & Industry Training"
          subtitle="Accredited certifications validating proficiency in Machine Learning, Neural Networks, and Advanced Python Programming."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificationsData.map((cert, idx) => (
            <GlassCard key={idx} delay={idx * 0.15} className="p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-accent/10 border border-accent/20 text-accent">
                    <Award className="w-6 h-6" />
                  </div>
                  <Badge variant="accent">{cert.badge}</Badge>
                </div>

                <h3 className="text-xl font-bold font-display text-textMain mb-2">
                  {cert.title}
                </h3>

                <p className="text-xs font-mono text-secondary mb-4">
                  {cert.issuer} • {cert.date}
                </p>

                <p className="text-xs text-textMuted leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-accent flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified Credential
                </span>
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-textMuted hover:text-secondary transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CertificationsSection;

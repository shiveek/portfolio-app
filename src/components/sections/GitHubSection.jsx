import React from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, Eye, ArrowUpRight } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';
import { personalData } from '../../data/personalData';

const GitHubSection = () => {
  return (
    <section id="github" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="OPEN SOURCE & REPOSITORIES"
          title="Active GitHub Contributions & Code Base"
          subtitle="Explore open-source technical repositories maintained with clean documentation, unit tests, and structured commits."
        />

        <div className="max-w-5xl mx-auto space-y-8">
          
          {/* GitHub Stats Cards Embed */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <GlassCard hover={false} className="p-6 text-center">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Github className="w-5 h-5 text-secondary" />
                  <span className="font-display font-bold text-textMain">GitHub Profile Stats</span>
                </div>
                <span className="text-xs font-mono text-accent">@shiveek</span>
              </div>
              <div className="rounded-xl overflow-hidden border border-white/10 p-2 bg-[#0b0f19]">
                <img
                  src="https://github-readme-stats.vercel.app/api?username=shiveek&show_icons=true&theme=tokyonight&count_private=true"
                  alt="Shiva's GitHub Stats"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>
            </GlassCard>

            <GlassCard hover={false} className="p-6 text-center">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Github className="w-5 h-5 text-secondary" />
                  <span className="font-display font-bold text-textMain">Top Languages</span>
                </div>
                <span className="text-xs font-mono text-secondary">Python • JS • Java</span>
              </div>
              <div className="rounded-xl overflow-hidden border border-white/10 p-2 bg-[#0b0f19]">
                <img
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=shiveek&layout=compact&theme=tokyonight&hide=html"
                  alt="Top Languages"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>
            </GlassCard>

          </div>

          {/* GitHub Action CTA */}
          <div className="text-center pt-4">
            <Button
              href={personalData.contact.github}
              target="_blank"
              variant="primary"
              size="lg"
              icon={Github}
            >
              Explore Full GitHub Profile (@shiveek)
            </Button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default GitHubSection;

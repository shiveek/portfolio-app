import React from 'react';
import { Github, Linkedin, Mail, Heart, Code2 } from 'lucide-react';
import { personalData } from '../../data/personalData';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-surface/40 backdrop-blur-xl relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-primary to-secondary p-0.5">
              <div className="w-full h-full bg-[#020617] rounded-[7px] flex items-center justify-center">
                <Code2 className="w-4 h-4 text-secondary" />
              </div>
            </div>
            <div>
              <h3 className="font-display font-bold text-textMain text-base">
                Boda Shiva Shankar
              </h3>
              <p className="text-xs text-textMuted font-mono">
                Computer Science & Engineering Student @ ACE
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personalData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-textMuted hover:text-secondary hover:border-secondary/40 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-textMuted hover:text-secondary hover:border-secondary/40 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalData.contact.email}`}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-textMuted hover:text-secondary hover:border-secondary/40 transition-all"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-textMuted">
          <p>© {new Date().getFullYear()} Boda Shiva Shankar. Engineered with React, Tailwind & Framer Motion.</p>
          <p className="flex items-center gap-1">
            Targeting Fortune 500 SDE & AI Internships
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

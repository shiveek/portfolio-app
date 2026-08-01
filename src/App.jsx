import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ParticleBackground from './components/ui/ParticleBackground';
import LoadingScreen from './components/layout/LoadingScreen';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ui/ScrollToTop';

import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ExperienceSection from './components/sections/ExperienceSection';
import EducationSection from './components/sections/EducationSection';
import CertificationsSection from './components/sections/CertificationsSection';
import GitHubSection from './components/sections/GitHubSection';
import ResumeSection from './components/sections/ResumeSection';
import ContactSection from './components/sections/ContactSection';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-[#020617] text-[#F8FAFC]">
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          {/* Particle Node Network Canvas */}
          <ParticleBackground />

          {/* Fixed Navbar */}
          <Navbar />

          {/* Main Content Sections */}
          <main className="relative z-10">
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ExperienceSection />
            <EducationSection />
            <CertificationsSection />
            <GitHubSection />
            <ResumeSection />
            <ContactSection />
          </main>

          {/* Footer */}
          <Footer />

          {/* Scroll To Top Button */}
          <ScrollToTop />
        </>
      )}
    </div>
  );
}

export default App;

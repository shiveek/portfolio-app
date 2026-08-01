import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Github, Linkedin } from 'lucide-react';
import confetti from 'canvas-confetti';
import SectionHeader from '../ui/SectionHeader';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';
import { personalData } from '../../data/personalData';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });

    setTimeout(() => {
      setStatus({ loading: false, success: true, error: '' });
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="GET IN TOUCH"
          title="Let's Build Something Extraordinary Together"
          subtitle="Open for SDE, AI Engineer, Full Stack, and Product Engineering Internships for 2026-2027."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <GlassCard hover={false} className="p-6">
              <h3 className="text-xl font-bold font-display text-textMain mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${personalData.contact.email}`}
                  className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-secondary/40 text-textMuted hover:text-textMain transition-all"
                >
                  <div className="p-2.5 rounded-lg bg-primary/10 text-secondary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-textMuted">Email Address</div>
                    <div className="text-sm font-semibold text-textMain">{personalData.contact.email}</div>
                  </div>
                </a>

                <a
                  href={personalData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-secondary/40 text-textMuted hover:text-textMain transition-all"
                >
                  <div className="p-2.5 rounded-lg bg-secondary/10 text-secondary">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-textMuted">LinkedIn Profile</div>
                    <div className="text-sm font-semibold text-textMain">linkedin.com/in/boda-shiva-shankar</div>
                  </div>
                </a>

                <a
                  href={personalData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-secondary/40 text-textMuted hover:text-textMain transition-all"
                >
                  <div className="p-2.5 rounded-lg bg-accent/10 text-accent">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-textMuted">GitHub Repository</div>
                    <div className="text-sm font-semibold text-textMain">github.com/shiveek</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5 text-textMuted">
                  <div className="p-2.5 rounded-lg bg-white/10 text-textMuted">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-textMuted">Current Location</div>
                    <div className="text-sm font-semibold text-textMain">{personalData.contact.location}</div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Interactive Form */}
          <div className="lg:col-span-7">
            <GlassCard hover={false} className="p-8">
              <h3 className="text-xl font-bold font-display text-textMain mb-6">
                Send a Direct Message
              </h3>

              {status.success ? (
                <div className="p-6 rounded-2xl bg-accent/10 border border-accent/20 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-accent mx-auto" />
                  <h4 className="text-lg font-bold font-display text-textMain">Message Delivered!</h4>
                  <p className="text-xs font-mono text-textMuted">
                    Thank you for reaching out. I will respond to your message shortly.
                  </p>
                  <button
                    onClick={() => setStatus({ loading: false, success: false, error: '' })}
                    className="px-4 py-2 rounded-xl text-xs font-mono bg-white/10 hover:bg-white/20 text-textMain mt-2"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-textMuted mb-1.5">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-surface/80 border border-white/10 text-textMain placeholder-textMuted/50 text-sm focus:outline-none focus:border-secondary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-textMuted mb-1.5">Your Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-surface/80 border border-white/10 text-textMain placeholder-textMuted/50 text-sm focus:outline-none focus:border-secondary transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-textMuted mb-1.5">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="SDE Internship Opportunity / Inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-surface/80 border border-white/10 text-textMain placeholder-textMuted/50 text-sm focus:outline-none focus:border-secondary transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-textMuted mb-1.5">Message *</label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Shiva, I came across your portfolio and would like to discuss an opportunity..."
                      className="w-full px-4 py-3 rounded-xl bg-surface/80 border border-white/10 text-textMain placeholder-textMuted/50 text-sm focus:outline-none focus:border-secondary transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    icon={Send}
                    disabled={status.loading}
                    className="w-full justify-center"
                  >
                    {status.loading ? 'Sending Message...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </GlassCard>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;

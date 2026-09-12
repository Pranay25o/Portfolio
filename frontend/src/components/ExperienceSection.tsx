import React from 'react';
import { motion } from 'framer-motion';
import { soundManager } from '../lib/sound';
import { Briefcase, Calendar, MapPin, Sparkles, Flame, GraduationCap, Cpu, Layers } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      role: 'AI/ML Intern',
      organization: 'National Institute of Electronics & Information Technology (NIELIT)',
      period: 'FEB 2026 – 01 AUG 2026',
      location: 'Chhatrapati Sambhajinagar, Maharashtra',
      description: 'Developing an NLP-based Medication Detection System using Python and Scikit-learn to classify and extract clinical medication data from structured and unstructured records.',
      achievements: [
        'Constructed robust text preprocessing pipelines (tokenization, stop-word removal, feature extraction) using Python and NLTK.',
        'Trained and evaluated Scikit-learn ML models, achieving elevated classification precision through cross-validation and hyperparameter tuning.',
        'Applied data cleaning and exploratory analysis with Pandas and NumPy to prepare structured datasets for production.',
        'Collaborated across the full SDLC in an Agile environment using Git version control for iterative deliveries.',
      ],
      tech: ['Python', 'Scikit-learn', 'NLP', 'NLTK', 'Pandas', 'NumPy', 'Git'],
      badge: 'GOVERNMENT OF INDIA // NIELIT',
    },
    {
      role: 'Full-Stack Systems & Real-Time Architect',
      organization: 'Independent & Production Engineering',
      period: '2024 - 2026',
      location: 'Production Deployments',
      description: 'Architecting and deploying production-grade real-time full-stack applications with sub-100ms WebSocket synchronization, AI LLM integrations, and cloud infrastructure.',
      achievements: [
        'Engineered ClipBridge: Real-time file & clipboard sharing platform handling 50MB transfers with Socket.IO and automated cron cleanup.',
        'Built AI-Powered Interview System with JWT authentication, role-based access control, and Google Gemini API integration.',
        'Implemented cloud CI/CD deployment pipelines on Vercel and Render with rigorous CORS and security configurations.',
      ],
      tech: ['React.js', 'Node.js', 'Socket.IO', 'WebSockets', 'MongoDB', 'Gemini API', 'JWT'],
      badge: 'REAL-TIME PRODUCTION SYSTEMS',
    },
    {
      role: 'Bachelor of Technology (Electronics & Computer Engineering)',
      organization: 'P.E.S College of Engineering',
      period: 'AUG 2022 – JUL 2026',
      location: 'Chhatrapati Sambhajinagar, Maharashtra',
      description: 'Rigorous engineering coursework emphasizing software architecture, data structures, algorithms, operating systems, and computer networks.',
      achievements: [
        'Qualified GATE 2026 in Computer Science and Information Technology (CS).',
        'Awarded 1st Place in College Hackathon for innovative Full-Stack Web Application development.',
        'Completed Microsoft Certified: Azure AI Fundamentals credential.',
      ],
      tech: ['Java (Core)', 'Data Structures & Algorithms', 'DBMS', 'Computer Networks', 'OS'],
      badge: 'GRADUATION: JULY 2026',
    },
  ];

  return (
    <section id="experience" className="relative py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-left space-y-2 pb-4 border-b border-orange-900/30">
          <div className="flex items-center gap-2 text-orange-500 font-mono text-xs tracking-widest uppercase">
            <Sparkles className="w-4 h-4" />
            <span>03 // CHRONOLOGY &amp; FIELD ENGAGEMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight drop-shadow-[0_2px_10px_rgba(249,115,22,0.3)]">
            EXPERIENCE &amp; TIMELINE
          </h2>
          <p className="text-slate-300 font-sans text-sm sm:text-base max-w-2xl font-light">
            Verified engineering milestones across AI/ML research at NIELIT, real-time WebSocket systems, and academic excellence.
          </p>
        </div>

        {/* Timeline Line & Items */}
        <div className="relative border-l-2 border-orange-950 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.role + exp.organization}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              onMouseEnter={() => soundManager.playHover()}
              className="relative group"
            >
              {/* Timeline Marker (Uzumaki Node) */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-6 w-6 h-6 rounded-full bg-black border-2 border-orange-500 flex items-center justify-center shadow-[0_0_12px_rgba(249,115,22,0.6)] group-hover:scale-125 transition-transform">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              </div>

              {/* Experience Card */}
              <div className="glass-card rounded-2xl p-6 sm:p-8 border-t border-orange-500/40 border-b border-black/80 hover:border-orange-400/80 amaterasu-hover transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono tracking-wider font-semibold text-orange-300 bg-orange-950/80 border border-orange-500/40">
                      {exp.badge}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-sans text-white group-hover:text-orange-300 transition-colors mt-2">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-mono text-orange-400 font-semibold mt-0.5">
                      {exp.organization}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-orange-500" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-orange-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm font-sans font-light leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Bullet Points */}
                <div className="space-y-2 mb-6">
                  {exp.achievements.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <Flame className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-black/70 border border-orange-900/40 text-[11px] font-mono text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

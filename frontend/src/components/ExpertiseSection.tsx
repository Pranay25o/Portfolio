import React from 'react';
import { Brain, Server, Database, Sparkles, Code2 } from 'lucide-react';

/*
 * PERFORMANCE FIX: Removed unused 'motion' import from framer-motion and
 * unused 'soundManager' import. Tree-shaking cannot reliably remove unused
 * named exports from side-effecting modules. Explicit removal ensures
 * zero framer-motion bundle overhead in this component's chunk.
 */

export const ExpertiseSection: React.FC = () => {
  const domains = [
    {
      title: 'Full-Stack Web & Real-Time Engineering',
      icon: <Server className="w-6 h-6 text-red-400" />,
      level: 'Core Strength',
      summary: 'Architecting scalable web applications with React.js, Node.js, Express.js, and low-latency bidirectional WebSockets/Socket.IO.',
      skills: ['React.js', 'Node.js', 'Express.js', 'WebSockets / Socket.IO', 'RESTful APIs', 'JWT Auth & RBAC', 'Tailwind CSS', 'Vercel / Render Deployment'],
    },
    {
      title: 'AI, Machine Learning & NLP',
      icon: <Brain className="w-6 h-6 text-red-400" />,
      level: 'Applied Specialist',
      summary: 'Building NLP classification pipelines, clinical medication extraction, text preprocessing, and integrating Google Gemini / LLM APIs.',
      skills: ['Python', 'Scikit-learn', 'NLP / NLTK', 'Pandas & NumPy', 'Gemini API Integration', 'Feature Extraction', 'Model Hyperparameter Tuning'],
    },
    {
      title: 'Programming Languages & Core CS',
      icon: <Code2 className="w-6 h-6 text-red-400" />,
      level: 'Strong Foundations',
      summary: 'Deep mathematical and algorithmic grounding with GATE 2026 CS/IT qualification and rigorous OOP problem solving.',
      skills: ['Java (Core)', 'Python', 'JavaScript', 'C++', 'Data Structures & Algorithms', 'OOP & Design Patterns', 'Operating Systems', 'DBMS & Computer Networks'],
    },
    {
      title: 'Data Analytics, BI & Cloud Databases',
      icon: <Database className="w-6 h-6 text-red-400" />,
      level: 'Enterprise Analytics',
      summary: 'Transforming complex transactional data into actionable business intelligence dashboards with Power BI, DAX, and SQL modeling.',
      skills: ['Power BI (DAX, Power Query)', 'MySQL / PostgreSQL', 'MongoDB', 'Tableau', 'Snowflake / AWS S3', 'Data Modeling & EDA', 'Git / GitHub', 'Postman API Testing'],
    },
  ];

  return (
    <section id="expertise" className="relative py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-left space-y-2 pb-4 border-b border-red-900/30">
          <div className="flex items-center gap-2 text-red-500 font-mono text-xs tracking-widest uppercase">
            <Sparkles className="w-4 h-4" />
            <span>02 // TECHNICAL ARSENAL &amp; CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight drop-shadow-[0_2px_10px_rgba(220,38,38,0.3)]">
            SKILLS &amp; DOMAIN MASTERY
          </h2>
          <p className="text-slate-300 font-sans text-sm sm:text-base max-w-2xl font-light">
            Comprehensive full-stack, AI/ML, and data engineering toolkit refined through hands-on industrial projects and national competitive benchmarks.
          </p>
        </div>

        {/* 4-Card Matrix (Instant rendering, 0ms delay) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {domains.map((domain) => (
            <div
              key={domain.title}
              className="glass-card rounded-2xl p-6 sm:p-8 border-t border-orange-500/40 border-b border-black/80 hover:border-orange-400/80 shadow-xl amaterasu-hover space-y-6 transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-orange-950/60 border border-orange-500/40 shadow-[0_0_12px_rgba(249,115,22,0.3)]">
                    {domain.icon}
                  </div>
                  <div>
                    <h3 className="font-mono font-bold text-lg sm:text-xl text-white">
                      {domain.title}
                    </h3>
                    <span className="text-xs font-mono text-orange-400 tracking-wider">
                      // {domain.level}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-300 font-sans font-light leading-relaxed">
                {domain.summary}
              </p>

              <div className="space-y-2">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  Verified Technologies &amp; Tools:
                </div>
                <div className="flex flex-wrap gap-2">
                  {domain.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono text-slate-200 bg-black/60 border border-orange-900/30 hover:border-orange-500/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { soundManager } from '../lib/sound';
import { ExternalLink, Sparkles, X, CheckCircle2, ShieldCheck, Flame, Radio, Bot, ShoppingCart, Activity, BarChart3, ArrowRight } from 'lucide-react';
import { GithubIcon } from './Icons';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'fullstack' | 'ai' | 'analytics';
  badge: string;
  description: string;
  highlights: string[];
  tech: string[];
  metrics: string;
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'fullstack' | 'ai' | 'analytics'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'clipbridge',
      title: 'ClipBridge: Real-Time File & Clipboard Sharing',
      subtitle: 'Sub-100ms WebSocket synchronization platform across Windows, Linux & Mobile',
      category: 'fullstack',
      badge: 'FULL-STACK // WEBSOCKETS',
      description: 'Engineered a production-grade real-time file and clipboard sharing platform supporting 50MB seamless transfers, drag-and-drop file ingestion, automatic cleanup via cron jobs, and instant room-based synchronization.',
      highlights: [
        'Implemented Socket.IO for low-latency bidirectional communication with automatic reconnection.',
        'Engineered 50MB secure file upload/download pipelines with image preview and auto-expiry cron jobs.',
        'Designed responsive React interface with QR code room joining and real-time typing indicators.',
        'Deployed full-stack application on Render and Vercel with environment security and CORS governance.',
      ],
      tech: ['React.js', 'Node.js', 'Socket.IO', 'WebSockets', 'Tailwind CSS', 'Render', 'Vercel'],
      metrics: '<100ms Latency • 50MB Transfers',
      githubUrl: 'https://github.com/Pranay25o',
      liveUrl: 'https://clipbridge.vercel.app',
      featured: true,
    },
    {
      id: 'ai-interview-system',
      title: 'AI-Powered Interview System',
      subtitle: 'Dynamic technical interview platform powered by Google Gemini API & RBAC',
      category: 'ai',
      badge: 'AI & FULL-STACK',
      description: 'Constructed an end-to-end AI-powered interview preparation suite with JWT authentication, role-based access control, and dynamic question synthesis based on candidate resumes and target job roles.',
      highlights: [
        'Integrated third-party Gemini API to generate tailored technical interview questions and real-time evaluation feedback.',
        'Built secure RESTful APIs for user sessions, candidate scorecards, and JWT authentication.',
        'Designed mobile-first responsive frontend with smooth interactive feedback loops.',
        'Adhered to secure coding practices with Git version control and robust CORS protection.',
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Gemini API', 'JWT', 'Tailwind CSS'],
      metrics: 'Gemini AI Powered • 100% RBAC Secured',
      githubUrl: 'https://github.com/Pranay25o',
      featured: true,
    },
    {
      id: 'nlp-medication-detection',
      title: 'NLP Medication Detection System',
      subtitle: 'Machine Learning clinical text classification pipeline at NIELIT',
      category: 'ai',
      badge: 'AI/ML & NLP',
      description: 'Engineered a clinical Natural Language Processing model for NIELIT to accurately classify and extract complex medication entities, dosages, and prescriptions from unstructured health records.',
      highlights: [
        'Constructed text preprocessing pipelines for tokenization, stop-word elimination, and NLTK feature extraction.',
        'Trained and evaluated Scikit-learn ML classification models with cross-validation and hyperparameter optimization.',
        'Performed exploratory data analysis and data cleaning with Pandas and NumPy.',
        'Integrated into structured clinical report generation workflows.',
      ],
      tech: ['Python', 'Scikit-learn', 'NLP', 'NLTK', 'Pandas', 'NumPy', 'EDA'],
      metrics: 'NIELIT Project • High Precision F1-Score',
      githubUrl: 'https://github.com/Pranay25o',
      featured: true,
    },
    {
      id: 'ecommerce-platform',
      title: 'Full-Stack E-Commerce Platform',
      subtitle: 'Scalable digital marketplace with Multer media storage & admin controls',
      category: 'fullstack',
      badge: 'FULL-STACK & DATABASE',
      description: 'Architected a scalable e-commerce platform with bcrypt authentication, product inventory management, administrative dashboards, and media upload handling.',
      highlights: [
        'Engineered RESTful endpoints for catalog browsing, cart operations, and order state machines.',
        'Integrated Multer for secure file uploads and cloud media handling.',
        'Implemented rigorous input validation and error handling to ensure transactional data integrity.',
        'Configured cloud deployment on Render with automated environment management.',
      ],
      tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Multer', 'RESTful APIs', 'Tailwind CSS'],
      metrics: 'Scalable Architecture • Admin Panel',
      githubUrl: 'https://github.com/Pranay25o',
    },
    {
      id: 'insurance-dashboard',
      title: 'Insurance Data Analysis Dashboard',
      subtitle: 'Executive Business Intelligence & Risk Performance Dashboard',
      category: 'analytics',
      badge: 'BI & DATA ANALYTICS',
      description: 'Engineered an interactive Power BI dashboard analyzing insurance premiums, claim settlements, policy status, and underwriting performance modeled from MySQL databases.',
      highlights: [
        'Integrated MySQL datasets via ODBC with automated data cleaning and transformation in Power Query.',
        'Formulated dynamic DAX KPIs for Total Premium, Active vs. Inactive Policies, and Claim Settlement Ratios.',
        'Identified high-premium risk patterns across age demographics and policy categories (Travel vs. Health).',
      ],
      tech: ['Power BI', 'DAX', 'Power Query', 'MySQL', 'Data Modeling', 'ODBC'],
      metrics: 'Dynamic DAX KPIs • Risk Modeling',
      githubUrl: 'https://github.com/Pranay25o',
    },
    {
      id: 'upi-transaction-dashboard',
      title: 'UPI Transaction Data Analysis Dashboard',
      subtitle: 'Transactional velocity, spending patterns & bank settlement analytics',
      category: 'analytics',
      badge: 'BI & FINANCIAL ANALYTICS',
      description: 'Developed an interactive analytics dashboard visualizing millions of UPI transaction patterns, remaining account balances, and consumer payment preferences across cities and banks.',
      highlights: [
        'Cleaned high-volume transactional logs in Power Query, handling deduplication and missing record resolution.',
        'Created dynamic DAX measures for monthly spending velocity, settlement frequencies, and bank metrics.',
        'Equipped with interactive multi-dimensional slicers across geography, device type, and purpose.',
      ],
      tech: ['Power BI', 'DAX', 'Power Query', 'MySQL', 'Python', 'Financial Analytics'],
      metrics: 'Multi-City Trends • Interactive Slicers',
      githubUrl: 'https://github.com/Pranay25o',
    },
  ];

  const filtered = activeFilter === 'all' 
    ? projects 
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="relative py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-red-900/30">
          <div>
            <div className="flex items-center gap-2 text-red-500 font-mono text-xs tracking-widest uppercase mb-2">
              <Sparkles className="w-4 h-4" />
              <span>01 // FEATURED ARSENAL &amp; DEPLOYMENTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight drop-shadow-[0_2px_10px_rgba(220,38,38,0.3)]">
              FEATURED PROJECTS &amp; SYSTEMS
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl glass-card-subtle border border-red-500/20">
            {[
              { key: 'all', label: 'ALL PROJECTS' },
              { key: 'fullstack', label: 'FULL-STACK & WEBSOCKETS' },
              { key: 'ai', label: 'AI & NLP' },
              { key: 'analytics', label: 'DATA & POWER BI' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => {
                  soundManager.playHover();
                  setActiveFilter(tab.key as any);
                }}
                className={`px-3.5 py-1.5 rounded-xl font-mono text-xs tracking-wider transition-all ${
                  activeFilter === tab.key
                    ? 'bg-red-900/80 text-white border border-red-500/60 shadow-[0_0_15px_rgba(220,38,38,0.5)]'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onMouseEnter={() => soundManager.playHover()}
              className="group relative flex flex-col justify-between glass-card rounded-2xl p-6 border-t border-red-500/40 border-b border-black/80 hover:border-red-400/80 amaterasu-hover cursor-pointer transition-all overflow-hidden"
              onClick={() => {
                soundManager.playSlash();
                setSelectedProject(project);
              }}
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-red-600/10 blur-2xl group-hover:bg-red-600/25 transition-all pointer-events-none" />

              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono tracking-wider font-semibold text-red-300 bg-red-950/70 border border-red-500/40">
                    {project.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400 font-semibold">
                    {project.metrics.split('•')[0]}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-sans text-white group-hover:text-red-300 transition-colors mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-300 font-light leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-black/60 border border-red-900/30 text-[11px] font-mono text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-1.5 py-0.5 text-[11px] font-mono text-red-400">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                  <span className="text-red-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    INSPECT ARCHITECTURE &rarr;
                  </span>
                  <div className="flex items-center gap-3 text-slate-400">
                    <GithubIcon className="w-4 h-4 hover:text-white transition-colors" />
                    {project.liveUrl && <ExternalLink className="w-4 h-4 hover:text-white transition-colors" />}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto glass-card rounded-3xl p-6 sm:p-8 border-t border-red-500/50 border-b border-black/90 shadow-amaterasu-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-red-950/60 border border-red-500/30 text-slate-300 hover:text-white hover:border-red-400 transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div>
                  <span className="px-3 py-1 rounded-md text-xs font-mono font-semibold text-red-300 bg-red-950/70 border border-red-500/40">
                    {selectedProject.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black font-display text-white mt-3 mb-1">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm font-mono text-red-400">
                    {selectedProject.subtitle}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-red-950/30 border border-red-500/30 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">PERFORMANCE / IMPACT:</span>
                  <span className="text-white font-bold tracking-wider">{selectedProject.metrics}</span>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">
                    // SYSTEM ARCHITECTURE &amp; OVERVIEW
                  </h4>
                  <p className="text-slate-200 text-sm leading-relaxed font-sans">
                    {selectedProject.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">
                    // KEY HIGHLIGHTS &amp; DELIVERABLES
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedProject.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">
                    // TECHNOLOGY ARSENAL
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-lg bg-black/80 border border-red-500/30 text-xs font-mono text-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-4">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono text-xs font-bold text-white bg-gradient-to-r from-red-800 to-red-600 hover:shadow-[0_0_20px_rgba(220,38,38,0.7)] border border-red-400/40 transition-all"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>VIEW SOURCE CODE</span>
                  </a>
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono text-xs font-semibold text-slate-200 glass-card border border-red-500/30 hover:border-red-400 hover:text-white transition-all"
                    >
                      <ExternalLink className="w-4 h-4 text-red-400" />
                      <span>LIVE DEPLOYMENT</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { soundManager } from '../lib/sound';
import { ShieldCheck, Award, GraduationCap, CheckCircle, Star, Sparkles, FileCheck } from 'lucide-react';

export const CredentialsSection: React.FC = () => {
  const credentials = [
    {
      title: 'Qualified GATE 2026 in Computer Science & IT (CS)',
      authority: 'National GATE Committee // IIT & IISc',
      badge: 'NATIONAL GATE CS/IT 2026',
      id: 'GATE-CSIT-2026',
      description: 'Nationally accredited examination verifying comprehensive mastery of Data Structures, Algorithms, Operating Systems, Computer Networks, DBMS, and Theory of Computation.',
      verified: true,
      icon: <ShieldCheck className="w-6 h-6 text-orange-400" />,
    },
    {
      title: 'Microsoft Certified: Azure AI Fundamentals',
      authority: 'Microsoft Corporation',
      badge: 'AZURE AI CERTIFIED',
      id: 'MS-AZ-AI-2024',
      description: 'Validated proficiency in machine learning concepts, computer vision, natural language processing, and conversational AI workloads on Microsoft Azure.',
      verified: true,
      icon: <Award className="w-6 h-6 text-orange-400" />,
    },
    {
      title: '1st Place - College Hackathon Winner',
      authority: 'P.E.S College of Engineering / University Arena',
      badge: '1ST PLACE HACKATHON WINNER',
      id: 'HACK-COLLEGE-2024',
      description: 'Won 1st place for architecting and deploying an innovative, responsive Full-Stack web application with secure authentication and database integration as part of a team.',
      verified: true,
      icon: <Star className="w-6 h-6 text-amber-400" />,
    },
    {
      title: 'Complete Data Analyst Bootcamp (83 Hours)',
      authority: 'Udemy // Industrial Data Analysis',
      badge: '83 HOURS BOOTCAMP',
      id: 'UDEMY-DA-2025',
      description: 'Extensive specialization covering Advanced SQL (CTEs, Window Functions), Power BI (DAX, Modeling), Python analytics, and Tableau dashboarding.',
      verified: true,
      icon: <FileCheck className="w-6 h-6 text-orange-400" />,
    },
  ];

  return (
    <section id="credentials" className="relative py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-left space-y-2 pb-4 border-b border-orange-900/30">
          <div className="flex items-center gap-2 text-orange-500 font-mono text-xs tracking-widest uppercase">
            <Sparkles className="w-4 h-4" />
            <span>04 // VERIFIED CREDENTIALS &amp; ACHIEVEMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight drop-shadow-[0_2px_10px_rgba(249,115,22,0.3)]">
            CERTIFICATIONS &amp; HONORS
          </h2>
          <p className="text-slate-300 font-sans text-sm sm:text-base max-w-2xl font-light">
            Formally authenticated engineering credentials, Microsoft certifications, and college hackathon honors.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {credentials.map((cred, idx) => (
            <motion.div
              key={cred.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onMouseEnter={() => soundManager.playHover()}
              className="glass-card rounded-2xl p-6 sm:p-8 border-t border-orange-500/40 border-b border-black/80 hover:border-orange-400/80 shadow-xl amaterasu-hover space-y-4 transition-all"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-orange-950/60 border border-orange-500/40 shadow-[0_0_12px_rgba(249,115,22,0.3)]">
                    {cred.icon}
                  </div>
                  <div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono tracking-wider font-semibold text-orange-300 bg-orange-950/80 border border-orange-500/30">
                      {cred.badge}
                    </span>
                    <h3 className="font-mono font-bold text-lg text-white mt-1.5">
                      {cred.title}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="text-xs font-mono text-orange-400/90 font-medium">
                ISSUED BY: {cred.authority}
              </div>

              <p className="text-sm text-slate-300 font-sans font-light leading-relaxed">
                {cred.description}
              </p>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-orange-400">
                  <CheckCircle className="w-3.5 h-3.5 text-orange-500" />
                  AUTHENTICATED RECORD
                </span>
                <span className="text-slate-500 font-mono text-[11px]">
                  ID: {cred.id}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Highlight Card */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border-t border-orange-500/40 border-b border-black/80 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-orange-950/80 border border-orange-500/50 shadow-[0_0_20px_rgba(249,115,22,0.4)]">
              <GraduationCap className="w-7 h-7 text-orange-400" />
            </div>
            <div>
              <h4 className="text-lg font-bold font-mono text-white">
                P.E.S COLLEGE OF ENGINEERING, CHHATRAPATI SAMBHAJINAGAR
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 font-sans font-light">
                Bachelor of Electronics and Computer Engineering &bull; August 2022 – July 2026
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 font-mono text-xs">
            <div className="px-4 py-2 rounded-xl bg-black/70 border border-orange-500/30 text-slate-200">
              <span className="text-orange-400 font-bold">B.TECH</span> 2022 - 2026
            </div>
            <div className="px-4 py-2 rounded-xl bg-black/70 border border-orange-500/30 text-slate-200">
              <span className="text-orange-400 font-bold">MAHARASHTRA</span> INDIA
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

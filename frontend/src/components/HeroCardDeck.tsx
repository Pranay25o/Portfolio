import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { NarutoCardBackdrop } from './NarutoCardBackdrop';
import { useThemeStore, ThemeType } from '../store/useThemeStore';
import { ShieldCheck, Cpu, MapPin, ArrowRight, Mail, Briefcase } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeroCardDeckProps {
  onExploreProjects: () => void;
  onContactClick: () => void;
}

export const HeroCardDeck: React.FC<HeroCardDeckProps> = ({
  onExploreProjects,
  onContactClick,
}) => {
  const { setTheme } = useThemeStore();
  const [activeDeckTheme, setActiveDeckTheme] = useState<ThemeType>('kurama');

  const deckCards: {
    id: ThemeType;
    title: string;
    label: string;
    styleClass: string;
    sublabel: string;
  }[] = [
    {
      id: 'clone',
      title: 'PLATINUM',
      label: 'CLONE EDITION',
      styleClass: 'from-slate-900/90 via-slate-800/80 to-slate-950/90 border-slate-400/40 text-slate-100',
      sublabel: '01. Work  02. Expertise  03. Experience',
    },
    {
      id: 'konoha',
      title: 'KONOHA',
      label: 'WILL OF FIRE',
      styleClass: 'from-emerald-950/90 via-zinc-900/90 to-black/90 border-emerald-500/40 text-emerald-300',
      sublabel: 'Leaf Village // Real-Time Full-Stack',
    },
    {
      id: 'rasengan',
      title: 'RASENGAN',
      label: 'CYAN CHAKRA',
      styleClass: 'from-cyan-950/90 via-slate-900/90 to-black/90 border-cyan-500/40 text-cyan-300',
      sublabel: 'Spiral Energy // WebSocket Real-Time',
    },
    {
      id: 'sage',
      title: 'SIX PATHS',
      label: 'SAGE GOLD',
      styleClass: 'from-amber-950/90 via-stone-900/90 to-black/90 border-amber-500/40 text-amber-300',
      sublabel: '11 07 2026 // Six Paths Awakening',
    },
    {
      id: 'kurama',
      title: 'UZUMAKI',
      label: 'KURAMA SAGE',
      styleClass: 'from-orange-950/90 via-zinc-950/90 to-black/90 border-orange-500/50 text-orange-200',
      sublabel: 'Nine-Tails Mode // Rasenshuriken',
    },
    {
      id: 'cosmic',
      title: 'COSMIC',
      label: 'BENTO EDITION',
      styleClass: 'from-purple-950/90 via-indigo-950/80 to-slate-950/90 border-purple-400/50 text-purple-200',
      sublabel: 'Planetary // 11 07 2026',
    },
  ];

  const handleSelectCard = (id: ThemeType) => {
    setActiveDeckTheme(id);
    setTheme(id);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto pt-20 pb-8 px-2 sm:px-4 lg:px-6 flex flex-col items-center">
      
      {/* 3D Arc of Theme Cards in Background */}
      <div className="w-full max-w-6xl relative h-28 sm:h-36 md:h-44 flex items-end justify-center mb-[-40px] sm:mb-[-55px] md:mb-[-70px] z-10 pointer-events-auto overflow-visible">
        <div className="flex items-end justify-center gap-1.5 sm:gap-3 md:gap-4 w-full px-2">
          {deckCards.map((card, index) => {
            const isFront = activeDeckTheme === card.id;
            const offsetFromCenter = index - 2.5;
            const rotationY = offsetFromCenter * 6;
            const translateY = Math.abs(offsetFromCenter) * 12;

            return (
              <motion.button
                key={card.id}
                onClick={() => handleSelectCard(card.id)}
                whileHover={{ y: -18, scale: 1.06, zIndex: 30 }}
                style={{
                  transform: `perspective(1000px) rotateY(${rotationY}deg) translateY(${translateY}px)`,
                }}
                className={`group relative w-24 sm:w-36 md:w-44 h-24 sm:h-32 md:h-40 rounded-t-2xl sm:rounded-t-3xl p-2.5 sm:p-3.5 border-t border-l border-r bg-gradient-to-b ${card.styleClass} backdrop-blur-xl shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer ${
                  isFront
                    ? 'ring-2 ring-orange-500 shadow-[0_0_30px_rgba(249,115,22,0.7)]'
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between text-[8px] sm:text-[10px] font-mono opacity-80">
                  <span className="truncate">PRANAY OGALE</span>
                  <span className="hidden sm:inline">11 07 2026</span>
                </div>

                <div className="text-center my-auto">
                  <span className="font-display font-black text-[10px] sm:text-xs md:text-sm tracking-wider uppercase block drop-shadow-md">
                    {card.title}
                  </span>
                  <span className="text-[7px] sm:text-[9px] font-mono opacity-70 block">
                    {card.label}
                  </span>
                </div>

                <div className="text-[7px] sm:text-[8px] font-mono truncate text-center opacity-60">
                  {card.sublabel}
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* 🌟 FRONT & CENTER MASTERPIECE GLASS CARD (Naruto Uzumaki & Kurama Sage Mode) */}
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-5xl rounded-3xl sm:rounded-[36px] overflow-hidden border border-orange-500/40 border-t-amber-400/70 border-b-black/90 shadow-[0_20px_80px_rgba(0,0,0,0.9),0_0_40px_rgba(234,88,12,0.35)] backdrop-blur-3xl z-20"
        style={{
          background: 'linear-gradient(135deg, rgba(28, 14, 6, 0.92) 0%, rgba(14, 7, 3, 0.95) 50%, rgba(6, 3, 2, 0.98) 100%)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-950/40 via-transparent to-amber-900/20 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400/80 to-transparent" />

        {/* Central Uzumaki Spiral & Rasenshuriken Vector Backdrop */}
        <div className="absolute inset-0 flex items-center justify-center opacity-45 pointer-events-none scale-110 sm:scale-100">
          <NarutoCardBackdrop className="w-full h-full max-w-[650px] max-h-[650px]" />
        </div>

        {/* Card Content Grid */}
        <div className="relative z-10 p-6 sm:p-10 md:p-12 flex flex-col justify-between min-h-[480px] sm:min-h-[520px] gap-8">
          
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Headline, Bio, Location & Links */}
            <div className="lg:col-span-7 space-y-5 text-left">
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-[42px] font-black font-display text-white tracking-tight leading-[1.08] drop-shadow-[0_2px_12px_rgba(249,115,22,0.45)] uppercase">
                CRAFTING INTELLIGENT DIGITAL EXPERIENCES &amp; SCALABLE REAL-TIME SYSTEMS
              </h1>

              <p className="text-slate-300 text-sm sm:text-base font-sans font-normal leading-relaxed max-w-xl">
                I&apos;m a B.Tech graduate specializing in Full-Stack Development and applied NLP/LLM platforms&mdash;moving from research notebooks to production infrastructure.
              </p>

              {/* Location & Social Proof Links Row (Strictly Active Links) */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm font-sans text-slate-300 pt-1">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                  <span>Chhatrapati Sambhajinagar, India</span>
                </span>

                <div className="flex items-center gap-3">
                  <a
                    href="https://linkedin.com/in/pranay-ogale"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-orange-400 underline underline-offset-4 decoration-orange-500/60 transition-colors font-medium flex items-center gap-1"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5 text-orange-400 inline" />
                    <span>Linkedin</span>
                  </a>

                  <a
                    href="https://github.com/Pranay25o"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-orange-400 underline underline-offset-4 decoration-orange-500/60 transition-colors font-medium flex items-center gap-1"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-orange-400 inline" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: 3 Achievement Stack */}
            <div className="lg:col-span-5 flex flex-col gap-3.5 w-full">
              
              {/* Pill 1: GATE 2026 */}
              <motion.div
                whileHover={{ x: 6, skewX: -2 }}
                className="group relative w-full p-4 rounded-2xl bg-black/55 hover:bg-orange-950/40 border border-white/10 hover:border-orange-500/50 backdrop-blur-md transition-all shadow-lg cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <span className="text-xs font-mono font-semibold text-slate-300 block">
                      01 / GATE 2026
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white group-hover:text-orange-300 transition-colors">
                      CS/IT Qualified
                    </span>
                  </div>
                  <ShieldCheck className="w-5 h-5 text-orange-400 shrink-0" />
                </div>
              </motion.div>

              {/* Pill 2: NIELIT AI/ML Research Experience */}
              <motion.div
                whileHover={{ x: 6, skewX: -2 }}
                className="group relative w-full p-4 rounded-2xl bg-black/55 hover:bg-orange-950/40 border border-white/10 hover:border-orange-500/50 backdrop-blur-md transition-all shadow-lg cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <span className="text-xs font-mono font-semibold text-slate-300 block">
                      02 / AI/ML INTERN
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                      NIELIT Engineering
                    </span>
                  </div>
                  <Briefcase className="w-5 h-5 text-amber-400 shrink-0" />
                </div>
              </motion.div>

              {/* Pill 3: Azure AI Certified */}
              <motion.div
                whileHover={{ x: 6, skewX: -2 }}
                className="group relative w-full p-4 rounded-2xl bg-black/55 hover:bg-orange-950/40 border border-white/10 hover:border-orange-500/50 backdrop-blur-md transition-all shadow-lg cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <span className="text-xs font-mono font-semibold text-slate-300 block">
                      03 / AZURE AI
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white group-hover:text-orange-300 transition-colors">
                      Certified Specialist
                    </span>
                  </div>
                  <Cpu className="w-5 h-5 text-orange-400 shrink-0" />
                </div>
              </motion.div>

            </div>

          </div>

          {/* Bottom Layout Hierarchy */}
          <div className="pt-4 border-t border-white/10 space-y-4">
            
            <div className="text-xs font-mono text-slate-400 tracking-wider text-center sm:text-left">
              11 07 2026
            </div>

            {/* Action Buttons Side by Side */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={onExploreProjects}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full font-mono text-sm font-semibold tracking-wider text-white bg-black/75 hover:bg-orange-900/80 border border-orange-500/50 hover:border-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.45)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 text-orange-400" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={onContactClick}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full font-mono text-sm font-medium tracking-wider text-slate-200 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 backdrop-blur-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-orange-400" />
                <span>Initiate Transmission</span>
              </motion.button>
            </div>

            {/* Centered Bottom Status */}
            <div className="flex items-center justify-center gap-2 text-xs font-mono text-orange-400 tracking-widest uppercase pt-1">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse shadow-[0_0_10px_#f97316]" />
              <span>STATUS: AVAILABLE FOR HIRE</span>
            </div>

          </div>

        </div>

      </motion.div>

      {/* Studio Wooden Desk Ambient Surface */}
      <div 
        className="w-full max-w-6xl h-16 sm:h-24 mt-[-20px] rounded-b-[40px] opacity-70 pointer-events-none relative"
        style={{
          background: 'linear-gradient(to bottom, rgba(45, 25, 15, 0.85) 0%, rgba(22, 12, 6, 0.95) 60%, rgba(6, 3, 2, 1) 100%)',
          boxShadow: 'inset 0 1px 2px rgba(255, 210, 150, 0.25), 0 30px 60px rgba(0,0,0,0.9)',
        }}
      />

    </div>
  );
};

import { create } from 'zustand';

export type ThemeType = 'kurama' | 'rasengan' | 'sage' | 'konoha' | 'clone' | 'cosmic';

export interface ThemeConfig {
  id: ThemeType;
  name: string;
  tagline: string;
  badge: string;
  cardBg: string;
  accentBorder: string;
  glowColor: string;
  textAccent: string;
  badgeBg: string;
}

export const THEMES: Record<ThemeType, ThemeConfig> = {
  kurama: {
    id: 'kurama',
    name: 'KURAMA SAGE ORANGE',
    tagline: 'Uzumaki Chakra & Rasenshuriken',
    badge: 'KURAMA SAGE',
    cardBg: 'rgba(25, 12, 6, 0.88)',
    accentBorder: 'rgba(249, 115, 22, 0.45)',
    glowColor: 'rgba(234, 88, 12, 0.6)',
    textAccent: 'text-orange-400',
    badgeBg: 'bg-orange-950/60 border-orange-500/40 text-orange-300',
  },
  rasengan: {
    id: 'rasengan',
    name: 'RASENGAN ELECTRIC CYAN',
    tagline: 'High-Density Spiral Chakra Flow',
    badge: 'RASENGAN BLUE',
    cardBg: 'rgba(6, 18, 30, 0.85)',
    accentBorder: 'rgba(14, 165, 233, 0.45)',
    glowColor: 'rgba(14, 165, 233, 0.6)',
    textAccent: 'text-cyan-400',
    badgeBg: 'bg-cyan-950/60 border-cyan-500/40 text-cyan-300',
  },
  sage: {
    id: 'sage',
    name: 'SIX PATHS SAGE GOLD',
    tagline: 'Sage of Six Paths Awakening',
    badge: 'SIX PATHS GOLD',
    cardBg: 'rgba(25, 20, 5, 0.85)',
    accentBorder: 'rgba(250, 204, 21, 0.45)',
    glowColor: 'rgba(250, 204, 21, 0.6)',
    textAccent: 'text-amber-400',
    badgeBg: 'bg-amber-950/60 border-amber-500/40 text-amber-300',
  },
  konoha: {
    id: 'konoha',
    name: 'KONOHA LEAF EMERALD',
    tagline: 'Will of Fire & Hidden Leaf Spirit',
    badge: 'KONOHA EMERALD',
    cardBg: 'rgba(4, 20, 14, 0.85)',
    accentBorder: 'rgba(34, 197, 94, 0.45)',
    glowColor: 'rgba(34, 197, 94, 0.6)',
    textAccent: 'text-emerald-400',
    badgeBg: 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300',
  },
  clone: {
    id: 'clone',
    name: 'SHADOW CLONE PLATINUM',
    tagline: 'Executive Frosted Ninja Glass',
    badge: 'CLONE PLATINUM',
    cardBg: 'rgba(20, 25, 35, 0.85)',
    accentBorder: 'rgba(226, 232, 240, 0.35)',
    glowColor: 'rgba(255, 255, 255, 0.35)',
    textAccent: 'text-slate-200',
    badgeBg: 'bg-slate-900/60 border-slate-400/40 text-slate-200',
  },
  cosmic: {
    id: 'cosmic',
    name: 'COSMIC BENTO EDITION',
    tagline: 'Planetary Architecture & Orbs',
    badge: 'COSMIC BENTO',
    cardBg: 'rgba(20, 10, 30, 0.85)',
    accentBorder: 'rgba(192, 132, 252, 0.45)',
    glowColor: 'rgba(192, 132, 252, 0.6)',
    textAccent: 'text-purple-300',
    badgeBg: 'bg-purple-950/60 border-purple-500/40 text-purple-300',
  },
};

interface ThemeState {
  currentTheme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  currentTheme: 'kurama',
  setTheme: (theme) => set({ currentTheme: theme }),
}));

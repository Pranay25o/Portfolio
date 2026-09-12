import React from 'react';
import { soundManager } from '../lib/sound';
import { ArrowUp, Flame } from 'lucide-react';
import { UzumakiSpiralIcon } from './Icons';

export const Footer: React.FC<{ onTriggerTsukuyomi: () => void }> = ({ onTriggerTsukuyomi }) => {
  const scrollToTop = () => {
    soundManager.playSlash();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-orange-950/60 bg-black/85 backdrop-blur-md py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Naruto Uzumaki Nindo Quote Block */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <p className="font-display italic text-sm sm:text-base text-orange-300/90 tracking-wide">
            &ldquo;I won&rsquo;t run away, and I never go back on my word. That is my ninja way!&rdquo;
          </p>
          <span className="text-xs font-mono text-slate-500 block">
            &mdash; NARUTO UZUMAKI // WILL OF FIRE PHILOSOPHY
          </span>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-orange-900/40 to-transparent" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="text-orange-500 font-bold">&copy; {new Date().getFullYear()}</span>
            <span>PRANAY OGALE. ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => {
                soundManager.playSharinganActivate();
                onTriggerTsukuyomi();
              }}
              className="text-orange-400 hover:text-orange-300 flex items-center gap-1.5 transition-colors"
            >
              <UzumakiSpiralIcon className="w-4 h-4 text-orange-500" />
              <span>KURAMA SAGE ENGINE</span>
            </button>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-orange-950/50 border border-orange-500/30 text-slate-200 hover:text-white hover:border-orange-400 transition-all shadow-[0_0_10px_rgba(249,115,22,0.2)]"
            >
              <ArrowUp className="w-3.5 h-3.5 text-orange-400" />
              <span>RETURN TO TOP</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

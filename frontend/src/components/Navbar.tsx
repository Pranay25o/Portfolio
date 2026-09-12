import React, { useState } from 'react';
import { Menu, X, Flame } from 'lucide-react';
import { UzumakiSpiralIcon } from './Icons';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onTriggerChakra: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onTriggerChakra,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'work', label: '01. Work' },
    { id: 'expertise', label: '02. Expertise' },
    { id: 'experience', label: '03. Experience' },
    { id: 'credentials', label: '04. Credentials' },
    { id: 'contact', label: '05. Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-6 py-4 transition-all">
      <div className="max-w-7xl mx-auto">
        <nav className="glass-card rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between shadow-2xl transition-all border-t border-orange-500/40">
          
          {/* Left Brand with Uzumaki Crest */}
          <div className="flex items-center gap-3">
            <button
              onClick={onTriggerChakra}
              title="Click to trigger Kurama Chakra Surge"
              className="group relative flex items-center justify-center w-9 h-9 rounded-full bg-orange-950/80 border border-orange-500/50 hover:border-orange-400 hover:shadow-[0_0_15px_rgba(249,115,22,0.7)] transition-all"
            >
              <UzumakiSpiralIcon className="w-5 h-5 text-orange-400 group-hover:rotate-180 transition-transform duration-500" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse ring-2 ring-black shadow-[0_0_8px_#f97316]" />
            </button>

            <div className="flex flex-col">
              <button
                onClick={() => handleNavClick('hero')}
                className="text-left font-mono font-semibold tracking-wider text-xs sm:text-sm text-slate-100 hover:text-orange-400 transition-colors flex items-center gap-2"
              >
                <span>PRANAY OGALE</span>
                <span className="text-orange-500 font-normal opacity-80">// SOFTWARE &amp; AI ENGINEER</span>
              </button>
              
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse shadow-[0_0_8px_#f97316]" />
                <span className="text-[10px] font-mono tracking-widest text-orange-400/90 uppercase">
                  AVAILABLE FOR HIRE // WILL OF FIRE ACTIVE
                </span>
              </div>
            </div>
          </div>

          {/* Center Nav Links (Desktop) */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-1.5 rounded-lg font-mono text-xs tracking-wider transition-all duration-200 relative ${
                    isActive
                      ? 'text-orange-400 bg-orange-950/40 border border-orange-500/40 shadow-[0_0_12px_rgba(249,115,22,0.4)]'
                      : 'text-slate-300 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-orange-500 rounded-full shadow-[0_0_6px_#f97316]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Action Tools */}
          <div className="flex items-center gap-2">
            {/* Chakra Surge Button */}
            <button
              onClick={onTriggerChakra}
              title="Trigger Kurama Chakra Pulse"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-orange-300 bg-orange-950/50 hover:bg-orange-900/60 border border-orange-500/30 hover:border-orange-400 transition-all shadow-[0_0_10px_rgba(249,115,22,0.2)]"
            >
              <Flame className="w-3.5 h-3.5 text-orange-400 animate-pulse" />
              <span>Sage Mode</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-black/40 border border-orange-500/20 text-slate-200"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 glass-card rounded-2xl p-4 shadow-2xl border-t border-orange-500/40 space-y-2 animate-fadeIn">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-xl font-mono text-xs tracking-wider transition-all flex items-center justify-between ${
                  activeSection === item.id
                    ? 'text-orange-400 bg-orange-950/50 border border-orange-500/40'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{item.label}</span>
                {activeSection === item.id && <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};
